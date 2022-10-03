import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image, View } from 'react-native';
import imgPlace from '../assets/images/slider/1.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FavariteList = () => {
    return (
        <>
            <Text style={{ fontSize: 20, color: '#000', paddingBottom: 10, fontWeight: '600' }}>Hôm nay</Text>
            <ScrollView style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ flexDirection: 'row', marginVertical: 15, padding: 10, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
                    <View style={{ position: 'relative' }}>
                        <Image source={imgPlace} style={{ width: 100, height: 100, borderWidth: 1, borderRadius: 10 }} resizeMode='contain' />
                        <AntDesign style={{ position: 'absolute', left: 10, top: 10 }} name='heart' size={20} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ fontSize: 11 }}>Vui chơi và giải trí * TP Hồ Chí Minh</Text>
                        <Text style={{ fontWeight: '600', color: '#000' }}>Du Thuyền Sài Gòn Với Bữa Tối Trên Tàu Saigon Princess</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name='star' size={14} color='#FFD700' />
                            <Text>4.6</Text>
                            <Text>(243)</Text>
                            <Text> . </Text>
                            <Text>3K Đã đặt</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4, marginRight: 5 }}>Hoàn tiền dễ dàng</Text>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4 }}>Xác nhận tức thời</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 10, borderRadius: 3, padding: 3, backgroundColor: '#FFE4B5', color: '#ff4500' }}>Chính sách bảo mật về giá</Text>
                        </View>
                        <Text style={{ marginTop: 15, fontWeight: 'bold', color: '#000' }}>Từ 690,000 đ</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 15, padding: 10, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
                    <View style={{ position: 'relative' }}>
                        <Image source={imgPlace} style={{ width: 100, height: 100, borderWidth: 1, borderRadius: 10 }} resizeMode='contain' />
                        <AntDesign style={{ position: 'absolute', left: 10, top: 10 }} name='heart' size={20} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ fontSize: 11 }}>Vui chơi và giải trí * TP Hồ Chí Minh</Text>
                        <Text style={{ fontWeight: '600', color: '#000' }}>Du Thuyền Sài Gòn Với Bữa Tối Trên Tàu Saigon Princess</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name='star' size={14} color='#FFD700' />
                            <Text>4.6</Text>
                            <Text>(243)</Text>
                            <Text> . </Text>
                            <Text>3K Đã đặt</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4, marginRight: 5 }}>Hoàn tiền dễ dàng</Text>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4 }}>Xác nhận tức thời</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 10, borderRadius: 3, padding: 3, backgroundColor: '#FFE4B5', color: '#ff4500' }}>Chính sách bảo mật về giá</Text>
                        </View>
                        <Text style={{ marginTop: 15, fontWeight: 'bold', color: '#000' }}>Từ 690,000 đ</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 15, padding: 10, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
                    <View style={{ position: 'relative' }}>
                        <Image source={imgPlace} style={{ width: 100, height: 100, borderWidth: 1, borderRadius: 10 }} resizeMode='contain' />
                        <AntDesign style={{ position: 'absolute', left: 10, top: 10 }} name='heart' size={20} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ fontSize: 11 }}>Vui chơi và giải trí * TP Hồ Chí Minh</Text>
                        <Text style={{ fontWeight: '600', color: '#000' }}>Du Thuyền Sài Gòn Với Bữa Tối Trên Tàu Saigon Princess</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name='star' size={14} color='#FFD700' />
                            <Text>4.6</Text>
                            <Text>(243)</Text>
                            <Text> . </Text>
                            <Text>3K Đã đặt</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4, marginRight: 5 }}>Hoàn tiền dễ dàng</Text>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4 }}>Xác nhận tức thời</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 10, borderRadius: 3, padding: 3, backgroundColor: '#FFE4B5', color: '#ff4500' }}>Chính sách bảo mật về giá</Text>
                        </View>
                        <Text style={{ marginTop: 15, fontWeight: 'bold', color: '#000' }}>Từ 690,000 đ</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 15, padding: 10, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
                    <View style={{ position: 'relative' }}>
                        <Image source={imgPlace} style={{ width: 100, height: 100, borderWidth: 1, borderRadius: 10 }} resizeMode='contain' />
                        <AntDesign style={{ position: 'absolute', left: 10, top: 10 }} name='heart' size={20} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ fontSize: 11 }}>Vui chơi và giải trí * TP Hồ Chí Minh</Text>
                        <Text style={{ fontWeight: '600', color: '#000' }}>Du Thuyền Sài Gòn Với Bữa Tối Trên Tàu Saigon Princess</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name='star' size={14} color='#FFD700' />
                            <Text>4.6</Text>
                            <Text>(243)</Text>
                            <Text> . </Text>
                            <Text>3K Đã đặt</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4, marginRight: 5 }}>Hoàn tiền dễ dàng</Text>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4 }}>Xác nhận tức thời</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 10, borderRadius: 3, padding: 3, backgroundColor: '#FFE4B5', color: '#ff4500' }}>Chính sách bảo mật về giá</Text>
                        </View>
                        <Text style={{ marginTop: 15, fontWeight: 'bold', color: '#000' }}>Từ 690,000 đ</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 15, padding: 10, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
                    <View style={{ position: 'relative' }}>
                        <Image source={imgPlace} style={{ width: 100, height: 100, borderWidth: 1, borderRadius: 10 }} resizeMode='contain' />
                        <AntDesign style={{ position: 'absolute', left: 10, top: 10 }} name='heart' size={20} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ fontSize: 11 }}>Vui chơi và giải trí * TP Hồ Chí Minh</Text>
                        <Text style={{ fontWeight: '600', color: '#000' }}>Du Thuyền Sài Gòn Với Bữa Tối Trên Tàu Saigon Princess</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name='star' size={14} color='#FFD700' />
                            <Text>4.6</Text>
                            <Text>(243)</Text>
                            <Text> . </Text>
                            <Text>3K Đã đặt</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4, marginRight: 5 }}>Hoàn tiền dễ dàng</Text>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4 }}>Xác nhận tức thời</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 10, borderRadius: 3, padding: 3, backgroundColor: '#FFE4B5', color: '#ff4500' }}>Chính sách bảo mật về giá</Text>
                        </View>
                        <Text style={{ marginTop: 15, fontWeight: 'bold', color: '#000' }}>Từ 690,000 đ</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 15, padding: 10, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
                    <View style={{ position: 'relative' }}>
                        <Image source={imgPlace} style={{ width: 100, height: 100, borderWidth: 1, borderRadius: 10 }} resizeMode='contain' />
                        <AntDesign style={{ position: 'absolute', left: 10, top: 10 }} name='heart' size={20} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={{ fontSize: 11 }}>Vui chơi và giải trí * TP Hồ Chí Minh</Text>
                        <Text style={{ fontWeight: '600', color: '#000' }}>Du Thuyền Sài Gòn Với Bữa Tối Trên Tàu Saigon Princess</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name='star' size={14} color='#FFD700' />
                            <Text>4.6</Text>
                            <Text>(243)</Text>
                            <Text> . </Text>
                            <Text>3K Đã đặt</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4, marginRight: 5 }}>Hoàn tiền dễ dàng</Text>
                            <Text style={{ fontSize: 10, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 4 }}>Xác nhận tức thời</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 10, borderRadius: 3, padding: 3, backgroundColor: '#FFE4B5', color: '#ff4500' }}>Chính sách bảo mật về giá</Text>
                        </View>
                        <Text style={{ marginTop: 15, fontWeight: 'bold', color: '#000' }}>Từ 690,000 đ</Text>
                    </View>
                </View>

            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 20,
    }
});

export default FavariteList;