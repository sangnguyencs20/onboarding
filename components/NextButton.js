import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from "react-native";
import Svg, { G, Circle } from 'react-native-svg'
import { AntDesign } from '@expo/vector-icons';
export default NextButton = () => {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 - strokeWidth * 2;
    const circumference = radius * 2 * Math.PI;
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
                        stroke="#F433BF"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - circumference * 60 / 100}
                    />
                </G>
            </Svg>
            <TouchableOpacity style={styles.button} activeOpacity={0.6}>
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
        position: 'relative',
    },
    button: {
        backgroundColor: '#F4338F',
        borderRadius: 128,
        padding: 20,
        position: 'absolute',
        top: '48%',
        left: '15.5%',
        marginTop: -32,
        marginLeft: -32,
    }
});

