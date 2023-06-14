import { Component } from 'react';
import css from './Filter.module.css'

export default class Filter extends Component {
  render() {
    const { searchInputHandler } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <input
          className={css.searchInput}
          type="text"
          onChange={searchInputHandler}
        />
      </>
    );
  }
}
