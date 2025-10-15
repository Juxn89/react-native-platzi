import { Gretting } from "@/components/Gretting";
import LoginForm from "@/components/LoginForm";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
		<View style={styles.container}>
			<Gretting name="Jose" />
			<LoginForm />
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
})
