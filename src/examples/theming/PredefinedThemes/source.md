```javascript
import React from 'react'
import MuaazReactTreeView from "muaaz-react-treeview"

const themes = [ 'classic', 'metro', 'moonlight', 'purple', 'green', 'orange', 'red', 'silver' ]

const PredefinedThemes = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
      { 
        themes.map((theme, index) => {
          return (
            <MuaazReactTreeView 
              style={{ marginRight: '10px', marginBottom: '10px' }}
              key={index} 
              showCheckbox={true} 
              theme={theme} 
              url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries-by-continents.json"
            />
          )  
        })
      }
    </div>     
  )
}  

export default PredefinedThemes
```
