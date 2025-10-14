import { Button, Text, TextInput, View } from "react-native";

export default function LoginForm() { 
	return (
		<View>
			<TextInput placeholder="Email" />
			<TextInput placeholder="Password" secureTextEntry />
			<Button title="Send" onPress={() =>  console.log("Send button pressed") } />
		</View>
	)
}