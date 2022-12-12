import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

const Order = () => {
  return (
    <ScrollView>
      <View>
        {/* thông tin người dùng */}
        <View
          style={{
            borderWidth: 1,
            margin: 5,
            borderRadius: 5,
            borderColor: 'gray',
          }}>
          <View
            style={{
              paddingLeft: 10,
              paddingTop: 10,
              paddingRight: 10,
              paddingBottom: 30,
            }}>
            <View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  Thông tin người dùng
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                    }}
                    source={require('../assets/images/cotham.jpg')}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    paddingLeft: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 15,
                        }}>
                        Họ & tên:
                      </Text>
                    </View>
                    <View>
                      <Text> {''}Travel Super</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 15,
                        }}>
                        Email:
                      </Text>
                    </View>
                    <View>
                      <Text> {''}baonguyen2001@gmail.com</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 15,
                        }}>
                        Số điện thoại:
                      </Text>
                    </View>
                    <View>
                      <Text> {''}032045789</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                        }}>
                        Địa chỉ:
                      </Text>
                    </View>
                    <View>
                      <Text> {''}TP. Hồ Chí Minh</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                paddingTop: 10,
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  Thông tin đơn hàng
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 10,
                }}>
                <View>
                  <Text>Mô tả:</Text>
                  <Text>Trạng thái:</Text>
                  <Text>Tổng số sản phẩm:</Text>
                  <Text>Tổng số tiền:</Text>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                  }}>
                  <Text> Thanh toán dịch vụ của BKK Travel</Text>
                  <Text>Success</Text>
                  <Text>1</Text>
                  <Text>2.000.000 VND</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            margin: 5,
          }}>
          <View
            style={{
              paddingTop: 10,
              borderBottomWidth: 1,
            }}>
            <View>
              <View>
                <View style={{}}>
                  <View
                    style={{
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                      }}
                      source={require('../assets/images/cotham.jpg')}
                    />
                  </View>
                </View>

                <View
                  style={{
                    paddingTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                    }}>
                    Khu di tích lịch sử Vàm Nhựt Tảo Bảo đẹp trai
                  </Text>
                  <Text>
                    Đây là nơi giao giữa sông Vàm Cỏ Đông và sông Nhựt Tảo. Vàm
                    Nhựt Tảo thuộc xã An Nhựt Tân, huyện Tân Trụ. Vào ngày
                    10/12/1861, dưới sự chỉ huy của người anh hùng dân tộc
                    Nguyễ...
                  </Text>
                  <Text>Thành phố Hồ Chí Minh -> Thành phố Hồ Chí Minh</Text>
                  <Text
                    style={{
                      color: 'black',
                      textDecorationLine: 'line-through',
                    }}>
                    2.500.000 VND
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    2.500.000 VND
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: 10,
              borderBottomWidth: 1,
            }}>
            <View>
              <View>
                <View style={{}}>
                  <View
                    style={{
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                      }}
                      source={require('../assets/images/cotham.jpg')}
                    />
                  </View>
                </View>

                <View
                  style={{
                    paddingTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                    }}>
                    Khu di tích lịch sử Vàm Nhựt Tảo Bảo đẹp trai
                  </Text>
                  <Text>
                    Đây là nơi giao giữa sông Vàm Cỏ Đông và sông Nhựt Tảo. Vàm
                    Nhựt Tảo thuộc xã An Nhựt Tân, huyện Tân Trụ. Vào ngày
                    10/12/1861, dưới sự chỉ huy của người anh hùng dân tộc
                    Nguyễ...
                  </Text>
                  <Text>Thành phố Hồ Chí Minh -> Thành phố Hồ Chí Minh</Text>
                  <Text
                    style={{
                      color: 'black',
                      textDecorationLine: 'line-through',
                    }}>
                    2.500.000 VND
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    2.500.000 VND
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Order;
