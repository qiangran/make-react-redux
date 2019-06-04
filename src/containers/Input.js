import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {changeErrorMsg} from '../actions/actionPage'

class Input extends Component {

    constructor(props){
        super(props);
        this.handleSwitchError = this.handleSwitchError.bind(this);
    }

    static propTypes = {
        onSwitchErrorMessage: PropTypes.func
    }

    handleSwitchError (event) {
        /**
         * 各种计算校验，这里只做了1000整数倍的校验如果不符合规范，dispatch action 去显示错误信息
         *
         */
        let errorMsg = '';
        const value = event.target.value;
        if( value % 1000 !== 0){
            errorMsg = '请输入1000的整数倍';
        }

        if (this.props.onSwitchErrorMessage) {
            this.props.onSwitchErrorMessage(errorMsg);
        }

    }

    render () {
        return (
                <div>
                    <input  onChange={ this.handleSwitchError } maxLength={9}/>
                </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
        return {
            onSwitchErrorMessage: (errorMsg) => {
            dispatch(changeErrorMsg(errorMsg))
        }
    }
}


export default connect(null, mapDispatchToProps)(Input);
