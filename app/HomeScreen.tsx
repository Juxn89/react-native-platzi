import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
	const navigation = useNavigation();

	const goToSettings = () => navigation.navigate("Settings" as never);

	return (
		<View>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>

			<Button title="Go to Settings" onPress={goToSettings} />
		</View>
	);
};

export default HomeScreen;
