import axios from "axios";
import { Button } from "native-base"
import { useEffect, useState } from "react";
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
    TouchableOpacity
} from 'react-native'
import { useSelector } from "react-redux";
import Fontisto from 'react-native-vector-icons/Fontisto';
import CreatePosts from "./CreatePosts";


const Header = ({user}) => {
    const [profile, setProfile] = useState()
    const [openCreate, setOpenCreate] = useState(false)

    const handleOpenCreatePosts = () => {
        setOpenCreate(!openCreate)
    }

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
                // console.log(res.data.data);
                setProfile(res.data.data[0])
            })

    }, [])

    return (
        <View className='bg-white'>
            <View className='px-4 pt-8'>
                <Text className='text-4xl text-green-500'>BKK Travels</Text>
            </View>
            <View className='p-4 flex flex-row w-full items-center'>
                <View className='w-1/6'>
                    <Image
                        className='object-cover h-12 w-12 rounded-full mr-2'
                        source={{ uri: profile?.images[0] }}
                    />
                </View>
                <View className='w-4/6'>
                    <TouchableOpacity
                        onPress={handleOpenCreatePosts}
                        className='py-2 w-auto rounded-full bg-white border border-gray-400 flex flex-row items-center px-4 hover:bg-gray-300'
                    >
                        <Text className='text-black'>Bạn đang đang nghĩ gì vậy ?</Text>
                    </TouchableOpacity>
                </View>
                <View className='w-1/6 flex flex-row items-center justify-center ml-1'>
                    <TouchableOpacity
                        onPress={handleOpenCreatePosts}
                        className='p-2'
                    >
                        <Fontisto name="photograph" size={30} color='#45bd62' />
                    </TouchableOpacity>
                </View>
            </View>

            {/* modal create posts */}
            <CreatePosts
                user={user}
                open={openCreate}
                handleOpenCreatePosts={handleOpenCreatePosts}
            />
        </View>
    )
}

export default Header