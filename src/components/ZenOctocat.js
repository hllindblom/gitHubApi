import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { init as initAction } from '../store/actions';
import { ZenText } from './styled';
import loadingAnimation from '../assets/loadingAnimation.gif';

const ZenOctocat = ({ zen, octocat, loading, init }) => {
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

      {!loading && (
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
};

const mapStateToProps = (state) => ({
  zen: state.zen,
  octocat: state.octocat,
  loading: state.loading,
});

export default connect(mapStateToProps, {
  init: initAction,
})(ZenOctocat);
