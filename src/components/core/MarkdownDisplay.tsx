import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Markdown from 'react-native-markdown-display';


const MarkdownDisplay = ({ children }: PropsWithChildren) => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.page}
        >
            <Markdown style={markdownStyles}>
                {children}
            </Markdown>
        </ScrollView>
    )
}
const markdownStyles = {
    heading1: {
        fontFamily: 'Inter',
        color: '#212020',
        marginTop: 15,
        marginButtom: 10,
        lineHeight: 40,
    },
    heading2: {
        fontFamily: 'InterBold',
        color: '#404040',
        marginTop: 10,
        marginButtom: 5,
        lineHeight: 30,

    },
    body: {
        // fontFamily: 'InterSemi',
        fontSize: 16,
        lineHeight: 24,
    },
    code_inline: {
        padding: 10,
        color: 'red',
        borderRadius: 10,
        borderWidth: 2,
    }
}
const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10
    }
})
export default MarkdownDisplay