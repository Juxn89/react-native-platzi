import HomeScreen from "@/app/HomeScreen";
import SettingsScreen from "@/app/SettingsScreen";
import { Tabs } from 'expo-router'

export const NavigationTab = () => {
	return (
		<Tabs>
			<Tabs.Screen name="Home" options={{ headerShown: false }} />
			<Tabs.Screen name="Settings" options={{ title: "Settings" }} />
		</Tabs>
	);
};

export default NavigationTab;
