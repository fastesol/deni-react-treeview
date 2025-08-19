```javascript
import React, { useRef } from 'react'
import MuaazReactTreeView from 'muaaz-react-treeview'

const AddItemAndSubitemApi: React.FC = () => {
  const treeviewRef = useRef<MuaazReactTreeView>(null)

  const addItemAndSubItem = () => {
    const api = treeviewRef.current.api
    const rootNode = api.getRootItem();

    const newItem = api.addItem("New Item", false, rootNode);
    const newSubItem = api.addItem("New Sub Item", true, newItem);

    api.selectItem(newSubItem);
  }

  return (
    <div>
      <button onClick={ addItemAndSubItem }>Click to Add an Item and SubItem</button>
      <MuaazReactTreeView 
        ref={ treeviewRef }
        url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" 
      />
    </div>
  )
}

export default AddItemAndSubitemApi
```
