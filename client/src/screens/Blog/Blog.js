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
import { useEffect, useState } from 'react';
import Header from './Header';
import Posts from './Posts';
import { useSelector } from 'react-redux';

// value defauld
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const Blog = () => {
    const user = useSelector(state => state.auth.login.currentUser);
    const [news, setNews] = useState([])

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
        setNews(listNews)
    }, [])

    return (
        <SafeAreaView>
            <ScrollView className='bg-white'>
                {/* header */}
                <View className='bg-gray-200'>
                    <Header
                        user={user}
                    />
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
                <View>
                    <Posts
                        user={user}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Blog