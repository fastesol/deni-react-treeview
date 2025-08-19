```javascript
import React from 'react'
import MuaazReactTreeView from 'muaaz-react-treeview'

const OnSelectItemEvent: React.FC = () => {
  const onSelectItemHandler = item => alert(`onSelectItem - item : ${item.text}`)

  return (
    <MuaazReactTreeView 
      json="./data/countries-by-continents.json" 
      onSelectItem={ onSelectItemHandler }
    />
  )
}

export default OnSelectItemEvent
```
