import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
  style: ({ x, y, radius }) => ({
    width: `${2 * radius}px`,
    height: `${2 * radius}px`,
    transform: `translate(${x - radius}px, ${y - radius}px)`,
  }),
})`
  position: absolute;
  border-radius: 50%;
  background-color: #bbb;
  color: black;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  left: 0;
  top: 0;
  transition: transform 15ms;
  will-change: transform;
`;

Wrapper.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
};

const Goalpost = ({ goalpost }) => {
  const { x, y, radius } = goalpost;
  return <Wrapper x={x} y={y} radius={radius} />;
};

Goalpost.propTypes = {
  goalpost: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
  }).isRequired,
};

export default Goalpost;
