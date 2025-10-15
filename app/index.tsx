// import LoginForm from "@/components/LoginForm";
import NavigationStack from "@/navigation/Navigation";
import { StyleSheet, Text, View } from "react-native";
// import { StatusBar } from 'expo-status-bar';
// import {Gretting} from "@/components/Gretting";

export default function Index() {
  return (
		<NavigationStack />
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
})
