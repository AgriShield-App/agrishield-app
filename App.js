import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AgriShield = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌱 AgriShield</Text>
      <Text style={styles.subtitle}>Crop Problem Solver</Text>
      <Button title="📸 Scan Crop Problem" onPress={() => alert('Camera will open here!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0fff0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 30,
  },
});

export default AgriShield;
