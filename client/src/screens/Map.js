import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';

// Lấy chiều ngang, chiều dọc màn hình
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Map = () => {
    const [position, setPosition] = useState({
        latitude: 10.8703975, latitudeDelta: 0, longitude: 106.7504543, longitudeDelta: 0
    });
    const [position2, setPosition2] = useState({
        latitude: 10.8703975, latitudeDelta: 0, longitude: 106.7504543, longitudeDelta: 0
    });

    // Get current position
    useEffect(() => {
        if (Platform.OS === 'android') {
            requestLocationPermission()
        } else {
            Geolocation.getCurrentPosition((pos) => {
                const crd = pos.coords;
                setPosition({
                    latitude: crd.latitude,
                    longitude: crd.longitude,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421,
                });
            })
        }
        console.log(position);

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


    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={position}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsCompass={true}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
            >
                <Marker
                    title='Yor are here'
                    description='This is a description'
                    coordinate={position} />
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
})

export default Map;