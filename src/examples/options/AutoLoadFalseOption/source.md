```javascript
import React, { useRef } from 'react'
import MuaazReactTreeView from 'muaaz-react-treeview'

const AutoLoadFalseOption: React.FC = () => {
  const treeviewRef = useRef<MuaazReactTreeView>(null);
  const loadButtonClick = () => treeviewRef.current.api.load()

  return (
    <div>
      <button onClick={ loadButtonClick } style={{ marginBottom: '5px' }}>Click to Load</button>
      <MuaazReactTreeView 
        ref={ treeviewRef }
        autoLoad={ false } 
        json="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json"  
      />
    </div>
  )

}

export default AutoLoadFalseOption
```
