import React, { Component } from 'react';
import { View,
         Text,
         Image,
         StyleSheet,
         Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLOR, ThemeProvider, Card } from 'react-native-material-ui';
import LittleImg from '../../../../media/temp/little.jpg';
import MaxiImg from '../../../../media/temp/maxi.jpg';
import MidiImg from '../../../../media/temp/midi.jpg';

const { height, width } = Dimensions.get('window');

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
        },
    },
};

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderSwiper: false
        };
    }
    
    //Hien thi hinh anh o Swipper
    componentWillMount() {
        setTimeout(() => this.setState({
            renderSwiper: true
        }), 1000);
    }
    

    render() {
        const { wapper,
            textStyle,
            imgStyle } = styles;

        const renderSwiper = (
            <Swiper
            autoplay
            autoplayTimeout={3}
            setTimeout={1} //Hien thi hinh anh o swipper
            showsButtons
            >
                <View >
                    <Image
                        source={MaxiImg}
                        style={imgStyle}
                    />
                </View>
                <View >
                    <Image
                        source={LittleImg}
                        style={imgStyle}
                    />
                </View>
                <View >
                    <Image
                        source={MidiImg}
                        style={imgStyle}
                    />
                </View>
            </Swiper>
        );

        const editedSwiper = this.state.renderSwiper ? renderSwiper : <Text> NULL </Text>;
        return (
            <ThemeProvider uiTheme={uiTheme}>
               <Card style={{ container: wapper }}>
                   <View style={{ flex: 2 }}>
                    <Text style={textStyle}> List of Category </Text>
                   </View>
                   <View style={{ flex: 8 }}>
                   {editedSwiper}
                   </View>
                </Card>
            </ThemeProvider>
        );
    }
}

const styles = StyleSheet.create({
    wapper: {
        backgroundColor: 'white', 
        margin: 10,
        height: height / 2.75,
        padding: 10,
    },
    textStyle: {
        fontSize: 19,
        color: '#CED8E7'
    },
    imgStyle: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    }
});
