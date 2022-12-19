import { View, Text, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Rating from '../components/Rating'
import { Box, Button, Input, TextArea } from 'native-base'
import { useNavigation, useTheme } from '@react-navigation/native'
import StarRating from 'react-native-star-rating-widget';
import BackArrow from '../components/BackArrow'
import { useSelector } from 'react-redux'
import axios, { Axios } from 'axios'
import { sendRatingAction } from '../redux/apiRequest'

const ActionRaiting = ({ route }) => {
    const { tourID } = route.params;
    const navigation = useNavigation();
    const { colors } = useTheme();
    const [rating, setRating] = useState(0);
    const [ratingCotent, setRatingCotent] = useState('');
    const [profile, setProfile] = useState(null);
    const user = useSelector(state => state.auth.login.currentUser);

    const getUserProfile = async () => {
        await axios
            .post(
                `https://api.travels.games/api/v1/profile/show/details/${user?.username}`,
                user?._id,
                {
                    headers: {
                        token: `Travel ${user?.accessToken}`,
                    },
                },
            )
            .then(res => {
                setProfile(res.data.data[0]);
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }

    const sendRating = async () => {
        // navigation.goBack()
        if (rating == 0 || !ratingCotent) {
            Alert.alert('You must rate star and write rating content');
            return;
        }
        // call api
        const data = await sendRatingAction(user.accessToken, user._id, Math.floor(rating), ratingCotent, tourID);
        // console.log('accessToken: ', user.accessToken);
        // console.log('user._id: ', user._id);
        // console.log('rate: ', Math.floor(rating));
        // console.log('ratingCotent: ', ratingCotent);
        // console.log('tourID: ', tourID);
        // console.log("user profile: ", profile);
        console.log("data: ", data);
        if (!data.status) {
            Alert.alert(
                "Travel App",
                data.msg,
                [
                    { text: "OK", onPress: () => navigation.goBack() }
                ]
            );
        } else {
            navigation.goBack();
        }
    }
    useEffect(() => {
        if (!user) {
            navigation.navigate('Login')
        }
        getUserProfile();
    }, [])

    return (
        <>
            <BackArrow name="Địa điểm đánh giá" />
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ color: colors.text }}>Địa điểm đánh giá</Text>
                <View>
                    <StarRating
                        rating={rating}
                        onChange={setRating}
                        starSize={40} d
                        enableHalfStar={false}
                    />
                </View>
                <Box alignItems="center" w="100%">
                    <TextArea value={ratingCotent}
                        onChangeText={setRatingCotent}
                        m={5} h={20} placeholder="Viết đánh giá" w="75%" maxW="300" color={colors.text} />
                    <Button m={5} onPress={() => sendRating()}>Đánh giá</Button>
                </Box>
            </View>
        </>
    )
}

export default ActionRaiting