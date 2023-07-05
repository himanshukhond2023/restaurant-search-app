import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import axios from "axios";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    // console.log(props);
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === "$" || "$$" || "$$$"
        return results.filter((result) => {
            return result.price === price;
        });
    };

    // Open API - worked
    // const searchApi = async () => {
    //     console.log("Hey there..");
    //     try {
    //         const response = await axios.get("https://dummy.restapiexample.com/api/v1/employees");
    //         console.log("hello",response.data.data);

    //         setResults(response.data.data);
    //     } catch (err) {
    //         setErrorMessage("Something went wrong");
    //     }
    // };

    // Call searchApi when component is first rendered. BAD CODE!
    // searchApi("pasta");

    // useEffect(() => {
    //     searchApi("pizza");
    // }, []);

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                // onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList 
                    title="Cost Effective" 
                    results={filterResultsByPrice("$")}
                    // navigation={navigation}
                />
                <ResultsList 
                    title="Bit Pricier" 
                    results={filterResultsByPrice("$$")}
                    // navigation={navigation}
                />
                <ResultsList 
                    title="Big Spender" 
                    results={filterResultsByPrice("$$$")}
                    // navigation={navigation}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;