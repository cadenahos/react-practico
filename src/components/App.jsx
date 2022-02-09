import React, { Component } from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/login';
import '../styles/global.css';
class App extends Component {
    render() {
        return (
            <Layout>
                <Login/>
            </Layout>
        );
    }
}

export default App;