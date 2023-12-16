import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { Switch, GestureHandlerRootView } from "react-native-gesture-handler";


export default function Notification({ notificationToggle, setNotificationToggle }) {
    const toggleSwitch = () => {
        setNotificationToggle((previousState) => !previousState)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Notificação
            </Text>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Switch trackColor={{ false: "#FF0044", true: "#F2DBE56" }}
                    thumbColor={"#FFFFFF"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={notificationToggle}
                />
            </GestureHandlerRootView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    titleDisabled: {
        color: "#BBBB",
        fontSize: 20,
        marginRight: 10
    },
    title: {
        color: "white",
        fontSize: 20,
        marginRight: 10
    }
})