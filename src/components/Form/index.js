import React, { useState, Fragment } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList
} from 'react-native';
import styles from './style';
import ResultImc from './ResultImc';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);
  
  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");
    let totalImc = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
    setImcList ((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}]);
    setImc(totalImc);
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate(500);
      setErrorMessage("campo obrigatório*");
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é: ");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);    
    } else {
      verificationImc();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("preencha o peso e altura");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable 
          onPress={Keyboard.dismiss} 
          style={styles.form}
        >
          <Fragment>
            <Text style={styles.formLabel}>Altura:</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={setHeight}
              value={height}
              placeholder="Ex: 1.80"
              keyboardType="numeric"
            />
            <Text style={styles.formLabel}>Peso:</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={setWeight}
              value={weight}
              placeholder="Ex: 80.00"
              keyboardType="numeric"
            />   
            <TouchableOpacity 
              style={styles.buttonCalculator}
              onPress={() => validationImc()} 
            >
              <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </Fragment>
        </Pressable>
      ) :  (
        <View style={styles.showResultImc}> 
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity 
            style={styles.buttonCalculator}
            onPress={() => validationImc()} 
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        style={styles.listImcs}
        data={imcList.reverse()}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.resultImcItem}>
            <Text style={styles.textResultImcItemList}>Resultado IMC = </Text>
            {item.imc}
          </Text>
        )}
      />
    </View>        
  );
}