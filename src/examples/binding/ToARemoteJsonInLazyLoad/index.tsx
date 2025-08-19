import React from 'react'
import MuaazReactTreeView from "../../../components"

const ToARemoteJsonInLazyLoad = () => {
  return <MuaazReactTreeView url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json" lazyLoad={ true } />
}

export default  ToARemoteJsonInLazyLoad