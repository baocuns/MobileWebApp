import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import BackArrow from '../../components/BackArrow';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
const Details = ({route}) => {
  const user = useSelector(state => state.auth.login.currentUser);
  const {oid} = route.params;
  const [details, setDetails] = useState();

  useEffect(() => {
    axios
      .post(
        `https://api.travels.games/api/v1/order/show/one/${oid}`,
        {id: 1},
        {
          headers: {
            token: `Travel ${user?.accessToken}`,
            _id: user?._id,
          },
        },
      )
      .then(res => {
        setDetails(res.data.data[0]);
        console.log(res.data.data[0]);
        // console.log(res.user[0]);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  return (
    <View>
      <BackArrow name={'CHI TIẾT ĐƠN HÀNG'} className="h-[10%]" />
      {details && (
        <ScrollView className="h-[90%]">
          <View>
            <View
              style={{
                borderWidth: 1,
                padding: 5,
                margin: 10,
                borderRadius: 10,
              }}>
              <View style={{}}>
                <FastImage
                  source={{
                    uri: `https://api.travels.games/api/v1/views/show/photos/${details.user[0].images[0]}`,
                  }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    borderWidth: 1,
                  }}
                  resizeMode="cover"
                />
                {/* <Image
                source={{uri: details.user[0].images[0]}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                resizeMode="cover"
              /> */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{}}>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    fullname:
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    email:
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    phone:
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    address:
                  </Text>
                </View>
                <View>
                  <Text>{details.user[0].fullname}</Text>
                  <Text>{details.user[0].email}</Text>
                  <Text>{details.user[0].phone}</Text>
                  <Text>{details.user[0].address}</Text>
                </View>
              </View>
            </View>
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
                  {moment(details.createdAt).format('DD-MM-yyyy')}
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
                <Text className="mx-2">{details.info}</Text>
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
                    details.statusCode === '00'
                      ? 'text-green-600 mx-2'
                      : 'text-red-600 mx-2'
                  }>
                  {details.status}
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
                <Text className="mx-2">{details.items.length}</Text>
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
                  Tổng số tiền: {details.amount} d
                </Text>
                <Text />
              </View>
            </View>
            {/* tours */}

            {details.tours &&
              details.tours.map(tour => (
                <View>
                  <View
                    style={{
                      borderWidth: 1,
                      padding: 5,
                      margin: 10,
                      borderRadius: 10,
                    }}>
                    <Image
                      source={{
                        uri: `https://api.travels.games/api/v1/views/show/photos/${tour.images[0]}`,
                      }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        borderWidth: 1,
                      }}
                      resizeMode="cover"
                    />

                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View>
                        <Text>{tour.title}</Text>
                        {/* <Text>{details.tours[0].price}</Text> */}
                        <Text>{tour.sale}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Details;
