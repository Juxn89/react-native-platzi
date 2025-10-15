import { Text } from 'react-native';

interface props {
	name?: string;
}

export const Gretting = ({ name }: props) => {
	return (
		<Text>
			{
				name ? `Hello, ${name}!` : `Hello, I am a component from components/Gretting.tsx`
			}			
		</Text>
	)
}

export default Gretting;