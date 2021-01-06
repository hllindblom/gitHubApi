import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEmojis as fetchEmojisAction } from '../store/actions';
import loadingAnimation from '../assets/loadingAnimation.gif';
import Error from './Error';
import { H1, EmojiWrapper, Emoji } from './styled';

const Emojis = ({ emojis, loading, error, fetchEmojis }) => {
  useEffect(() => {
    const fetchEmojiData = async () => {
      await fetchEmojis();
    };

    fetchEmojiData();
  }, []);

  const getRandomNumber = () => Math.floor(Math.random() * Math.floor(1799));

  const getRandomItems = () => {
    const keys = Object.keys(emojis);
    const randomKeys = [];

    for (let i = 0; i < 30; i++) {
      randomKeys.push(keys[getRandomNumber()]);
    }

    return randomKeys.map((key) => emojis[key]);
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
          <H1>30 Random Emojis from GitHub</H1>
          <EmojiWrapper>
            {getRandomItems().map((emoji, i) => <Emoji key={i} src={emoji} alt={emoji} data-testid="emoji" />)}
          </EmojiWrapper>
        </>
      )}
    </>
  );
};

Emojis.propTypes = {
  emojis: PropTypes.object,
  fetchEmojis: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

const mapStateToProps = (state) => ({
  emojis: state.emojis,
  loading: state.loadingEmoji,
  error: state.errorEmoji,
});

export default connect(mapStateToProps, { fetchEmojis: fetchEmojisAction })(Emojis);
