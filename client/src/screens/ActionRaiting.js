import { View, Text, TextInput } from 'react-native'
import React from 'react'
import StarRating from '../components/StarRating'
import Rating from '../components/Rating'
import { Box, Button, Input, TextArea } from 'native-base'
import { useNavigation } from '@react-navigation/native'


const ActionRaiting = () => {
    const navigation = useNavigation();
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ color: '#000' }}>Địa điểm đánh giá</Text>
            <View>
                <Rating starSize={40} />
            </View>
            <Box alignItems="center" w="100%">
                <TextArea m={5} h={20} placeholder="Viết đánh giá" w="75%" maxW="300" />
                <Button m={5} onPress={() => navigation.goBack()}>Đánh giá</Button>
            </Box>
        </View>
    )
}

export default ActionRaiting