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
  background-color: white;
  color: black;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  left: 0;
  top: 0;
  transition: transform 60ms;
  will-change: transform;
`;

Wrapper.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
};

const Ball = ({ ball }) => {
  const { x, y, radius } = ball;
  return <Wrapper x={x} y={y} radius={radius} />;
};

Ball.propTypes = {
  ball: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
  }).isRequired,
};

export default Ball;
