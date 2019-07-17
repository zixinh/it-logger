import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logAction';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = () => {
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div className="nav-wrapper">
        <i>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs..."
              ref={text}
              onChange={onChange}
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </i>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchLogs }
)(SearchBar);
