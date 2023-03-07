import React, { useState } from 'react';
import Header from './Header/Header';
import styles from './App.module.scss';
import NavPanel from './NavPanel/NavPanel';
import { places } from '../mocks/places';
import { MyMap } from './Map/Map';

type InitStateType = {
  id: null | number;
  setId: (id: number | null) => void;
};

const initState: InitStateType = {
  id: null,
  setId: (id: number | null) => {
    console.log(id);
  },
};

export const CurrentItemIdContext = React.createContext(initState);

function App() {
  const [id, setId] = useState<number | null>(null);

  return (
    <div className={styles.App}>
      <Header />
      <CurrentItemIdContext.Provider value={{ id, setId }}>
        <div className={styles.ContentWrapper}>
          <NavPanel />
          <MyMap data={places} />
        </div>
      </CurrentItemIdContext.Provider>
    </div>
  );
}

export default App;
