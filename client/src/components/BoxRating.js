import React, { useRef } from "react";
import { View, Button, Dimensions, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Rating from "./Rating";

const { width, height } = Dimensions.get("window");

export default function BoxRating() {
    const refRBSheet = useRef();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "#000"
            }}
        >
            <TouchableOpacity
                onPress={() => refRBSheet.current.open()}
                style={{ borderWidth: 1, width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 8, paddingVertical: 10 }}
            >
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Đọc tất cả đánh giá</Text>
            </TouchableOpacity>
            <RBSheet
                ref={refRBSheet}
                height={height * 0.8}
                closeOnDragDown={false}
                closeOnPressMask={true}
                dragFromTopOnly={true}
                animationType="slide"
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#DCDCDC', paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, color: '#000' }}>
                        Đánh giá
                    </Text>
                </View>
                {/* Tổng số sao */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 26 }}>4.6</Text>
                    <Text>/5</Text>
                    <View>
                        <Rating />
                    </View>
                    <Text style={{ fontSize: 13, marginLeft: 10 }}>266 đánh giá</Text>
                </View>
                <ScrollView style={{ marginHorizontal: 10 }}>
                    {/* Rating của người dùng */}
                    <View style={{ width: width - 100, marginRight: 20, borderWidth: 1, borderRadius: 10, borderColor: '#DCDCDC', marginVertical: 20 }}>
                        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../assets/images/slider/6.jpg')} style={{ height: 40, width: 40, borderRadius: 50, aspectRatio: 1 }} />
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 10 }}>Bùi Duy Khánh</Text>
                                    <Rating />
                                </View>
                            </View>
                            <Text>3 ngày trước</Text>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ color: '#000' }}>
                                Không gian tuyệt vời, có điều đồ ăn hơi ít, đi ăn về vẫn đói bụng 😂
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: width - 100, marginRight: 20, borderWidth: 1, borderRadius: 10, borderColor: '#DCDCDC', marginVertical: 20 }}>
                        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../assets/images/slider/11.jpg')} style={{ height: 40, width: 40, borderRadius: 50, aspectRatio: 1 }} />
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 10 }}>Nguyễn Văn Bảo</Text>
                                    <Rating />
                                </View>
                            </View>
                            <Text>3 ngày trước</Text>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ color: '#000' }}>
                                Ở đây ko ai đẹp trai bằng mình cả 😂
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: width - 100, marginRight: 20, borderWidth: 1, borderRadius: 10, borderColor: '#DCDCDC', marginVertical: 20 }}>
                        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../assets/images/slider/3.jpg')} style={{ height: 40, width: 40, borderRadius: 50, aspectRatio: 1 }} />
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 10 }}>Trần Văn Khiêm</Text>
                                    <Rating />
                                </View>
                            </View>
                            <Text>3 ngày trước</Text>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ color: '#000' }}>
                                Đồ ăn rất ngon, phục vụ nhiệt tình, rất thích hợp cho những ai đi cùng bạn bè có trải nghiệm mới lạ trên sông Sài Gòn 😂
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: width - 100, marginRight: 20, borderWidth: 1, borderRadius: 10, borderColor: '#DCDCDC', marginVertical: 20 }}>
                        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../assets/images/slider/3.jpg')} style={{ height: 40, width: 40, borderRadius: 50, aspectRatio: 1 }} />
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 10 }}>Trần Văn Khiêm</Text>
                                    <Rating />
                                </View>
                            </View>
                            <Text>3 ngày trước</Text>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ color: '#000' }}>
                                Đồ ăn rất ngon, phục vụ nhiệt tình, rất thích hợp cho những ai đi cùng bạn bè có trải nghiệm mới lạ trên sông Sài Gòn 😂
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: width - 100, marginRight: 20, borderWidth: 1, borderRadius: 10, borderColor: '#DCDCDC', marginVertical: 20 }}>
                        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../assets/images/slider/3.jpg')} style={{ height: 40, width: 40, borderRadius: 50, aspectRatio: 1 }} />
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 10 }}>Trần Văn Khiêm</Text>
                                    <Rating />
                                </View>
                            </View>
                            <Text>3 ngày trước</Text>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ color: '#000' }}>
                                Đồ ăn rất ngon, phục vụ nhiệt tình, rất thích hợp cho những ai đi cùng bạn bè có trải nghiệm mới lạ trên sông Sài Gòn 😂
                            </Text>
                        </View>
                    </View>
                </ScrollView>

            </RBSheet>
        </View>
    );
}