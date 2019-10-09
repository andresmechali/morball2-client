import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
  style: ({ x, y, radius, team, hitting }) => ({
    width: `${2 * radius}px`,
    height: `${2 * radius}px`,
    backgroundColor: team === 'home' ? 'red' : 'blue',
    borderColor: hitting ? 'white' : 'black',
    transform: `translate(${x - radius}px, ${y - radius}px)`,
  }),
})`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border-radius: 50%;
  color: black;
  border-width: 2px;
  border-style: solid;
  left: 0;
  top: 0;
  transition: transform 25ms;
  will-change: transform;
`;

Wrapper.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  hitting: PropTypes.bool.isRequired,
  radius: PropTypes.number.isRequired,
  team: PropTypes.oneOf(['home', 'away']).isRequired,
};

const Player = ({ player }) => {
  const { x, y, keys, username, radius, team } = player;
  return (
    <Wrapper x={x} y={y} hitting={keys.hitting} radius={radius} team={team}>
      {username[0].toUpperCase()}
    </Wrapper>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    keys: PropTypes.shape({
      hitting: PropTypes.bool.isRequired,
    }).isRequired,
    username: PropTypes.string.isRequired,
    radius: PropTypes.number.isRequired,
    team: PropTypes.oneOf(['home', 'away']).isRequired,
  }).isRequired,
};

export default Player;
