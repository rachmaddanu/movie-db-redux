import React from 'react';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header } from './src/components/common';
import reducer from './src/reducer';
import LibraryList from './src/components/LibraryList';

const App = () => {
 return (
   <Provider store={createStore(reducer)}>
     <ScrollView>
       <Header title='Tech Stack' />
       <LibraryList />
     </ScrollView>
   </Provider>
 );
};

export default App;