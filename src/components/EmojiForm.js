import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Submit } from './styled';

const EmojiForm = ({ currentNumber, updateNumber }) => {
  const [input, setInput] = useState(currentNumber);

  const submit = (e) => {
    e.preventDefault();
    updateNumber(input);
  };

  return (
    <form onSubmit={submit}>
      <span>Number of Emojis: </span>
      <Input
        type="number"
        name="noOfEmojis"
        value={input}
        onChange={e => setInput(e.target.value)}
        min="0"
        max="1788"
      />
      <Submit
        type="submit"
        value="OK"
      />
    </form>
  );
};

EmojiForm.propTypes = {
  currentNumber: PropTypes.number,
  updateNumber: PropTypes.func,
};

export default EmojiForm;
