import React, { useEffect, useState, useMemo } from 'react';
import { View, StyleSheet, Dimensions, Animated, Text, } from 'react-native';
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import ProvinceList from '../components/ProvinceList';
import { POSITION_DEFAULT } from '../redux/reducers/infoReducer';
import { geoSeacrch } from '../utils/http';

// Lấy chiều ngang, chiều dọc màn hình
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const URL = `https://api.geoapify.com/v2/places`;
const TOURISM = `tourism.sights`;
const FILTER_CIRCLE = `circle`;
const API_KEY=`224a51b5361344b885b856441675f311`;

const Map = () => {
    const initState = useSelector((state)=>state.personalInfo);
    const position = initState.position;
    const nameSearch = initState.nameSelected;
    const dispatch = useDispatch();

    // const [position, setPosition] = useState({
    //     latitude: 10.802040906830033, latitudeDelta: 0, longitude: 106.6969844401151, longitudeDelta: 0
    // });
    const [isCurrentPositon, setIsCurrentPositon] = useState(true);
    const [markers, setMarkers] = useState([]);
// Yêu cầu quyền vào vị trí
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Location Permission',
                    'message': 'MyMapApp needs access to your location'
                }
            )

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this._getCurrentLocation()
                console.log("Location permission granted")
            } else {
                console.log("Location permission denied")
            }
        } catch (err) {
            console.warn(err)
        }
    }

const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = (markerID * CARD_WIDTH) + (markerID * 20);
    if (Platform.OS === 'ios') {
        x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
}
    const getMarker = async () =>{
        console.log(initState);
        
        //Lấy vị trí default
        if (isCurrentPositon) {
            axios.get(`${URL}?categories=${TOURISM}&filter=${FILTER_CIRCLE}:${position.longitude},${position.latitude},50000&bias=proximity:${position.longitude},${position.latitude}&limit=50&apiKey=${API_KEY}`)
            .then(res => {
                const itemMarker = res.data;
                setMarkers(itemMarker.features);
                setIsCurrentPositon(false)
            })
            .catch(error => console.log(error));
        }
        else{
            //Trường hợp lựa chọn tỉnh
            console.log("TH2");
            // const { info: data } = await 
            try {
                const { data : info } = await geoSeacrch.get(`?format=json&apiKey=${API_KEY}&text=${nameSearch}`);
             
                // console.log(`${URL}?categories=${TOURISM}&filter=${FILTER_CIRCLE}:${info.results[0].lon},${info.results[0].latitude},50000&bias=proximity:${info.results[0].lon},${position.results[0].latitude}&limit=50&apiKey=${API_KEY}`);
                const { data : itemMarker } = await axios.get(`${URL}?categories=${TOURISM}&filter=${FILTER_CIRCLE}:${info.results[0].lon},${info.results[0].lat},50000&bias=proximity:${info.results[0].lon},${info.results[0].lat}&limit=50&apiKey=${API_KEY}`)
                
                console.warn("Markers ------ :", itemMarker);
                dispatch({
                    type: POSITION_DEFAULT,
                    position: {
                        latitude:  info.results[0].lat,
                        longitude: info.results[0].lon,
                        latitudeDelta: 0.0421,
                        longitudeDelta: 0.0421,
                    }
                })
                setMarkers(itemMarker.features);
                setIsCurrentPositon(false)
            } catch (error) {
                console.log(error);
            }
  
        }
        
    }
    //get marker around 20km radius
    useEffect(() => {
        
        getMarker();
    }, [position, nameSearch]);
    // Get current position
    useEffect(() => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            if (isCurrentPositon) {
                dispatch({
                    type: POSITION_DEFAULT,
                    position: crd
                })
                setIsCurrentPositon(true)
            }
            
        })

    }, []);

    


    return (
        <View style={styles.container}>
            <View style={{position: 'absolute',top: 0,zIndex:10}}>
                <Text>latitude: {position.latitude}</Text>
                <Text>longitude: {position.longitude}</Text>
            </View>
            <ProvinceList />

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={position}
                region={position}
                camera={{
                    center: {
                        latitude: position.latitude,
                        longitude: position.longitude,
                    },
                    pitch: 0,
                    heading: 0,
                    altitude: 1000,
                    zoom: 9,
                }}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsCompass={true}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
            >

                {markers.map((marker, index) => {
                    // console.log('map index: ', marker.geometry.coordinates[0], '----', marker.geometry.coordinates[1]);
                    const ps = {
                        latitude: marker.properties.lat,
                        longitude: marker.properties.lon,
                        latitudeDelta: 0.0421,
                        longitudeDelta: 0.0421,
                    };
                    if (!marker.properties.name) {
                        return (<View key={index}></View>);
                    }
                    return (
                        <Marker key={index} coordinate={ps}
                            title={marker.properties.name}
                            description={marker.properties.formatted}
                        >

                        </Marker>
                    );
                })}
                <Circle
                    center={position}
                    radius={50000}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: screenHeight - 40,
        width: screenWidth,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: "row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    chipsScrollView: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 90 : 80,
        paddingHorizontal: 10
    },
    chipsIcon: {
        marginRight: 5,
    },
    chipsItem: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        height: 35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 2,
        padding: 10,
    },
    cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    marker: {
        width: 30,
        height: 30,
    },
    button: {
        alignItems: 'center',
        marginTop: 5
    },
    signIn: {
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default Map;