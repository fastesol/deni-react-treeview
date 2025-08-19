import React from 'react'
import MuaazReactTreeView from '../../../components'

const MarginItemsOption: React.FC = () => {
  return (
    <MuaazReactTreeView 
      url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" 
      marginItems="80" 
    />
  )  
}

export default MarginItemsOption