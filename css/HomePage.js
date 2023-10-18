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
});

export default styles;
