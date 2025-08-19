```javascript
import React from 'react'
import MuaazReactTreeView from 'muaaz-react-treeview'

const ShowCheckboxOption: React.FC = () => {
  return (
    <MuaazReactTreeView 
      url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" 
      showCheckbox={ true } 
    />
  )  
}

export default ShowCheckboxOption
```
