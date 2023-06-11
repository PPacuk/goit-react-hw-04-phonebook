import { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" onChange={this.props.searchInputHandler} />
      </>
    );
  }
}
