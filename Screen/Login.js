import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

const Login = ({navigation}) => {

    const [phone_number, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [loaded] = useFonts({
        Open_Sans: require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }
    // const [mang, setMang] = useState([]);
    //
    // fetch("https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=331d821f9dc7606d6827ba795a26e29b&user_id=191861875%40N06&extras=views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=20&page=1&format=json&nojsoncallback=1")
    //     .then(response => response.json())
    //     .then(result => setMang(result.photos.photo))
    //     .catch(error => console.log('error', error));

    return (
        <View style={styles.container}>
            <Text style = {styles.brand}>fasions.</Text>
            <Text style = {styles.title}>Đăng nhập với email của bạn</Text>

            <View style = {styles.input_container}>
                <View style = {styles.inputSection}>
                    <TextInput style = {styles.input}
                               onChangeText = {phone => setPhone(phone)}
                               value = {phone_number}
                               placeholder = "Số điện thoại"
                               placeholderTextColor = "#636366"/>
                </View>

                <View style = {styles.inputSection}>
                    <TextInput style = {styles.input}
                               onChangeText = {password => setPassword(password)}
                               value = {password}
                               placeholder = "Mật khẩu"
                               placeholderTextColor = "#636366"/>
                </View>
                <TouchableOpacity onPress = {() => {navigation.navigate("ChangePassword")}}>
                    <Text style = {styles.text_change_pass}>Quên mật khẩu</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style = {styles.button_login} onPress = {() => {navigation.navigate("MainStack")}}>
                <Text style = {styles.text_login_text}>Đăng nhập</Text>
            </TouchableOpacity>

            <Text style = {styles.text_question}>
                Bạn chưa có tài khoản?
                <TouchableOpacity onPress = {() => {navigation.navigate("Register")}}>
                    <Text style = {styles.text_register_text}>Đăng ký</Text>
                </TouchableOpacity>
            </Text>

            <View style = {styles.button_container}>
                <TouchableOpacity style = {styles.button_login_google}>
                    <AntDesign name="google" size={23} color="black" />
                    <Text> Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button_login_facebook}>
                    <AntDesign name="facebook-square" size={23} color="black" />
                    <Text> Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    brand: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 47,
    },
    title: {
        marginTop: 43,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
    },
    text_question: {
        marginTop: 30,
        fontFamily: 'Open_Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
    },
    text_change_pass: {
        fontFamily: 'Open_Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        textAlign: 'right',
        marginRight: 14,
        marginTop: 10,
        color: '#636366',
        // lineHeight: 1.5,
    },
    text_login_text: {
        color: "#FFFFFF",
        textTransform: 'uppercase',
    },
    text_register_text: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    input_container: {

    },
    input:{
        height: 30,
        fontFamily: 'Open_Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 1.5,
        width: 345,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 0,
        color: '#000000',
    },
    inputSection: {
        marginTop: 41,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#000000',
    },
    button_login: {
        width: 345,
        height: 42,
        backgroundColor: '#1C1C1E',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 41,
    },
    button_container: {
        marginTop: 33,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_login_google: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000000',
        width: 157,
        height: 42,
        marginRight: 31,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_login_facebook: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000000',
        width: 157,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login;
