import { useTheme } from "@react-navigation/native";
import React, { useRef } from "react";
import { View, Button, Dimensions, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import FastImage from "react-native-fast-image";
import RBSheet from "react-native-raw-bottom-sheet";
import i18n from "../i18n";
import Rating from "./Rating";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const { width, height } = Dimensions.get("window");

export default function BoxRating({ ratings }) {
    const refRBSheet = useRef();
    const { colors } = useTheme();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TouchableOpacity
                onPress={() => refRBSheet.current.open()}
                style={{ borderWidth: 1, width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 8, paddingVertical: 10, borderColor: colors.text }}
            >
                <Text style={{ color: colors.text, fontWeight: 'bold' }}>{i18n.t('read_all_rating')}</Text>
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
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 26 }}>{ratings.avg}</Text>
                    <Text>/5</Text>
                    <View style={{ position: 'relative' }}>
                        <Rating starSize={20} numberStar={ratings.avg} />
                        <View style={{ position: 'absolute', backgroundColor: 'transparent', top: 0, left: 0, right: 0, bottom: 0 }}></View>
                    </View>
                    <Text style={{ fontSize: 13, marginLeft: 10 }}>266 đánh giá</Text>
                </View>
                <ScrollView style={{ marginHorizontal: 10 }}>
                    {/* Rating của người dùng */}
                    <View style={{ alignItems: 'center' }}>
                        {ratings.ratings.map((rating, index) => {
                            let milisecond = ((new Date()).getTime()) - (new Date(rating.updatedAt).getTime());

                            return (
                                <View style={{ width: width - 60, borderWidth: 1, borderRadius: 10, borderColor: '#DCDCDC', marginVertical: 8 }}>
                                    <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <FastImage source={{ uri: rating.profile[0].images[0] }} style={{ height: 40, width: 40, borderRadius: 50, aspectRatio: 1 }} />
                                            <View>
                                                <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 10 }}>
                                                    {rating.profile[0].fullname}
                                                </Text>
                                                <View style={{ position: 'relative' }}>
                                                    <Rating starSize={20} numberStar={rating.rate} />
                                                    <View style={{ position: 'absolute', backgroundColor: 'transparent', top: 0, left: 0, right: 0, bottom: 0 }}></View>
                                                </View>
                                            </View>
                                        </View>
                                        <Text style={{ color: '#000' }}>{timeAgo.format(Date.now() - milisecond, 'round')}</Text>
                                    </View>
                                    <View style={{ margin: 10 }}>
                                        <Text style={{ color: '#000' }}>
                                            {rating.content}
                                        </Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>

                </ScrollView>

            </RBSheet>
        </View>
    );
}