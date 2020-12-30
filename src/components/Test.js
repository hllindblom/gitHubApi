import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllOrganizations as fetchAllOrganizationsAction } from '../store/actions';

const Test = ({ organizations, fetchAllOrganizations }) => {
  useEffect(() => {
    console.log(organizations);
    console.log(typeof fetchAllOrganizations);
    const a = fetchAllOrganizations();
    console.log(a);
  }, []);

  return (
    <div>Test</div>
  );
};

Test.propTypes = {
  organizations: PropTypes.array,
  fetchAllOrganizations: PropTypes.func,
};

const mapStateToProps = (state) => ({
  organizations: state.organizations,
});

export default connect(mapStateToProps, {
  fetchAllOrganizations: fetchAllOrganizationsAction,
})(Test);
