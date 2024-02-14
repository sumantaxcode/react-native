import { View, Text, Button } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';

const AnimationScreen = () => {
    const animation = useRef<LottieView>(null);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <Stack.Screen options={{ headerShown: false }} />
            <LottieView
                // autoPlay
                ref={animation}
                style={{
                    width: '80%',
                    maxWidth: 400,
                    // height: 200,
                    // backgroundColor: '#eee',
                }}
                source={require('@assets/lottie/netflix.json')}
            />
            {/* <Button title='Play' onPress={() => {
                animation.current?.reset();
                animation.current?.play();
            }} />
            <Button title='Pause' onPress={() => animation.current?.pause()} /> */}
        </View>
    )
}

export default AnimationScreen