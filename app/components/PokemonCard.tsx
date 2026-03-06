import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface PokeCardsProps {
    name: string;
    url: string;
}

const PokemonCard = ({ name, url }: PokeCardsProps) => {
    const pokemonId = url.split("/").filter(Boolean).pop();
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: imageUrl }}
                style={styles.pokemonImage}
            />
            <Text style={styles.pokemonName}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        margin: 5,
        width: '45%', 
    },
    pokemonImage: {
        width: 100, 
        height: 100,
        resizeMode: 'contain',
    },
    pokemonName: {
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
});

export default PokemonCard;