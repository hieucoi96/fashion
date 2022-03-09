import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import Ripple from 'react-native-material-ripple';
import LottieView from "lottie-react-native";

const Login = ({navigation}) => {

    const [phone_number, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [loaded] = useFonts({
        Open_Sans: require('../assets/fonts/OpenSans-Regular.ttf'),
        Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
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

            <Ripple style = {styles.button_login} onPress = {() => {navigation.navigate("MainStack")}}
                    rippleColor={'#ffffff'}
                    rippleOpacity={0.4}
                    rippleDuration={600}>
                <Text style = {styles.text_login_text}>Đăng nhập</Text>
            </Ripple>

            <View style = {styles.text_question}>
                <Text>Bạn chưa có tài khoản? </Text>
                <TouchableOpacity onPress = {() => {navigation.navigate("Register")}}>
                    <Text style = {styles.text_register_text}>Đăng ký</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.button_container}>
                <Ripple style = {styles.button_login_google}>
                    {/*<AntDesign name="google" size={23} color="black" />*/}
                    <Image style={{width: 23, height: 23, marginRight: 5}} source={require('../assets/icon_google.png')}/>
                    <Text> Google</Text>
                </Ripple>
                <Ripple style = {styles.button_login_facebook}>
                    {/*<AntDesign name="facebook-square" size={23} color="black" />*/}
                    <Image style={{width: 23, height: 23, marginRight: 5}} source={require('../assets/icon_facebook.png')}/>
                    <Text> Facebook</Text>
                </Ripple>
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
        paddingHorizontal: '4%',
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
        flexDirection: 'row',
        alignItems: 'center',
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
    input:{
        fontFamily: 'Open_Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        width: '100%',
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
        width: '100%',
        height: 42,
        backgroundColor: '#1C1C1E',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 41,
    },
    button_container: {
        marginTop: 33,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_login_google: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000000',
        width: '45%',
        height: 42,
        marginRight: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_login_facebook: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000000',
        width: '45%',
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login;
