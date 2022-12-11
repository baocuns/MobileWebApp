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
    Pressable,
    RefreshControl
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import Header from './Header';
import Posts from './Posts';
import { useSelector } from 'react-redux';

// bottom sheet ----------------------------------------------------------
import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Button } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import Comments from './Comments';
import News from './News';


const Blog = () => {
    const user = useSelector(state => state.auth.login.currentUser);
    const [postsId, setPostsId] = useState()
    const handleComments = (pid) => {
        handlePresentModalPress()
        setPostsId(pid)
    }

    // bottom sheet ----------------------------------------------------------
    // ref
    const bottomSheetModalRef = useRef(null);
    // variables
    // const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], []);
    const snapPoints = useMemo(() => ['100%'], []);
    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    // posts on refreshing
    const [refreshing, setRefreshing] = useState(false);
    const handleRefreshPosts = (refresh) => {
        setRefreshing(refresh)
    }
    const onRefresh = () => {
        setRefreshing(true)
    }

    return (
        <BottomSheetModalProvider>
            <View>
                <SafeAreaView>
                    <ScrollView
                        className='bg-white'
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        {/* header */}
                        <View className='bg-gray-200'>
                            <Header
                                user={user}
                            />
                        </View>
                        {/* phan cach */}
                        <View className='w-full h-2.5 bg-slate-300 my-1' />
                        {/* news */}
                        <View className='flex-1 w-full h-30'>
                            <News
                                isRefresh={refreshing}
                            />
                        </View>
                        {/* phan cach */}
                        <View className='w-full h-2.5 bg-slate-300 my-1' />
                        {/* post */}
                        <View>
                            <Posts
                                user={user}
                                handleComments={handleComments}
                                isRefresh={refreshing}
                                handleRefresh={handleRefreshPosts}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>

                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                    <View >
                        {/* comment */}
                        <Comments
                            object_id={postsId}
                            user={user}
                        />
                    </View>
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    )
}

export default Blog