import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

import Player from 'components/Player';
import Ball from 'components/Ball';
import Goalpost from 'components/Goalpost';

const Field = ({ players, ball, goalposts, height, width }) => (
  <Card
    style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: 'mediumseagreen',
    }}
  >
    {ball && <Ball ball={ball} />}
    {goalposts.map(goalpost => (
      <Goalpost key={goalpost.id} goalpost={goalpost} />
    ))}
    {Object.keys(players).map(id => (
      <Player key={id} player={players[id]} />
    ))}
  </Card>
);

Field.propType = {
  players: PropTypes.shape({
    // TODO: fill
  }).isRequired,
  ball: PropTypes.shape({
    //
  }).isRequired,
  goalposts: PropTypes.shape({
    //
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Field.defaultProps = {
  height: 400,
  width: 500,
};

export default Field;
