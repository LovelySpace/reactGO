import * as React from 'react';
import { storeContext } from './Context';
import { userStore, topicStore, messageStore } from './store';

function useStore() {
  // const store = React.useContext(storeContext);
  // if (!store) {
  //   // this is especially useful in TypeScript so you don't need to be checking for null all the time
  //   throw new Error('useStore must be used within a StoreProvider.');
  // }
  return { userStore, topicStore, messageStore };
}

export default useStore;
