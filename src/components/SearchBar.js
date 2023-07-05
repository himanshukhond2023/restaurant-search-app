import React from "react";
import {View, StyleSheet, TextInput, Image} from "react-native";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Image source={require("../assets/search.png")} style={styles.iconStyle}/> 
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}; 

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: "white",
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 15
    },
    iconStyle: {
        height: 30, 
        width: 30,
        alignSelf: "center",
        marginHorizontal: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize:18,
    }
});

export default SearchBar;