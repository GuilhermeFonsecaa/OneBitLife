import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import LifeStatus from "../../Components/Common/LifeStatus";
import { useNavigation } from "@react-navigation/native";
import StatusBar from "../../Components/Home/StatusBar";
import CreateHabit from "../../Components/Home/CreateHabit";


export default function Home() {

    const navigation = useNavigation();
    const [mindHabit, setMindHabit] = useState();
    const [moneydHabit, setMoneyHabit] = useState();
    const [bodyHabit, setbodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    function handleNavExplanation() {
        navigation.navigate("AppExplanation");
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.dailyChecks}>
                        ❤️ 20 dias - ✔️ 80 checks
                    </Text>
                    <LifeStatus />
                    <StatusBar />
                    <CreateHabit habitArea={"Mente"} borderColor={"white"}/>
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
        backgroundColor: 'rgba(21,21,21,0.98)',
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