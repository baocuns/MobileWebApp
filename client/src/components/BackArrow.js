import { View, Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';

const BackArrow = ({ name }) => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <View style={{ flexDirection: 'row' }} className='p-3 items-center border-b border-gray-300 mb-2 drop-shadow-md'>
            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => navigation.goBack()}
                className='py-1 px-2'
            >
                <AntDesign name='arrowleft' size={30} color={colors.text} />
            </TouchableOpacity>
            <Text style={{ color: colors.text, fontSize: 20, marginLeft: 30 }}>{name}</Text>
        </View>
    )
}

export default BackArrow