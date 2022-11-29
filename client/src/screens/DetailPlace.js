import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar, ScrollView, Dimensions, TouchableOpacity, Image, Pressable, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BoxRating from '../components/BoxRating';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailRoute, showAllRatingRoute } from '../routes/APIRoute';
import axios from 'axios';
import moment from 'moment';
import SliderImage from '../components/SliderImage';
import { saveNearSawTour, setNumberCart } from '../redux/tourSlice';
import Lottie from 'lottie-react-native';
import i18n from '../i18n';
import { formatTime } from '../utils/function';
import { useIsFocused, useTheme } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
const { width, height } = Dimensions.get("window");
const DetailPlace = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { slug } = route.params;
    const isFocused = useIsFocused();
    const [item, setItem] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [rating, setRating] = useState(null)
    const { colors } = useTheme();
    const [cartNumber, setCartNumber] = useState(0)
    const user = useSelector(state => state.auth.login.currentUser);

    const loadingCart = async () => {
        try {
            const res = await axios.post('https://api.travels.games/api/v1/cart/show', {
                a: 1
            },
                {
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                        "token": `Travel ${user.accessToken}`,
                        "_id": user._id
                    }
                }
            );
            setCartNumber(res.data.data[0].tours.length);

        } catch (error) {
            console.log(error);
        }
    }
    const addToCart = async (slug) => {
        try {
            const res = await axios.post('https://api.travels.games/api/v1/cart/store/' + slug, {
                a: 1
            },
                {
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                        "token": `Travel ${user.accessToken}`,
                        "_id": user._id
                    }
                }
            )
            Alert.alert(
                "Travel app",
                "Sản phẩm đã được thêm trong giỏ hàng"
            );
            loadingCart();
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
    const fetchData = async () => {

        setIsFetching(true);
        try {
            const res = await axios.get(getDetailRoute + "/" + slug)
            setItem(res.data.data[0]);
            dispatch(saveNearSawTour(res.data.data[0]));
            setIsFetching(false);

        } catch (error) {
            console.log(error);
            setIsFetching(false);
        }
    }
    const loadRating = async () => {
        try {
            const res = await axios.get(showAllRatingRoute + "/" + item._id);
            setRating(res.data.data);
        } catch (error) {
            console.log('ERROR: ', error);
        }
    }
    useEffect(() => {
        loadingCart();
        fetchData();
    }, [isFocused]);
    useEffect(() => {
        loadRating();
    }, [item, isFocused])


    return (
        <>
            {
                isFetching ?
                    <Lottie style={{ zIndex: 10 }} source={require('../assets/lotties/travel.json')} autoPlay loop />
                    :
                    <SafeAreaView>
                        <StatusBar hidden />
                        {/* Title */}
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{ height: height * 0.85 }}>
                            {/* Slider Image */}
                            {item && item.images &&
                                <SliderImage navigation={navigation} image={item.images} item={item} cartNumber={cartNumber} />}
                            <View style={{ margin: 10 }}>
                                <Text style={{ fontWeight: '600', color: colors.text, fontSize: 26 }}>{item && item.title}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <AntDesign name='star' size={14} color='#FFD700' />
                                    <Text style={{ color: colors.text }}>{rating?.avg}</Text>
                                    <Text style={{ color: '#ff4500' }}>({rating?.ratings?.length} Lượt đánh giá)</Text>
                                    <Text style={{ color: colors.text }}> . </Text>
                                    <Text style={{ color: colors.text }}>3K Đã đặt</Text>
                                </View>
                                {/* Content */}
                                <View>
                                    <Text style={{ marginVertical: 10, borderLeftWidth: 5, borderRadius: 5, borderLeftColor: '#ff4500', fontSize: 20, fontWeight: 'bold', color: colors.text, paddingLeft: 20 }}>
                                        {i18n.t('about')}
                                    </Text>
                                    <Text style={{ color: colors.text }}>
                                        {item && item.description}
                                    </Text>
                                </View>
                                <View>
                                    {item && item.schedule && item.schedule.map((data, index) => {
                                        return (
                                            <View key={data._id}>
                                                <Text style={{ color: colors.text, fontSize: 20, fontWeight: 'bold', color: colors.text }}>{i18n.t('day')} {index + 1}: {data.title}</Text>
                                                <Text style={{ color: colors.text, fontSize: 14, color: 'green' }}>{i18n.t('day')}: {moment.utc(data.date).format('DD/MM/YYYY')}</Text>
                                                <Text style={{ color: colors.text, fontSize: 14 }}>{data.details}</Text>
                                            </View>
                                        )
                                    })}

                                </View>
                                {/* Rating */}
                                <View>
                                    <Text style={{ marginVertical: 10, borderLeftWidth: 5, borderRadius: 5, borderLeftColor: '#ff4500', fontSize: 20, fontWeight: 'bold', color: colors.text, paddingLeft: 20 }}>
                                        {i18n.t('rating')}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 26 }}>{rating?.avg}</Text>
                                        {rating && rating.ratings.length > 0 ?
                                            <>
                                                <Text>/5</Text>
                                                <View style={{ position: 'relative' }}>
                                                    <Rating starSize={20} numberStar={rating.avg} />
                                                    <View style={{ position: 'absolute', backgroundColor: 'transparent', top: 0, left: 0, right: 0, bottom: 0 }}></View>
                                                </View>
                                            </>
                                            :
                                            <Text style={{ color: colors.text }}>Chưa có ai đánh giá</Text>
                                        }
                                        <Pressable style={{ flex: 1, justifyContent: "flex-end", alignItems: 'flex-end' }}
                                            onPress={() => navigation.navigate('ActionRaiting', {
                                                tourID: item._id
                                            })}>

                                            <Text style={{ color: '#ff4500' }}>{i18n.t('write_rating')}</Text>
                                        </Pressable>
                                    </View>

                                    {/* ScrollView Rating */}
                                    {rating &&
                                        <ScrollView
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            {rating.ratings.map((rating, index) => {
                                                return (
                                                    <View key={index} style={{ width: width - 100, marginRight: 20, borderWidth: 1, borderRadius: 10, borderColor: '#DCDCDC', marginVertical: 20 }}>
                                                        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                <FastImage source={{ uri: rating.profile[0].images[0] }} style={{ height: 40, width: 40, borderRadius: 50, aspectRatio: 1 }} />
                                                                <View>
                                                                    <Text style={{ fontWeight: 'bold', color: colors.text, marginLeft: 10 }}>{rating.profile[0].fullname}</Text>
                                                                    <View style={{ position: 'relative' }}>
                                                                        <Rating starSize={20} numberStar={rating.rate} />
                                                                        <View style={{ position: 'absolute', backgroundColor: 'transparent', top: 0, left: 0, right: 0, bottom: 0 }}></View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <Text style={{ color: colors.text }}>
                                                                {formatTime(rating.updatedAt)}
                                                            </Text>
                                                        </View>
                                                        <View style={{ margin: 10 }}>
                                                            <Text style={{ color: colors.text }}>
                                                                {rating.content}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                );
                                            })}
                                        </ScrollView>
                                    }

                                    {/* Box Rating */}
                                    {rating && rating.ratings.length > 0 &&
                                        <BoxRating ratings={rating} />
                                    }

                                </View>
                            </View>

                        </ScrollView>

                        {/* Thanh toán */}
                        <View style={{ height: height * 0.15, borderTopColor: 'gray', borderTopWidth: 0.3 }}>
                            <View style={{ margin: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: colors.text }}>{item.sale}đ</Text>
                                    <Text style={{ fontWeight: 'normal', fontSize: 12, textDecorationLine: 'line-through', color: colors.text }}>{item.price}đ</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TouchableOpacity onPress={() => addToCart(item.slug)} style={{ backgroundColor: '#ffa500', paddingVertical: 10, width: '49%', alignItems: 'center', borderRadius: 7 }}>
                                        <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16 }}>{i18n.t('add_to_cart')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('BookNow')} style={{ backgroundColor: '#ff4500', paddingVertical: 10, width: '49%', alignItems: 'center', borderRadius: 7 }}>
                                        <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16 }}>{i18n.t('order_now')}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
            }

        </>
    );
}

export default DetailPlace;
