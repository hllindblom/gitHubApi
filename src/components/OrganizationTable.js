import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllOrganizations as fetchAllOrganizationsAction } from '../store/actions';
import Table from './Table';
import loadingAnimation from '../assets/loadingAnimation.gif';
import { H1, ToolTip } from './styled';

const OrganizationTable = ({ organizations, loading, fetchAllOrganizations }) => {
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

      {!loading && (
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
};

const mapStateToProps = (state) => ({
  organizations: state.organizations,
  loading: state.loadingTable,
});

export default connect(mapStateToProps, { fetchAllOrganizations: fetchAllOrganizationsAction })(OrganizationTable);
