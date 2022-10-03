import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import SliderImage from '../components/SliderImage';
import IconAnt from 'react-native-vector-icons/AntDesign';

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

const ProvinceDetail = ({navigation}) => {
    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            >
        <View style={{backgroundColor: '#D3D3D3',flex: 1}}>
            <SliderImage navigation={navigation} />
            <View style={{marginHorizontal:10}}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 26}}>Thành phố Hồ Chí Minh</Text>
            <Text style={{color: '#000',fontWeight: 'bold',fontSize: 20, marginVertical: 10}}>Hoạt động nên thử</Text>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                {dataProvince.map((data)=>(
                    <TouchableOpacity onPress={()=> navigation.navigate('DetailPlace')} style={{width:150,height:300, marginRight:10,borderRadius:10,backgroundColor:'#F5F5F5'}}>
                        <Image key={data.id} source={{uri: data.image}} style={{width: 150,height: 100, borderTopLeftRadius:10,borderTopRightRadius:10}} />
                            <View style={{margin:10,flex:1, justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{fontSize: 10}}>{data.province}</Text>
                                    <Text style={{fontWeight:'bold',color:'#000'}}>{data.title}</Text>
                                    <View style={{flexDirection: 'row',alignItems:'center'}}>
                                        <Text>{data.numberStarAvarage}</Text>
                                        <IconAnt name='star' color='#FFD700'/>
                                        <Text>({data.numberComment})</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{color: '#000', fontWeight: 'bold'}}>Chỉ từ: {data.price}</Text>
                                </View>
                            </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Text style={{color: '#000',fontWeight: 'bold',fontSize:20,marginVertical:20}}>Các hoạt động nổi bật bật</Text>
                    {dataProvince.map((data)=>(
                    <TouchableOpacity onPress={()=> navigation.navigate('DetailPlace')} style={{width:'100%',height:300, marginVertical:10,borderRadius:10,backgroundColor:'#F5F5F5'}}>
                        <Image key={data.id} source={{uri: data.image}} style={{width: '100%',height: 200, borderTopLeftRadius:10,borderTopRightRadius:10}} />
                            <View style={{margin:10,flex:1, justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{fontSize: 10}}>{data.province}</Text>
                                    <Text style={{fontWeight:'bold',color:'#000'}}>{data.title}</Text>
                                    <View style={{flexDirection: 'row',alignItems:'center'}}>
                                        <Text>{data.numberStarAvarage}</Text>
                                        <IconAnt name='star' color='#FFD700'/>
                                        <Text>({data.numberComment})</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{color: '#000', fontWeight: 'bold'}}>Chỉ từ: {data.price}</Text>
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