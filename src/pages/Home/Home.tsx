import React from 'react';
import Joke from './components/Joke';
import chuckNorris from '../../static/images/chuck.png';

import * as styles from './Home.styles';

const Home: React.FC = () => {
  const classes = styles.useStyles();

  return (
    <>
      <styles.Wrapper style={classes.text}>
        <Joke />
        <styles.Icon src={chuckNorris} />
      </styles.Wrapper>
    </>
  );
}

export default Home;
