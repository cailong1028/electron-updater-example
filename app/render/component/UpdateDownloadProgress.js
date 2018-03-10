import React, {Component} from 'react'
import {connect} from 'react-redux'

class UpdateDownloadProgress extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            processbar:0
        }
    }
    componentDidMount=()=>{
        this.timer = setInterval(()=>{
            if(this.state.processbar<=100){
                this.setState({
                    processbar:this.state.processbar+5
                })
            }else {
                
                clearInterval(this.timer)
            }
        },1000)
    }
    componentWillUnmount = () =>{
        clearInterval(this.timer)
    }
    render() {
        const {
            percent
        } = this.props;
        return (
            <div className='update'>
                <div className='update-mask'></div>
                <div className='update-loading-container'>
                    <div className='text-center update-loading-wrap'>
                        <p className='update-loading-wrap-title'>新版本提示</p>
                        <p className='update-loading-wrap-message'>正在下载... </p>
                        <div className='update-loading-process-bar'>
                            <div style={{width:parseInt(percent)+'%'}} className='update-loading-process-bar-inner'></div>
                        </div>
                        <p className='update-loading-wrap-number'>{parseInt(percent<=100?percent:100)}%</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDownloadProgress);
