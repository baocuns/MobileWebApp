import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar, ScrollView, Dimensions, TouchableOpacity, Image, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BoxRating from '../components/BoxRating';
import Rating from '../components/Rating';
import { useDispatch } from 'react-redux';
import { getDetailRoute } from '../routes/APIRoute';
import axios from 'axios';
import moment from 'moment';
import SliderImage from '../components/SliderImage';
import { saveNearSawTour } from '../redux/tourSlice';
import Lottie from 'lottie-react-native';
import i18n from '../i18n';


const { width, height } = Dimensions.get("window");

const DetailPlace = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { slug } = route.params;
    const [item, setItem] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

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
    useEffect(() => {
        fetchData();
    }, []);

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
                                <SliderImage navigation={navigation} image={item.images} item={item} />}
                            <View style={{ margin: 10 }}>
                                <Text style={{ fontWeight: '600', color: '#000', fontSize: 26 }}>{item && item.title}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <AntDesign name='star' size={14} color='#FFD700' />
                                    <Text style={{ color: '#000' }}>4.6</Text>
                                    <Text style={{ color: '#000' }}>(243)</Text>
                                    <Text style={{ color: '#000' }}> . </Text>
                                    <Text style={{ color: '#000' }}>3K Đã đặt</Text>
                                </View>
                                {/* Content */}
                                <View>
                                    <Text style={{ marginVertical: 10, borderLeftWidth: 5, borderRadius: 5, borderLeftColor: '#ff4500', fontSize: 20, fontWeight: 'bold', color: '#000', paddingLeft: 20 }}>
                                        {i18n.t('about')}
                                    </Text>
                                    <Text style={{ color: '#000' }}>
                                        {item && item.description}
                                    </Text>
                                </View>
                                <View>
                                    {item && item.schedule && item.schedule.map((data, index) => {
                                        return (
                                            <View key={data._id}>
                                                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', color: '#000' }}>{i18n.t('day')} {index + 1}: {data.title}</Text>
                                                <Text style={{ color: '#000', fontSize: 14, color: 'green' }}>{i18n.t('day')}: {moment.utc(data.date).format('DD/MM/YYYY')}</Text>
                                                <Text style={{ color: '#000', fontSize: 14 }}>{data.details}</Text>
                                            </View>
                                        )
                                    })}

                                </View>
                                {/* Rating */}
                                <View>
                                    <Text style={{ marginVertical: 10, borderLeftWidth: 5, borderRadius: 5, borderLeftColor: '#ff4500', fontSize: 20, fontWeight: 'bold', color: '#000', paddingLeft: 20 }}>
                                        {i18n.t('rating')}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 26 }}>4.6</Text>
                                        <Text>/5</Text>
                                        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}
                                            onPress={() => navigation.navigate('ActionRaiting')}>
                                            <Rating starSize={20} />
                                            <Text style={{ color: '#ff4500' }}>{i18n.t('write_rating')}</Text>
                                        </Pressable>
                                    </View>

                                    {/* ScrollView Rating */}
                                    <ScrollView
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <View style={{ width: width - 100, marginRight: 20, borderWidth: 1, borderRadius: 10, borderColor: '#DCDCDC', marginVertical: 20 }}>
                                            <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={require('../assets/images/slider/6.jpg')} style={{ height: 40, width: 40, borderRadius: 50, aspectRatio: 1 }} />
                                                    <View>
                                                        <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 10 }}>Bùi Duy Khánh</Text>
                                                        <Rating starSize={20} />
                                                    </View>
                                                </View>
                                                <Text style={{ color: '#000' }}>3 ngày trước</Text>
                                            </View>
                                            <View style={{ margin: 10 }}>
                                                <Text style={{ color: '#000' }}>
                                                    Không gian tuyệt vời, có điều đồ ăn hơi ít, đi ăn về vẫn đói bụng 😂
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ width: width - 100, marginRight: 20, borderWidth: 1, borderRadius: 10, borderColor: '#DCDCDC', marginVertical: 20 }}>
                                            <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={require('../assets/images/slider/11.jpg')} style={{ height: 40, width: 40, borderRadius: 50, aspectRatio: 1 }} />
                                                    <View>
                                                        <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 10 }}>Nguyễn Văn Bảo</Text>
                                                        <Rating starSize={20} />
                                                    </View>
                                                </View>
                                                <Text style={{ color: '#000' }}>3 ngày trước</Text>
                                            </View>
                                            <View style={{ margin: 10 }}>
                                                <Text style={{ color: '#000' }}>
                                                    Ở đây ko ai đẹp trai bằng mình cả 😂
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ width: width - 100, marginRight: 20, borderWidth: 1, borderRadius: 10, borderColor: '#DCDCDC', marginVertical: 20 }}>
                                            <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={require('../assets/images/slider/3.jpg')} style={{ height: 40, width: 40, borderRadius: 50, aspectRatio: 1 }} />
                                                    <View>
                                                        <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 10 }}>Trần Văn Khiêm</Text>
                                                        <Rating starSize={20} />
                                                    </View>
                                                </View>
                                                <Text style={{ color: '#000' }}>3 ngày trước</Text>
                                            </View>
                                            <View style={{ margin: 10 }}>
                                                <Text style={{ color: '#000' }}>
                                                    Đồ ăn rất ngon, phục vụ nhiệt tình, rất thích hợp cho những ai đi cùng bạn bè có trải nghiệm mới lạ trên sông Sài Gòn 😂
                                                </Text>
                                            </View>
                                        </View>

                                    </ScrollView>

                                    {/* Box Rating */}
                                    <BoxRating />

                                </View>
                            </View>

                        </ScrollView>

                        {/* Thanh toán */}
                        <View style={{ height: height * 0.15, borderTopColor: 'gray', borderTopWidth: 0.3 }}>
                            <View style={{ margin: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>{item.sale}đ</Text>
                                    <Text style={{ fontWeight: 'normal', fontSize: 12, textDecorationLine: 'line-through' }}>{item.price}đ</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#ffa500', paddingVertical: 10, width: '49%', alignItems: 'center', borderRadius: 7 }}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>{i18n.t('add_to_cart')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('BookNow')} style={{ backgroundColor: '#ff4500', paddingVertical: 10, width: '49%', alignItems: 'center', borderRadius: 7 }}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>{i18n.t('order_now')}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
            }

        </>
    );
}

const styles = StyleSheet.create({
})

export default DetailPlace;
