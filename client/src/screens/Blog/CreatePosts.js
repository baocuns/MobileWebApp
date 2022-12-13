import React, { useState, useEffect, useRef } from 'react'
import ImageViewer from 'react-native-image-zoom-viewer'
import {
    View,
    Image,
    Dimensions,
    Text,
    TextInput,
    ScrollView,
    Alert,
    Modal,
    Pressable,
    TouchableOpacity,
    ToastAndroid
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useDispatch, useSelector } from 'react-redux'
// map
import Geolocation from '@react-native-community/geolocation'
import { URL, TOURISM, FILTER_CIRCLE, API_KEY } from "../../utils/constant"
// photos
import DocumentPicker from 'react-native-document-picker'
import { getMapDefaultSuccess, setPositionDefault } from '../../redux/mapSlice'
import axios from 'axios'
import Loader from '../Loader/Loader'


const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const CreatePosts = ({ user, open, handleOpenCreatePosts }) => {
    const dispatch = useDispatch()
    const [isFetching, setIsFetching] = useState(false)
    const [modalVisible, setModalVisible] = useState(open)
    const [singleFile, setSingleFile] = useState(null)
    // map
    const [isLoactions, setIsLoactions] = useState(false)
    const [markers, setMarkers] = useState([])
    const [isCurrentPositon, setIsCurrentPositon] = useState(true)
    const initState = useSelector((state) => state.map.map)
    let position = initState.position
    const positionDefault = initState.positionFault
    // data
    const [data, setData] = useState({})
    // posts upload
    const handlePostUpload = () => {
        if (!data.content) {
            return ToastAndroid.show("Bạn chưa nhập nội dung bài viết !", ToastAndroid.SHORT);
        }
        if (singleFile != null) {
            setIsFetching(true)
            // If file selected then create FormData
            const fileToUpload = singleFile
            let formData = new FormData()
            formData.append('photos', fileToUpload)
            data?.content && formData.append('content', data?.content)
            data?.location && formData.append('address', data?.location)
            // Please change file upload URL
            axios.post('https://api.travels.games/api/v1/posts/store', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "token": `Travel ${user?.accessToken}`,
                    "_id": user?._id,
                }
            })
                .then(res => {
                    console.log(res.data)
                    setIsFetching(false)
                    ToastAndroid.show("Bạn đăng bài viết thành công !", ToastAndroid.SHORT);
                    handleCloseCreate()
                })
                .catch(err => {
                    console.log(err.response.data)
                    setIsFetching(false)
                    ToastAndroid.show("Bạn đăng bài viết thất bại, vui lòng thử lại sau !", ToastAndroid.SHORT);
                    handleCloseCreate()
                })
        } else {
            // If no file selected the show alert
            ToastAndroid.show("Vui lòng chọn hình ảnh !", ToastAndroid.SHORT);
        }
    }

    const handleCloseCreate = () => {
        setModalVisible(!modalVisible)
        handleOpenCreatePosts()
    }
    const selectFile = async () => {
        try {
            let res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            })
            res.map(e => {
                Image.getSize(e.uri, (width, height) => {
                    e.width = width
                    e.height = height
                    setSingleFile(e)
                })
            })
        } catch (err) {
            setSingleFile(null)
            if (DocumentPicker.isCancel(err)) {
                alert('Canceled')
            } else {
                alert('Unknown Error: ' + JSON.stringify(err))
                throw err
            }
        }
    }
    const handleDataChange = (key, text) => {
        setData(prev => ({
            ...prev,
            [key]: text
        }))
    }
    const handleLocationChange = (location) => {
        handleDataChange('location', location)
        setIsLoactions(false)
    }

    // lay cac dia diem xung quanh
    const getCurrentPosition = () => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords
            if (isCurrentPositon) {
                const crdFull = {
                    ...crd,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421
                }
                dispatch(getMapDefaultSuccess(crdFull))
                dispatch(setPositionDefault(crdFull))
                setIsCurrentPositon(true)
            }
        })
    }
    const handleGetLocationTravelByCurrentPosition = () => {
        if (markers.length === 0) {
            setIsFetching(true)
            position = positionDefault
            axios.get(`${URL}?categories=${TOURISM}&filter=${FILTER_CIRCLE}:${position.longitude},${position.latitude},10000&bias=proximity:${position.longitude},${position.latitude}&limit=100&apiKey=${API_KEY}`)
                .then(res => {
                    const itemMarker = res.data
                    dispatch(getMapDefaultSuccess(position))
                    setMarkers(itemMarker.features)
                    setIsCurrentPositon(false)
                    setIsLoactions(true)
                    setIsFetching(false)
                })
                .catch(error => console.log(error))
        } else {
            setIsLoactions(true)
        }
    }

    useEffect(() => {
        setModalVisible(open)
    }, [open])
    // Get current position
    useEffect(() => {
        getCurrentPosition()
    }, [])

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={!isLoactions ? handleCloseCreate : () => setIsLoactions(false)}
            >
                <View className='h-full w-full bg-white'>
                    {/* loader */}
                    {isFetching && <Loader />}
                    {/* views loaction */}
                    {markers.length !== 0 && isLoactions && (
                        <View className='absolute h-full w-full bg-white z-10'>
                            <ScrollView className='p-4'>
                                <View className='flex flex-row border-b pb-2 border-gray-500'>
                                    <View className='w-1/6 flex flex-row'>
                                        <Pressable
                                            onPress={() => setIsLoactions(false)}
                                        >
                                            <AntDesign name='arrowleft' size={38} color='black' />
                                        </Pressable>
                                    </View>
                                    <View className='flex flex-row'>
                                        <Text className='text-black text-lg'>Select the location you want to tag</Text>
                                        <EvilIcons name='location' size={25} color='red' />
                                    </View>
                                </View>
                                {/* list */}
                                <View>
                                    {markers.map((marker, index) => {
                                        if (marker.properties.name) {
                                            return (
                                                <TouchableOpacity
                                                    key={index}
                                                    className='py-2 my-2 bg-green-100 rounded'
                                                    onPress={() => handleLocationChange(marker.properties.name)}
                                                >
                                                    <Text className='text-black text-base px-4'>{marker.properties.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        }
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                    )}

                    <ScrollView className='p-4 h-full'>
                        <View className='flex flex-row border-b pb-2 border-gray-500'>
                            <View className='w-1/6 flex flex-row'>
                                <Pressable
                                    onPress={handleCloseCreate}
                                >
                                    <AntDesign name='arrowleft' size={38} color='black' />
                                </Pressable>
                            </View>
                            <View className='flex flex-row items-center w-3/6'>
                                <Text className='text-black text-xl'>Create Posts</Text>
                            </View>
                            <View className='w-2/6 flex flex-row items-center justify-end'>
                                <TouchableOpacity
                                    onPress={handlePostUpload}
                                    className='bg-green-600 rounded flex flex-row items-center justify-center pr-2'
                                >
                                    <Text className='text-white p-2'>Post up</Text>
                                    <AntDesign name='upload' size={18} color='white' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* input posts */}
                        <View>
                            {/* location */}
                            {data.location && (
                                <View className='flex flex-row items-center my-2'>
                                    <EvilIcons name='location' size={25} color='red' />
                                    <Text className='text-black'>{data?.location}</Text>
                                </View>
                            )}
                            {/* posts content */}
                            <View>
                                <TextInput
                                    multiline={true}
                                    numberOfLines={1}
                                    value={data?.content}
                                    onChangeText={(text) => handleDataChange('content', text)}
                                    className='text-base'
                                    placeholder='What are you thinking in that small brain?'
                                />
                            </View>
                            <View className='mb-8'>
                                {/* photos */}
                                <View className='py-2'>
                                    {singleFile && (
                                        <Image
                                            className='w-full'
                                            style={{
                                                height: ((screenWidth - 32) / singleFile.width) * singleFile.height
                                            }}
                                            source={{ uri: singleFile.uri }}
                                        />
                                    )}
                                </View>
                                {/* button */}
                                <View className='flex flex-row items-center justify-center'>
                                    <TouchableOpacity
                                        onPress={selectFile}
                                        className='bg-green-600 my-4 px-4 rounded flex flex-row items-center justify-center py-2'
                                    >
                                        <Text className='text-white mr-2 text-base'>Select Photo</Text>
                                        <View>
                                            <Ionicons name='md-image-outline' size={23} color='white' />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={handleGetLocationTravelByCurrentPosition}
                                        className='bg-red-600 my-4 px-4 rounded flex flex-row items-center justify-center py-2 ml-4'
                                    >
                                        <Text className='text-white mr-2 text-base'>Select Location</Text>
                                        <View>
                                            <EvilIcons name='location' size={25} color='white' />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </Modal>
        </View>
    )
}

export default CreatePosts