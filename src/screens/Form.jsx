import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('seuemail@example.com');
    const [password, setPassword] = useState('suasenha');

    const handleLogin = () => {
        if (email && password) {

            if (email === 'seuemail@example.com' && password === 'suasenha') {
                navigation.navigate('Universities');
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Digite seu email"
            />
            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                placeholder="Digite sua senha"
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
});
