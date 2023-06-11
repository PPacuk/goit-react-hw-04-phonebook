import { Component } from 'react';
import Contacts from '../Contacts/Contacts';

export default class SearchBox extends Component {
  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" onChange={this.props.searchInputHandler} />
        <Contacts contacts={this.props.contacts} filter={this.props.filter} />
      </>
    );
  }
}
