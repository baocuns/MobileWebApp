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

const { width: screenWidth } = Dimensions.get('window');

const BlogTW = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                {/* content */}
                <View className='rounded-lg border border-black border-solid mx-4 my-4'>
                    <TextInput placeholder='Bạn có đang ở đây không...' />
                </View>

                <View className='flex-1 w-full h-30'>
                    <ScrollView
                        horizontal
                        className='w-auto'
                    >
                        <View className='relative m-4'>
                            <Image
                                key={'0'}
                                source={require('../assets/images/slider/1.jpg')}
                                resizeMode='cover'
                                className='rounded-lg w-36 h-64 '
                            />
                            <View className='absolute inset-0 flex justify-center items-center'>
                                <AntDesign
                                    name="pluscircleo"
                                    size={50}
                                    color='#fff'
                                />
                            </View>
                            {/* <Text style={styles.createNews}>Tạo Tin</Text> */}
                        </View>
                        <View className='relative m-4'>
                            <Image
                                key={'0'}
                                source={require('../assets/images/slider/1.jpg')}
                                resizeMode='cover'
                                className='rounded-lg w-36 h-64 '
                            />
                            <View className='absolute inset-0 flex justify-center items-center'>
                                <AntDesign
                                    name="pluscircleo"
                                    size={50}
                                    color='#fff'
                                />
                            </View>
                            {/* <Text style={styles.createNews}>Tạo Tin</Text> */}
                        </View>
                        <View className='relative m-4'>
                            <Image
                                key={'0'}
                                source={require('../assets/images/slider/1.jpg')}
                                resizeMode='cover'
                                className='rounded-lg w-36 h-64 '
                            />
                            <View className='absolute inset-0 flex justify-center items-center'>
                                <AntDesign
                                    name="pluscircleo"
                                    size={50}
                                    color='#fff'
                                />
                            </View>
                            {/* <Text style={styles.createNews}>Tạo Tin</Text> */}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BlogTW