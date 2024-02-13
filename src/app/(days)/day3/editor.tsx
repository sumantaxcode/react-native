import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
import Markdown from 'react-native-markdown-display';

const template = `# Markdown editor

Hello World`;

const EditorScreen = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState('edit')
  return (
    <View style={styles.page}>

      <View style={styles.tabsContainer}>
        <Pressable onPress={() => setTab('edit')} style={[styles.tab, {
          borderColor: tab === 'edit' ? 'mediumorchid' : 'gray'
        }]}>
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable onPress={() => setTab('preview')} style={[styles.tab, {
          borderColor: tab === 'preview' ? 'mediumorchid' : 'gray'
        }]}>
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {
        tab === 'edit' ? (
          <TextInput
            value={content}
            multiline
            numberOfLines={50}
            style={styles.input}
            onChangeText={(text) => setContent(text)} // Update content state when input changes
          />
        ) : (
          <Markdown>{content}</Markdown>

        )
      }

    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    marginVertical: 10,
    padding: 20,
    paddingTop: 20,
    borderRadius: 10,
    fontSize: 14,
    textAlignVertical: 'top', // Change textAlignVertical to 'top' or remove it
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 10
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center'
  },
  tabText: {
    fontFamily: 'InterSemi'
  }

});

export default EditorScreen;
