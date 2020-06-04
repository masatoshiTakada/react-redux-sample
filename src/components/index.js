import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Results from './results';
import { requestFetch, requestReFetch } from '../redux/main/action';

class Main extends React.Component {
    componentWillMount() {
        this.props.requestFetch()
    }

    handleClick = () => {
        console.log(this.props)
        this.props.requestReFetch()
    }

    render() {
        return (
            <div>
                <div onClick={this.handleClick}>更新</div>
                <Results />
            </div>
        )
    }
}

const mapdispatchToProps = dispatch => bindActionCreators({
    requestFetch,
    requestReFetch,
}, dispatch);

export default connect(null, mapdispatchToProps)(Main);