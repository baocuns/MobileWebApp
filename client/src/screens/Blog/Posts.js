import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {
    View,
    Image,
    Dimensions,
    Text,
    TextInput,
    ScrollView,
    Alert,
    Modal,
    Pressable
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Comments from './Comments';

// value defauld
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const Posts = ({ user }) => {
    const [posts, setPosts] = useState([])
    const [openComment, setOpenComment] = useState(false)
    const [postsId, setPostsId] = useState()

    const handleLike = (index) => {
        let p = posts
        if (p[index].likes.some(e => e === user?.username)) {
            p[index].likes = p[index].likes.filter(e => e !== user?.username)
        } else {
            p[index].likes.push(user?.username)
        }
        p[index].like = p[index].likes.length
        setPosts([...p])

        axios.put(`https://api.travels.games/api/v1/posts/like/${p[index]._id}`, user?._id, {
            headers: {
                token: `Travel ${user?.accessToken}`,
                _id: user?._id,
            }
        })
            .then(res => {
                console.log('data', res.data);
            })
            .catch(err => {
                console.log('err', err.response);
            })
    }
    const handleCommentUp = (index) => {
        let p = posts
        p[index].comment++
        setPosts([...p])
    }
    const handleComment = (_id, index) => {
        setOpenComment(!openComment)
        setPostsId({ _id: _id, index: index })
    }

    useEffect(() => {
        axios.get('https://api.travels.games/api/v1/posts/show/hot')
            .then(res => {
                res.data.data.forEach((element) => {
                    Image.getSize(element.images[0], (width, height) => {
                        element.height = (screenWidth / width) * height
                        setPosts(prev => ([...prev, element]))
                    })
                })
            })
            .catch(err => {
                console.log('err', err.response.data);
            })
    }, [])

    return (
        <View>
            {posts && posts.map((e, index) => (
                <View key={index} className='w-full h-auto bg-white'>
                    {/* user */}
                    <View className='flex flex-row'>
                        <View className='ml-4 mr-2 my-2'>
                            <Image
                                source={{ uri: e.profile[0].images[0] }}
                                resizeMode='cover'
                                className='rounded-full h-12 w-12'
                            />
                        </View>
                        <View className='mx-2 my-2'>
                            <View className='flex flex-row'>
                                <Text className='text-black  font-bold'>{e.profile[0].fullname}</Text>
                                {e.address ? (
                                    <>
                                        <Text className='mx-2 text-zinc-800'>đang ở</Text>
                                        <Text className='text-black font-bold'>{e.address}</Text>
                                    </>
                                ) : ('')}
                            </View>
                            <View>
                                <Text className='text-neutral-800'>{new Date(e.createdAt).toLocaleString()}</Text>
                            </View>
                        </View>
                    </View>
                    {/* content */}
                    <View className='px-4'>
                        <Text className='text-justify text-black '>{e.content}</Text>
                    </View>
                    {/* image */}
                    <View>
                        <Image
                            className='object-cover'
                            source={{ uri: e.images[0] }}
                            style={{
                                height: e.height,
                                width: screenWidth
                            }}
                        />
                    </View>
                    {/* opstion status */}
                    <View className='px-4 pt-4 pb-2'>
                        {/* count */}
                        <View className='flex justify-between flex-row px-4'>
                            <View className='flex flex-row items-center'>
                                <Ionicons
                                    name="heart"
                                    size={20}
                                    color='red'
                                />
                                <Text className=' text-black ml-1'>{e.like !== 0 ? e.like : ''}</Text>
                            </View>
                            <View className='flex flex-row items-center'>
                                <Text className=' text-black mr-1'>{e.comment !== 0 ? e.comment : ''}</Text>
                                <EvilIcons
                                    name="comment"
                                    size={20}
                                    color='red' />
                            </View>
                        </View>
                        {/* button */}
                        <View className='flex justify-between flex-row mt-2 border-t border-slate-200 border-solid pt-2 px-4'>
                            <Pressable className='flex flex-row items-center p-2'
                                onPress={() => handleLike(index)}
                            >
                                <Ionicons
                                    name={e.likes.some(e => e === user?.username) ? 'heart' : 'heart-outline'}
                                    size={20}
                                    color='red'
                                />
                                <Text className=' text-black ml-1'>Yêu Thích</Text>
                            </Pressable>
                            <Pressable className='flex flex-row items-center p-2'
                                onPress={() => handleComment(e._id, index)}
                            >
                                <Text className=' text-black mr-1'>Bình Luận</Text>
                                <EvilIcons
                                    name="comment"
                                    size={20}
                                    color='red' />
                            </Pressable>
                        </View>
                    </View>
                    {/* phan cach */}
                    <View className='w-full h-2.5 bg-slate-300 my-1' />
                </View>
            ))}

            {/* comment */}
            <Comments
                open={openComment}
                handleComment={handleComment}
                object_id={postsId?._id}
                user={user}
                index={postsId?.index}
                handleCommentUp={handleCommentUp}
            />
        </View>
    )
}

export default Posts