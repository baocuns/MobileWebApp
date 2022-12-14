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
    TouchableOpacity,
    ToastAndroid
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { formatTime } from '../../utils/function';
import { Placeholder, PlaceholderLine, ShineOverlay } from 'rn-placeholder';

// value defauld
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const Posts = ({ user, handleComments, isRefresh, handleRefresh }) => {
    const [posts, setPosts] = useState([])
    const loading = [1, 2, 3]

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

    // call posts
    useEffect(() => {
        axios.get('https://api.travels.games/api/v1/posts/show/hot')
            .then(res => {
                var posts = []
                res.data.data.forEach(async (element) => {
                    await Image.getSize(element.images[0], (width, height) => {
                        element.height = (screenWidth / width) * height
                        posts.push(element)
                    })
                    if (posts.length === res.data.data.length) {
                        setPosts([...posts])
                    }
                })
            })
            .catch(err => {
                console.log('err', err.response.data);
            })
    }, [])

    // refresh posts
    useEffect(() => {
        isRefresh && handleCallHotPost()
    }, [isRefresh])

    const handleCallHotPost = () => {
        setPosts([])
        axios.get('https://api.travels.games/api/v1/posts/show/hot')
            .then(res => {
                var posts = []
                res.data.data.forEach(async (element) => {
                    await Image.getSize(element.images[0], (width, height) => {
                        element.height = (screenWidth / width) * height
                        posts.push(element)
                    })
                    if (posts.length === res.data.data.length) {
                        handleRefresh(false)
                        setPosts([...posts])
                    }
                })
            })
            .catch(err => {
                console.log('err', err.response.data);
            })
    }

    return (
        <View>

            {/* loading */}
            {posts.length === 0 && loading.map((e, i) => (
                <View>
                    <Placeholder
                        Animation={ShineOverlay}
                    >
                        {/* user */}
                        <View className='flex-row mx-4 border-b border-gray-300'>
                            <View className='w-1/5'>
                                <PlaceholderLine
                                    className='mr-2 my-2 rounded-full h-12 w-12'
                                />
                            </View>
                            <View className='my-2 w-4/5'>
                                <PlaceholderLine />
                                <PlaceholderLine />
                            </View>
                        </View>
                        {/* content */}
                        <View className='px-4'>
                            <View className='my-2'>
                                <PlaceholderLine />
                                <PlaceholderLine />
                                <PlaceholderLine />
                            </View>
                        </View>
                        {/* image */}
                        <View>
                            <PlaceholderLine
                                className='w-full h-64'
                            />
                        </View>
                        {/* opstion status */}
                        <View className='px-4'>
                            {/* count */}
                            <View className='flex justify-between flex-row px-4'>
                                <PlaceholderLine width={20} />
                                <PlaceholderLine width={20} />
                            </View>
                            {/* button */}
                            <View className='justify-between flex-row border-t border-slate-200 border-solid pt-2 px-4'>
                                <PlaceholderLine width={20} height={20} />
                                <PlaceholderLine width={20} height={20} />
                            </View>
                        </View>
                    </Placeholder>
                    {/* phan cach */}
                    <View className='w-full h-2.5 bg-slate-300 my-1' />
                </View>
            ))}

            {posts.length > 0 && posts.map((e, index) => (
                <View key={index} className='w-full h-auto bg-white'>
                    {/* user */}
                    <View className='flex flex-row mx-4 border-b border-gray-300'>
                        <View className=' mr-2 my-2'>
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
                                        <View className='flex-row items-center mx-2'>
                                            <EvilIcons name='location' size={20} color='red' />
                                            <Text className='text-black text-xs'>{e.address}</Text>
                                        </View>
                                    </>
                                ) : ('')}
                            </View>
                            <View>
                                <Text className='text-neutral-800'>{formatTime(e.createdAt)}</Text>
                            </View>
                        </View>
                    </View>
                    {/* content */}
                    <View className='px-4'>
                        <View className='my-2'>
                            <Text className='text-justify text-black '>{e.content}</Text>
                        </View>
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
                            <TouchableOpacity className='flex flex-row items-center p-2'
                                onPress={() => handleLike(index)}
                            >
                                <Ionicons
                                    name={e.likes.some(e => e === user?.username) ? 'heart' : 'heart-outline'}
                                    size={20}
                                    color='red'
                                />
                                <Text className=' text-black ml-1'>Y??u Th??ch</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='flex flex-row items-center p-2'
                                onPress={() => handleComments(e._id)}
                            >
                                <Text className=' text-black mr-1'>B??nh Lu???n</Text>
                                <EvilIcons
                                    name="comment"
                                    size={20}
                                    color='red' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* phan cach */}
                    <View className='w-full h-2.5 bg-slate-300 my-1' />
                </View>
            ))}
        </View>
    )
}

export default Posts