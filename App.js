import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Text, StatusBar } from 'react-native';
import {NavigationContainer, getFocusedRouteNameFromRoute} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FlashMessage from "react-native-flash-message";
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

import Login from "./Screen/Login"
import Register from "./Screen/Register";
import ChangePassword from './Screen/ChangePassword';

import Home from './Screen/Home';
import Search from './Screen/Search';
import Favorite from './Screen/Favorite';
import Personal from './Screen/Personal';

import Male from './Screen/Male';
import Female from './Screen/Female';

import ListProduct from "./Screen/ListProduct";
import FilterMenu from './Screen/FilterMenu';

import MyOrder from "./Screen/MyOrder";
import FAQS from "./Screen/FAQS";
import Notification from "./Screen/Notification";
import ChangeInfo from "./Screen/ChangeInfo";
import SelectAddress from "./Screen/SelectAddress";


const Stack = createStackNavigator();
const TabHome = createBottomTabNavigator();
const TabGender = createMaterialTopTabNavigator();

function getHeaderTitle(route) {

    const routeName = getFocusedRouteNameFromRoute(route) ?? 'fasions.';

    switch (routeName) {
        case 'Home':
            return 'fasions.';
        case 'Search':
            return null;
        case 'Favorite':
            return 'Favorite';
        case 'Personal':
            return null;
    }
}

function enableHeader(route) {

    const routeName = getFocusedRouteNameFromRoute(route) ?? 'fasions.';

    return !(routeName === 'Search' || routeName === 'Personal');

}

function PersonalStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Personal"}
                          component={Personal}
                          options={{
                              headerTitleAlign: 'center',
                              headerLeft: () => null,
                              headerRight: () => (
                                  <TouchableOpacity style = {{marginRight: 15}} onPress={() => alert('Not Yet!')}>
                                      <AntDesign name="shoppingcart" size={24} color="black" />
                                  </TouchableOpacity>
                              ),
                          }}
            />
            <Stack.Screen name={"Notification"}
                          component={Notification}
                          options={{
                              headerTitleAlign: 'center',
                          }}
            />
            <Stack.Screen name={"MyOrder"}
                          component={MyOrder}
                          options={{
                              headerTitleAlign: 'center',
                          }}
            />
            <Stack.Screen name={"FAQS"}
                          component={FAQS}
                          options={{
                              headerTitleAlign: 'center',
                          }}
            />
            <Stack.Screen name={"ChangeInfo"}
                          component={ChangeInfo}
                          options={{
                              headerTitleAlign: 'center',
                          }}
            />
        </Stack.Navigator>
    )
}

function GenderStack() {

    const [searchText, setSearchText] = useState("");

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <View style = {styles.search_container}>
                <AntDesign style = {styles.search_icon} name="search1" size={24} color="#AEAEB2" />
                <TextInput style = {styles.input}
                           onChangeText = {text => setSearchText(text)}
                           value = {searchText}
                           placeholder = "Tìm kiếm sản phẩm"
                           placeholderTextColor = "#AEAEB2"/>
            </View>
            <TabGender.Navigator>
                <TabGender.Screen name="Female" component={Female} />
                <TabGender.Screen name="Male" component={Male} />
            </TabGender.Navigator>
        </SafeAreaView>
    );
}

function SearchStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name={"GenderStack"}
                          component={GenderStack}
                          options={{
                              headerShown: false,
                          }}
            />
            <Stack.Screen name={"ListProduct"}
                          component={ListProduct}
                          options={({route }) => ({
                              headerTitleAlign: 'center',
                              title: route.params.name,
                              headerRight: () => (
                                  <TouchableOpacity style = {{marginRight: 15}} onPress={() => alert('Not Yet!')}>
                                      <AntDesign name="shoppingcart" size={24} color="black" />
                                  </TouchableOpacity>
                              ),
                          })}
            />
            <Stack.Screen name={"FilterMenu"}
                          component={FilterMenu}
                          options={{
                              title: 'Bộ lọc',
                              headerTitleAlign: 'center',
                              headerRight: () => (
                                  <TouchableOpacity style = {{marginRight: 15}} onPress={() => alert('Not Yet!')}>
                                     <Text style = {{color: '#0075FF', fontSize: 16}}>Áp dụng</Text>
                                  </TouchableOpacity>
                              ),
                          }}
            />
        </Stack.Navigator>
    );
}

function MainStack(){
    return (
            <TabHome.Navigator
                tabBarOptions={{
                    activeTintColor: '#000000',
                    showLabel: false,
                }}>

                <TabHome.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <TabHome.Screen
                    name="Search"
                    component={SearchStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="text-box-search"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <TabHome.Screen
                    name="Favorite"
                    component={Favorite}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="heart"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <TabHome.Screen
                    name="Personal"
                    component={PersonalStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="account"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            </TabHome.Navigator>
    );
}

export default function App() {
  return (
      <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={"Login"}
                            component={Login}
                            options={{
                              headerShown: false,
                            }}
              />
              <Stack.Screen name={"Register"}
                            component={Register}
                            options={{
                              headerShown: false,
                            }}
              />
              <Stack.Screen name={"ChangePassword"}
                            component={ChangePassword}
                            options={{
                                headerShown: false,
                            }}
              />
              <Stack.Screen name={"MainStack"}
                            component={MainStack}

                            options={({ route }) => ({
                                title: "fasions.",
                                headerTitleAlign: 'center',
                                headerTitle: getHeaderTitle(route),
                                headerLeft: () => null,
                                headerRight: () => (
                                         <TouchableOpacity style = {{marginRight: 15}} onPress={() => alert('Not Yet!')}>
                                            <AntDesign name="shoppingcart" size={24} color="black" />
                                        </TouchableOpacity>
                                ),
                                headerShown: enableHeader(route),
                            })}
              />
              <Stack.Screen name={"SelectAddress"}
                            component={SelectAddress}
                            options={({ route }) => ({
                                headerTitleAlign: 'center',
                                title: route.params.name,
                            })}
              />
            </Stack.Navigator>

          </NavigationContainer>
          <FlashMessage position={ Platform.OS === 'ios' ? "top" : {top:StatusBar.currentHeight, left:0, right:0} }
                        floating={Platform.OS !== 'ios'} />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    search_container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 40,
        marginHorizontal: 10,
        marginVertical: 2,
    },
    search_icon: {
        height: '100%',
        padding: 8,
        backgroundColor: '#EFEFF0',
    },
    input:{
        flex: 1,
        fontFamily: 'Open_Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        paddingTop: 8,
        paddingRight: 8,
        paddingBottom: 8,
        paddingLeft: 0,
        height: '100%',
        color: '#000000',
        backgroundColor: '#EFEFF0',
    },
});


