import * as React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewData({ route }) {
    const { url } = route.params;

    React.useEffect(() => {
        console.log("URL: ", url);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1}}>
            <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
            />
        </SafeAreaView>
    );
}
