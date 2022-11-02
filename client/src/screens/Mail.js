import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { reset } from '../redux/tourSlice';

const Mail = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ paddingLeft: 10, paddingRight: 10, flex: 1 }}>
      {/* Title */}
      <View
        style={{ justifyContent: 'center', alignItems: 'center', height: '10%' }}>
        <Text style={{ fontSize: 20, fontWeight: '600', color: '#000' }}>
          Hộp Thư
        </Text>
      </View>
      {/* Icon List */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '10%',
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            aspectRatio: 1,
          }}>
          <Icon onPress={() => navigation.navigate('Favorite')} name="thumbs-up" size={35} color="blue" brand />
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            aspectRatio: 1,
          }}>
          <Icon onPress={() => navigation.navigate('Friends')} name="user-friends" size={35} color="blue" brand />
          <Text>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            aspectRatio: 1,
          }}>
          <Icon name="address-book" size={35} color="blue" brand />
          <Text>Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(reset())}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            aspectRatio: 1,
          }}>
          <Icon name="globe-europe" size={35} color="blue" brand />
          <Text>OP</Text>
        </TouchableOpacity>
      </View>
      {/* Bình Luận, Thông báo, sự kiện */}
      <View style={{ justifyContent: 'space-evenly', height: '35%' }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            height: '26%',
            borderRadius: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: 10,
              borderWidth: 1,
              height: '80%',
              aspectRatio: 1,
              borderRadius: 100,
            }}>
            <Icon name="comment-dots" size={26} />
          </View>
          <Text style={{ fontSize: 18, color: '#000' }}>Bình Luận</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            height: '26%',
            borderRadius: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: 10,
              borderWidth: 1,
              height: '80%',
              aspectRatio: 1,
              borderRadius: 100,
            }}>
            <IconAnt name="notification" size={26} />
          </View>
          <Text style={{ fontSize: 18, color: '#000' }}>Thông Báo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            height: '26%',
            borderRadius: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: 10,
              borderWidth: 1,
              height: '80%',
              aspectRatio: 1,
              borderRadius: 100,
            }}>
            <MaterialIcons name="event-available" size={26} />
          </View>
          <Text style={{ fontSize: 18, color: '#000' }}>Sự Kiện</Text>
        </TouchableOpacity>
      </View>
      {/* Hoạt Động Mới */}
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '600',
            color: '#000',
            marginLeft: 10,
          }}>
          Hoạt Động Mới
        </Text>
      </View>

      <View style={{ justifyContent: 'space-evenly', height: '35%' }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            height: '26%',
            borderRadius: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: 10,
              borderWidth: 1,
              height: '80%',
              aspectRatio: 1,
              borderRadius: 100,
            }}>
            <MaterialIcons name="person-outline" size={26} />
          </View>
          <Text style={{ fontSize: 18, color: '#000' }}>
            Người follow đăng bài blog
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            height: '26%',
            borderRadius: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: 10,
              borderWidth: 1,
              height: '80%',
              aspectRatio: 1,
              borderRadius: 100,
            }}>
            <IconAnt name="customerservice" size={26} />
          </View>
          <Text style={{ fontSize: 18, color: '#000' }}>Trung Tâm Thông Báo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            height: '26%',
            borderRadius: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: 10,
              borderWidth: 1,
              height: '80%',
              aspectRatio: 1,
              borderRadius: 100,
            }}>
            <IconAnt name="customerservice" size={26} />
          </View>
          <Text style={{ fontSize: 18, color: '#000' }}>Trung Tâm Thông Báo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Mail;
