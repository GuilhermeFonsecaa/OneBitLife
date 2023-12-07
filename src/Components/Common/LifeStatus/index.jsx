import React from "react";
import { View, StyleSheet } from "react-native"
import LottieView from "lottie-react-native";

export default function LifeStatus() {
    /*Status:
       100 - Máximo
       50 - Médio
       25 - Baixo
       00 - Curto(acabou o game)
       */
    return (
        <View style={styles.container}>
            <LottieView
                source={require("../../../assets/education/education-100.json")}
                autoPlay
                loop
                style={styles.education} />

            <LottieView
                source={require("../../../assets/money/money-100.json")}
                autoPlay
                loop
                style={styles.money} />

            <LottieView
                source={require("../../../assets/robot/robot-100-100.json")}
                autoPlay
                loop
                style={styles.robot} />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        width: 330,
        height: 300,
    },

    education: {
        width: 120,
        marginTop: 40,
        marginLeft: 3,
        position: "absolute",
    },

    money: {
        width: 120,
        marginTop: 40,
        marginLeft: 70,
        position: "absolute",
    },

    robot: {
        width: 200,
        marginTop: 20,
        marginLeft: 21,
    },

});
