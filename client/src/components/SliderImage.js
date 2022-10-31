import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get("window");
const height = width * 0.6;//60%
//Load Data
// const imageList = [
//     "https://source.unsplash.com/1024x768/?nature",
//     "https://source.unsplash.com/1024x768/?water",
//     "https://source.unsplash.com/1024x768/?girl",
//     "https://source.unsplash.com/1024x768/?tree",
// ]

const SliderImage = ({ navigation, image }) => {
    const imageList = image;
    console.log(">>check img: ", imageList);
    const [active, setActive] = useState(0);
    const change = ({ nativeEvent }) => {
        const slide = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

        if (slide !== active) {
            setActive(slide);
        }
    }
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
                            <FastImage
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
                <View style={{ flexDirection: 'row', width: width, position: 'absolute', top: 10, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='md-chevron-back-outline' style={{ backgroundColor: '#f5f5f5', padding: 5, borderRadius: 50, aspectRatio: 1 }} size={30} color='#888' />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', width: 90, justifyContent: 'space-between' }}>
                        <Ionicons name='md-heart-sharp' style={{ backgroundColor: '#f5f5f5', padding: 5, borderRadius: 50, aspectRatio: 1 }} size={30} color='#888' />
                        <Ionicons onPress={() => navigation.navigate('Cart')} name='md-cart-outline' style={{ backgroundColor: '#f5f5f5', padding: 5, borderRadius: 50, aspectRatio: 1 }} size={30} color='#888' />
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
