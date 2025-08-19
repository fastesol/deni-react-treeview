import React from 'react'
import MuaazReactTreeView from './components/muaaz-react-treeview/MuaazReactTreeView'
import './App.css'

// Sample data for the treeview
const sampleData = [
  {
    id: 1,
    text: 'Documents',
    expanded: true,
    children: [
      {
        id: 2,
        text: 'Work',
        children: [
          { id: 3, text: 'Project A' },
          { id: 4, text: 'Project B' }
        ]
      },
      {
        id: 5,
        text: 'Personal',
        children: [
          { id: 6, text: 'Photos' },
          { id: 7, text: 'Videos' }
        ]
      }
    ]
  },
  {
    id: 8,
    text: 'Downloads',
    children: [
      { id: 9, text: 'Software' },
      { id: 10, text: 'Music' }
    ]
  }
]

function App() {
  return (
    <div className="App">
      <h1>Deni React TreeView Demo</h1>
      <div style={{ padding: '20px' }}>
        <MuaazReactTreeView 
          items={sampleData}
          theme="classic"
          showCheckbox={true}
          showIcon={true}
          selectRow={true}
        />
      </div>
    </div>
  )
}

export default App 