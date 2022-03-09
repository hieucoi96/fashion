import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import {useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const ShoppingCartIcon = () => {
    const data = useSelector(state => state.itemReducer.data)
    const navigation = useNavigation()

    return(
        <TouchableOpacity style = {{marginRight: 15}}
                          onPress={() => {navigation.navigate('Cart')}}
                          activeOpacity={1}>
            <View style={styles.count_container}>
                <Text style={styles.count}>{data.length}</Text>
            </View>
            <Image source={require('../assets/icon_cart.png')} style={styles.icon_cart}/>
        </TouchableOpacity>
    );
}

export default ShoppingCartIcon

const styles = StyleSheet.create({
    icon_cart: {
        width: 30,
        height: 30,
    },
    count_container: {
        position: 'absolute',
        right: 0,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#000000',
        zIndex: 9999,
    },
    count: {
        fontSize: 10,
    }
});
