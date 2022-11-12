import { SafeAreaView } from 'react-native-safe-area-context';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useEffect, useState } from 'react';
import Comment from './Comment';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const User1 = {
    fullname: 'Nguyễn Văn Bảo',
    img: require('../../assets/images/slider/1.jpg')
}



const Blog = () => {
    const user = useSelector(state => state.auth.login.currentUser);
    const [news, setNews] = useState([])
    const [posts, setPosts] = useState([])
    const [comment, setComment] = useState(false)

    useEffect(() => {
        const listNews = [{
            image: require('../../assets/images/slider/1.jpg'),
            user: 'Bao',
        }, {
            image: require('../../assets/images/slider/2.jpg'),
            user: 'Khiem',
        }, {
            image: require('../../assets/images/slider/3.jpg'),
            user: 'Khanh',
        }]

        const listPost = [
            {
                user: User1,
                time: '10/10/2022',
                address: 'Đà Nẵng',
                content: 'Đẹp trai nhất thế giới',
                image: require('../../assets/images/slider/1.jpg'),
                like: 1345,
                comment: 35,
                comments: 'ID_Comment_Data',
            },
        ]
        setNews(listNews)
    }, [])

    useEffect(() => {
        axios.get('https://api.travels.games/api/v1/posts/show/hot')
            .then(res => {
                console.log('data', res.data.data[0].images[0]);
                setPosts(res.data.data)
            })
            .catch(err => {
                console.log('err', err.response.data);
            })
    }, [])

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
                console.log('data',res.data);
            })
            .catch(err => {
                console.log('err', err.response);
            })
    }
    const handleComment = () => {
        setComment(!comment)
    }

    return (
        <SafeAreaView>
            <ScrollView className='bg-white'>
                {/* content */}
                <View className='rounded-full border border-black border-solid mx-4 my-4 bg-white'>
                    <TextInput placeholder='Bạn có đang ở đây không...' />
                </View>
                {/* phan cach */}
                <View className='w-full h-2.5 bg-slate-300 my-1' />
                {/* news */}
                <View className='flex-1 w-full h-30'>
                    <ScrollView
                        horizontal
                        className='w-auto'
                    >
                        <View className='relative my-4 mx-2 rounded-lg border border-slate-400 border-solid'>
                            <Image
                                key={'0'}
                                source={require('../../assets/images/slider/1.jpg')}
                                resizeMode='cover'
                                className='rounded-lg'
                                style={{
                                    width: screenWidth / 3,
                                    height: screenHeight / 3.5,
                                }}
                            />
                            <View className='absolute inset-0 flex justify-center items-center'>
                                <AntDesign
                                    name="pluscircleo"
                                    size={50}
                                    color='#fff'
                                />
                            </View>
                            <Text className='absolute bottom-2 left-2 text-white'>Tạo Tin</Text>
                        </View>

                        {news.map((e, index) => (
                            <View key={index} className='relative my-4 mx-2 rounded-lg border border-slate-400 border-solid'>
                                <Image
                                    key={'0'}
                                    source={e.image}
                                    resizeMode='cover'
                                    className='rounded-lg'
                                    style={{
                                        width: screenWidth / 3,
                                        height: screenHeight / 3.5,
                                    }}
                                />
                                <Text className='absolute bottom-2 left-2 text-white'>{e.user}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                {/* phan cach */}
                <View className='w-full h-2.5 bg-slate-300 my-1' />
                {/* post */}
                <View className=''>
                    {posts && posts.map((e, index) => (
                        <View key={e._id} className='w-full h-auto bg-white'>
                            <View className='flex flex-row'>
                                <View className='ml-4 mr-2 my-2'>
                                    <Image
                                        source={require('../../assets/images/slider/1.jpg')}
                                        resizeMode='cover'
                                        className='rounded-full h-12 w-12'
                                    />
                                </View>
                                <View className='mx-2 my-2'>
                                    <View className='flex flex-row'>
                                        <Text className='text-black  font-bold'>{e.username}</Text>
                                        {e.address ? (
                                            <>
                                                <Text className='mx-2 '>đang ở</Text>
                                                <Text className='text-black  font-bold'>{e.address}</Text>
                                            </>
                                        ) : ('')}
                                    </View>
                                    <View>
                                        <Text>{new Date(e.createdAt).toLocaleString()}</Text>
                                    </View>
                                </View>
                            </View>
                            {/* posts */}
                            <View className='px-4'>
                                <Text className='text-justify text-black '>{e.content}</Text>
                            </View>
                            {/* image */}
                            <View>
                                <Image
                                    className='object-cover h-96 w-full'
                                    source={{ uri: e.images[0] }}
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
                                        <Text className=' text-black ml-1'>{e.like}</Text>
                                    </View>
                                    <View className='flex flex-row items-center'>
                                        <Text className=' text-black mr-1'>{e.comment}</Text>
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
                                            name="heart-outline"
                                            size={20}
                                            color='red'
                                        />
                                        <Text className=' text-black ml-1'>Yêu Thích</Text>
                                    </Pressable>
                                    <Pressable className='flex flex-row items-center p-2'
                                        onPress={() => handleComment()}
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
                </View>
            </ScrollView>
            {/* comment */}
            <Comment
                open={comment}
                handleComment={handleComment}
            />
        </SafeAreaView>
    )
}

export default Blog