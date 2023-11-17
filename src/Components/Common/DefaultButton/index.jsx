import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function DefaultButton({
    buttonText,
    handlePress,
    width,
    height
}) {
    return (
        <TouchableOpacity
            style={[styles.button, { width: width, height: height }]}
            activeOpacity={0.7}
            onPress={handlePress}
        >

            <Text style={styles.buttonText}>{buttonText}</Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        marginTop: 20
    },

    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
    },
})