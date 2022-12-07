import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { saveFavouriteTour } from '../redux/tourSlice';
import { useEffect } from 'react';
import { deleteTour } from '../redux/functions/tourFunc';
const { width } = Dimensions.get("window");
const height = width * 0.6;//60%

const SliderImage = ({ navigation, image, item, cartNumber }) => {
    const tourState = useSelector((state) => state.tour);
    const tours = tourState.favourite.tour;
    const dispatch = useDispatch();
    const imageList = image;
    const [active, setActive] = useState(0);
    const change = ({ nativeEvent }) => {
        const slide = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

        if (slide !== active) {
            setActive(slide);
        }
    }
    const addFavouriteList = () => {
        dispatch(saveFavouriteTour(item));
    }
    useEffect(() => {
        console.log('isInclude: ', tours.includes(item));

    }, [])

    return (
        <>
            {/* Slide image */}
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    style={styles.scrViewSize}
                    showsHorizontalScrollIndicator={false}
                    onScroll={(nativeEvent) => change(nativeEvent)}
                >
                    {
                        imageList.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={styles.imgItem}
                            />
                        ))
                    }
                </ScrollView>
                <View style={styles.pagination}>
                    {imageList.map((i, k) => (
                        <Text key={k} style={k === active ? styles.pagingActive : styles.pagingText}>
                            ⬤
                        </Text>
                    ))}
                </View>
                <View style={{ flexDirection: 'row', width: width - 30, position: 'absolute', top: 10, left: 10, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='md-chevron-back-outline' style={{ backgroundColor: '#f5f5f5', padding: 10, borderRadius: 50, aspectRatio: 1 }} size={30} color='#888' />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', width: 90, justifyContent: 'space-between' }}>
                        {tours.includes(item) ?
                            <AntDesign onPress={() => {
                                deleteTour(tours, item, dispatch)
                            }}
                                onLongPress={() => navigation.navigate('Favorite')}
                                name='heart'
                                style={{ backgroundColor: '#f5f5f5', padding: 10, borderRadius: 50, aspectRatio: 1, color: '#FF3030' }} size={30} color='#888' />
                            :
                            <AntDesign onPress={() => addFavouriteList()}
                                onLongPress={() => navigation.navigate('Favorite')}
                                name='hearto'
                                style={{ backgroundColor: '#f5f5f5', padding: 10, borderRadius: 50, aspectRatio: 1, color: '#FF3030' }} size={30} color='#888' />
                        }
                        <View style={{ position: 'absolute', right: 40, top: -8, backgroundColor: '#fff', borderRadius: 50, width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ff4500' }}>
                                {tourState.favourite.tour.length}
                            </Text>
                        </View>
                        <Ionicons onPress={() => navigation.navigate('Cart')} name='md-cart-outline' style={{ backgroundColor: '#f5f5f5', padding: 10, borderRadius: 50, aspectRatio: 1 }} size={30} color='#888' />
                        <View style={{ position: 'absolute', right: -10, top: -8, backgroundColor: '#fff', borderRadius: 50, width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ff4500' }}>
                                {cartNumber}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
    },
    scrViewSize: {
        width,
        height
    },
    imgItem: {
        width,
        height,
        resizeMode: 'cover'
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    pagingText: {
        fontSize: (width / 30),
        color: '#888',
        margin: 3
    },
    pagingActive: {
        fontSize: (width / 30),
        color: '#fff',
        margin: 3
    },
})

export default SliderImage;