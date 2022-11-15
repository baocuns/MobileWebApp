import axios from 'axios';
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
    Pressable,
    RefreshControl,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Loader from '../Loader/Loader';


const Comments = ({ open, handleComment, object_id, user, index, handleCommentUp }) => {
    const [modalVisible, setModalVisible] = useState(open)
    const [isLoader, setIsLoader] = useState(false)
    const [profile, setProfile] = useState()
    // comment
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    const [reply, setReply] = useState(null)
    const [parent, setParent] = useState(null)
    const TextInputComment = useRef()
    // scroll
    const [scrollY, setScrollY] = useState()

    const handleReply = (cmt) => {
        const parent_id = cmt.parent_id ? cmt.parent_id : cmt._id
        setReply(cmt.profile[0])
        setParent(parent_id)
        TextInputComment.current.focus()
    }
    const handleDisReply = () => {
        setReply(null)
        setParent(null)
    }

    const handleChangeComment = (text) => {
        setComment(text)
    }

    const handleCloseComment = () => {
        setComment('')
        setReply(null)
        setParent(null)
        setModalVisible(!modalVisible)
        handleComment()
    }
    const handleSubmitComment = () => {
        setIsLoader(true)
        const data = {
            object_id: object_id,
            parent_id: parent,
            reply: reply ? reply.username : null,
            content: comment,
        }
        axios.post('https://api.travels.games/api/v1/comment/store', data, {
            headers: {
                token: `Travel ${user?.accessToken}`,
                _id: user?._id,
            }
        })
            .then(res => {
                setComments(prev => ([...prev, {
                    ...res.data.data,
                    profile: [profile],
                    profileReply: [reply],
                }]))
                setComment('')
                setReply(null)
                setParent(null)
                setIsLoader(false)
                handleCommentUp(index)
            })
            .catch(err => {
                console.log(err.response.data);
                setIsLoader(false)
            })
    }

    // scroll
    const handleScrollEnd = (event) => {
        // console.log(event.nativeEvent.contentOffset);
        if (event.nativeEvent.contentOffset.y === 0) {
            handleCloseComment()
        }
    }

    useEffect(() => {
        setModalVisible(open)
    }, [open])
    // call api show comment
    useEffect(() => {
        setComments([])
        if (object_id) {
            setIsLoader(true)
            axios.post(`https://api.travels.games/api/v1/comment/show/${object_id}`)
                .then(res => {
                    setComments(res.data.data)
                    setIsLoader(false)
                })
                .catch(err => {
                    console.log(err.response.data);
                    setIsLoader(false)
                })
        }
    }, [object_id])

    useEffect(() => {
        axios.post(`https://api.travels.games/api/v1/profile/show/details/${user?.username}`,
            user?._id,
            {
                headers: {
                    token: `Travel ${user?.accessToken}`,
                },
            }
        )
            .then(res => {
                setProfile(res.data.data[0])
            })

    }, [])

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseComment}
            >
                <View className='flex justify-end h-full mb-24'>
                    {/* loader */}
                    {isLoader && (<Loader />)}
                    <Pressable
                        className='absolute h-1/4 w-full top-0'
                        onPress={handleCloseComment}
                    />
                    {/* List comment */}
                    <View className='bg-white h-3/4 rounded-t-xl' >
                        <View className='flex items-center'>
                            <View className='h-1 bg-red-500 my-4 w-1/5 rounded' />
                        </View>
                        <ScrollView
                            onScrollEndDrag={handleScrollEnd}
                        >
                            <View className='mx-4 my-2'>
                                {comments.length !== 0 && comments.map((cmt, index) => (
                                    <View key={index}>
                                        {!cmt.parent_id ? (
                                            <View>
                                                <View className='flex flex-row'>
                                                    <View className='w-1/6'>
                                                        <Image
                                                            className='object-cover h-12 w-12 rounded-full'
                                                            source={{ uri: cmt.profile[0].images[0] }}
                                                        />
                                                    </View>
                                                    <View className='w-5/6'>
                                                        <View>
                                                            <Text className=' text-black font-bold'>{cmt.profile[0].fullname}</Text>
                                                        </View>
                                                        <View>
                                                            <Text>{new Date(cmt.updatedAt).toLocaleString()}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View className='mt-2'>
                                                    <Text className='text-justify text-black text-sm'>{cmt.content}</Text>
                                                </View>
                                                <View className='flex flex-row justify-end'>
                                                    <Pressable
                                                        onPress={() => handleReply(cmt)}
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
                                        ) : (
                                            <View>
                                                {/* reply */}
                                                <View className='flex flex-row'>
                                                    <View className='w-1/6' />
                                                    <View className='w-5/6' >
                                                        <View className='flex flex-row'>
                                                            <View className='w-1/6'>
                                                                <Image
                                                                    className='object-cover h-12 w-12 rounded-full'
                                                                    source={{ uri: cmt.profile[0].images[0] }}
                                                                />
                                                            </View>
                                                            <View className='w-5/6 ml-2'>
                                                                <View className='flex flex-row items-center w-5/6'>
                                                                    <Text className='text-black mr-2 font-bold'>{cmt.profile[0].fullname}</Text>
                                                                    <AntDesign
                                                                        name='right'
                                                                        size={14}
                                                                        color='red'
                                                                    />
                                                                    <Text className='text-black ml-2 font-bold'>{cmt.profileReply[0].fullname}</Text>
                                                                </View>
                                                                <View>
                                                                    <Text>{new Date(cmt.updatedAt).toLocaleString()}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        {/* comment */}
                                                        <View className='mt-2'>
                                                            <Text className='text-justify text-black text-sm'>{cmt.content}</Text>
                                                        </View>
                                                        {/* button reply */}
                                                        <View className='flex flex-row justify-end'>
                                                            <Pressable
                                                                onPress={() => handleReply(cmt)}
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
                                        )}
                                    </View>
                                ))}
                                {/* no comment */}
                                {comments.length === 0 && (
                                    <View className='p-4'>
                                        <View className='flex flex-row items-center justify-center'>
                                            <Foundation name='comments' size={200} color='#e25c5c' />
                                        </View>
                                        <View className='flex flex-row items-center justify-center'>
                                            <Text className='text-black text-xl'>Không có bình luận</Text>
                                        </View>
                                        <View className='flex flex-row items-center justify-center'>
                                            <Text className='text-black text-xl'>Hãy là người bình luận đầu tiên nào!</Text>
                                        </View>
                                    </View>
                                )}
                            </View>
                        </ScrollView>
                        {/* input comment */}
                        <View className='w-full p-4 border-t border-gray-300'>
                            {reply && (
                                <View className='flex flex-row justify-center items-center'>
                                    <View className='w-1/6'></View>
                                    <View className='flex flex-row ml-6 pb-2 w-5/6'>
                                        <Text className='text-black'>Đang trả lời</Text>
                                        <Text className='text-black mx-2 font-bold'>{reply.fullname}</Text>
                                        <Pressable
                                            onPress={handleDisReply}
                                            className='px-1'
                                        >
                                            <AntDesign name='close' size={20} color='red' />
                                        </Pressable>
                                    </View>
                                </View>
                            )}
                            <View className='flex flex-row justify-center items-center'>
                                <View className='w-1/6'>
                                    <Image
                                        className='object-cover h-12 w-12 rounded-full mr-2'
                                        source={{ uri: profile?.images[0] }}
                                    />
                                </View>
                                <TextInput
                                    ref={TextInputComment}
                                    className='bg-gray-100 rounded-full pl-4 py-2 w-4/6'
                                    placeholder='Bình luận . . .'
                                    value={comment}
                                    onChangeText={handleChangeComment}
                                />
                                <Pressable
                                    onPress={handleSubmitComment}
                                    className='ml-2'
                                >
                                    <FontAwesome name='send' size={30} color='#38bdf8' />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View >
            </Modal >
        </View >
    )
}

export default Comments