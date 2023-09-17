import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const PokemonDetails = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);

    const fetchPokemonData = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            setPokemonData(response.data);
        } catch (error) {
            console.error(error);
            setPokemonData(null);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome ou número do Pokémon"
                value={pokemonName}
                onChangeText={setPokemonName}
            />
            <TouchableOpacity style={styles.button} onPress={fetchPokemonData}>
                <Text style={styles.buttonText}>Consultar</Text>
            </TouchableOpacity>
            {pokemonData && (
                <View>
                    <Image
                        source={{ uri: pokemonData.sprites.front_default }}
                        style={styles.image}
                    />
                    <Text style={styles.name}>{pokemonData.name}</Text>
                    <Text style={styles.abilities}>Habilidades: {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 8,
        padding: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    image: {
        width: 150,
        height: 150,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
    },
    abilities: {
        fontSize: 18,
        marginTop: 8,
    },
});

export default PokemonDetails;
