import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("DN");
        }, 1000);
    }
    render() {
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={["#ffffff", "#44acff"]}
                style={styles.linearGradient}
            >
                <View style={styles.centerEverything}>
                    <Image
                        source={require("../assets/logo.jpg")}
                        style={styles.logo}
                    />
                </View>
            </LinearGradient>
        );
    }
}

export default SplashScreen;

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    centerEverything: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100
    }
});
