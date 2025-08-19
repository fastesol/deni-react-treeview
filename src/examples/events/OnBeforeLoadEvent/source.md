```javascript
import React, { useRef } from 'react'
import MuaazReactTreeView from 'muaaz-react-treeview';

const OnBeforeLoadEvent: React.FC = () => {
  const treeviewRef = useRef<MuaazReactTreeView>(null);

  const loadButtonClick = () => treeviewRef.current.api.load()
  const onBeforeLoad = (data, item) => alert(`onBeforeLoad event: ${new Date()}`)

  return (
    <div>
      <button onClick={ loadButtonClick } style={{ marginBottom: '5px' }}>Click to Load</button>
      <MuaazReactTreeView 
        ref={ treeviewRef }
        autoLoad={ false } 
        url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" 
        onBeforeLoad={ onBeforeLoad }
      />
    </div>
  )
}

export default OnBeforeLoadEvent
```
