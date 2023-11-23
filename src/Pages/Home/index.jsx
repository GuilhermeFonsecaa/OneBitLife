import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import LifeStatus from "../../Components/Common/LifeStatus";
import { useNavigation } from "@react-navigation/native";


export default function Home() {

    const navigation = useNavigation()

    function handleNavExplanation() {
        navigation.navigate("AppExplanation")
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.dailyChecks}>
                        ❤️ 20 dias - ✔️ 80 checks
                    </Text>
                    <LifeStatus />
                </View>

                <Text style={styles.explanationText} onPress={() => {
                    handleNavExplanation()
                }}>
                    Visualizar explicação novamente
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21,21,0,98)"
    },

    dailyChecks: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginTop: 40
    },

    explanationText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25
    }
})