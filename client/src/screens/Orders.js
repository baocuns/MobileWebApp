import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
// import moment from 'moment';

const Orders = ({navigation, route}) => {
  const [profile, setProfile] = useState(route.params.profile);
  const user = useSelector(state => state.auth.login.currentUser);
  const dispatch = useDispatch();
  // thông tin người dùng
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  //Thông tin đơn hàng
  const [date, setDate] = useState('');
  const [info, setInfo] = useState('');
  const [status, setStatus] = useState('');
  const [items, setItems] = useState('');
  const [amount, setAmount] = useState('');

  const allOrders = () => {
    const data = {
      fullname: fullname,
      email: email,
      phone: phone,
      address: address,
      date: date,
      info: info,
      status: status,
      items: items,
      amount: amount,
    };
    fetch('https://api.travels.games/api/v1/order/show/all', {
      method: 'post',
      body: data,
      headers: {
        token: `Travel ${user?.accessToken}`,
        _id: user?._id,
      },
    })
      .then(res => {
        console.log('res.data.data', res);
        navigation.goBack();
      })
      .catch(err => {
        console.log('err.response.data', err);
      });
  };

  return (
    <ScrollView>
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
            Oders
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              borderWidth: 2,
              margin: 5,
              borderRadius: 10,
              borderColor: 'gray',
            }}>
            {/* thông tin người dùng */}
            <View
              style={{
                padding: 5,
              }}>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'black',
                  }}>
                  Thông tin người dùng
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
                  Họ & Tên:
                </Text>
                <Text
                  value={user ? user.fullname : fullname}
                  // value={profile?.email}
                  onChangeText={fullname => setFullname(fullname)}>
                  {' '}
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
                  Email:
                </Text>
                <Text
                  style={{
                    color: 'black',
                  }}
                  value={user ? user.email : email}
                  // value={user?.email}
                  onChangeText={email => setEmail(email)}>
                  {' '}
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
                  Số điện thoại:
                </Text>
                <Text
                  value={user ? user.phone : phone}
                  // value={profile?.email}
                  onChangeText={phone => setPhone(phone)}
                />
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
                  Địa chỉ:
                </Text>
                <Text
                  value={user ? user.address : address}
                  // value={user?.email}
                  onChangeText={address => setAddress(address)}
                />
              </View>
            </View>
            {/* Thông tin đơn hàng */}
            <View
              style={{
                padding: 5,
              }}>
              <View>
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
                  <Text> {''}12/7/2022, 2:56:43 PM</Text>
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
                  <Text> {''}Thanh toán dịch vụ của BKK Travel ipn</Text>
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
                    style={{
                      color: 'green',
                    }}>
                    {''} Success
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
                  <Text> {''}1</Text>
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
                    Tổng số tiền:
                  </Text>
                  <Text />
                </View>
              </View>
            </View>
            {/* Button Detail */}
            <View
              style={{
                padding: 5,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'blue',
                  }}>
                  Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Orders;
