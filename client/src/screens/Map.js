import React, { useEffect, useState, useMemo } from 'react';
import { View, StyleSheet, Dimensions, Animated, Text, } from 'react-native';
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProvinceList from '../components/ProvinceList';
import { geoSeacrch } from '../utils/http';
import { getMapDefaultSuccess } from '../redux/mapSlice';
import { URL, TOURISM, FILTER_CIRCLE, API_KEY } from "../utils/constant";

// Lấy chiều ngang, chiều dọc màn hình
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;


const Map = () => {
    const initState = useSelector((state) => state.map.map);
    const position = initState.position;
    const nameSearch = initState.status.nameSelected;
    const dispatch = useDispatch();

    const [isCurrentPositon, setIsCurrentPositon] = useState(true);
    const [markers, setMarkers] = useState([]);

    const getMarker = async () => {
        console.log(">>check: ", nameSearch);
        //Lấy vị trí default
        if (isCurrentPositon) {
            axios.get(`${URL}?categories=${TOURISM}&filter=${FILTER_CIRCLE}:${position.longitude},${position.latitude},50000&bias=proximity:${position.longitude},${position.latitude}&limit=100&apiKey=${API_KEY}`)
                .then(res => {
                    const itemMarker = res.data;
                    setMarkers(itemMarker.features);
                    setIsCurrentPositon(false)
                })
                .catch(error => console.log(error));
        }
        else {
            //Trường hợp lựa chọn tỉnh
            try {
                const { data: info } = await geoSeacrch.get(`?format=json&apiKey=${API_KEY}&text=${nameSearch}`);

                // console.log(`${URL}?categories=${TOURISM}&filter=${FILTER_CIRCLE}:${info.results[0].lon},${info.results[0].latitude},50000&bias=proximity:${info.results[0].lon},${position.results[0].latitude}&limit=50&apiKey=${API_KEY}`);
                const { data: itemMarker } = await axios.get(`${URL}?categories=${TOURISM}&filter=${FILTER_CIRCLE}:${info.results[0].lon},${info.results[0].lat},50000&bias=proximity:${info.results[0].lon},${info.results[0].lat}&limit=100&apiKey=${API_KEY}`)
                const position = {
                    latitude: info.results[0].lat,
                    longitude: info.results[0].lon,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421,
                }
                dispatch(getMapDefaultSuccess(position));
                setMarkers(itemMarker.features);
                setIsCurrentPositon(false)
            } catch (error) {
                console.log(error);
            }

        }

    }
    //get marker around 50km radius
    useEffect(() => {
        // requestLocationPermission();
        getMarker();
    }, [nameSearch]);
    // Get current position
    useEffect(() => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            if (isCurrentPositon) {
                const crdFull = {
                    ...crd,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421
                }
                dispatch(getMapDefaultSuccess(crdFull));
                setIsCurrentPositon(true)
            }
        })
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {/* <View style={{ width: '100%', height: '100' }}>
            </View> */}
            <View style={{ height: '10%', width: '100%' }}>
                <ProvinceList />
            </View>
            {/* <View style={{ position: 'absolute', top: 0, zIndex: 10 }}>
                <Text>latitude: {position.latitude}</Text>
                <Text>longitude: {position.longitude}</Text>
            </View> */}
            <View style={{ flex: 1 }}>
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

        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})

export default Map;