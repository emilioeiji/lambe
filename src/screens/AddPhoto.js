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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickImage = () => {

        const options = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.5,
        }

        launchImageLibrary( options ,response => {

            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else {
                console.log('ImagePicker URI: ', response.assets[0].fileName)
                const source = { uri: response.assets[0].uri }
                this.setState({
                    image: source,
                    base64: response.assets[0].base64
                })
            }
        })
    }

    save = async () => {
        Alert.alert('Imagem adicionada!', this.state.comment)
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={[styles.imageContainer, !this.state.image && styles.iconCamera]}>
                        {this.state.image ? 
                            <Image
                            source={this.state.image}
                            style={styles.image}
                        />
                        :
                            <Icon 
                                name='camera'
                                size={50}
                                color='#aaa'
                            />
                        }
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
        alignItems: 'center'
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
    },
    iconCamera: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AddPhoto