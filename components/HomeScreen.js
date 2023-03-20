import React from "react"
import { View, Text, TouchableOpacity, StyleSheet} from "react-native"

import AsyncStorage from "@react-native-async-storage/async-storage"

export default HomeScreen = () => {
    const clearOnboarding = async () => {
        try {
            await AsyncStorage.removeItem('@viewedOnboarding');
        } catch (error) {
            console.log('Error @clearOnboarding: ', error)
        }

    }
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={clearOnboarding}>
                <Text>Clear Onboarding</Text>
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
});