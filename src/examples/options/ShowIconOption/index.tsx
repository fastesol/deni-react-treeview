import React from 'react'
import MuaazReactTreeView from '../../../components'

const ShowIconOption: React.FC = () => {
  return (
    <MuaazReactTreeView 
      url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" 
      showIcon={ false } 
    />
  )  
}

export default ShowIconOption