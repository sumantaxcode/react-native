import { View, Text, Button } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';
import Animated, { ZoomOut } from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView)
const AnimatedSplashScreen = ({
    onAnimationFinish = (isCancelled) => { },
}: {
    onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
    const animation = useRef<LottieView>(null);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <AnimatedLottieView
                exiting={ZoomOut}
                onAnimationFinish={onAnimationFinish}
                loop={false}
                autoPlay
                ref={animation}
                style={{
                    width: '80%',
                    maxWidth: 400,

                }}
                source={require('@assets/lottie/netflix.json')}
            />
        </View>
    )
}


export default AnimatedSplashScreen