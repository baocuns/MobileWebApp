import { StyleSheet, Text, PanResponder, Animated, View, TouchableOpacity, Dimensions  } from 'react-native';
// drag and drop
const [pan, setPan] = useState(new Animated.ValueXY())
const [showDraggable, setShowDraggable] = useState(true)
const [dropAreaValues, setDropAreaValues] = useState(null)
const [opacity, setOpacity] = useState(new Animated.Value(1))
const [activate, setActivate] = useState(false)
const [_val, set_val] = useState({ x: 0, y: 0 })
const [panResponder, setPanResponder] = useState()

const isDropArea = (gesture) => {
    return gesture.moveX < Dimensions.get('window').height / 2;
}

{panResponder && (
    <Animated.View className='bg-gray-500 py-2 my-2'
        {...panResponder.panHandlers}
        style={{
            transform: pan.getTranslateTransform(),
            opacity: opacity
        }}
    >
        <Text>drag and drop</Text>
    </Animated.View>
)}

useEffect(() => {
    pan.addListener((value) => set_val(value))
    const panRes = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
            pan.setOffset({ x: 0, y: 0 })
            pan.setValue({ x: 0, y: 0 })
        },
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y,
            }
        ], { useNativeDriver: false }),
        onPanResponderRelease: (e, gesture) => {
            if (isDropArea(gesture)) {
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false
                }).start(() =>
                    setShowDraggable(false)
                );
                handleCloseComment()
            }
        }
    })
    setPanResponder(panRes)
}, [])


//https://snack.expo.dev/@sitenative/two-columns-drag?platform=web