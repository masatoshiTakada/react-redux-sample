import React from 'react';
import { connect } from 'react-redux';

class Results extends React.Component {

  // マップ
  resultsRender = () => {
    if (this.props.isError === true) {
      // エラーの場合
      return (
        <div>システムエラー</div>
      );
    } else {
      return(
        this.props.arrayExample.map(arr => {
          return (
            <table>
                <tr>{arr.id}</tr>
                <tr>{arr.testName}</tr>
            </table>
          )
        })
      ); 
    }
  }

  // レンダー
  render() {
    return (
      <div>
        {this.props.isLoading
          ? console.log('読込中')
          : this.resultsRender()
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.mainState.isFetching,
  isError: state.mainState.isError,
  arrayExample: state.mainState.response.arrayExample
});

export default connect(mapStateToProps)(Results);
