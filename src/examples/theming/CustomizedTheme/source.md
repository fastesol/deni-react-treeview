```javascript
import React from 'react'
import MuaazReactTreeView from "../../../components"
import './theming-customizations.scss'

const CustomeziedTheme = () => {
  return (
    <div className="theme-customization">
      <MuaazReactTreeView 
        className="treeview-teste" 
        url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/dogs.json">
      </MuaazReactTreeView>   
    </div>  
  )
}  

export default CustomeziedTheme
```
