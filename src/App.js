import React from 'react';

import { AppContainer } from './styles'
import Header from './Components/Header/'

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Header/>
      </AppContainer>
    )
  }
}

export default App;
