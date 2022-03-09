import React, { memo } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const THUMB_RADIUS = 10;

const BackButton = () => {
    return (
        <View style={styles.root}>
            <Image source={require('../assets/icon_chevron.png')} style={styles.icon_back}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        margin: 15
    },
    icon_back: {
        width: 7,
        height: 14,
        marginLeft: 0,
    },
});

export default memo(BackButton);
