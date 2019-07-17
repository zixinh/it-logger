import React from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { id, firstname, lastname }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: 'technician deleted' });
  };
  return (
    <li className="collection-item">
      <div>
        {firstname} {lastname}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTech }
)(TechItem);
