import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const Friends = () => {
  return (
    <ScrollView>
      <View
        style={{
          padding: 20,
          backgroundColor: 'white',
        }}>
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
            marginBottom: 10,
          }}>
          <View
            style={{
              padding: 10,
            }}>
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
                fontWeight: 'bold',
              }}>
              Enter the first and last name
            </Text>
          </View>
          <View
            style={{
              padding: 10,
            }}>
            <Icon
              style={{
                color: 'black',
                fontSize: 20,
              }}
              name="edit"
            />
          </View>
          <View
            style={{
              padding: 10,
            }}>
            <Icon
              style={{
                color: 'black',
                fontSize: 20,
              }}
              name="microphone"
            />
          </View>
        </View>

        <View
          style={{
            marginBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
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
              marginBottom: 10,
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

        <View
          style={{
            paddingBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                marginRight: 'auto',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 20,
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
                    fontSize: 20,
                  }}>
                  Show all
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 20,
              }}>
              <View>
                <View
                  style={{
                    marginRight: 10,
                  }}>
                  <Image
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 50,
                    }}
                    source={require('../assets/images/levi.jpg')}
                  />
                </View>
              </View>
              <View>
                <View>
                  <View
                    style={{
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 15,
                      }}>
                      Tên
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        marginRight: 10,
                      }}>
                      <Image
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 50,
                        }}
                        source={require('../assets/images/levi.jpg')}
                      />
                    </View>

                    <View>
                      <Text style={{color: 'black'}}>1 mutual friends</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      paddingTop: 10,
                    }}>
                    <View
                      style={{
                        backgroundColor: 'gray',
                        height: 40,
                        width: 100,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                      }}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                          }}>
                          Add friend
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        backgroundColor: 'gray',
                        borderRadius: 10,
                        height: 40,
                        width: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                          }}>
                          Hide
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: 'gray',
            }}></View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 'auto',
              }}>
              <View
                style={{
                  paddingRight: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  My friends
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                  }}>
                  33
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <View
                style={{
                  paddingRight: 10,
                }}>
                <Text
                  style={{
                    color: 'blue',
                    fontWeight: 'bold',
                  }}>
                  Lists
                </Text>
              </View>
              <TouchableOpacity>
                <Icon
                  style={{
                    color: 'blue',
                    fontSize: 20,
                  }}
                  name="chevron-down"
                />
              </TouchableOpacity>
            
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <View
              style={{
                paddingRight: 5,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                }}>
                Order:
              </Text>
            </View>
            <View
              style={{
                paddingRight: 5,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                By importance
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Icon
                  style={{
                    color: 'black',
                    fontSize: 15,
                  }}
                  name="user"
                />
              </TouchableOpacity>
            </View>
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
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 'auto',
              }}>
              {/* image */}
              <View
                style={{
                  marginRight: 10,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 50,
                    }}
                    source={require('../assets/images/levi.jpg')}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Cô thắm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  paddingRight: 10,
                }}>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="phone"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="comment"
                  />
                </TouchableOpacity>
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
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 'auto',
              }}>
              {/* image */}
              <View
                style={{
                  marginRight: 10,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 50,
                    }}
                    source={require('../assets/images/levi.jpg')}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Cô thắm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  paddingRight: 10,
                }}>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="phone"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="comment"
                  />
                </TouchableOpacity>
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
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 'auto',
              }}>
              {/* image */}
              <View
                style={{
                  marginRight: 10,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 50,
                    }}
                    source={require('../assets/images/levi.jpg')}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Cô thắm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  paddingRight: 10,
                }}>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="phone"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="comment"
                  />
                </TouchableOpacity>
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
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 'auto',
              }}>
              {/* image */}
              <View
                style={{
                  marginRight: 10,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 50,
                    }}
                    source={require('../assets/images/levi.jpg')}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Cô thắm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  paddingRight: 10,
                }}>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="phone"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="comment"
                  />
                </TouchableOpacity>
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
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 'auto',
              }}>
              {/* image */}
              <View
                style={{
                  marginRight: 10,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 50,
                    }}
                    source={require('../assets/images/levi.jpg')}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Cô thắm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  paddingRight: 10,
                }}>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="phone"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="comment"
                  />
                </TouchableOpacity>
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
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 'auto',
              }}>
              {/* image */}
              <View
                style={{
                  marginRight: 10,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 50,
                    }}
                    source={require('../assets/images/levi.jpg')}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Cô thắm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  paddingRight: 10,
                }}>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="phone"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Icon
                    style={{
                      color: 'blue',
                      fontSize: 30,
                    }}
                    name="comment"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Friends;
