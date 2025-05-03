import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'

export default function Login() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => { 
        console.log('username', username);
        console.log('password', password);
    }

  return (
      <View>
          <Text style={ styles.inputText }>Login</Text>
        <TextInput placeholder='username'
            style={styles.input}
            value={username}
            onChangeText={setUsername}
        />
          <TextInput placeholder='password'
              style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
        />

          <View style={styles.inputButton }>
             <Button title='Login' onPress={handleLogin} />
          </View>
        
    </View>
  )
    
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#eee',
    },
    inputButton: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#333',
    },
    inputText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});
