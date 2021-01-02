import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { init as initAction } from '../store/actions';
import { ZenText } from './styled';
import Error from './Error';
import loadingAnimation from '../assets/loadingAnimation.gif';

const ZenOctocat = ({ zen, octocat, loading, init, error }) => {
  useEffect(() => {
    const fetchContent = async () => {
      await init();
    };

    fetchContent();
  }, []);

  return (
    <>
      {loading && (
        <img src={loadingAnimation} alt="loading..." />
      )}

      {error && (
        <Error message={error.message} />
      )}

      {!loading && !error && (
        <>
          <ZenText>{zen}</ZenText>
          <pre>{`${octocat}`}</pre>
        </>
      )}
    </>
  );
};

ZenOctocat.propTypes = {
  zen: PropTypes.string,
  octocat: PropTypes.string,
  loading: PropTypes.bool,
  init: PropTypes.func,
  error: PropTypes.object,
};

const mapStateToProps = (state) => ({
  zen: state.zen,
  octocat: state.octocat,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, {
  init: initAction,
})(ZenOctocat);
