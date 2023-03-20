// onboarding in react native


import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
export default OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.containerOfText}>
                    <Text style={[styles.text]}>{item.text}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    containerOfText: {
        flex: 0.5,
        width: '80%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center',
    },
    text: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
    }
})