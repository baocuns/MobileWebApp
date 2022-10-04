import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import SliderImage from '../components/SliderImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BoxRating from '../components/BoxRating';
import Rating from '../components/Rating';

const { width, height } = Dimensions.get("window");

const DetailPlace = ({navigation}) => {

    return (
        <SafeAreaView>
            <StatusBar hidden />
            {/* Title */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ height: height * 0.85 }}>
                {/* Slider Image */}
                <SliderImage navigation={navigation} />
                <View style={{ margin: 10 }}>
                    <Text style={{ fontWeight: '600', color: '#000', fontSize: 26 }}>Du Thuyền Sài Gòn Với Bữa Tối Trên Tàu Saigon Princess</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name='star' size={14} color='#FFD700' />
                        <Text>4.6</Text>
                        <Text>(243)</Text>
                        <Text> . </Text>
                        <Text>3K Đã đặt</Text>
                    </View>
                    {/* Content */}
                    <View>
                        <Text style={{ marginVertical: 10, borderLeftWidth: 5, borderRadius: 5, borderLeftColor: '#ff4500', fontSize: 20, fontWeight: 'bold', color: '#000', paddingLeft: 20 }}>Về dịch vụ này</Text>
                        <Text>
                            Bạn đang tìm kiếm một trải nghiệm độc đáo để cùng tận hưởng với gia đình hay người yêu vào dịp cuối tuần ngay tại Sài Gòn? Vậy hãy trải nghiệm một chuyến du thuyền Sài Gòn thật độc đáo và khác lạ vào cuối tuần này.

                            Chuyến du ngoạn sông Sài Gòn với tàu Saigon Princess bao gồm cả bữa ăn tối trên du thuyền. Bạn sẽ có cơ hội vừa thưởng thức ẩm thực vừa thư thái ngắm nhìn thành phố về đêm bên bờ sông. Trên du thuyền còn có nhạc sống, phục vụ chuyến du ngoạn của bạn thêm phần hấp dẫn và lãng mạn. Hành trình du ngoạn trên tàu Sài Gòn bao gồm nhiều thực đơn ăn tối khác nhau dành cho mọi lứa tuổi và mọi nhu cầu từ các món chay đến các món cho trẻ em. Sau bữa ăn tối, bạn có thể cùng người thân lên tầng trên của du thuyền và ngắm nhìn toàn cảnh Sài Gòn lung linh dưới ánh đèn đêm lấp lánh.

                            Ngoài ra, bạn còn có thể đi du thuyền Sài Gòn nếu bạn chỉ cần ngắm cảnh và du ngoạn trên sông Sài Gòn. Hoặc, chỉ đơn giản, bạn muốn ngắm nhìn Sài Gòn thân thuộc dưới một góc nhìn khác lạ vào một ngày cuối tuần thật đẹp.
                        </Text>
                    </View>
                    {/* Rating */}
                    <View>
                        <Text style={{ marginVertical: 10, borderLeftWidth: 5, borderRadius: 5, borderLeftColor: '#ff4500', fontSize: 20, fontWeight: 'bold', color: '#000', paddingLeft: 20 }}>Đánh giá</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 26 }}>4.6</Text>
                            <Text>/5</Text>
                            <View>
                                <Rating />
                            </View>
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
                                            <Rating />
                                        </View>
                                    </View>
                                    <Text>3 ngày trước</Text>
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
                                            <Rating />
                                        </View>
                                    </View>
                                    <Text>3 ngày trước</Text>
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
                                            <Rating />
                                        </View>
                                    </View>
                                    <Text>3 ngày trước</Text>
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
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>₫ 690,000</Text>
                        <Text style={{ fontWeight: 'normal', fontSize: 12, textDecorationLine: 'line-through' }}>₫ 700,000</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ backgroundColor: '#ffa500', paddingVertical: 10, width: '49%', alignItems: 'center', borderRadius: 7 }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Thêm vào giỏ hàng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('BookNow')} style={{ backgroundColor: '#ff4500', paddingVertical: 10, width: '49%', alignItems: 'center', borderRadius: 7 }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Đặt ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
})

export default DetailPlace;
