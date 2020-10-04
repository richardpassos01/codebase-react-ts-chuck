import React, { useEffect, useState } from 'react';
import { getJoke } from '../../../utils/requests/api';

const Joke: React.FC = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  const handleDataLoad = async () => {
    try {
      const response = await getJoke();
      
      setJoke(response.data.value);
  
      setLoading(false);
    } catch (err) {
      console.error(err)
    }
  };

  useEffect(() => {
    handleDataLoad();
  }, []);

  return (
    loading
      ? <div>carregando</div>
      : (
        <>
          {joke}
        </>
      )
  );
};

export default Joke;
