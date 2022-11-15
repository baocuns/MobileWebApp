import { ActivityIndicator, Text, View } from "react-native";

const Loader = () => {

    return (
        <View className='absolute inset-0 bg-gray-300/50 flex flex-row items-center justify-center z-10'>
            <ActivityIndicator size={50} color="red" />
            <Text className='ml-2'>Loading...</Text>
        </View>
    )
}

export default Loader