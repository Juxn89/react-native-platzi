import LoginForm from "@/components/LoginForm";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <View
      style={ styles.container }
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
			<LoginForm />
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
