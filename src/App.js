/**
import React from 'react';
import SearchFilter from './SearchFilter';

const App = () => {
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Strawberry',
  ];

  return (
    <div>
      <h1>Search Filter Example</h1>
      <SearchFilter data={items} />
    </div>
  );
};

export default App;

*/

/** import React from 'react';
import Accordion from './Accordion';
import './styles.css';

const App = () => {
  const accordionItems = [
    {
      title: 'Who are you?',
      content: 'I am an alien',
    },
    {
      title: 'What do you do?',
      content: 'I see galaxies',
    },
    {
      title: 'Is that a job?',
      content: 'Yes, it is high level job',
    },
  ];

  return (
    <div className="app">
      <h1>React Accordion</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;

*/ 

/* import React from 'react';
import ImageSlider from './ImageSlider';
import './App.css';

const App = () => {
  const images = [
    'https://img.freepik.com/premium-photo/pier-with-sunset-background_865967-6247.jpg',
    'https://img.freepik.com/premium-photo/peaceful-coastal-area-with-long-wooden-pier_839740-386.jpg',
    'https://img.freepik.com/premium-photo/old-wood-bridge-pier-against-beautiful-sunset-sky_38810-6053.jpg?w=2000',

  ];

  return (
    <div className="app">
      <h1>Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default App;
*/

import React, { useState } from 'react';
import LoginModal from './LoginModal';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <h1>Login #7</h1>
      <LoginModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default App;
