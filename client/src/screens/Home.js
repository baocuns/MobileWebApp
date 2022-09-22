import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, StatusBar, ImageBackground, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import homeScreen from '../assets/images/home.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';


const { width: screenWidth } = Dimensions.get('window');

const Home = ({ navigation }) => {
    const [imagelist, setImagelist] = useState([]);
    const [currentIndexImg, setCurrentIndexImg] = useState(0);
    const stepCarousel = useRef(null);
    useEffect(() => {
        // 1.Load data from server
        const data = [
            {
                image: <View style={{ position: 'relative' }}><Image style={styles.imageSlideContainer} key={'1'} source={require('../assets/images/slider/1.jpg')} resizeMode='cover'></Image><Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff' }}>TP Hồ Chí Minh</Text></View>,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <View style={{ position: 'relative' }}><Image style={styles.imageSlideContainer} key={'2'} source={require('../assets/images/slider/2.jpg')} resizeMode='cover'></Image><Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff' }}>Hà Nội</Text></View>,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'3'} source={require('../assets/images/slider/3.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'4'} source={require('../assets/images/slider/4.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'5'} source={require('../assets/images/slider/5.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'6'} source={require('../assets/images/slider/6.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'7'} source={require('../assets/images/slider/7.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'8'} source={require('../assets/images/slider/8.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'9'} source={require('../assets/images/slider/9.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'10'} source={require('../assets/images/slider/10.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'11'} source={require('../assets/images/slider/11.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'12'} source={require('../assets/images/slider/12.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'13'} source={require('../assets/images/slider/13.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'14'} source={require('../assets/images/slider/14.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
        ]
        // 2.Cap nhat data
        setImagelist(data);
    }, []);

    const handleScroll = (e) => {
        if (!e) {
            return;
        }
        const { nativeEvent } = e;
        if (nativeEvent && nativeEvent.contentOffset) {
            const currentOffset = nativeEvent.contentOffset.x;
            let imageIndex = 0;
            if (nativeEvent.contentOffset.x > 0) {
                imageIndex = Math.floor((nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth);
            }
            console.log(imageIndex);
            setCurrentIndexImg(imageIndex);
        }
    }

    return (
        <ImageBackground source={homeScreen} style={{ flex: 1 }}>
            <StatusBar hidden />
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ width: '100%', height: '130%' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 80, width: '100%' }}>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: '600' }}>Tìm kiếm niềm vui của bạn</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 80, width: '100%' }}>
                        <Icon style={{ position: 'absolute', left: 55, zIndex: 1 }} name="search" size={20} color='#000' />
                        <TextInput style={{ paddingLeft: 40, borderRadius: 50, width: '80%', height: 40, backgroundColor: '#fff', fontWeight: '600' }} placeholder='Tìm địa điểm' />
                    </View>
                    {/* ScrollView */}
                    <View style={{ width: screenWidth, height: 220 }} >
                        <ScrollView
                            horizontal
                            contentContainerStyle={{ width: (screenWidth / 3 + 20) * imagelist.length, height: '100%' }}
                        >
                            {imagelist.map(image => image.image)}
                        </ScrollView>
                    </View>
                    {/* 3 Miền */}
                    <Text style={styles.titlePlace}>Miền Bắc</Text>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{ width: '200%', height: '100%' }}
                    >
                        <View>
                            <View style={styles.imgListPlace}>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/8.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/9.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/10.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/11.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/12.jpg')} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <Text style={styles.titlePlace}>Miền Trung</Text>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{ width: '200%', height: '100%' }}
                    >
                        <View>
                            <View style={styles.imgListPlace}>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/8.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/9.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/10.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/11.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/12.jpg')} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <Text style={styles.titlePlace}>Miền Nam</Text>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{ width: '200%', height: '100%' }}
                    >
                        <View>
                            <View style={styles.imgListPlace}>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/8.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/9.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/10.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/11.jpg')} />
                                </View>
                                <View style={{ position: 'relative' }}>
                                    <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff', zIndex: 1 }}>Hà Nội</Text>
                                    <Image style={styles.imgPlace} source={require('../assets/images/slider/12.jpg')} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageSlideContainer: {
        width: screenWidth / 3, height: '100%', borderRadius: 20, marginLeft: 10, marginRight: 10
    },
    imgListPlace: {
        flexDirection: 'row'
    }
    ,
    titlePlace: {
        margin: 10,
        color: '#fff',
        fontWeight: '600',
        fontSize: 30
    },
    imgPlace: {
        marginLeft: 10,
        marginRight: 10,
        width: 120,
        height: 80,
        borderRadius: 20
    }
})

export default Home;
