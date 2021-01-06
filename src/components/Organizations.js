import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllOrganizations as fetchAllOrganizationsAction } from '../store/actions';
import Table from './Table';
import loadingAnimation from '../assets/loadingAnimation.gif';
import Error from './Error';
import OrganizationModal from './OrganizationModal';
import { H1, ToolTip } from './styled';

const Organizations = ({ organizations, loading, error, fetchAllOrganizations }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [organizationData, setOrganizationData] = useState(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      await fetchAllOrganizations();
    };

    fetchOrganizations();
  }, []);

  const openModal = (data) => {
    setOrganizationData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setOrganizationData(null);
    setIsOpen(false);
  };

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
          <OrganizationModal organizationData={organizationData} modalIsOpen={modalIsOpen} closeModal={closeModal} />
          <Table data={organizations} modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} />
        </>
      )}
    </>
  );

};

Organizations.propTypes = {
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

export default connect(mapStateToProps, { fetchAllOrganizations: fetchAllOrganizationsAction })(Organizations);
