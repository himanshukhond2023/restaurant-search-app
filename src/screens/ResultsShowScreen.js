import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({route}) => {
    const [result, setResult] = useState(null);
    const id = route.params.id;
    // console.log(id);

    // console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }

    return (
        <View style={{margin: 10}}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => {
                    return <Image source={{uri: item}} style={styles.image}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginVertical: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    }
});

export default ResultsShowScreen;