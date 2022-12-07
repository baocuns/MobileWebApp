import { Linking } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

export const openLink = async nameQuery => {
  try {
    const isAvailable = await InAppBrowser.isAvailable();
    const url = `https://www.google.com/search?q=${nameQuery}+dulich24h&rlz=1C1UEAD_enVN1014VN1014&oq=&aqs=chrome.0.35i39i362l8.1499714j0j7&sourceid=chrome&ie=UTF-8`;
    if (isAvailable) {
      InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: 'gray',
        preferredControlTintColor: 'white',
        // Android Properties
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: true,
      }).then(result => {
        Alert.alert(JSON.stringify(result));
      });
    } else Linking.openURL(url);
  } catch (error) {
    Alert.alert(error.message);
  }
};

export const formatTime = (time) => {
  const milisecond = ((new Date()).getTime()) - (new Date(time).getTime());
  return timeAgo.format(Date.now() - milisecond, 'round')
}
export const formatVND = (money) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(money);
}
