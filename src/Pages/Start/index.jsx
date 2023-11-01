import React from "react";
import { Image, ScrollView, View, Text, StyleSheet } from "react-native";
import LifeStatus from "../../Components/Common/LifeStatus";

export default function Start() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center" }}>
                    <Image style={styles.logo} source={require("../../assets//icons/logo3.png")} />
                    <LifeStatus />
                    <Text style={styles.description}>Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"} o melhor nível</Text>
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21,21,21,0.98)",
    },

    logo: {
        width: 340,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },

    description: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 50
    },
});
