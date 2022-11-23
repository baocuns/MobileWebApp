import { ActivityIndicator, Text, View } from "react-native";

const Loader = () => {

    return (
        <View className='absolute inset-0 bg-gray-400/50 flex flex-row items-center justify-center z-50'>
            <ActivityIndicator size={50} color="red" />
            <Text className='ml-2 text-black text-base'>Loading...</Text>
        </View>
    )
}

export default Loader