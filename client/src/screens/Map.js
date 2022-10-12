import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProvinceList from '../components/ProvinceList';
import { geoSeacrch } from '../utils/http';
import { getMapDefaultSuccess, setPositionDefault } from '../redux/mapSlice';
import { URL, TOURISM, FILTER_CIRCLE, API_KEY } from "../utils/constant";
import { getEventAround50KmRoute } from '../routes/APIRoute';
import { openLink } from '../utils/function';

const Map = () => {
    const initState = useSelector((state) => state.map.map);
    let position = initState.position;
    const positionDefault = initState.positionFault;
    const nameSearch = initState.status.nameSelected;
    const dispatch = useDispatch();
    const [isCurrentPositon, setIsCurrentPositon] = useState(true);
    const [markers, setMarkers] = useState([]);
    const [markersEvent, setMarkersEvent] = useState([]);

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
        }
        else {
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

            } catch (error) {
                console.log(error);
            }

        }

    }
    //get marker around 50km radius
    useEffect(() => {
        getMarker();
    }, [nameSearch]);
    // Get current position
    useEffect(() => {
        getCurrentPosition();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 50, width: '100%' }}>
                <ProvinceList />
            </View>
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
                                showCallout
                                onCalloutPress={() => openLink(marker.properties.name)}
                                title={marker.properties.name}
                                description={marker.properties.formatted}
                            >

                            </Marker>
                        );
                    })}
                    {/* Marker event */}
                    {markersEvent.map((marker, index) => {
                        const ps = {
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                            latitudeDelta: 0.0421,
                            longitudeDelta: 0.0421,
                        };
                        return (
                            <Marker key={marker._id} coordinate={ps}
                                onCalloutPress={() => openLink(marker.title)}
                                icon={require("../assets/map_marker.png")}
                                title={marker.title}
                                description={marker.description}
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