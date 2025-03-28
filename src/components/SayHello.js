import PropTypes from 'prop-types'
import React from 'react'

export default function SayHello({ name, greeting="How are you?" }) {
  return (
    <>
      <div>Hello, {name}</div>
      <div>{greeting}</div>
      <p>This is a paragraph</p>
    </>
  );
};

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  greeting: PropTypes.string,
};
