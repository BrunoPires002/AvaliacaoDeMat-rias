import React, { useEffect } from 'react'
import {
	ActivityIndicator,
	Alert,
	Button,
	FlatList,
	Modal,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { SearchBar } from 'react-native-elements'

import styles from '../styles'
import Form from '../styles'

export default function Restricted({ navigation }: any) {
	const [isLoading, setLoading] = React.useState<boolean>(true);
	const [data, setData] = React.useState<any[]>([]);
  
	const getMateria = async () => {
	  try {
		const response = await fetch('http://localhost:8080/avaliacao-json/materia-json.php');
		const json = await response.json();
		setData(json.materia);
	  } catch (error) {
		console.error(error);
	  } finally {
		setLoading(false);
	  }
	}
  
	useEffect(() => {
	  getMateria();
	}, []);
  
	return (
	  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		{isLoading ? <ActivityIndicator /> : (
		  <FlatList
			data={data}
			keyExtractor={({ idMateria }) => idMateria}
			renderItem={({ item }: any) => (
			  <Text style={styles.containerMateria}>
				Materia: {item.nomeMateria}
				<br />
				Professor: {item.profMateria}
				<br />
				Nota: {item.notaMateria}
				<br />
				Pontos positivos: {item.positivoMateria}
				<br />
				Pontos negativos: {item.negativoMateria}
			  </Text>
			)}
		  />
		)}
		<Button
		  title='Index'
		  onPress={() => navigation.navigate('Form')}
		/>
	  </View>
	)
  }
