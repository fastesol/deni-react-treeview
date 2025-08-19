```javascript
import React from 'react'
import MuaazReactTreeView from 'muaaz-react-treeview'

const LazyLoadTrueOption: React.FC = () => {
  return <MuaazReactTreeView url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" lazyLoad={ true } />
}

export default LazyLoadTrueOption
```
