import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router';
import {BrowserRouter,HashRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from '../component/Home';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {a: 1};
};
const mapStateToProps = (state, ownProps) => {
    return {b: 2};
};

class Router extends Component {
    constructor(arg){
        super(arg)
        this.isWatch = false
    }
    componentWillMount=()=>{
    };
    componentWillReceiveProps=(nextProps)=>{
    };
    render() {
        return (
            <content>
                <Home/>
                <HashRouter>
                    <Switch>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/article">Home</Link></li>
                        </ul>
                        <Route path='/home' component={Home}/>
                        <Route path='/article' component={Home}/>
                    </Switch>
                </HashRouter>
            </content>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Router)