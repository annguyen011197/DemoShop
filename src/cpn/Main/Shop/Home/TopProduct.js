import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import { COLOR, ThemeProvider, Card } from 'react-native-material-ui';
import product1Img from '../../../../media/temp/sp1.jpeg';
import product2Img from '../../../../media/temp/sp2.jpeg';
import product3Img from '../../../../media/temp/sp3.jpeg';
import product4Img from '../../../../media/temp/sp4.jpeg';

const { height, width } = Dimensions.get('window');
const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            width: 100
        },
    },
};

const productWidth = (width - 60) / 2;
const productHeight = (productWidth * 4) / 3;

class Product extends Component {
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
            <Card 
             style={{
                 flex: 1,
                 justifyContent: 'space-around'
             }}
            >
                <Image
                 source={this.props.src}
                 style={{
                     width: productWidth,
                     height: productHeight,
                 }}
                />
                <Text style={{ fontWeight: 'bold', margin: 2, fontSize: 16, marginLeft: 10 }}>{this.props.name}</Text>
                <Text style={{ color: 'red', margin: 5, marginLeft: 10 }}>{this.props.price}</Text>
            </Card>
            </ThemeProvider>
        );
    }
}

export default class TopProduct extends Component {
    render() {
        const {
            wapper,
            textStyle,
            containerProduct,
            product
        } = styles;
        return (
            <ThemeProvider uiTheme={uiTheme} >
               <Card style={{ container: wapper }}>
                   <View style={{ flex: 1 }}>
                    <Text style={textStyle}> Top Product </Text>
                   </View>
                   <View style={containerProduct}>
                       <Product 
                        src={product1Img}
                        name='Black off the'
                        price='124$'
                        style={product}
                       />
                       <Product
                        src={product2Img}
                        name='Constrast embro'
                        price='121$'
                        style={product}
                       />
                    </View>
                    <View style={containerProduct}>
                       <Product 
                        src={product3Img}
                        name='Black off the'
                        price='124$'
                        style={product}
                       />
                       <Product
                        src={product4Img}
                        name='Constrast embro'
                        price='121$'
                        style={product}
                       />
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
        height: height * 1.1,
        padding: 10,
    },
    textStyle: {
        fontSize: 19,
        color: '#CED8E7'
    },
    containerProduct: { 
        flexDirection: 'row', 
        justifyContent: 'space-around',
        flex: 7
    },
    product: {
        flex: 1
    }
});
