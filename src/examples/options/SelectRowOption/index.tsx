import React from 'react'
import MuaazReactTreeView from '../../../components'

const SelectRowOption: React.FC = () => {
  return (
    <MuaazReactTreeView 
      url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" 
      selectRow={ true } 
    />
  )  
}

export default SelectRowOption