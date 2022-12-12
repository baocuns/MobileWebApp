import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Placeholder, PlaceholderLine, Shine, ShineOverlay } from 'rn-placeholder';

// value defauld
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const News = ({ isRefresh }) => {
    const [news, setNews] = useState([])
    const loading = [1, 2, 3, 4, 5]

    useEffect(() => {
        axios.get('https://api.travels.games/api/v1/posts/show/new')
            .then(res => {
                var newss = []
                res.data.data.forEach(async (element) => {
                    await Image.getSize(element.images[0], (width, height) => {
                        element.height = (screenWidth / width) * height
                        newss.push(element)
                    })
                    if (newss.length === res.data.data.length) {
                        setNews([...newss])
                    }
                })
            })
            .catch(err => {
                console.log('err', err.response.data);
            })
    }, [])

    const handleRefreshNews = () => {
        setNews([])
        axios.get('https://api.travels.games/api/v1/posts/show/new')
            .then(res => {
                var newss = []
                res.data.data.forEach(async (element) => {
                    await Image.getSize(element.images[0], (width, height) => {
                        element.height = (screenWidth / width) * height
                        newss.push(element)
                    })
                    if (newss.length === res.data.data.length) {
                        setNews([...newss])
                    }
                })
            })
            .catch(err => {
                console.log('err', err.response.data);
            })
    }

    // refresh news
    useEffect(() => {
        isRefresh && handleRefreshNews()
    }, [isRefresh])

    return (
        <View>
            <ScrollView
                horizontal
                className=''
            >
                {
                    news.length === 0 && loading.map((e, i) => (
                        <View className='my-4 mx-2'>
                            <Placeholder
                                Animation={ShineOverlay}
                            >
                                <PlaceholderLine
                                    style={{
                                        width: screenWidth / 3,
                                        height: screenHeight / 3.5,
                                    }}
                                />
                            </Placeholder>

                            <View className='absolute bottom-6 left-2 bg-white h-4 right-2 rounded-full' />
                            <View className='absolute bg-white h-10 w-10 top-0 rounded-full m-2'>
                            </View>
                        </View>
                    ))
                }

                {news.length > 0 && news.map((e, index) => (
                    <View key={index} className='my-4 mx-2 rounded'>
                        <Image
                            className='rounded object-cover'
                            source={{ uri: e.images[0] }}
                            style={{
                                width: screenWidth / 3,
                                height: screenHeight / 3.5,
                            }}
                        />
                        <Text className='absolute bottom-2 left-2 text-white font-bold' numberOfLines={1}>{e.profile[0].fullname}</Text>
                        <View className='absolute bg-gray-200 h-10 w-10 top-0 rounded-full m-2'>
                            <Image
                                className='rounded-full h-10 w-10 object-cover'
                                source={{ uri: e.profile[0].images[0] }}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default News