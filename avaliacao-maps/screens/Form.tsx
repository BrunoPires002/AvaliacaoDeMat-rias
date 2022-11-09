import React from 'react'
import {
	Button,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import styles from '../styles'

import { Picker } from '@react-native-picker/picker'


export default function Form({ navigation }: any) {
	const [professor, setProf] = React.useState("");
	const [materia, setMateria] = React.useState("");
	const [nota, setNota] = React.useState("");
	const [positivos, setPositivos] = React.useState("");
	const [negativos, setNegativos] = React.useState("");
  
	const verificar = async () => {
	  await fetch('http://localhost:8080/avaliacao-json/materia-inserir.php', {
		method: 'post',
		mode: 'no-cors',
		headers: {
		  Accept: 'application/json',
		  'Content-type': 'application/json'
		},
		body: JSON.stringify({
		  prof: professor,
		  materia: materia,
		  nota: nota,
		  positivos: positivos,
		  negativos: negativos,
		})
	  })
	}
  
	return (
	  <View style={{ flex: 1, width: '90', justifyContent: 'center' }}>
		<View style={styles.containerTudo}>
		<Text style={{ justifyContent:'center', textAlign:'center', fontWeight: 'bold'}}>INDEX</Text>
		  <View style={styles.containerNota}>
			<TextInput
			  style={styles.inputMateria}
			  placeholder='Nome da meteria'
			  autoFocus={true}
  
			  onChangeText={(text: string) => setMateria(text)}
			/>
			<TextInput
			  style={styles.inputNota}
			  placeholder='Nota'
			  autoFocus={true}
			  keyboardType={'numeric'}
  
			  onChangeText={(Double: any) => setNota(Double)}
			/>
		  </View>
		  <TextInput
			style={styles.input}
			placeholder='Professor'
			autoFocus={true}
			multiline={true}
			keyboardType={'numeric'}
  
			onChangeText={(Double: any) => setProf(Double)}
		  />
		  <TextInput
			style={styles.pontos}
			placeholder='Pontos positivos'
			autoFocus={true}
			multiline={true}
			keyboardType={'numeric'}
  
			onChangeText={(Double: any) => setPositivos(Double)}
		  />
		  <TextInput
			style={styles.pontos}
			placeholder='Negativos'
			multiline={true}
			autoFocus={true}
			keyboardType={'numeric'}
  
			onChangeText={(Double: any) => setNegativos(Double)}
		  />
		  <Button
			title='Enviar'
			onPress={() => verificar()}
		  />
		  <Button
			title='Exibição'
			onPress={() => navigation.navigate('Restricted')}
		  />
		  <Button
			title='Mapa'
			onPress={() => navigation.navigate('Mapa')}
		  />
		</View>
	  </View>
  
	)
  }