import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducer/counter';
import thunk from 'redux-thunk';
import {ipcRenderer} from 'electron';

import UpdateDownloadProgress from '../component/UpdateDownloadProgress';
import UpdateAvailable from '../component/UpdateAvailable';


import Router from './Router';

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer,middleware);
export default class Root extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            updateAvailable: false,
            downloadProgress: false,
            progress: 0
        };
        ipcRenderer.on('update-error', () => {
            this.setState({
                updateAvailable: true,
                downloadProgress: false,
                progress: 0
            });
        });
        ipcRenderer.on('update-available', () => {
            this.setState({
                updateAvailable: true,
                downloadProgress: false,
                progress: 0
            });
        });
        ipcRenderer.on('download-progress', (event, progressObj) => {
            this.setState({
                updateAvailable: false,
                downloadProgress: true,
                progress: progressObj.percent
            });
        });
        ipcRenderer.on('update-downloaded', () => {
            this.setState({
                updateAvailable: false,
                downloadProgress: false,
                progress: 100
            });
        });
    }

    render(){
        const {updateAvailable, downloadProgress, progress} = this.state;
        return(
            <div>
                <Provider store={store}>
                    <div>
                        <Router></Router>
                        {
                            downloadProgress && <UpdateDownloadProgress percent = {progress}/>
                        }
                        {
                            updateAvailable && <UpdateAvailable/>
                        }
                    </div>
                </Provider>
            </div>
        )
    }
}