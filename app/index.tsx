import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import PokemonCard from "./components/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {
  const [results, setResults] = useState<Pokemon[]>([]);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
      const response = await fetch(URL);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <ScrollView style={styles.main}>
      <View style={styles.listContainer}>
        {results.map((pokemon) => (
          <PokemonCard 
            key={pokemon.name} 
            name={pokemon.name} 
            url={pokemon.url} 
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  }
});