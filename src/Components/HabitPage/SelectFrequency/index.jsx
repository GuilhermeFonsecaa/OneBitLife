import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function SelectFrequency({ habit, frequencyInput }) {
    const [selected, setSelected] = useState(
        habit?.habitFrequency ? habit?.habitFrequency : "-"
    );

    const data = [
        { key: "Diário", value: "Diário" },
        { key: "Semanal", value: "Semanal" },
        { key: "Mensal", value: "Mensal" },
    ];

    useEffect(() => {
        frequencyInput(habit?.habitFrequency ? habit?.habitFrequency : undefined);
    }, []);

    return (
        <View style={{marginBottom : 20}}>
            <SelectList
                setSelected={setSelected}
                data={data}
                search={false}
                onSelect={() => {
                    alert(selected)
                    frequencyInput(selected);
                }}
                placeholder={selected}
                boxStyles={styles.boxStyle}
                inputStyles={styles.inputStyle}
                dropdownStyles={styles.dropdownStyle}
                dropdownItemStyles={styles.dropdownItemStyle}
                dropdownTextStyles={styles.dropdownTextStyle}
                arrowicon={<Image source={require("../../../assets/icons/arrowDropdown.png")} style={styles.arrow} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    boxStyle: {
        borderColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    inputStyle: {
        color: "white",
    },

    dropdownStyle: {
        borderWidth: 0
    },

    dropdownItemStyle: {
        borderWidth: 1,
        borderColor: "#BBBBBB",
        borderRadius: 10,
        marginBottom: 15,
    },

    dropdownTextStyle: {
        color: "#BBBBBB"
    },

    arrow: {
        width: 20,
        height: 20,
    }

})