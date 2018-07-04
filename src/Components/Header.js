import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Cryptocurrency App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 55,
        display: "flex",
        alignItems: "center"
    },
    header: {
        fontWeight: "bold",
        fontSize: 20
    }
})

export default Header;