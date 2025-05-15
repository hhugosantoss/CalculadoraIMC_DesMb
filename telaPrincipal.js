
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard } from 'react-native';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');
  const [error, setError] = useState('');

  const calculateIMC = () => {
    Keyboard.dismiss();


    if (!weight || !height) {
      setError('Por favor, preencha todos os campos');
      setImc(null);
      return;
    }

    const weightNum = parseFloat(weight.replace(',', '.'));
    const heightNum = parseFloat(height.replace(',', '.'));

    if (isNaN(weightNum) || isNaN(heightNum)) {
      setError('Por favor, insira valores numéricos válidos');
      setImc(null);
      return;
    }

    if (weightNum <= 0 || heightNum <= 0) {
      setError('Peso e altura devem ser maiores que zero');
      setImc(null);
      return;
    }

    if (heightNum > 3) {
      Alert.alert(
        'Altura inválida?',
        'Você inseriu a altura em centímetros? Converta para metros (ex: 1.70)',
        [{ text: 'OK', onPress: () => { } }]
      );
      return;
    }

    setError('');

    // Cálculo do IMC
    const imcValue = weightNum / (heightNum * heightNum);
    setImc(imcValue.toFixed(2));

    // Classificação
    if (imcValue < 18.5) {
      setClassification('Abaixo do peso');
    } else if (imcValue >= 18.5 && imcValue <= 24.9) {
      setClassification('Peso normal');
    } else if (imcValue >= 25 && imcValue <= 29.9) {
      setClassification('Sobrepeso');
    } else if (imcValue >= 30 && imcValue <= 34.9) {
      setClassification('Obesidade grau I');
    } else if (imcValue >= 35 && imcValue <= 39.9) {
      setClassification('Obesidade grau II');
    } else {
      setClassification('Obesidade grau III');
    }
  };

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setImc(null);
    setClassification('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Peso (kg)</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          placeholder="Ex: 70.5"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura (m)</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={calculateIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetFields}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>

      {imc && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Seu IMC: {imc}</Text>
          <Text style={styles.classificationText}>Classificação: {classification}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 15,
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  classificationText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});

export default App;