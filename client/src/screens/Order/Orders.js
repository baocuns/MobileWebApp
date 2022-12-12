import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import BackArrow from '../../components/BackArrow';
import {ScrollView} from 'native-base';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const Orders = () => {
  const user = useSelector(state => state.auth.login.currentUser);
  const navigation = useNavigation();
  const [orders, setorders] = useState();
  const handleDetails = oid => {
    navigation.navigate('Order', {oid: oid});
  };

  useEffect(() => {
    axios
      .post(
        'https://api.travels.games/api/v1/order/show/all',
        {id: 1},
        {
          headers: {
            token: `Travel ${user?.accessToken}`,
            _id: user?._id,
          },
        },
      )
      .then(res => {
        console.log(res.data.data);
        setorders(res.data.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  return (
    <View>
      {/* go back */}
      <BackArrow name={'ĐƠN HÀNG'} className="h-[10%]" />
      <ScrollView className="h-[90%]">
        <View style={{}}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 40,
              }}>
              Orders
            </Text>
          </View>

          <View className="p-2">
            {/* Thông tin đơn hàng */}
            {orders &&
              orders.map((order, index) => (
                <TouchableOpacity onPress={() => handleDetails(order._id)}>
                  <View className="p-2 border rounded m-2">
                    <View>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                          color: 'black',
                        }}>
                        Thông tin đơn hàng
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                        }}>
                        Date :
                      </Text>
                      <Text className="mx-2">
                        {moment(order.createdAt).format('DD-MM-yyyy')}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                        }}>
                        Mô tả:
                      </Text>
                      <Text className="mx-2">{order.info}</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                        }}>
                        Trạng thái:
                      </Text>
                      <Text
                        className={
                          order.statusCode === '00'
                            ? 'text-green-600 mx-2'
                            : 'text-red-600 mx-2'
                        }>
                        {order.status}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                        }}>
                        Tổng số sản phẩm:
                      </Text>
                      <Text className="mx-2">{order.items.length}</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                        }}>
                        Tổng số tiền: {order.amount} d
                      </Text>
                      <Text />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Orders;
