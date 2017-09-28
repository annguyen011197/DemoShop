import React, { Component } from 'react';
import { 
View,
Text 
} from 'react-native';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Footer from './Footer';

export default class Authernication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true
        };
    }
    change(check) {
        this.setState({
            selected: check
        });
    }
    render() {
        const {
            selected
        } = this.state;
        const Body = selected ? <SignIn /> : <SignUp />;
        return (
            <View>
                <Header navigation={this.props.navigation} />
                {Body}
                <Footer 
                check={selected}
                change={this.change.bind(this)}
                />
            </View>
        );
    }
}