import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import ImagePlace from '../components/ImagePlace';
import IconAnt from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { getAllPlaceForNameRoute } from '../routes/APIRoute';
import FastImage from 'react-native-fast-image'


const ProvinceDetail = ({ navigation, route }) => {
    const { area_slug, image, name } = route.params;
    const [itemPlaceList, setItemPlaceList] = useState([]);
    // const [imageList, setImageList] = useState([]);

    // const joinImage = async () => {
    //     setImageList(itemPlaceList.filter(item => item.thumb));
    // }
    const fetchData = async () => {
        try {
            const res = await axios.get(`${getAllPlaceForNameRoute}/${area_slug}`)
            setItemPlaceList(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
        // joinImage();
    }, []);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={{ backgroundColor: '#D3D3D3', flex: 1 }}>
                <ImagePlace navigation={navigation} image={image} />
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 26 }}>{name}</Text>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20, marginVertical: 10 }}>Hoạt động nên thử</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {itemPlaceList.map((data) => (
                            <TouchableOpacity onPress={() => navigation.navigate('DetailPlace', {
                                slug: data.slug
                            })} style={{ width: 150, marginRight: 10, borderRadius: 10, backgroundColor: '#F5F5F5' }}>
                                <FastImage key={data.id} source={{ uri: data.thumb }}
                                    style={{ width: 150, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                <View style={{ margin: 10, flex: 1, justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 10 }}>{data.tourdate}</Text>
                                        <Text style={{ fontWeight: 'bold', color: '#000' }}>{data.title}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#000', fontWeight: 'bold' }}>Chỉ từ: {data.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20, marginVertical: 20 }}>Các hoạt động nổi bật bật</Text>
                    {itemPlaceList.map((data) => (
                        <TouchableOpacity onPress={() => navigation.navigate('DetailPlace', {
                            slug: data.slug
                        })} style={{ width: '100%', marginVertical: 10, borderRadius: 10, backgroundColor: '#F5F5F5' }}>
                            <FastImage key={data.id} source={{ uri: data.thumb }}
                                style={{ width: '100%', height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                            <View style={{ margin: 10, flex: 1, justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontSize: 10 }}>{data.tourdate}</Text>
                                    <Text style={{ fontWeight: 'bold', color: '#000' }}>{data.title}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        {/* <Text>{data.numberStarAvarage}</Text>
                                        <IconAnt name='star' color='#FFD700' />
                                        <Text>({data.numberComment})</Text> */}
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Chỉ từ: {data.price}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default ProvinceDetail;
