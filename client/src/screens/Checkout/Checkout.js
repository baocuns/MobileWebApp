import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import React from 'react'
import BackArrow from '../../components/BackArrow'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import moment from 'moment'
import { formatVND } from '../../utils/function';
import { Checkbox } from 'react-native-paper';
import { ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'


const Checkout = ({ route }) => {
    const { oid } = route.params
    const navigation = useNavigation()
    const user = useSelector(state => state.auth.login.currentUser);
    const [order, setOrder] = useState()
    const [typePayment, setTypePayMent] = useState()
    const [isLoader, setIsLoader] = useState(false)

    useEffect(() => {
        axios.post(`https://api.travels.games/api/v1/order/show/one/${oid}`, { id: 1 }, {
            headers: {
                "token": `Travel ${user?.accessToken}`,
                "_id": user?._id,
            }
        })
            .then(res => {
                console.log('res.data', res.data);
                setOrder(res.data.data)
            })
            .catch(err => {
                console.log('err.response', err.response);
            })
    }, [])

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    const handleChangeTypePayment = (type) => {
        typePayment === type && setTypePayMent('')
        typePayment !== type && setTypePayMent(type)
    }

    const handlePayment = () => {
        if (typePayment) {
            ToastAndroid.show("Hệ thống đang chuyển qua cổng thanh toán !", ToastAndroid.SHORT);
            setIsLoader(true)
            axios.post(`https://api.travels.games/api/v1/order/checkout/${oid}`, { type: typePayment }, {
                headers: {
                    "token": `Travel ${user?.accessToken}`,
                    "_id": user?._id,
                }
            })
                .then(res => {
                    setIsLoader(false)
                    const { data } = res.data
                    navigation.navigate('Payment', { uri: data, oid: oid })
                })
                .catch(err => {
                    setIsLoader(false)
                    const { data } = err?.response
                    console.log(data);
                    ToastAndroid.show("Hệ thống chuyển qua cổng thanh toán thất bại !", ToastAndroid.SHORT);
                })
        } else {
            ToastAndroid.show("Vui lòng chọn phương thức thanh toán !", ToastAndroid.SHORT);
        }

    }

    return (
        <View>
            <BackArrow name={'Chi Tiết Thanh Toán'} />
            {order && (
                <View className='px-4'>
                    {/* order */}
                    <ScrollView className='h-[80%]'>
                        <View>
                            <View className='flex-row my-2'>
                                <Octicons name='list-ordered' size={20} color='red' />
                                <Text className='text-black mx-2 font-bold'>Danh sách dịch vụ</Text>
                            </View>
                            <SafeAreaView>
                                <FlatList
                                    data={order[0].tours}
                                    renderItem={renderItem}
                                    keyExtractor={item => item._id}
                                />
                            </SafeAreaView>
                            <View>
                                <View className='my-2'>
                                    <View className='flex-row'>
                                        <Octicons name='checklist' size={20} color='red' />
                                        <Text className='text-black mx-2 font-bold'>Chi tiết đơn hàng</Text>
                                    </View>
                                    <View className='m-2'>
                                        <View className='flex-row'>
                                            <Text className='text-black'>Mô tả :</Text>
                                            <Text className='text-black mx-2'>{order[0].info}</Text>
                                        </View>
                                        <View className='flex-row'>
                                            <Text className='text-black'>Trạng thái :</Text>
                                            <Text className={order[0].statusCode === '00' ? 'text-green-600 mx-2' : 'text-red-600 mx-2'}>{order[0].status}</Text>
                                        </View>
                                        <View className='flex-row'>
                                            <Text className='text-black'>Tổng số sản phẩm :</Text>
                                            <Text className='text-black mx-2'>{order[0].tours.length}</Text>
                                        </View>
                                        <View className='flex-row'>
                                            <Text className='text-black'>Tổng tiền:</Text>
                                            <Text className='text-black mx-2'>{order[0].amount}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View className='my-2'>
                                    <View className='flex-row'>
                                        <MaterialIcons name='notes' size={20} color='red' />
                                        <Text className='text-black mx-2 font-bold'>Phương thức thanh toán</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            className='flex-row items-center'
                                            onPress={() => handleChangeTypePayment('vnpay')}
                                        >
                                            <Checkbox
                                                status={typePayment === 'vnpay' ? 'checked' : 'unchecked'}
                                                onPress={() => handleChangeTypePayment('vnpay')}
                                            />
                                            <Image
                                                source={{ uri: 'https://www.plusweb.vn/uploads/public/2017/04/27/1493267750016_apps-icon-vnpay.png' }}
                                                className='h-24 w-24'
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    {/* payment */}
                    <View className='h-[10%] flex-row justify-between items-center border-t border-gray-300 py-2'>
                        <View className='flex-row mx-2'>
                            <Text className='text-black'>Tổng thanh toán :</Text>
                            <Text className='mx-2 text-black font-bold'>{order[0].amount}</Text>
                        </View>
                        <TouchableOpacity
                            className='bg-green-600 p-3 rounded'
                            onPress={handlePayment}
                        >
                            <Text className='text-white'>Thanh Toán</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    )
}

const Item = ({ item }) => {
    return (
        <View className='w-full my-2'>
            <View className='flex-row w-full'>
                <View className='w-1/3 flex-row justify-center'>
                    <Image
                        source={{ uri: `https://api.travels.games/api/v1/views/show/photos/${item.images[0]}` }}
                        className='h-24 w-24 rounded'
                    />
                </View>
                <View className='w-2/3'>
                    <Text className='text-black font-bold'
                        numberOfLines={2}
                    >{item.title}</Text>
                    <View className='flex-row items-center'>
                        <Text className='w-2/5'>{item.address_start}</Text>
                        <View className='mx-1 w-1/6'>
                            <AntDesign name='arrowright' size={16} color='green' />
                        </View>
                        <Text className='w-2/5'>{item.address_end}</Text>
                    </View>
                    <View className='flex-row'>
                        <Text className='w-1/2'>{moment(item.time_start).format('DD-MM-yyyy')}</Text>
                        <View className='w-1/2 flex-row justify-end'>
                            <Text>{formatVND(item.sale)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Checkout