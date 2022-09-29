import React, { useEffect, useState, useMemo } from 'react';
import { View, StyleSheet, Dimensions, Animated, } from 'react-native';
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';
import axios from 'axios';
import ProvinceList from '../components/ProvinceList';

// Lấy chiều ngang, chiều dọc màn hình
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const URL = `https://api.geoapify.com/v2/places`;
const TOURISM = `tourism.sights`;
const FILTER_CIRCLE = `circle`;

const Map = () => {
    const [position, setPosition] = useState({
        latitude: 10.802040906830033, latitudeDelta: 0, longitude: 106.6969844401151, longitudeDelta: 0
    });

    const [markers, setMarkers] = useState([]);

    //get marker around 20km radius
    useEffect(() => {
        axios.get(`${URL}?categories=${TOURISM}&filter=${FILTER_CIRCLE}:${position.longitude},${position.latitude},20000&bias=proximity:106.76560749522025,10.85604880580955&limit=50&apiKey=224a51b5361344b885b856441675f311`)
            .then(res => {
                const itemMarker = res.data;
                setMarkers(itemMarker.features);
            })
            .catch(error => console.log(error));
    }, [position]);
    // Get current position
    useEffect(() => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
            });
        })
        // console.log('>>>check postion:', position);

    }, []);

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


    return (
        <View style={styles.container}>
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
                    heading: 50,
                    altitude: 1000,
                    zoom: 10.6,
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
                    radius={20000}
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