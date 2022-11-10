import React, { useState, useEffect, useRef } from 'react'
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    Text,
    TextInput,
    ScrollView,
    Alert,
    Modal,
    Pressable
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Comment = ({ open, handleComment }) => {
    const [modalVisible, setModalVisible] = useState(open)
    const [comment, setComment] = useState('')

    const handleChangeComment = (text) => {
        setComment(text)
    }

    const handleCloseComment = () => {
        setComment('')
        setModalVisible(!modalVisible)
        handleComment()
    }

    useEffect(() => {
        setModalVisible(open)
    }, [open])
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseComment}
            >
                <View className='flex justify-end h-full mb-24'>
                    <Pressable
                        className='absolute h-1/4 w-full top-0'
                        onPress={handleCloseComment}
                    />
                    {/* List comment */}
                    <View className='bg-white h-3/4 rounded-t-xl'>
                        <View className='flex items-center'>
                            <View className='h-1 bg-red-500 my-4 w-1/5 rounded' />
                        </View>
                        <ScrollView>
                            <View className='mx-4 my-2'>
                                <View className='flex flex-row'>
                                    <View className='w-1/6'>
                                        <Image
                                            className='object-cover h-12 w-12 rounded-full'
                                            source={require('../../assets/images/slider/1.jpg')}
                                        />
                                    </View>
                                    <View className='w-5/6'>
                                        <View>
                                            <Text className=' text-black font-bold'>Nguyễn Văn Bảo</Text>
                                        </View>
                                        <View>
                                            <Text>2 giờ trước</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* comment */}
                                <View className='mt-2'>
                                    <Text className='text-justify text-black text-sm'>
                                        Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:grid-flow-row to only apply the grid-flow-row utility on hover.
                                    </Text>
                                </View>
                                {/* button reply */}
                                <View className='flex flex-row justify-end'>
                                    <Pressable
                                        className='mb-2 flex flex-row items-center'
                                    >
                                        <AntDesign
                                            name='edit'
                                            size={14}
                                            color='red'
                                        />
                                        <Text className='ml-1'>Trả Lời</Text>
                                    </Pressable>
                                </View>
                                {/* reply */}
                                <View>
                                    <View className='flex flex-row'>
                                        <View className='w-1/6' />
                                        <View className='w-5/6' >
                                            <View className='flex flex-row'>
                                                <View className='w-1/6'>
                                                    <Image
                                                        className='object-cover h-12 w-12 rounded-full'
                                                        source={require('../../assets/images/slider/1.jpg')}
                                                    />
                                                </View>
                                                <View className='w-5/6 ml-2'>
                                                    <View className='flex flex-row items-center w-5/6'>
                                                        <Text className='text-black mr-2 font-bold'>Xuân Lời</Text>
                                                        <AntDesign
                                                            name='right'
                                                            size={14}
                                                            color='red'
                                                        />
                                                        <Text className='text-black ml-2 font-bold'>Nguyễn Văn Bảo</Text>
                                                    </View>
                                                    <View>
                                                        <Text>2 giờ trước</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            {/* comment */}
                                            <View className='mt-2'>
                                                <Text className='text-justify text-black text-sm'>
                                                    Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:grid-flow-row to only apply the grid-flow-row utility on hover.
                                                </Text>
                                            </View>
                                            {/* button reply */}
                                            <View className='flex flex-row justify-end'>
                                                <Pressable
                                                    className='mb-2 flex flex-row items-center'
                                                >
                                                    <AntDesign
                                                        name='edit'
                                                        size={14}
                                                        color='red'
                                                    />
                                                    <Text className='ml-1'>Trả Lời</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        {/* input comment */}
                        <View className='w-full p-4 border-t border-gray-300 flex flex-row justify-center items-center'>
                            <TextInput
                                className='bg-gray-100 rounded-full pl-4 py-2 w-5/6'
                                placeholder='Bình luận . . .'
                                value={comment}
                                onChangeText={handleChangeComment}
                            />
                            <View className='ml-2'>
                                <FontAwesome name='send' size={30} color='#38bdf8' />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Comment