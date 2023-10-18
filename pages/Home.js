import * as React from 'react';
import { SafeAreaView, Text, Image, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
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

function Articles({ navigation }) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([
        { id: '1', title: 'Moqueries, discriminations, stress : le rapport des jeunes filles à leurs règles', url: 'https://www.radiofrance.fr/mouv/podcasts/reporterter/moqueries-discriminations-stress-le-rapport-des-jeunes-filles-a-leurs-regles-5401404', image: 'https://www.radiofrance.fr/s3/cruiser-production/2023/10/2420a8e7-d2df-48cf-9456-38069267f887/560x315_sc_gettyimages-1306632928.webp' },
        { id: '2', title: 'France, États-Unis : deux modèles face aux discriminations', url: 'https://www.radiofrance.fr/franceculture/podcasts/l-invite-e-des-matins-d-ete/france-etats-unis-deux-modeles-face-aux-discriminations-2794998', image: 'https://www.radiofrance.fr/s3/cruiser-production/2023/07/ced909e3-aebf-4abd-848a-5abe6219a3ec/560x315_sc_sc-sitejpp.webp' },
        { id: '3', title: 'Quand les discriminations affectent notre santé psychique et physique', url: 'https://www.radiofrance.fr/franceinter/podcasts/grand-bien-vous-fasse/grand-bien-vous-fasse-du-lundi-08-mai-2023-7427289', image: 'https://www.radiofrance.fr/s3/cruiser-production/2023/05/67ba3b8d-f8a0-4b1b-8f1a-d2520035987d/560x315_sc_gettyimages-1344614323.webp' },
        { id: '4', title: 'Médecin, un métier qui ne peut rester aveugle aux discriminations constatées dans son cabinet', url: 'https://www.radiofrance.fr/franceinter/podcasts/alors-voila/medecin-un-metier-qui-ne-peut-rester-aveugle-aux-discriminations-constatees-dans-son-cabinet-5420978', image: 'https://www.radiofrance.fr/s3/cruiser-production/2023/07/4ffc412e-afed-41fc-af68-e6ae421444a7/560x315_sc_xxxxxdiscrimination-gettyimages-174850257.webp' },
    ]);

    React.useEffect(() => {
        // Récupération des infos radio france via l'open api
    }, []);

    const handlePress = (item) => {
        navigation.navigate('WebViewData', { url: item.url });
    }

    const displayTitle = (title) => {
        if (title.length > 15) {
            return title.substr(0, 15) + '...';
        }
        return title;
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item)}
        >
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{displayTitle(item.title)}</Text>
                <Image
                    source={{ uri: item.image }}
                    style={styles.cardImage}
                />
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <Text style={styles.titleData}>Articles</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.contentData}
            />
        </View>
    );
}

function Videos({ navigation }) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([
        { id: '1', title: 'Référendum en Australie : les aborigènes toujours discriminés', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-enjeux-internationaux/referendum-en-australie-les-aborigenes-toujours-discrimines-4174600', image: 'https://www.radiofrance.fr/s3/cruiser-production/2023/10/ea18fe6e-cdd4-4133-bf3f-ec4580750e35/560x315_sc_000-9x47tl.webp' },
        { id: '2', title: "L'armée israélienne donne 24 heures aux Palestiniens pour évacuer Gaza", url: 'https://www.radiofrance.fr/franceculture/podcasts/journal-de-12h30/journal-de-12h30-du-dimanche-15-octobre-2023-8047217', image: 'https://www.radiofrance.fr/s3/cruiser-production/2023/10/17bc9ffe-1a39-4e16-8909-d6435b592ee0/560x315_sc_sc_000-33yc3vv.webp' },
        { id: '3', title: 'Comment le "préjugé de couleur" fut-il exploité par les "petits blancs" de Saint-Domingue ?', url: 'https://www.radiofrance.fr/franceculture/podcasts/le-pourquoi-du-comment-histoire/le-pourquoi-du-comment-histoire-chronique-du-jeudi-12-octobre-2023-7337493', image: 'https://www.radiofrance.fr/s3/cruiser-production/2023/10/005d10e8-4e03-43c9-b33c-dd158acc72ba/560x315_sc_sc_sc_histoire-12-09-2023.webp' },
        { id: '4', title: "Neuf personnes sont en garde à vue après l'attentat au couteau commis contre un professeur d'Arras", url: 'https://www.radiofrance.fr/franceculture/podcasts/journal-de-8-h/journal-de-8h-du-samedi-14-octobre-2023-5131371', image: 'https://www.radiofrance.fr/s3/cruiser-production/2023/10/0416fe08-2fb6-4170-a998-13023014088d/560x315_sc_sc_denis-charlet.webp' },
    ]);

    React.useEffect(() => {
        // Récupération des infos radio france via l'open api
    }, []);

    const handlePress = (item) => {
        navigation.navigate('WebViewData', { url: item.url });
    }

    const displayTitle = (title) => {
        if (title.length > 15) {
            return title.substr(0, 15) + '...';
        }
        return title;
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item)}
        >
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{displayTitle(item.title)}</Text>
                <Image
                    source={{ uri: item.image }}
                    style={styles.cardImage}
                />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ marginTop: 20 }}>
            <Text style={styles.titleData}>Vidéos</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.contentData}
            />
        </View>
    );
}

function Podcasts({ navigation }) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([
        { id: '1', title: 'Le critère des discriminations', url: 'https://www.radiofrance.fr/franceculture/podcasts/a-present/le-critere-des-discriminations-3526821', image: 'https://www.radiofrance.fr/s3/cruiser-production/2021/02/b966a127-c9e1-4856-9224-84a825efbe80/560x315_discrimination_1_.webp' },
    ]);

    React.useEffect(() => {
        // Récupération des infos radio france via l'open api
    }, []);

    const handlePress = (item) => {
        navigation.navigate('WebViewData', { url: item.url });
    }

    const displayTitle = (title) => {
        if (title.length > 15) {
            return title.substr(0, 15) + '...';
        }
        return title;
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item)}
        >
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{displayTitle(item.title)}</Text>
                <Image
                    source={{ uri: item.image }}
                    style={styles.cardImage}
                />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ marginTop: 20 }}>
            <Text style={styles.titleData}>Podcasts</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.contentData}
            />
        </View>
    );
}

export default function Home({ navigation }) {
    const [selectedTheme, setSelectedTheme] = React.useState("Tout");
    const data = [
        { key: 'Articles', component: <Articles navigation={navigation} />, name: 'Articles' },
        { key: 'Vidéos', component: <Videos navigation={navigation} />, name: 'Vidéos' },
        { key: 'Podcasts', component: <Podcasts navigation={navigation} />, name: 'Podcasts' },
    ]
    const shouldScroll = data.length > 2;

    return (
        <SafeAreaView>
            <Header />
            <Themes setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />
            <FlatList
                data={data}
                renderItem={({ item }) => item.name === selectedTheme || selectedTheme === 'Tout' ? item.component : null}
                scrollEnabled={shouldScroll}
                style={{minHeight: '100%'}}
            />
        </SafeAreaView>
    );
}
