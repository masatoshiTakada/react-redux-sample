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
        this.props.arrayExample.map((arr, i) => {
          return (
            <table key={`table-${i}`}>
              <tbody>
              <tr><td>{arr.id}</td></tr>
              <tr><td>{arr.testName}</td></tr>
              </tbody>
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
  arrayExample: state.mainState.arrayExample
});

export default connect(mapStateToProps)(Results);
