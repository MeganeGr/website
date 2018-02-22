import React, {Component} from 'react';
import {NavLink} from 'react-router';
import {connect} from 'react-redux';
import './ContactPage.scss';

class ContactPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadContact();
  }

  render() {
    return (
      <div id='contact-container'>
      Hello
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  aboutme: state.aboutme
});

export default connect(mapStateToProps)(ContactPage)