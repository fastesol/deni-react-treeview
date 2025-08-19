import React from 'react'
import MuaazReactTreeView from "../../../components"
import './theming-customizations.scss'

const CustomeziedTheme = () => {
  return (
    <div className="theme-customization">
      <MuaazReactTreeView 
        className="treeview-teste" 
        url="https://raw.githubusercontent.com/denimar/fakedata/master/data/trees/dogs.json">
      </MuaazReactTreeView>   
      <br />
      <a href="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/examples/theming/theming-customizations.scss">theming-customizations.scss</a>
    </div>  
  )
}  

export default CustomeziedTheme