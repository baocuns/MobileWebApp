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
    const [countLike, setCountLike] = useState(0)
    const [countComment, setCountComment] = useState(0)
    const [countShare, setCountShare] = useState(0)

    // load start
    useEffect(() => {
        // list data
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
                image: require('../assets/images/slider/1.jpg'),
                like: 1345,
                comment: 35,
                comment_data: 'ID_Comment_Data',
                share: 8
            }, {
                id: 2,
                user: User,
                time: '10/10/2022',
                address: 'Đà Nẵng',
                content: 'Đẹp trai nhất thế giới',
                image: require('../assets/images/slider/1.jpg'),
                like: 1345,
                comment: 35,
                comment_data: 'ID_Comment_Data',
                share: 8
            }, {
                id: 3,
                user: User,
                time: '10/10/2022',
                address: 'Đà Nẵng',
                content: 'Đẹp trai nhất thế giới',
                image: require('../assets/images/slider/1.jpg'),
                like: 1345,
                comment: 35,
                comment_data: 'ID_Comment_Data',
                share: 8
            }, {
                id: 4,
                user: User,
                time: '10/10/2022',
                address: 'Đà Nẵng',
                content: 'Đẹp trai nhất thế giới',
                image: require('../assets/images/slider/1.jpg'),
                like: 1345,
                comment: 35,
                comment_data: 'ID_Comment_Data',
                share: 8
            }, {
                id: 5,
                user: User,
                time: '10/10/2022',
                address: 'Đà Nẵng',
                content: 'Đẹp trai nhất thế giới',
                image: require('../assets/images/slider/1.jpg'),
                like: 1345,
                comment: 35,
                comment_data: 'ID_Comment_Data',
                share: 8
            },
        ]
        setImagelist(data)
        setStatus(state)
    }, []);

    const handleLike = (id) => {
        // setStatus(status.find(item => item.id === id).like++)
        console.log(id);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
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
                                height: '30%',
                                width: '100%'
                            }}
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                            {/* List comment */}
                            <View style={styles.modalViewComment}>
                                <View style={{
                                    marginBottom: 20
                                }}>
                                    <Text>Bình luận</Text>
                                </View>
                                <ScrollView>
                                    {imagelist.map((item, index) => (
                                        <View key={index}>
                                            < View style={{
                                                flexDirection: 'row',
                                                marginBottom: 5
                                            }}>
                                                <View>
                                                    <Image style={{
                                                        height: 40,
                                                        width: 40,
                                                        borderRadius: 50
                                                    }}
                                                        source={require('../assets/images/avatar.jpg')}
                                                        resizeMode='cover' />
                                                </View>
                                                <View style={{
                                                    marginStart: 10
                                                }}>
                                                    <View>
                                                        <Text style={{
                                                            fontWeight: 'bold'
                                                        }}>Nguyễn Văn Bảo</Text>
                                                        <Text>5 giờ trước</Text>
                                                    </View>
                                                    <View style={{
                                                        width: '90%',
                                                        marginTop: 5
                                                    }}>
                                                        <Text style={{
                                                            textAlign: 'justify'
                                                        }}>Both And and iOS allow you to display formatted text by annot ran of a string with specific formatting like bold or colored text (NSAttributedString on iOS, Spannab leString on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.</Text>
                                                    </View>
                                                    <View style={{
                                                        width: '90%',
                                                        flexDirection: 'row',
                                                        justifyContent: 'flex-end'
                                                    }}>
                                                        <AntDesign
                                                            name='edit'
                                                            size={18}
                                                            color='red'
                                                        />
                                                        <Text> Phản hồi</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            {/* Phản hồi */}
                                            < View style={{
                                                flexDirection: 'row',
                                                marginStart: 50,
                                                marginBottom: 15
                                            }}>
                                                <View>
                                                    <Image style={{
                                                        height: 40,
                                                        width: 40,
                                                        borderRadius: 50
                                                    }}
                                                        source={require('../assets/images/avatar.jpg')}
                                                        resizeMode='cover' />
                                                </View>
                                                <View style={{
                                                    marginStart: 10
                                                }}>
                                                    <View>
                                                        <View style={{
                                                            flexDirection: 'row'
                                                        }}>
                                                            <Text style={{
                                                                fontWeight: 'bold'
                                                            }}>Bùi Duy Khánh</Text>
                                                            <AntDesign
                                                                name='right'
                                                                size={18}
                                                                color='red'
                                                            />
                                                            <Text style={{
                                                                fontWeight: 'bold'
                                                            }}>Nguyễn Văn Bảo</Text>
                                                        </View>
                                                        <Text>2 giờ trước</Text>
                                                    </View>
                                                    <View style={{
                                                        width: '90%',
                                                        marginTop: 5
                                                    }}>
                                                        <Text style={{
                                                            textAlign: 'justify'
                                                        }}>Both And and iOS allow you to display formatted text by annot ran of a string with specific formatting like bold or colored text</Text>
                                                    </View>
                                                    <View style={{
                                                        width: '90%',
                                                        flexDirection: 'row',
                                                        justifyContent: 'flex-end'
                                                    }}>
                                                        <AntDesign
                                                            name='edit'
                                                            size={18}
                                                            color='red'
                                                        />
                                                        <Text> Phản hồi</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    ))}
                                </ScrollView>
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
                    <View style={{ position: 'relative' }} key={index}>
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
                                <Text>{item.like}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text>{item.comment} Bình luận</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text>{item.share} Chia sẻ</Text>
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
                            <Pressable style={{
                                flexDirection: 'row'
                            }}
                                onPress={() => handleLike(item.id)}
                            >
                                <EvilIcons
                                    name="like"
                                    size={30}
                                    color='red' />
                                <Text>Yêu thích</Text>
                            </Pressable>
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
        alignItems: "center"
    },
    modalViewComment: {
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        alignItems: "center",
        width: '100%',
        height: '70%',
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
