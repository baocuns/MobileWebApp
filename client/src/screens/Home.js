import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, StyleSheet, Image, Dimensions, Text, StatusBar, ImageBackground, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import homeScreen from '../assets/images/launch_screen.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getSliderRoute, getToursLastHourRoute, HOST_CRAWL } from '../routes/APIRoute';
import IconAnt from 'react-native-vector-icons/AntDesign';


const { width: screenWidth } = Dimensions.get('window');
const dataProvince = [
    {
        "id": 1,
        "image": "https://source.unsplash.com/1024x768/?nature",
        "province": 'TP Hồ Chí Minh',
        "title": 'Du Thuyền Sài gòn với bữa tối trên tàu Saigon Princess',
        "price": 1500000,
        "numberStarAvarage": 4.6,
        "numberComment": 273
    },
    {
        "id": 2,
        "image": "https://source.unsplash.com/1024x768/?water",
        "province": 'TP Hồ Chí Minh',
        "price": 1500000,
        "title": 'Vé Xe Buýt Hop On Off ở Thành Phố HCM',
        "numberStarAvarage": 4.1,
        "numberComment": 161
    },
    {
        "id": 3,
        "image": "https://source.unsplash.com/1024x768/?girl",
        "price": 1500000,
        "province": 'TP Hồ Chí Minh',
        "title": 'SIM 3G/4G Sử dụng tại VN',
        "numberStarAvarage": 4.1,
        "numberComment": 161
    },
    {
        "id": 4,
        "image": "https://source.unsplash.com/1024x768/?tree",
        "price": 1500000,
        "province": 'TP Hồ Chí Minh',
        "title": 'Tour Ngày Khu di tích địa đạo củ chi',
        "numberStarAvarage": 4.7,
        "numberComment": 392
    },
]
const Home = ({ navigation }) => {
    // const [imagelist, setImagelist] = useState([]);
    const [placeList, setPlaceList] = useState([]);
    const [lastTours, setLastTours] = useState([]);
    const [search, setSearch] = useState("");
    const fetchData = async () => {
        try {
            const res = await axios.get(getSliderRoute);
            setPlaceList(res.data);
            const res2 = await axios.get(getToursLastHourRoute);
            setLastTours(res2.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ImageBackground source={homeScreen} style={{ flex: 1 }}>
            <StatusBar hidden />
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 80, width: '100%' }}>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: '600' }}>Tìm kiếm niềm vui của bạn</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 80, width: '100%' }}>
                        <Icon style={{ position: 'absolute', left: 55, zIndex: 1 }} name="search" size={20} color='#000' />
                        <TextInput
                            onSubmitEditing={() => navigation.navigate('ProvinceDetail', {
                                url: `https://travel.com.vn/tim-tour/${search}/ket-qua-tim-kiem.aspx`,
                                name: search,
                                // image: HOST_CRAWL + place.image
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
                                    place.name === "Xem tất cả" ?
                                        <></>
                                        :
                                        <Pressable
                                            onPress={() => navigation.navigate('ProvinceDetail', {
                                                url: place.link,
                                                name: place.name,
                                                image: HOST_CRAWL + place.image
                                            })}
                                            key={index}
                                            style={{ position: 'relative' }}
                                        >
                                            <Image
                                                style={styles.imageSlideContainer}
                                                source={{ uri: `${HOST_CRAWL}` + place.image }}
                                                resizeMode='cover'>
                                            </Image>
                                            <Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff' }}>
                                                {place.name}
                                            </Text>
                                        </Pressable>
                                )
                            })}
                        </ScrollView>
                    </View>
                    {/* Tour giờ chót */}
                    <Text style={{ color: '#000', fontSize: 25, fontWeight: '600', margin: 10, shadowColor: 'grey' }}>
                        Tour giờ chót
                    </Text>
                    {lastTours.map((data, index) => (
                        <View key={index} style={{ marginHorizontal: 10 }}>
                            <Pressable key={data.code} onPress={() => navigation.navigate('DetailPlace', {
                                url: data.detailURL
                            })} style={{ width: '100%', marginVertical: 10, borderRadius: 10, backgroundColor: '#F5F5F5' }}>
                                <Image source={{ uri: data.image }} style={{ width: '100%', height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                <View style={{ margin: 10, flex: 1, justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 10 }}>{data.start}</Text>
                                        <Text style={{ fontWeight: 'bold', color: '#000' }}>{data.name}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>({data.time})</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 10, textDecorationLine: 'line-through' }}>Giá gốc: {data.newPrice}</Text>
                                        <Text style={{ color: '#000', fontWeight: 'bold', justifyContent: 'flex-end' }}>Chỉ từ: {data.newPrice}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageSlideContainer: {
        width: screenWidth / 3, height: '100%', borderRadius: 10, marginLeft: 10, marginRight: 10
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
        borderRadius: 10
    }
})

export default Home;
