import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProvinceList from '../components/ProvinceList';
import { geoSeacrch } from '../utils/http';
import { getMapDefaultSuccess } from '../redux/mapSlice';
import { URL, TOURISM, FILTER_CIRCLE, API_KEY } from "../utils/constant";
import { getEventAround50KmRoute } from '../routes/APIRoute';

const Map = () => {
    const initState = useSelector((state) => state.map.map);
    const position = initState.position;
    const nameSearch = initState.status.nameSelected;
    const dispatch = useDispatch();
    const [isCurrentPositon, setIsCurrentPositon] = useState(true);
    const [markers, setMarkers] = useState([]);
    const [markersEvent, setMarkersEvent] = useState([]);

    const getMarker = async () => {
        console.log(">>check: ", nameSearch);
        //Lấy vị trí default
        if (isCurrentPositon) {
            await axios.get(`${URL}?categories=${TOURISM}&filter=${FILTER_CIRCLE}:${position.longitude},${position.latitude},50000&bias=proximity:${position.longitude},${position.latitude}&limit=100&apiKey=${API_KEY}`)
                .then(res => {
                    const itemMarker = res.data;
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
                                // icon={require("../assets/map_marker.png")}
                                title={marker.properties.name}
                                description={marker.properties.formatted}
                            >

                            </Marker>
                        );
                    })}
                    {/* Marker event */}
                    {markersEvent.map((marker, index) => {
                        console.log(marker.longitude, '---', marker.latitude);
                        const ps = {
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                            latitudeDelta: 0.0421,
                            longitudeDelta: 0.0421,
                        };
                        return (
                            <Marker key={marker._id} coordinate={ps}
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