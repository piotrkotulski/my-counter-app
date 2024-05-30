import React from 'react';
import Counter from '../components/Counter';

const Home: React.FC = () => {
  return (
      <div>
        <h1>Welcome to the Counter App</h1>
        <Counter />
      </div>
  );
};

export default Home;