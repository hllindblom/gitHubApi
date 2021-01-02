import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllOrganizations as fetchAllOrganizationsAction } from '../store/actions';
import Table from './Table';
import loadingAnimation from '../assets/loadingAnimation.gif';
import Error from './Error';
import { H1, ToolTip } from './styled';

const OrganizationTable = ({ organizations, loading, error, fetchAllOrganizations }) => {
  useEffect(() => {
    const fetchOrganizations = async () => {
      await fetchAllOrganizations();
    };

    fetchOrganizations();

  }, []);

  return (
    <>
      {loading && (
        <img src={loadingAnimation} alt="loading..." />
      )}

      {!loading && error && (
        <Error message={error.message} />
      )}

      {!loading && !error && (
        <>
          <H1>{`Oldest ${organizations.length} organizations`}</H1>
          <ToolTip>Try out sorting by clicking on column header</ToolTip>
          <Table data={organizations} />
        </>
      )}
    </>
  );

};

OrganizationTable.propTypes = {
  organizations: PropTypes.array,
  fetchAllOrganizations: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

const mapStateToProps = (state) => ({
  organizations: state.organizations,
  loading: state.loadingTable,
  error: state.errorTable,
});

export default connect(mapStateToProps, { fetchAllOrganizations: fetchAllOrganizationsAction })(OrganizationTable);
