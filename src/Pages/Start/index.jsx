import React from "react";
import { Image, ScrollView, View } from "react-native";


function Start() {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
            <View>
                <Image source={require("../../assets//icons/logo3.png")} />
                <Text>Vamos transformar sua vida{"/n"} em jogo, buscando sempre{"/n"} o melhor nível</Text>
            </View>
        </View>
    )
}

export default Start;