import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList} from 'react-native';

const datasource = [
    {data: [
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'},
        ], title: 'Vowels', bgcolor: "yellow"},
    {data: [
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
            {key: 't'},
            {key: 'v'},
            {key: 'w'},
            {key: 'x'},
            {key: 'y'},
            {key: 'z'},
        ], title: 'Consonants', bgcolor: "lightblue"},
]

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    )
}

export default function App() {
    return (
        <View style={styles.container}>
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title, bgcolor}})=>(
                             <Text style={[styles.headerText, {backgroundColor: bgcolor}]}>{title}</Text>
                         )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    opacityStyle: {
        borderWidth: 1,
        padding: 10,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
