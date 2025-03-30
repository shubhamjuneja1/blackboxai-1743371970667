import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cloth Rental App</Text>
      <View style={styles.buttonContainer}>
        <Button title="Admin Login" onPress={() => {}} />
        <Button title="Manager Login" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  buttonContainer: {
    width: '80%',
    gap: 10
  }
});