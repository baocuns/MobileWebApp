import React, { useState, useEffect, useRef } from 'react'
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    Text,
    TextInput,
    ScrollView,
    Alert,
    Modal,
    Pressable
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const { width: screenWidth } = Dimensions.get('window');

const User = {
    name: 'Nguyễn văn Bảo',
    image: require('../assets/images/slider/2.jpg')
}

const Blog = () => {
    const [imagelist, setImagelist] = useState([])
    const [status, setStatus] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        // 1.Load data from server
        const data = [
            {
                image: <View style={{ position: 'relative' }}><Image style={styles.imageSlideContainer} key={'1'} source={require('../assets/images/slider/1.jpg')} resizeMode='cover'></Image><Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff' }}>Cuns</Text></View>,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <View style={{ position: 'relative' }}><Image style={styles.imageSlideContainer} key={'2'} source={require('../assets/images/slider/2.jpg')} resizeMode='cover'></Image><Text style={{ position: 'absolute', left: 20, bottom: 10, color: '#fff' }}>Khánh</Text></View>,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'3'} source={require('../assets/images/slider/3.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'4'} source={require('../assets/images/slider/4.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'5'} source={require('../assets/images/slider/5.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'6'} source={require('../assets/images/slider/6.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'7'} source={require('../assets/images/slider/7.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'8'} source={require('../assets/images/slider/8.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'9'} source={require('../assets/images/slider/9.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'10'} source={require('../assets/images/slider/10.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'11'} source={require('../assets/images/slider/11.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'12'} source={require('../assets/images/slider/12.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'13'} source={require('../assets/images/slider/13.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
            {
                image: <Image style={styles.imageSlideContainer} key={'14'} source={require('../assets/images/slider/14.jpg')} resizeMode='cover' />,
                type: "jpg",
                camera: "Sony"
            },
        ]
        const state = [
            {
                id: 1,
                user: User,
                time: '10/10/2022',
                address: 'Đà Nẵng',
                content: 'Đẹp trai nhất thế giới',
                image: require('../assets/images/slider/1.jpg')
            }, {
                id: 2,
                user: User,
                time: '10/10/2022',
                address: 'Đà Nẵng',
                content: 'VIẾT CHO ĐÀN ÔNG CHƯA "KHÁ" (Cảnh báo: bài viết hơi phũ, nhưng thực tế) Thử làm một bài toán chi tiêu mà ',
                image: require('../assets/images/slider/2.jpg')
            }, {
                id: 3,
                user: User,
                time: '10/10/2022',
                address: 'Đà Nẵng',
                content: 'VIẾT CHO ĐÀN ÔNG CHƯA "KHÁ" (Cảnh báo: bài viết hơi phũ, nhưng thực tế) Thử làm một bài toán chi tiêu mà hầu hết đàn ông đều phải trải qua mỗi ngày: 1: Ăn sáng (cà phê, thuốc lá): 30k/ngày * 30 ngày = 900k',
                image: require('../assets/images/slider/3.jpg')
            }, {
                id: 4,
                user: User,
                time: '10/10/2022',
                address: 'Đà Nẵng',
                content: 'VIẾT CHO ĐÀN ÔNG CHƯA "KHÁ" (Cảnh báo: bài viết hơi phũ, nhưng thực tế) Thử làm một bài toán chi tiêu mà hầu hết đàn ông đều phải trải qua mỗi ngày: 1: Ăn sáng (cà phê, thuốc lá): 30k/ngày * 30 ngày = 900k',
                image: require('../assets/images/slider/4.jpg')
            }, {
                id: 5,
                user: User,
                time: '10/10/2022',
                address: 'Đà Nẵng',
                content: 'Đẹp trai nhất thế giới',
                image: require('../assets/images/slider/5.jpg')
            },
        ]
        // 2.Cap nhat data
        setImagelist(data)
        setStatus(state)
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ width: '100%' }}>
                {/* modal comment */}
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            // Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredViewComment}>
                            <Pressable style={{
                                position: 'absolute',
                                top: -50,
                                left: 0,
                                height: '40%',
                                width: '100%'
                            }}
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                            {/* List comment */}
                            <View style={styles.modalViewComment}>
                                <View style={{
                                    alignItems: 'center'
                                }}>
                                    <Text>Comment</Text>
                                </View>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        height: 45,
                                        width: 45,
                                        backgroundColor: '#333',
                                        borderRadius: 50
                                    }}></View>
                                    <View style={{
                                        marginStart: 10
                                    }}>
                                        <Text>Nguyễn Văn Bảo</Text>
                                        <Text>Đẹp trai nhất thế giới, hehe :)</Text>
                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <Text>5 giờ trước</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>

                {/* content */}
                <View style={styles.ViewStatus}>
                    <TextInput style={styles.blogTextInputStatus} placeholder='Bạn có đang ở đây không...' />
                </View>
                {/* ScrollView */}
                <View style={{ width: screenWidth, height: 220 }} >
                    <ScrollView
                        horizontal
                        contentContainerStyle={{ width: (screenWidth / 3 + 20) * imagelist.length, height: '100%' }}
                    >
                        <View style={{ position: 'relative' }}>
                            <Image
                                key={'0'}
                                style={styles.imageSlideContainer}
                                source={require('../assets/images/slider/1.jpg')}
                                resizeMode='cover' />
                            <View style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <AntDesign
                                    name="pluscircleo"
                                    size={50}
                                    color='#fff'
                                />
                            </View>
                            {/* <Text style={styles.createNews}>Tạo Tin</Text> */}
                        </View>

                        {/* List news */}
                        {imagelist.map(image => image.image)}
                    </ScrollView>
                </View>

                {/* List status */}
                {status.map((item, index) => (
                    <View style={{ position: 'relative' }}>
                        {/* phan cach */}
                        <View style={{
                            width: '100%',
                            height: 10,
                            backgroundColor: '#ced0d3',
                            marginTop: 10,
                            marginBottom: 10
                        }}></View>
                        {/* user */}
                        <View style={{
                            width: '100%',
                            height: 50
                        }}>
                            <View style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                            }}>
                                <View style={{
                                    height: 45,
                                    width: 45,
                                    marginLeft: 15
                                }}>
                                    <Image
                                        style={{
                                            borderRadius: 50,
                                            height: '100%',
                                            width: '100%'
                                        }}
                                        source={item.user.image}
                                        resizeMode='cover'>
                                    </Image>
                                </View>
                                <View style={{
                                    marginLeft: 10
                                }} >
                                    <Text>{item.user.name} đang ở {item.address}</Text>
                                    <Text>{item.time}</Text>
                                </View>
                            </View>
                        </View>
                        {/* content */}
                        <View style={{
                            paddingStart: 15,
                            paddingEnd: 15,
                            paddingTop: 5,
                            paddingBottom: 10
                        }}>
                            <Text>
                                {item.content}
                            </Text>
                        </View>
                        {/* status image */}
                        <View>
                            <Image
                                key={index}
                                style={{
                                    width: '100%',
                                    height: 300,
                                }}
                                source={item.image}
                                resizeMode='cover'
                            />
                        </View>
                        {/* bootom status */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: 15
                            }}
                        >
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Ionicons
                                    name="md-heart"
                                    size={20}
                                    color='red'
                                />
                                <Text>123</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text>50 Bình luận</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text>123 Chia sẻ</Text>
                            </View>
                        </View>

                        {/* Button */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            height: 50,
                            borderTopWidth: 1,
                            borderStyle: 'solid',
                            borderTopColor: '#ced0d3',
                            marginStart: 15,
                            marginEnd: 15,
                            paddingTop: 15
                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <EvilIcons
                                    name="like"
                                    size={30}
                                    color='red' />
                                <Text>Yêu thích</Text>
                            </View>
                            <Pressable style={{
                                flexDirection: 'row'
                            }}
                                onPress={() => setModalVisible(true)}
                            >
                                <EvilIcons
                                    name="comment"
                                    size={30}
                                    color='red' />
                                <Text>Bình luận</Text>
                            </Pressable>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <EvilIcons
                                    name="share-google"
                                    size={30}
                                    color='red'
                                />
                                <Text>Chia sẻ</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ViewStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: '100%'
    },
    blogTextInputStatus: {
        color: '#000',
        paddingLeft: 10,
        borderRadius: 10,
        borderColor: '#333333',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '90%',
        height: 40,
        backgroundColor: '#fff',
        fontWeight: '600'
    },
    imageSlideContainer: {
        width: screenWidth / 3,
        height: '100%',
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10
    },
    createNews: {
        position: 'absolute',
        left: '35%',
        bottom: 10,
        color: '#fff',
    },
    centeredViewComment: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22
    },
    modalViewComment: {
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        alignItems: "center",
        width: '100%',
        height: '60%',
        marginBottom: 50
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default Blog