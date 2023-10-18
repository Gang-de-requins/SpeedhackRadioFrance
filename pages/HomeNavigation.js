import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import WebViewData from './WebViewData';

const Stack = createStackNavigator();

export default function HomeNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="WebViewData" component={WebViewData} />
        </Stack.Navigator>
    );
}
