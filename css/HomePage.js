import * as React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerRadioFranceLogo: {
        objectFit: 'contain',
        width: 120,
        height: 120,
        marginRight: 10
    },
    headerText: {
        fontSize: 30,
        marginRight: 10
    },
    headerEducationNationaleLogo: {
        objectFit: 'contain',
        width: 80,
        height: 80
    },
    themes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    themesButton: {
        margin: 5,
        borderRadius: 20,
        width: 80,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    data: {
        display: 'flex',
        flexDirection: 'row',
    },
    titleData: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'relative',
        top: 30,
        left: 30
    },
    contentData: {
        position: 'relative',
        top: 40,
        left: 15,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10,
        width: 200,
        height: 150,
      },
      cardImage: {
        width: '100%',
        height: '85%',
        objectFit: 'contain',
      },
      cardContent: {
        padding: 10,
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      cardDescription: {
        fontSize: 14,
      },
});

export default styles;
