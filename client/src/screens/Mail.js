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
import Lottie from 'lottie-react-native';
import { useTheme } from '@react-navigation/native';
import i18n from '../i18n';

const Mail = ({ navigation }) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ paddingLeft: 10, paddingRight: 10, flex: 1 }}>
      {/* Title */}
      {/* <Lottie source={require('../assets/lotties/travel.json')} autoPlay loop /> */}
      <View
        style={{ justifyContent: 'center', alignItems: 'center', height: '10%' }}>
        <Text style={{ fontSize: 20, fontWeight: '600', color: colors.text }}>
          {i18n.t('mail')}
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
          <Text style={{ color: colors.text }}>{i18n.t('like')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            aspectRatio: 1,
          }}>
          <Icon onPress={() => navigation.navigate('Friends')} name="user-friends" size={35} color="blue" brand />
          <Text style={{ color: colors.text }}>{i18n.t('friends')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favorite')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            aspectRatio: 1,
          }}>
          <Icon name="address-book" size={35} color="blue" brand />
          <Text style={{ color: colors.text }}>{i18n.t('address')}</Text>
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
          <Text style={{ color: colors.text }}>{i18n.t('op')}</Text>
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
            borderColor: colors.text
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
              borderColor: colors.text
            }}>
            <Icon name="comment-dots" size={26} color={colors.text} />
          </View>
          <Text style={{ fontSize: 18, color: colors.text }}>{i18n.t('comment')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            height: '26%',
            borderRadius: 10,
            borderColor: colors.text
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
              borderColor: colors.text
            }}>
            <IconAnt name="notification" size={26} color={colors.text} />
          </View>
          <Text style={{ fontSize: 18, color: colors.text }}>{i18n.t('notify')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            height: '26%',
            borderRadius: 10,
            borderColor: colors.text
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
              borderColor: colors.text
            }}>
            <MaterialIcons name="event-available" size={26} color={colors.text} />
          </View>
          <Text style={{ fontSize: 18, color: colors.text }}>{i18n.t('event')}</Text>
        </TouchableOpacity>
      </View>
      {/* Hoạt Động Mới */}
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '600',
            color: colors.text,
            marginLeft: 10,
          }}>
          {i18n.t('new_activity')}
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
            borderColor: colors.text
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
              borderColor: colors.text
            }}>
            <MaterialIcons name="person-outline" size={26} color={colors.text} />
          </View>
          <Text style={{ fontSize: 18, color: colors.text }}>
            {i18n.t('people_follow_blog')}
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
            borderColor: colors.text
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
              borderColor: colors.text
            }}>
            <IconAnt name="customerservice" size={26} color={colors.text} />
          </View>
          <Text style={{ fontSize: 18, color: colors.text }}>{i18n.t('notify_center')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            height: '26%',
            borderRadius: 10,
            borderColor: colors.text,
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
              borderColor: colors.text
            }}>
            <IconAnt name="customerservice" size={26} color={colors.text} />
          </View>
          <Text style={{ fontSize: 18, color: colors.text }}>{i18n.t('notify_center')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Mail;
