import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEmojis as fetchEmojisAction } from '../store/actions';
import loadingAnimation from '../assets/loadingAnimation.gif';
import Error from './Error';
import EmojiForm from './EmojiForm';
import { H1, H2, EmojiWrapper, Emoji } from './styled';

const Emojis = ({ emojis, loading, error, fetchEmojis }) => {
  const [numberOfEmojis, setNumberOfEmojis] = useState(30);

  useEffect(() => {
    const fetchEmojiData = async () => {
      await fetchEmojis(numberOfEmojis);
    };

    fetchEmojiData();
  }, []);

  const getRandomNumber = () => Math.floor(Math.random() * Math.floor(1799));

  const getRandomItems = () => {
    const keys = Object.keys(emojis);
    const randomKeys = [];

    for (let i = 0; i < numberOfEmojis; i++) {
      randomKeys.push(keys[getRandomNumber()]);
    }

    return randomKeys.map((key) => emojis[key]);
  };

  const updateNumber = (newNo) => {
    if (newNo === '' || newNo === undefined || newNo === null) {
      setNumberOfEmojis(0);
      return;
    }

    setNumberOfEmojis(parseInt(newNo, 10));
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
          <H1>Random Emojis from GitHub</H1>
          <EmojiForm currentNumber={numberOfEmojis} updateNumber={updateNumber} />
          <H2>{`${numberOfEmojis} emojis:`}</H2>
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
