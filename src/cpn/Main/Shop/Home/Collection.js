import React, { Component } from 'react';
import { View,
         Text,
         Image,
         StyleSheet,
         Dimensions } from 'react-native';
import { COLOR, ThemeProvider, Card } from 'react-native-material-ui';
import BannerImg from '../../../../media/temp/banner.jpg';

//Lấy kích thước của màn hình
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

export default class Collection extends Component {
    render() {
        const { wapper,
                textStyle,
                imgStyle } = styles;
        return (
            //Cần thêm ThemeProvider để sử dụng các Component ở Material Ui
            <ThemeProvider uiTheme={uiTheme}> 
               <Card style={{ container: wapper }}>
                   <View style={{ flex: 1 }}>
                    <Text style={textStyle}> String Collection </Text>
                   </View>
                   <Image
                   source={BannerImg}
                   style={imgStyle}
                   />
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
        height: '80%',
        alignSelf: 'center',
    }
});
