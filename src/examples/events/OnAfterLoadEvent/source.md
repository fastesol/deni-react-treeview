```javascript
import React, { useRef } from 'react'
import MuaazReactTreeView from 'muaaz-react-treeview';

const OnAfterLoadEvent: React.FC = () => {
  const treeviewRef = useRef<MuaazReactTreeView>(null);

  const loadButtonClick = () => treeviewRef.current.api.load()
  const onAfterLoad = (data, item) => alert(`onAfterLoad event: ${new Date()}`)

  return (
    <div>
      <button onClick={ loadButtonClick } style={{ marginBottom: '5px' }}>Click to Load</button>
      <MuaazReactTreeView 
        ref={ treeviewRef }
        autoLoad={ false } 
        url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" 
        onAfterLoad={ onAfterLoad }
      />
    </div>
  )
}

export default OnAfterLoadEvent
```
