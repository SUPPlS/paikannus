import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';  // Huomaa, että muutin importin nimeä 'Location' ja 'expo-location'

export default function Map() {
    const [userLocation, setUserLocation] = useState({
        latitude: 65.0800,
        longitude: 25.4800,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.05,
    });

    useEffect(() => {
        (async () => {
            try {
                await getUserPosition();
            } catch (error) {
                console.error('Error in useEffect:', error);
            }
        })();
    }, []);

    const getUserPosition = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
            setUserLocation({
                ...userLocation,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        } catch (error) {
            console.log('Error getting location', error);
        }
    };

    return (
        <MapView
            style={styles.map}
            region={userLocation}
        />
    );
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%',
    }
});
