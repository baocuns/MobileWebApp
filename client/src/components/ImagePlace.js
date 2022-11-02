import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image'
const { width } = Dimensions.get("window");
const height = width * 0.6;//60%

const ImagePlace = ({ navigation, image }) => {

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
                    <FastImage
                        source={{ uri: image }}
                        style={styles.imgItem}
                    />
                </ScrollView>
                <View style={{ flexDirection: 'row', width: width, position: 'absolute', top: 10, left: 10, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='md-chevron-back-outline' style={{ backgroundColor: '#f5f5f5', padding: 10, borderRadius: 50, aspectRatio: 1 }} size={30} color='#888' />
                    </TouchableOpacity>
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

export default ImagePlace;
