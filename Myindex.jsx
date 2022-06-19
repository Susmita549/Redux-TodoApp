import React from 'react'
import Mytodo from './Mytodo'
import { store } from './Redux/store'
import { Provider } from 'react-redux';

const Myindex = () => {
  return (
    <div>
        <Provider store={store}>
        <Mytodo/>
        </Provider>
    </div>
  )
}

export default Myindex