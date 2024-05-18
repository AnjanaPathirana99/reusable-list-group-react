import { useState } from 'react'
import ListGroup from './components/ListGroup'

function App() {
  return (
    <div>
      <ListGroup items={['Colombo', 'Gampaha', 'Galle']} heading='Cities' onSelectItem={(item) => console.log(item)}  // Example of passing props
      />
    </div>
  )
}

export default App
