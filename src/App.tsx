import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from "./redux/store";
import Profile from "./component/Profile";

function App() {
  return (
    <Provider store={store}>
      {/*<Counter/>*/}
      <Profile/>
    </Provider>
  );
}

export default App;
