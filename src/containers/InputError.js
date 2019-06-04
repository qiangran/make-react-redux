import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class InputError extends Component {

    static propTypes = {
        errorMsg: PropTypes.string
    }

    render () {
        return (
            <div className="error-message">
                {this.props.errorMsg }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        errorMsg: state.page.errorMsg
    }
}


export default connect(mapStateToProps)(InputError)
