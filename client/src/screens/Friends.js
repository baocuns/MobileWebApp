import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const Friends = () => {
  return (
    <View>
      {/* search */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray',
          borderRadius: 10,
          height: 40,
          width: 'auto',
        }}>
        <View>
          <Icon
            style={{
              color: 'black',
              fontSize: 20,
            }}
            name="search"
          />
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
            }}>
            Enter the first and last name
          </Text>
        </View>
        <View>
          <Icon
            style={{
              color: 'black',
              fontSize: 20,
            }}
            name="edit"
          />
        </View>
        <View>
          <Icon
            style={{
              color: 'black',
              fontSize: 20,
            }}
            name="microphone"
          />
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'green',
              height: 30,
              width: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Icon
              style={{
                color: 'white',
                fontSize: 20,
              }}
              name="phone"
            />
          </View>
          <View style={{}}>
            <View>
              <Text
                style={{
                  color: 'black',
                }}>
                Add Friends from your contacts
              </Text>
            </View>
            <View>
              <Text>
                <Text
                  style={{
                    color: 'gray',
                  }}>
                  Find people from your phone's contacts
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'blue',
              height: 30,
              width: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Icon
              style={{
                color: 'white',
                fontSize: 20,
              }}
              name="user"
            />
          </View>
          <View style={{}}>
            <View>
              <Text
                style={{
                  color: 'black',
                }}>
                Add recommended friends
              </Text>
            </View>
            <View>
              <Text>
                <Text
                  style={{
                    color: 'gray',
                  }}>
                  People recommended friends
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: 'gray',
          }}></View>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
              }}>
              People you may know
            </Text>
          </View>

          <View style={{}}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'blue',
                  fontWeight: 'bold',
                }}>
                Show all
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View>
            <Image
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
              }}
              source={require('../assets/images/levi.jpg')}
            />
          </View>

          <View>
            <View>
              <Text
                style={{
                  color: 'black',
                }}>
                Tên
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 50,
                  }}
                  source={require('../assets/images/levi.jpg')}
                />
              </View>

              <View>
                <Text style={{color: 'black'}}>1 mutual friends</Text>
              </View>
            </View>

            <View>
              <View style={{
                backgroundColor: 'gray',
              }}>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  Add friend
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Friends;
