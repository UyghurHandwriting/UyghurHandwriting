import React from 'react'
import { Page, Svg, Line, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import PdfPage from './Pdf/PdfPage';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 60,

    },
    header: {
        marginBottom: 20,
    },
    main: {
        flexGrow: 1,
        marginBottom: 20,
    },
    footer: {
        textAlign: 'center',
    },
    Text:{
        padding:2
    }
});


function PDFGenerator() {
    return (
        <PDFViewer width="1000" height="600">
            <PdfPage/>
        </PDFViewer>
    )
}

export default PDFGenerator 