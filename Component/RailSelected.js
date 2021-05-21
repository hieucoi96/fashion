import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';

const RailSelected = () => {
    return (
        <View style={styles.root}/>
    );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
    root: {
        height: 0.5,
        backgroundColor: '#1C1C1E',
        borderRadius: 2,
    },
});
