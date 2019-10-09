import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';

import Field from './field';

import { useKeyPress } from 'utils/hooks';

import gameConfig from 'config/gameConfig';

const Game = ({ username }) => {
  const [socket, setSocket] = useState(null);
  const [players, setPlayers] = useState({});
  const [ball, setBall] = useState(null);
  const [goalposts, setGoalposts] = useState([]);

  const keys = {
    up: useKeyPress('ArrowUp'),
    right: useKeyPress('ArrowRight'),
    down: useKeyPress('ArrowDown'),
    left: useKeyPress('ArrowLeft'),
    hitting: useKeyPress('Shift'),
    reset: useKeyPress('q'),
  };

  useEffect(() => {
    const { endpoint } = gameConfig;
    const newSocket = socketIOClient(endpoint);
    setSocket(newSocket);
    newSocket.emit('new-player', { username });

    newSocket.on('match-data', data => {
      setPlayers(data.players);
      setBall(data.ball);
      setGoalposts(data.goalposts);
    });

    setInterval(() => {
      newSocket.emit('data-request');
    }, 25);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit('keys', keys);
    }
  }, [keys, socket]);

  return (
    <Field
      players={players}
      ball={ball}
      goalposts={goalposts}
      width={800}
      height={500}
    />
  );
};

Game.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Game;
