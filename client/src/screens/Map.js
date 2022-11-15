import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Modal, Pressable, Image, Alert, ScrollView, ActivityIndicator } from 'react-native';
import MapView, { Circle, Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProvinceList from '../components/ProvinceList';
import { geoSeacrch } from '../utils/http';
import { getMapDefaultSuccess, setPositionDefault } from '../redux/mapSlice';
import { URL, TOURISM, FILTER_CIRCLE, API_KEY } from "../utils/constant";
import { getEventAround50KmRoute } from '../routes/APIRoute';
import { openLink } from '../utils/function';
import { getImageDescriptionByNameSearch } from '../redux/apiRequest';
import Lottie from 'lottie-react-native';
import { mapDarkStyle, mapStandardStyle } from '../utils/mapStyle';

const Map = ({ navigation }) => {
    const widthScreen = Dimensions.get('window').width;
    const heightScreen = Dimensions.get('window').height;
    const initState = useSelector((state) => state.map.map);
    let theme = useSelector(state => state.status.theme);
    let position = initState.position;
    const positionDefault = initState.positionFault;
    const nameSearch = initState.status.nameSelected;
    const infoMarker = useSelector((state) => state.map.map.infoMarker);
    const info = infoMarker.info;
    const dispatch = useDispatch();
    const [isCurrentPositon, setIsCurrentPositon] = useState(true);
    const [markers, setMarkers] = useState([]);
    const [markersEvent, setMarkersEvent] = useState([]);
    const makerRef = React.useRef([]);
    const [currentName, setCurrentName] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const findTour = () => {
        navigation.navigate('ProvinceDetail', {
            area_slug: currentName,
            status: 'search',
            name: currentName,
        })
        setModalVisible(false);
    }
    const getCurrentPosition = () => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            if (isCurrentPositon) {
                const crdFull = {
                    ...crd,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421
                }
                dispatch(getMapDefaultSuccess(crdFull));
                dispatch(setPositionDefault(crdFull));
                setIsCurrentPositon(true)
            }
        })
    }

    const getMarker = async () => {
        console.log(">>check: ", nameSearch);


        //Lấy vị trí default
        if (nameSearch == 'default') {
            setIsFetching(true);
            position = positionDefault;
            await axios.get(`${URL}?categories=${TOURISM}&filter=${FILTER_CIRCLE}:${position.longitude},${position.latitude},50000&bias=proximity:${position.longitude},${position.latitude}&limit=100&apiKey=${API_KEY}`)
                .then(res => {
                    const itemMarker = res.data;
                    dispatch(getMapDefaultSuccess(position));
                    setMarkers(itemMarker.features);
                    setIsCurrentPositon(false)
                })
                .catch(error => console.log(error));

            await axios.get(`${getEventAround50KmRoute}&longitude=${position.longitude}&latitude=${position.latitude}`)
                .then(res => {
                    const itemMarker = res.data.data;
                    setMarkersEvent(itemMarker);
                })
            setIsFetching(false);
        }
        else {
            setIsFetching(true);
            //Trường hợp lựa chọn tỉnh
            try {
                // get position lon, lat to search locaction
                const { data: info } = await geoSeacrch.get(`?format=json&apiKey=${API_KEY}&text=${nameSearch}`);
                // search location around 50km
                const { data: itemMarker } = await axios.get(`${URL}?categories=${TOURISM}&filter=${FILTER_CIRCLE}:${info.results[0].lon},${info.results[0].lat},50000&bias=proximity:${info.results[0].lon},${info.results[0].lat}&limit=100&apiKey=${API_KEY}`)
                const position = {
                    latitude: info.results[0].lat,
                    longitude: info.results[0].lon,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421,
                }
                // Get position event
                await axios.get(`${getEventAround50KmRoute}&longitude=${info.results[0].lon}&latitude=${info.results[0].lat}`)
                    .then(res => {
                        const itemMarker = res.data.data;
                        setMarkersEvent(itemMarker);
                    })
                dispatch(getMapDefaultSuccess(position));
                setMarkers(itemMarker.features);
                setIsCurrentPositon(false)
                setIsFetching(false);

            } catch (error) {
                console.log(error);
            }
        }

    }
    //get marker around 50km radius
    useEffect(() => {
        getMarker();
    }, [nameSearch]);

    // get Image and Description
    useEffect(() => {
        console.log("Reload");
        console.log("currentName", currentName);
        const currentMaker = makerRef.current.find(el => el.name === currentName);
        if (currentName !== "" || currentName === null) {
            setIsFetching(false);
        }
    }, [currentName]);
    // Get current position
    useEffect(() => {
        getCurrentPosition();
    }, []);

    return (
        <>
            {isFetching &&
                <Lottie style={{ position: 'absolute', top: 0, zIndex: 100 }} source={require('../assets/lotties/travel.json')} autoPlay loop />
            }

            {/* <StatusBar hidden /> */}
            <View style={{ flex: 1 }}>
                <View style={{ position: 'relative' }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            // Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >

                        <View onTouchStart={() => setModalVisible(false)} style={{ height: 0.5 * heightScreen, zIndex: 1 }}>
                        </View>
                        <View style={{ backgroundColor: '#fff', padding: 20, position: 'absolute', bottom: 0, height: 0.5 * heightScreen, zIndex: 1 }}>
                            <ScrollView style={{ flex: 1, width: widthScreen - 40 }}>
                                {isFetching ?
                                    <Lottie style={{ position: 'absolute', top: 0, zIndex: 100 }} source={require('../assets/lotties/travel.json')} autoPlay loop />
                                    :
                                    <>
                                        <TouchableOpacity
                                            onPress={() => openLink(currentName)}
                                            style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', marginBottom: 10, borderRadius: 3, paddingVertical: 10 }}>
                                            <Text style={{ color: '#fff' }}>Xem chi tiết tại Google</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => {
                                                findTour();
                                            }}
                                            style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 3, paddingVertical: 10 }}>
                                            <Text style={{ color: '#fff' }}>Tìm kiếm trong tour</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginVertical: 5 }}>{currentName}</Text>
                                        <View style={styles.modalView}>
                                            {info?.descriptionArr.map((des, index) => {
                                                return (
                                                    <Text style={{ marginVertical: 10, color: '#000' }}>{des.description?.replace(/(<([^>]+)>)/ig, "")}</Text>
                                                )
                                            })}
                                            <Pressable
                                                style={{ backgroundColor: '#F4A460', alignItems: 'center' }}
                                                onPress={() => setModalVisible(!modalVisible)}
                                            >
                                                {/* <Text style={styles.textStyle}>Xem chi tiết</Text> */}
                                            </Pressable>
                                        </View>
                                    </>
                                }
                            </ScrollView>
                        </View>
                    </Modal>
                </View>
                <View style={{ height: 50, width: '100%' }}>
                    <ProvinceList />
                </View>
                <View style={{ flex: 1 }}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        initialRegion={position}
                        customMapStyle={theme === 'dark' ? mapDarkStyle : mapStandardStyle}
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
                        {/* Marker location */}
                        {markers.map((marker, index) => {
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
                                    // showCallout
                                    ref={(ref) => makerRef.current.push({ ref, name: marker.properties.name })}
                                    onPress={(e) => {
                                        e.preventDefault();
                                        // setModalVisible(true)

                                        if (currentName != marker.properties.name) {
                                            setIsFetching(true);
                                        }
                                        getImageDescriptionByNameSearch(marker.properties.name, dispatch).then(() => {
                                            setCurrentName(marker.properties.name)
                                            setModalVisible(true)
                                        })
                                    }}
                                    onCalloutPress={() => openLink(marker.properties.name)}
                                    title={marker.properties.name}
                                    description={marker.properties.formatted}
                                >
                                    <Callout tooltip >
                                        <View style={{ width: widthScreen, height: 200, justifyContent: 'flex-end', alignItems: 'center', position: 'relative', top: -10 }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, width: widthScreen - 60, padding: 20, position: 'relative' }}>
                                                <Text style={{ zIndex: 10, color: '#000', fontWeight: 'bold' }}>{marker.properties.name}</Text>
                                                <Text style={{ zIndex: 10, color: '#000' }}>{marker.properties.formatted}</Text>
                                                {/* <Text style={{ zIndex: 10 }}>{info?.descriptionArr[2].description?.replace(/(<([^>]+)>)/ig, "")}</Text> */}
                                                <View style={{ bottom: 0, backgroundColor: '#fff', width: 50, height: 50, position: 'absolute', transform: [{ rotate: "45deg" }] }}>

                                                </View>
                                            </View>
                                        </View>
                                    </Callout>
                                </Marker>
                            );
                        })}
                        {/* Marker event */}
                        {/* {markersEvent.map((marker, index) => {
                            const ps = {
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                                latitudeDelta: 0.0421,
                                longitudeDelta: 0.0421,
                            };
                            return (
                                <Marker key={marker._id} coordinate={ps}
                                    onPress={(e) => {
                                        e.preventDefault();
                                        if (currentName != marker.properties.name) {
                                            setIsFetching(true);
                                        }
                                        getImageDescriptionByNameSearch(marker.properties.name, dispatch).then(() => {
                                            setCurrentName(marker.properties.name)
                                            setModalVisible(true)
                                        })
                                    }}
                                    onCalloutPress={() => openLink(marker.title)}
                                    icon={require("../assets/map_marker.png")}
                                    title={marker.title}
                                    description={marker.description}
                                >
                                    <Callout tooltip>
                                        <View style={{ width: widthScreen, height: 200, justifyContent: 'flex-end', alignItems: 'center', position: 'relative', top: -10 }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, width: widthScreen - 60, padding: 20, position: 'relative' }}>
                                                <Text style={{ zIndex: 10, color: '#000', fontWeight: 'bold' }}>{marker.title}</Text>
                                                <Text style={{ zIndex: 10 }}>{marker.description}</Text>
                                                <View style={{ bottom: 0, backgroundColor: '#fff', width: 50, height: 50, position: 'absolute', transform: [{ rotate: "45deg" }] }}>
                                                </View>
                                            </View>

                                        </View>
                                    </Callout>
                                </Marker>
                            );
                        })} */}
                        <Circle
                            center={position}
                            radius={50000}
                            fillColor="rgba(0, 255, 255, 0.4)"
                            strokeWidth={0.3}
                        />
                    </MapView>
                </View>

            </View >


        </>

    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})

export default Map;