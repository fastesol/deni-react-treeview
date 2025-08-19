```javascript
import React, { useRef } from 'react'
import MuaazReactTreeView from 'muaaz-react-treeview'

const RemoveItemApi: React.FC = () => {
  const treeviewRef = useRef<MuaazReactTreeView>(null)

  const removeSelectedItem = () => {
    const api = treeviewRef.current?.api
    const selectedItem = api.getSelectedItem();

    if (selectedItem) {
      api.removeItem(selectedItem.id);
    } else {
      alert('You have to select a item to remove it');
    }
  }

  return (
    <div>
      <button onClick={ removeSelectedItem }>Click to remove the select item</button>
      <MuaazReactTreeView 
        ref={ treeviewRef }
        url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" 
      />
    </div>
  )
}

export default RemoveItemApi
```
