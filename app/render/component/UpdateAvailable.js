import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ipcRenderer} from 'electron';
class UpdateAvailable extends Component {
    constructor(arg){
        super(arg);
        this.state = {
        }
    }
    componentDidMount=()=>{
    };
    componentWillUnmount = () =>{
    };
    beginToDownloadUpdate(){
        ipcRenderer.send('begin-to-download-update');
    }
    render() {
        return (
            <div className='update'>
                <div className='update-mask'></div>
                <div className='update-available-container'>
                    <div className='text-center update-available-wrap'>
                        <p className='update-available-wrap-title'>新版本提示</p>
                        <p className='update-available-wrap-message'>版权家3.0有新版本，请您更新</p>
                        <div className='update-available-button' onClick={e => {
                            this.beginToDownloadUpdate();
                        }}>
                            立即更新
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAvailable);
