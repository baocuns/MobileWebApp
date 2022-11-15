import { Alert, Image, View } from 'react-native'
import React, { useEffect } from 'react'
import { Box, Avatar, Heading, FlatList, HStack, VStack, Text, Spacer, Switch, ArrowForwardIcon, Center, Button, Modal, Radio } from 'native-base'
import i18n from '../i18n';
import Entypo from 'react-native-vector-icons/Entypo';
import BackArrow from '../components/BackArrow';
import FastImage from 'react-native-fast-image';
import ja from '../assets/country/icons8-japan-80.png';
import en from '../assets/country/icons8-united-kingdom-48.png';
import vi from '../assets/country/icons8-vietnam-48.png';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setLanguage, setTheme } from '../redux/statusSlice';
import { useTheme } from '@react-navigation/native';


const Setting = () => {
    const dispatch = useDispatch();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        dispatch(setLanguage(lng));
        setShowModal(false)
    }
    const theme = useSelector(state => state.status.theme);
    const [showModal, setShowModal] = useState(false);
    const { colors } = useTheme();

    useEffect(() => {
        console.log("setting colors: ", colors.text);
    }, [])

    const data = [{
        id: "language",
        fullName: i18n.t('language'),
        timeStamp: "12:47 PM",
        iconComponent: "Entypo",
        icon: 'language',
        recentText: i18n.language,
        action: "",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: "theme",
        fullName: i18n.t('dark_mode'),
        timeStamp: "12:47 PM",
        iconComponent: "Entypo",
        icon: 'adjust',
        recentText: theme,
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
    ];



    return (
        <>
            {/* modal */}
            <Center>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Language</Modal.Header>
                        <Modal.Body>
                            <Radio.Group onChange={(e) => {
                                changeLanguage(e)
                            }} defaultValue={i18n.language} name="myRadioGroup" accessibilityLabel="Pick your favorite number">
                                <Radio value="en" my={1}>
                                    English
                                </Radio>
                                <Radio value="vi" my={1}>
                                    Vietnamese
                                </Radio>
                                <Radio value="ja" my={1}>
                                    Japanese
                                </Radio>
                            </Radio.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button onPress={() => {
                                    setShowModal(false);
                                }}>
                                    Cancel
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </Center>
            {/* end modal */}
            <BackArrow name={i18n.t('setting')} />
            <Box px={10} flex={1} pt={5}>
                <FlatList data={data} renderItem={({
                    item
                }) => <Box borderBottomWidth="1" _dark={{
                    borderColor: "muted.50"
                }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                        <HStack onTouchEndCapture={() => {
                            if (item.id == "language") {
                                setShowModal(true);
                            }
                        }} space={[2, 3]} justifyContent="space-between">
                            <Entypo name={item.icon} size={26} color={colors.text} />
                            <VStack ml={5}>
                                <Text _dark={{
                                    color: colors.text
                                }} color={colors.text} bold>
                                    {item.fullName}
                                </Text>
                                <Text color={colors.text} _dark={{
                                    color: colors.text
                                }}>
                                    {item.recentText}
                                </Text>
                            </VStack>
                            <Spacer />
                            {item.id === 'language' &&
                                <Image style={{ height: 48 }} source={i18n.language == "en" ? en : i18n.language == "vi" ? vi : i18n.language == "ja" && ja} resizeMode='contain' />
                            }
                            {item.id === "theme" &&
                                <HStack alignItems="center" space={4}>
                                    <Switch size="lg" onChange={() => {
                                        dispatch(setTheme(theme === "dark" ? "light" : "dark"))
                                    }} />
                                </HStack>
                            }
                        </HStack>
                    </Box>} keyExtractor={item => item.id} />
            </Box>
        </>
    )
}

export default Setting