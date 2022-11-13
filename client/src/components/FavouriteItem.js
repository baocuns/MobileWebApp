import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import imgPlace from '../assets/images/slider/1.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import { deleteFavouriteTour } from '../redux/tourSlice';
import { deleteTour } from '../redux/functions/tourFunc';
import { useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';

const FavouriteItem = ({ navigation, tours, tour }) => {
    const dispatch = useDispatch();
    const { colors } = useTheme();
    return (
        <Pressable
            onPress={() => navigation.navigate('DetailPlace', {
                slug: tour.slug
            })}
            onLongPress={() => {
                deleteTour(tours, tour, dispatch);
            }}
            style={{
                flexDirection: 'row',
                marginVertical: 15,
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 10,
                overflow: 'hidden',
            }}>
            <View style={{ position: 'relative' }}>
                <FastImage
                    source={{ uri: tour?.images[0] }}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                    }}
                    resizeMode="cover"
                />
                <AntDesign
                    style={{ position: 'absolute', left: 10, top: 10 }}
                    name="heart"
                    size={20}
                />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ fontSize: 11 }}>
                    Vui chơi và giải trí * {tour?.address_end}
                </Text>
                <Text style={{ fontWeight: '600', color: '#000' }}>
                    {tour?.title}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="star" size={14} color="#FFD700" />
                    <Text style={{ color: 'gray' }}>4.6</Text>
                    <Text style={{ color: 'gray' }}>(243)</Text>
                    <Text style={{ color: 'gray' }}> . </Text>
                    <Text style={{ color: 'gray' }}>3K Đã đặt</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text
                        style={{
                            fontSize: 10,
                            padding: 3,
                            backgroundColor: 'gray',
                            borderRadius: 4,
                            marginRight: 5,
                        }}>
                        Hoàn tiền dễ dàng
                    </Text>
                    <Text
                        style={{
                            fontSize: 10,
                            padding: 3,
                            backgroundColor: 'gray',
                            borderRadius: 4,
                        }}>
                        Xác nhận tức thời
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text
                        style={{
                            fontSize: 10,
                            borderRadius: 3,
                            padding: 3,
                            backgroundColor: '#FFE4B5',
                            color: '#ff4500',
                        }}>
                        Chính sách bảo mật về giá
                    </Text>
                </View>
                <Text style={{ marginTop: 15, fontWeight: 'bold', color: '#000' }}>
                    Từ {tour?.price} đ
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({})

export default FavouriteItem;
