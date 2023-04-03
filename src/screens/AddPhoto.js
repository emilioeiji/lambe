import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'

// import { ImagePickerResponse } from 'react-native-image-picker'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob';

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    // pickImage = () => {
    //     ImagePickerResponse.showImagePicker({
    //         title: 'Escolha a imagem',
    //         maxHeight: 600,
    //         maxWidth: 800
    //     }, res => {
    //         if (!res.didCancel) {
    //             this.setState({ image: { uri: res.uri, base64: res.data }})
    //         }
    //     })
    // }

    pickImage = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 0.5,
            },
            response => {
                console.log('Resposta: ', response)
                if (response) {
                    RNFetchBlob.fs.readFile(response.uri, 'base64')
                        .then(base64Data => {
                            this.setState({ image: { uri: response.uri, base64: base64Data }});
                        })
                        .catch(error => console.log(error))
                } else {
                    console.log("URI da imagem está vazia ou indefinida");
                }
            }
        )
    }

    save = async () => {
        Alert.alert('Imagem adicionada!', this.state.comment)
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image
                            source={this.state.image}
                            style={styles.image}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this.pickImage}
                        style={styles.buttom}
                    >
                        <Text style={styles.buttomText}>
                            Escolha a foto
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Algum comentário para a foto?'
                        style={styles.input}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                    />
                    <TouchableOpacity
                        onPress={this.save}
                        style={styles.buttom}
                    >
                        <Text style={styles.buttomText}>
                            Salvar
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#eee',
        marginTop: 10,
    },
    image: {
        width: Dimensions.get('window'). width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
})

export default AddPhoto