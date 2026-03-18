import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>sobre mim com react native</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bio')}>
        <Text style={styles.buttonText}>Ver minha bio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#16213e',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 25,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00d4ff',
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 12,
  },
  buttonText: {
    color: '#0b0c10',
    fontSize: 17,
    fontWeight: '600',
  },
});