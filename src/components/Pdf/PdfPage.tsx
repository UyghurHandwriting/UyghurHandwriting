import React from 'react'
import { Page, Svg, Line, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import PdfHeader from './PdfHeader';
import PdfFooter from './PdfFooter';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 50
    },
    main: {
        flexDirection: 'column',
        flexGrow: 1,
    },

    text: {
        padding: 2,
        zIndex: 30,
        color: "#4a4546"
    },
    line: {

    }
});
function PdfPage() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <PdfHeader />
                <View style={styles.main}>
                    <Text>Main text</Text>

                    <Svg height="210" width="500">
                        <Line
                            x1="0"
                            y1="0"
                            x2="900"
                            y2="0"
                            strokeWidth={2}
                            stroke="rgb(0,0,0)"
                        />
                        <Text
                            x="0"
                            y="5"
                            style={{
                                position: 'absolute',
                                marginLeft: '5mm',
                                marginTop: '-3mm',
                                width: '100%',
                            }}
                            
                        >
                            Text 1
                        </Text>

                        <Line
                            x1="0"
                            y1="10"
                            x2="900"
                            y2="10"
                            strokeWidth={2}
                            stroke="rgb(0,0,0)"
                        />
                        <Text
                            x="0"
                            y="15"
                            style={{
                                position: 'absolute',
                                marginLeft: '5mm',
                                marginTop: '-3mm',
                                width: '100%',
                            }}
                            
                        >
                            Text 2
                        </Text>

                        <Line
                            x1="0"
                            y1="20"
                            x2="900"
                            y2="20"
                            strokeWidth={2}
                            stroke="rgb(0,0,0)"
                        />
                        <Text
                            x="0"
                            y="25"
                            style={{
                                position: 'absolute',
                                marginLeft: '5mm',
                                marginTop: '-3mm',
                                width: '100%',
                            }}
                            
                        >
                            Text 3
                        </Text>

                        <Line
                            x1="0"
                            y1="30"
                            x2="900"
                            y2="30"
                            strokeWidth={2}
                            stroke="rgb(0,0,0)"
                        />
                        <Text
                            x="0"
                            y="35"
                            style={{
                                position: 'absolute',
                                marginLeft: '5mm',
                                marginTop: '-3mm',
                                width: '100%',
                            }}
                        >
                            Text 4
                        </Text>
                    </Svg>
                </View>

                <PdfFooter />
            </Page>
        </Document>
    )
}

export default PdfPage