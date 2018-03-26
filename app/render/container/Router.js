import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router';
import {BrowserRouter,HashRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from '../component/Home';
import Article from '../component/Article';
const {ipcRenderer} = require('electron');


const mapDispatchToProps = (dispatch, ownProps) => {
    return {a: 1};
};
const mapStateToProps = (state, ownProps) => {
    return {b: 2};
};

class Router extends Component {
    constructor(arg){
        super(arg);
        this.isWatch = false
    }
    componentWillMount=()=>{
    };
    componentWillReceiveProps=(nextProps)=>{
    };
    screenShot(url){
        console.log(__dirname);
        ipcRenderer.send('screenshot', 'url here');
        // ss();
    };
    render() {
        return (
            <content>
                <Home/>
                <HashRouter>
                    <Switch>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/article">Article</Link></li>
                            <button onClick={this.screenShot}>screenshot</button>
                        </ul>
                        <Route path='/home' component={Home}/>
                        <Route path='/article' component={Article}/>
                    </Switch>
                </HashRouter>
            </content>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Router)