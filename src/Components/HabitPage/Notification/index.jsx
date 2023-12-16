import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function Notification({ notificationToggle, setNotificationToggle }) {

    const [toggled, setToggled] = useState(undefined);

    //pega estado do notificationToggle
    useEffect(() => {
        setToggled(notificationToggle);
    }, [notificationToggle]);

    //alterar o estado do setToggled que pega o estado de NotificationToggle
    const toggleSwitch = () => {
        setToggled((previousState) => !previousState);
        setNotificationToggle((previousState) => !previousState)
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Notificação</Text>
                <Switch
                    thumbColor={"#FFFFFF"}
                    trackColor={{ false: "#FF0044", true: "#2DBES6" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={toggled}
                />
            </View>
        </>
    );
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
        marginRight: 10,
    },
    title: {
        color: "white",
        fontSize: 20,
        marginRight: 10,
    },
});