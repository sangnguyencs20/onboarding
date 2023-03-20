import React, { useState, useRef } from "react";

import { View, Text, StyleSheet, FlatList, Animated } from "react-native";

import slides from "../components/slides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import NextButton from "./NextButton";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const slideref = useRef(null);

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = async () => {
        if (currentIndex < slides.length - 1) {
            slideref.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            try {
                await AsyncStorage.setItem('@viewedOnboarding', 'true');
                
            } catch (error) {
                console.log('Error @scrollTo: ', error)
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    pagingEnabled
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slideref}
                />
            </View>

            <Paginator data={slides} scrollX={scrollX} />
            <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})