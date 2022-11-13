import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';

const BackArrow = ({ name }) => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <View style={{ flexDirection: 'row', marginLeft: 10, paddingTop: 10 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                <Ionicons name='md-chevron-back-outline' style={{ padding: 10, borderRadius: 50, aspectRatio: 1, shadowColor: 'gray', borderWidth: 1 }} size={30} color={colors.text} />
                <Text style={{ color: colors.text, fontSize: 20, marginLeft: 30 }}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BackArrow