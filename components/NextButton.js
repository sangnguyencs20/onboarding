import { React, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from "react-native";
import Svg, { G, Circle } from 'react-native-svg'
import { AntDesign } from '@expo/vector-icons';
export default NextButton = ({ percentage, scrollTo }) => {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 - strokeWidth * 2;
    const circumference = radius * 2 * Math.PI;

    const progessAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);

    const animation = (toValue) => {
        return Animated.timing(progessAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start();
    }

    useEffect(() => {
        animation(percentage);
    }, [percentage]);


    useEffect(() => {
        progessAnimation.addListener(
            (value) => {
                const strokeDashoffset = circumference - (circumference * value.value) / 100;

                if (progressRef?.current) {
                    progressRef.current.setNativeProps({
                        strokeDashoffset,
                    });
                }
            }, [percentage]);
        return () => {
            progessAnimation.removeAllListeners();
        }
    });

    return (
        <View styles={styles.container}>
            <Svg viewBox='' width={size} height={size}>
                <G rotation="-90" origin={center}>
                    <Circle
                        stroke="#E6E7E8"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        ref={progressRef}
                        stroke="#F433BF"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                    />
                </G>
            </Svg>
            <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
                <AntDesign style={{ justifyContent: 'center', alignItems: 'center' }} name="arrowright" size={32} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#F4338F',
        borderRadius: 100,
        padding: 20,
    }
});
