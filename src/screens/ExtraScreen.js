// ExtraScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExtraScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Extra Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ExtraScreen;
