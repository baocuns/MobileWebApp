import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const bookNow = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          paddingLeft: 20,
          backgroundColor: '#FFFFFF',
          paddingBottom: 10
        }}>
        <View
          style={{
            justifyContent: 'center',
            paddingRight: 20,
          }}>
          <Icon
            style={{
              fontSize: 20,
              color: 'black',
            }}
            name="chevron-left"
          />
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Hoàn tất đơn hàng
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            paddingLeft: '30%',
          }}>
          <Icon
            style={{
              fontSize: 25,
              color: 'black',
            }}
            name="question-circle-o"
          />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 0.8,
          }}>
          <View
            style={{
              padding: 20,
              paddingTop: 30,
              paddingBottom: 35,
              backgroundColor: 'white',
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 15,
                  paddingBottom: 10,
                }}>
                [Lối Đi Riêng] Vé Cáp Treo Trong Ping 360 Giảm 50%
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  paddingBottom: 10,
                }}>
                Advande - Round Trip - Standard - JoyYou Card holder or Senior
                Citizen
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                1 x Senior(65+)
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  paddingBottom: 10,
                }}>
                30/9/2022
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  paddingBottom: 10,
                }}>
                ₫ 99.99
              </Text>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  Ngày tham gia dự kiến
                </Text>
              </View>
              <View>
                <Icon></Icon>
              </View>
            </View>
            <View
              style={{
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Ngày{' '}
                <Text
                  style={{
                    color: 'orange',
                  }}>
                  *
                </Text>
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  30/9/2022
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'gray',
                  }}>
                  <Icon name="chevron-down" />
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingTop: 20,
              }}>
              <View
                style={{
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 10,
              paddingTop: 10,
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    paddingLeft: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'orange',
                      height: 20,
                      width: 5,
                      borderRadius: 50,
                      marginRight: 15,
                    }}></View>
                </View>
                {/* Thông Tin liên lạc */}
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}>
                    Thông tin liên lạc:
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingLeft: 30,
                  paddingRight: 25,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    fontWeight: 'bold',
                  }}>
                  chúng tôi thông báo mọi người thay đổi về đơn hàng cho bạn
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 100,
                width: 340,
                backgroundColor: 'white',
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 1,
                margin: 10,
                justifyContent: 'center',
                paddingLeft: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'gray',
                  height: 40,
                  width: 80,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    paddingRight: 10,
                  }}>
                  <Icon
                    style={{
                      fontSize: 20,
                      color: 'black',
                    }}
                    name="plus-circle"
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    Thêm
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 10,
                }}>
                <View style={{paddingRight: 10}}>
                  <Icon
                    style={{
                      fontSize: 20,
                      color: 'orange',
                    }}
                    name="exclamation-circle"
                  />
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      color: 'orange',
                    }}>
                    Vui lòng thêm thông tin liên lạc
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 10,
              paddingBottom: 10,
            }}>
            <View
              style={{
                padding: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{}}>
                  <View
                    style={{
                      backgroundColor: 'orange',
                      height: 20,
                      width: 5,
                      borderRadius: 5,
                    }}></View>
                </View>
                <View
                  style={{
                    marginLeft: 15,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}>
                    Giảm giá
                  </Text>
                </View>
              </View>
              <View style={{}}>
                <View>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    Sử dụng mã ưu đãi
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: 'flex-end',
                  }}>
                  <Icon
                    style={{
                      fontSize: 15,
                      color: 'gray',
                    }}
                    name="chevron-right"
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    Chọn 1 mã ưu đãi hoặc nhập mã mới
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                paddingTop: 5,
              }}>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              />
            </View>
          </View>
          <View
            style={{
              padding: 15,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'orange',
                borderRadius: 5,
                padding: 15,
                backgroundColor: '#ffffdf',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                }}>
                Xin điền thông tin cẩn thận. khi đã gửi sẽ không thể thay đổi
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* phần bot */}

      <View
        style={{
          backgroundColor: 'white',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 5,
          paddingBottom: 5,
        }}>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
            }}>
            <View style={{}}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                ₫ 99.99
              </Text>
            </View>

            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View>
                  <Text
                    style={{
                      color: 'gray',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    Chi tiết
                  </Text>
                </View>
                <View>
                  <Icon
                    style={{
                      fontSize: 15,
                      color: 'gray',
                      justifyContent: 'center',
                    }}
                    name="chevron-up"
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#f0fffa',
                height: 'auto',
                width: 80,
                alignItems: 'center',
                borderRadius: 5,
                justifyContent: 'center',
                // marginVertical: 'auto',
              }}>
              <Text
                style={{
                  color: 'green',
                }}>
                Credit + 1
              </Text>
            </View>
          </View>

          <View style={{
            paddingTop: 10
          }}>
            <View
              style={{
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'orange',
                  width: '100%',
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Thanh toán
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default bookNow;
