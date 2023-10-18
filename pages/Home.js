import * as React from 'react';
import { SafeAreaView, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import styles from '../css/HomePage';

function Header() {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/radiofrance-logo.png')}
                style={styles.headerRadioFranceLogo}
            />
            <Text
                style={styles.headerText}
            >
                X
            </Text>
            <Image
                source={require('../assets/education-nationale-logo.png')}
                style={styles.headerEducationNationaleLogo}
            />
        </View>
    );
}

function Themes(props) {

    return (
        <View style={styles.themes}>
            {/* <Button
                title="Tout"
                onPress={() => props.setSelectedTheme('Tout')}
                color={props.selectedTheme === 'Tout' ? 'red' : 'black'}
            /> */}
            <TouchableOpacity
                onPress={() => props.setSelectedTheme('Tout')}
                style={[styles.themesButton, { backgroundColor: props.selectedTheme === 'Tout' ? 'gray' : 'lightgray' }]}
            >
                <Text>Tout</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.setSelectedTheme('Articles')}
                style={[styles.themesButton, { backgroundColor: props.selectedTheme === 'Articles' ? 'gray' : 'lightgray' }]}
            >
                <Text>Articles</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.setSelectedTheme('Vidéos')}
                style={[styles.themesButton, { backgroundColor: props.selectedTheme === 'Vidéos' ? 'gray' : 'lightgray' }]}
            >
                <Text>Vidéos</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.setSelectedTheme('Podcasts')}
                style={[styles.themesButton, { backgroundColor: props.selectedTheme === 'Podcasts' ? 'gray' : 'lightgray' }]}
            >
                <Text>Podcasts</Text>
            </TouchableOpacity>
        </View>
    );
}

export default function Home({ navigation }) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [themes, setThemes] = React.useState([]);
    const [selectedTheme, setSelectedTheme] = React.useState("Tout");

    return (
        <SafeAreaView>
            <Header />
            <Themes setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />
        </SafeAreaView>
    );
}
