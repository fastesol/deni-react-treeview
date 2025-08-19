```javascript
import React from 'react'
import MuaazReactTreeView from 'muaaz-react-treeview'

const ShowRootOption: React.FC = () => {
  return (
    <MuaazReactTreeView 
      url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" 
      showRoot={ true } 
    />
  )  
}

export default ShowRootOption
```
