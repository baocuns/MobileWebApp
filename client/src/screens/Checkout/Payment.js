import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';
const URL_TRAVEL = 'https://api.travels.games'

const Payment = ({ route }) => {
    const { uri, oid } = route.params
    const navigation = useNavigation()
    const user = useSelector(state => state.auth.login.currentUser);
    const [objTimeout, setObjTimeout] = useState({ count: 0 })
    var isgoback = false

    useEffect(() => {
        handleTimeoutPayment()
        // event go back
        navigation.addListener('beforeRemove', () => {
            console.log('go back');
            isgoback = true
        })
    }, [])

    const handleTimeoutPayment = () => {
        const idTimeout = setTimeout(() => {
            // console.log('Time out count: ', objTimeout.count);
            // console.log('idTimeout: ', idTimeout);
            setObjTimeout({
                count: objTimeout.count++,
            })

            if (objTimeout.count > 250) {
                ToastAndroid.show("Bạn khôn thanh toán quá lâu !", ToastAndroid.SHORT);
                clearTimeout(idTimeout)
                navigation.goBack()
                return
            }

            axios.post(`https://api.travels.games/api/v1/order/show/one/${oid}`, { id: 1 }, {
                headers: {
                    "token": `Travel ${user?.accessToken}`,
                    "_id": user?._id,
                }
            })
                .then(res => {
                    // console.log('res.data', res.data);
                    if (res.data?.data[0]?.statusCode === '-1') {
                        // console.log('statusCode: ', res.data?.data[0]?.statusCode);
                        // console.log('isgoback: ', isgoback);
                        if (!isgoback) {
                            clearTimeout(idTimeout)
                            setTimeout(handleTimeoutPayment, 3000);
                        }
                    } else {
                        clearTimeout(idTimeout)
                        navigation.goBack()
                    }
                })
                .catch(err => {
                    if (!isgoback) {
                        clearTimeout(idTimeout)
                        setTimeout(handleTimeoutPayment, 3000);
                    }
                })
        }, 3000);
    }

    return (
        <WebView source={{ uri: uri }} />
    )
}

export default Payment