import {Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

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

// export const myloginxnxx = async () => {
//     try {
//     const res = await axios.post(loginRoute, {
//       username: username,
//       password: password,
//     });
//     // await fetch('https://api.travels.games/api/v1/auth/login', {
//     //   method: 'POST',
//     //   headers: {
//     //     Accept: 'application/json',
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify({username: username, password: password}),
//     // })
//     //   .then(res => res.json())
//     //   .then(resData => {
//     //     setLoading(false);
//     //     console.log(resData);
//     //     if (resData.status === 'success') {
//     //       AsyncStorage.setItem('user_id', resData.data.username);
//     //       console.log(resData.data.username);
//     //       navigation.replace('DrawerNavigationRoutes');
//     //     } else {
//     //       setErrortext(resData.msg);
//     //       console.log('Please check your email id or password');
//     //     }
//     //   })
//     //   .catch(error => {
//     //     //Hide Loader
//     //     setLoading(false);
//     //     console.error(error);
//     //   });

//     // localStorage.setItem('Home', JSON.stringify(resData));
//   };
