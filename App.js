/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import {
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
    DrawerItems
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import SplashScreen from "./app/screens/SplashScreen";
import Login from "./app/screens/authScreens/Login";
import Register from "./app/screens/authScreens/Register";
import Community from "./app/screens/drawerScreens/Community";
import ChangePassword from "./app/screens/authScreens/ChangePassword";
import Profile from "./app/screens/drawerScreens/Profile";
import ListComm from "./app/screens/bottomTabScreen/ListComm";
import MapComm from "./app/screens/bottomTabScreen/MapComm";
import store from "./app/redux/store";
import LinearGradient from "react-native-linear-gradient";

const LoginStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            title: "Login",
            headerLeft: (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                >
                    <Icon
                        name={"arrow-left"}
                        style={{ fontSize: 28, marginLeft: 15 }}
                    />
                </TouchableOpacity>
            )
        })
    }
});

const RegisterStack = createStackNavigator({
    Register: {
        screen: Register,
        navigationOptions: ({ navigation }) => ({
            title: "Register",
            headerLeft: (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                >
                    <Icon
                        name={"arrow-left"}
                        style={{ fontSize: 28, marginLeft: 15 }}
                    />
                </TouchableOpacity>
            )
        })
    }
});

const HomeStack = createStackNavigator({
    Home: {
        screen: ListComm,
        navigationOptions: ({ navigation }) => ({
            title: "PokeDumb",
            headerLeft: (
                <TouchableOpacity
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                >
                    <Icon
                        name={"menu"}
                        style={{ fontSize: 28, marginLeft: 15 }}
                        color={"#fff"}
                    />
                </TouchableOpacity>
            ),
            headerStyle: {
                backgroundColor: "#44acff"
            },
            headerTitleStyle: {
                color: "#ffffff"
            }
        })
    }
});
const MapStack = createStackNavigator({
    Map: {
        screen: MapComm,
        navigationOptions: ({ navigation }) => ({
            title: "PokeDumb",
            headerLeft: (
                <TouchableOpacity
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                >
                    <Icon
                        name={"menu"}
                        style={{ fontSize: 28, marginLeft: 15 }}
                        color={"#fff"}
                    />
                </TouchableOpacity>
            ),
            headerStyle: {
                backgroundColor: "#44acff"
            },
            headerTitleStyle: {
                color: "#ffffff"
            }
        })
    }
});
function CustomDrawerItems(props) {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#ffffff", "#44acff"]}
            style={styles.linearGradient}
        >
            <View style={styles.horizontal}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.toggleDrawer();
                    }}
                >
                    <Icon name={"arrow-left"} style={styles.headerIcon} />
                </TouchableOpacity>
                <Text style={styles.header}>Menu</Text>
            </View>

            <View style={styles.centerEverything}>
                <Image
                    source={require("./app/assets/account.jpg")}
                    style={styles.image}
                />
                <Text style={styles.name}>Xygnite</Text>
                <Text style={styles.description}>Community Leader</Text>
            </View>
            <DrawerItems {...props} style={styles.bottomDrawerItems} />
        </LinearGradient>
    );
}
const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeStack,
        Map: MapStack
    },
    {
        contentComponent: props => <CustomDrawerItems {...props} />,
        contentOptions: {
            activeTintColor: "#FFFfff",
            inactiveTintColor: "#555555",
            activeBackgroundColor: "#555555"
        }
    }
);

const AppNavigator = createSwitchNavigator(
    {
        SplashScreen: {
            screen: SplashScreen
        },
        DN: DrawerNavigator,
        Login: {
            screen: LoginStack
        },
        Register: {
            screen: RegisterStack
        }
    },
    {
        initialRouteName: "SplashScreen"
    }
);
const Navigator = createAppContainer(AppNavigator);
type Props = {};
class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <Navigator>
                    <SplashScreen />
                    <ListComm />
                    <MapComm />
                    <Login />
                    <Register />
                </Navigator>
            </Provider>
        );
    }
}
export default App;
var styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    centerEverything: {
        flex: 0.7,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomDrawerItems: {
        flex: 2
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    name: {
        fontSize: 18,
        color: "#555555"
    },
    description: {
        fontSize: 14,
        color: "#555555"
    },
    header: {
        color: "#555555",
        fontSize: 20,
        marginLeft: 10
    },
    headerIcon: {
        color: "#555555",
        fontSize: 28
    },
    mainHeader: {
        color: "#555555",
        fontSize: 20,
        marginLeft: 10
    },
    mainHeaderIcon: {
        color: "#555555",
        fontSize: 28
    },
    horizontal: {
        flexDirection: "row",
        paddingTop: 15,
        paddingLeft: 15
    }
});
