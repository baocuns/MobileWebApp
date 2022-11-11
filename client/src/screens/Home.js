import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    StatusBar,
    TextInput,
    ScrollView,
    Pressable,
    RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FloatingAction } from "react-native-floating-action";
import {
    getSliderRoute,
    getToursLastHourRoute,
    HOST_CRAWL,
} from '../routes/APIRoute';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import Lottie from 'lottie-react-native';
import i18n from '../i18n';
import changeLanguage from '../HOC/changeLanguage';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const Home = () => {
    const navigation = useNavigation();
    const scrollRef = useRef();
    const [isFetching, setIsFetching] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [placeList, setPlaceList] = useState([]);
    const [lastTours, setLastTours] = useState([]);
    const [search, setSearch] = useState("");

    const actions = [
        {
            text: i18n.t('favourite'),
            icon: <Lottie source={require("../assets/lotties/99703-heart-lottie-animation.json")} autoPlay loop />,
            name: "favourite",
            position: 1,
            color: '#fff'
        },
        {
            text: i18n.t('cart'),
            icon: <Lottie source={require('../assets/lotties/8325-mercuri-cart.json')} autoPlay loop />,
            name: "cart",
            position: 2,
            color: '#fff'
        },
        {
            text: i18n.t('scroll_up'),
            icon: <Lottie source={require("../assets/lotties/9594-grow-up.json")} autoPlay loop />,
            name: "up",
            position: 3,
            color: '#fff'
        }
    ];
    const onPressTouch = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const fetchData = async () => {
        try {
            axios.get(getSliderRoute)
                .then(result => {
                    setPlaceList(result.data.data);
                    setIsFetching(true)
                })
            axios.get(getToursLastHourRoute)
                .then(result => {
                    setLastTours(result.data.data);
                    setIsFetching(true)
                })

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#87CEFA' }}>
            <StatusBar hidden />
            <SafeAreaView style={{ flex: 1 }}>
                {!isFetching ?
                    <Lottie source={require('../assets/lotties/travel.json')} autoPlay loop />
                    :
                    <ScrollView
                        ref={scrollRef}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 80, width: '100%' }}>
                            <Lottie style={{ zIndex: 10 }} source={require('../assets/lotties/75949-wind-turbine-fan-rotation.json')} autoPlay loop />
                            <Text style={{ color: '#fff', fontSize: 25, fontWeight: '600' }}>
                                {i18n.t('home.find')}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 80, width: '100%', position: 'relative' }}>
                            <Lottie style={{ position: 'absolute', left: 7, width: 100, zIndex: 1 }} source={require('../assets/lotties/94375-search-new.json')} autoPlay loop />

                            <TextInput
                                onSubmitEditing={() => navigation.navigate('ProvinceDetail', {
                                    area_slug: search,
                                    status: 'search',
                                    name: search
                                })}
                                value={search}
                                onChangeText={setSearch}
                                style={{ paddingLeft: 40, borderRadius: 50, width: '80%', height: 40, backgroundColor: '#fff', fontWeight: '600' }} placeholder='Tìm địa điểm' />
                        </View>
                        {/* ScrollView */}
                        <View style={{ width: screenWidth, height: 220 }} >
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {placeList.map((place, index) => {
                                    return (
                                        <Pressable
                                            onPress={() => navigation.navigate('ProvinceDetail', {
                                                area_slug: place.slug,
                                                image: place.thumb,
                                                name: place.title
                                            })}
                                            key={index}
                                            style={{ position: 'relative' }}
                                        >
                                            <FastImage
                                                style={styles.imageSlideContainer}
                                                source={{ uri: place.thumb }}
                                                resizeMode='cover'>
                                            </FastImage>
                                            <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff' }}>
                                                {place.title}
                                            </Text>
                                        </Pressable>
                                    )
                                })}
                            </ScrollView>
                        </View>
                        {/* Tour giờ chót */}
                        <View>
                            <Lottie style={{ position: 'absolute', zIndex: 1, left: 50 }} source={require('../assets/lotties/96262-detective-search.json')} autoPlay loop />
                            <Lottie style={{ position: 'absolute', zIndex: 1 }} source={require('../assets/lotties/65902-hott.json')} autoPlay loop />
                            <Text style={{ color: '#fff', backgroundColor: 'rgba(52, 52, 52, 0.8)', padding: 3, fontSize: 25, fontWeight: '600', margin: 10, shadowColor: 'grey' }}>
                                {i18n.t('home.last_tour')}
                            </Text>
                        </View>
                        {lastTours.map((data, index) => (
                            <View key={index} style={{ marginHorizontal: 10 }}>
                                <Pressable key={index} onPress={() => navigation.navigate('DetailPlace', {
                                    slug: data.slug
                                })} style={{ width: '100%', marginVertical: 10, borderRadius: 10, backgroundColor: '#F5F5F5' }}>
                                    <FastImage source={{ uri: data.thumb }} style={{ width: '100%', height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                    <View style={{ margin: 10, flex: 1, justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={{ fontSize: 10 }}>Ngày bắt đầu: {moment.utc(data.time_start).format('MM/DD/YYYY')}</Text>
                                            <Text style={{ fontSize: 10 }}>Ngày kết thúc: {moment.utc(data.time_end).format('MM/DD/YYYY')}</Text>
                                            <Text style={{ fontWeight: 'bold', color: '#000' }}>{data.title}</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text>Khởi hành: ({moment.utc(data.time_start).format('MM/DD/YYYY')})</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 10, textDecorationLine: 'line-through' }}>Giá gốc: {data.price}đ</Text>
                                            <Text style={{ color: '#000', fontWeight: 'bold', justifyContent: 'flex-end' }}>Chỉ từ: {data.sale}đ</Text>
                                        </View>
                                    </View>
                                </Pressable>
                            </View>
                        ))}
                    </ScrollView>
                }
            </SafeAreaView>
            <FloatingAction
                color='#228B22'
                actions={actions}
                onPressItem={name => {
                    switch (name) {
                        case "up":
                            onPressTouch();
                            break;
                        case "cart":
                            navigation.navigate('Cart');
                            break;
                        case "favourite":
                            navigation.navigate('Favorite');
                            break;
                        default:
                            break;
                    }

                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imageSlideContainer: {
        width: screenWidth / 3,
        height: '100%',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    imgListPlace: {
        flexDirection: 'row',
    },
    titlePlace: {
        margin: 10,
        color: '#fff',
        fontWeight: '600',
        fontSize: 30,
    },
    imgPlace: {
        marginLeft: 10,
        marginRight: 10,
        width: 120,
        height: 80,
        borderRadius: 10,
    },
});

export default changeLanguage(Home);
