import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const BookNowX = () => {
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          paddingLeft: 20,
          backgroundColor: '#FFFFFF',
          paddingBottom: 10,
        }}>
        <View
          style={{
            justifyContent: 'center',
            paddingRight: 20,
          }}>
         <TouchableOpacity>

          <Icon
            style={{
              fontSize: 20,
              color: 'black',
            }}
            name="chevron-left"
          />
         </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Tùy chọn đơn hàng
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 20,
        }}>
        <View
          style={{
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 10,
            }}>
            <View style={{
              marginRight: 'auto'
            }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Gói đã chọn
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                    
              }}>
              <View
                style={
                  {
                    //  justifyContent: 'flex-end'
                  }
                }>
                <Text style={{color: 'blue'}}>Chi tiết</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  paddingRight: 20,
                }}>
                <Icon
                  style={{
                    color: 'blue',
                    fontSize: 12,
                  }}
                  name="chevron-right"
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 10,
            }}>
            <View style={{
                marginRight: 'auto'
            }}>
              <Text
                style={{
                  color: 'gray',
                }}>
                Điều kiện
              </Text>
            </View>
            <View
              style={
                {
                  //  alignContent: 'flex-end'
                  paddingLeft: 180,
                }
              }>
              <Text
                style={{
                  color: 'black',
                }}>
                Advance
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 10,
            }}>
            <View style={{
                marginRight: 'auto'
            }}>
              <Text
                style={{
                  color: 'gray',
                }}>
                Hướng di chuyển
              </Text>
            </View>
            <View style={{
              paddingLeft: 140,
            }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Khứ hồi
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 10,
            }}>
            <View style={{
                marginRight: 'auto'
            }}>
              <Text
                style={{
                  color: 'gray',
                }}>
                Loại Cabin
              </Text>
            </View>
            <View style={{
              paddingLeft: 45,
            }}> 
              <Text
                style={{
                  color: 'black',
                }}>
                (Ngày trong tuần)Cáp thường
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 10,
            }}>
            <View style={{
                marginRight: 'auto'
            }}>
              <Text
                style={{
                  color: 'gray',
                }}>
                Tùy chọn chọn thêm
              </Text>
            </View>
            <View style={{
              paddingLeft: 115,
            }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Advance
              </Text>
            </View>
          </View>

          <View style={{
            marginLeft: 'auto'
          }}>
            <View
              style={{
                paddingBottom: 5,
                paddingLeft: 100,
              }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Citizen aged 65 or above
              </Text>
            </View>
          </View>
          <View
            style={
              {
                // flexDirection: 'row',
              }
            }>
            <View
              style={{
                backgroundColor: '#f5f5f5',
                height: 30,
                width: 250,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'gray',
                  fontWeight: 'bold',
                }}>
                Miễn phí hoàn hủy trước khi sử dụng
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#f5f5f5',
                height: 30,
                width: 140,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'gray',
                  fontWeight: 'bold',
                }}>
                Xác nhận tức thời
              </Text>
            </View>
          </View>
          <View style={{
            marginLeft: 'auto'
          }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'black',
                height: 35,
                width: 100,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Chỉnh sửa
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          margin: 20,
          borderRadius: 10,
          padding: 20,
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
              }}>
              Người lớn tuổi(65+)
            </Text>
          </View>

          <View>
            <View style={{}}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                ₫ 90,634
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 12,
                }}>
                ₫ 90,634
              </Text>
            </View>
          </View>
        </View>
      </View>
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
                backgroundColor: 'gray',
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
                  Tiếp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookNowX;
