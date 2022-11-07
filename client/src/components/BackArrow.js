import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'

const BackArrow = ({ navigation }) => {
    return (
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name='md-chevron-back-outline' style={{ backgroundColor: '#f5f5f5', padding: 10, borderRadius: 50, aspectRatio: 1, shadowColor: 'gray', borderWidth: 1 }} size={30} color='#888' />
            </TouchableOpacity>
        </View>
    )
}

export default BackArrow