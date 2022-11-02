import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Image,
    View,
} from 'react-native';
import imgPlace from '../assets/images/slider/1.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import FavouriteItem from './FavouriteItem';

const NearList = ({ navigation }) => {
    const tourState = useSelector((state) => state.tour);
    const tours = tourState.nearSaw.tour;
    return (
        <>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                {tours.map((tour, index) => {
                    return (
                        <FavouriteItem navigation={navigation} tour={tour} />
                    )
                })
                }

            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 20,
    },
});

export default NearList;
