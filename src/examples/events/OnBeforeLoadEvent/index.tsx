import React from 'react';
import MuaazReactTreeView from '../../../components/muaaz-react-treeview/MuaazReactTreeView';
import { TreeItem } from '../../../components/muaaz-react-treeview-item/MuaazReactTreeViewItemProps';

const OnBeforeLoadEvent = () => {
  const onBeforeLoad = (data: any, item: TreeItem) => alert(`onBeforeLoad event: ${new Date()}`)

  return (
    <div>
      <h3>onBeforeLoad Event Example</h3>
      <MuaazReactTreeView 
        url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/public/api/countries.json"
        onBeforeLoad={onBeforeLoad}
      />
    </div>
  );
}

export default OnBeforeLoadEvent;