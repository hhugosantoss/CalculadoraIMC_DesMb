# Calculadora de IMC

Aplicativo simples desenvolvido com **React Native** para calcular o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos pelo usuário.

## Funcionalidades

- Entrada de peso (em kg) e altura (em metros).
- Cálculo automático do IMC.
- Exibição da classificação (ex: Abaixo do peso, Peso normal, Obesidade grau I, etc.).
- Validações para entradas incorretas ou incompletas.
- Botão para limpar os campos e reiniciar o cálculo.

## Capturas de Tela

> ![image](https://github.com/user-attachments/assets/5a930785-7861-40d3-964d-bd161116a906)


##  Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) *(opcional, dependendo do ambiente usado)*

##  Fórmula Utilizada

A fórmula do IMC é:

```
IMC = peso / (altura * altura)
```

## 🧾 Classificações do IMC

| IMC                  | Classificação         |
|----------------------|-----------------------|
| Menor que 18.5       | Abaixo do peso        |
| 18.5 – 24.9          | Peso normal           |
| 25.0 – 29.9          | Sobrepeso             |
| 30.0 – 34.9          | Obesidade grau I      |
| 35.0 – 39.9          | Obesidade grau II     |
| 40.0 ou mais         | Obesidade grau III    |

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/imc-calculator.git
   cd imc-calculator
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o app:
   - Com Expo:
     ```bash
     npx expo start
     ```
   - Com React Native CLI:
     ```bash
     npx react-native run-android
     # ou
     npx react-native run-ios
     ```

## Requisitos

- Node.js
- React Native CLI ou Expo CLI
- Emulador Android/iOS ou dispositivo físico

