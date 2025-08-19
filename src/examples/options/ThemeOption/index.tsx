import React from 'react'
import MuaazReactTreeView from '../../../components'

const ThemeOption: React.FC = () => {
  return (
    <MuaazReactTreeView 
      url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" 
      theme="metro"
    />
  )  
}

export default ThemeOption