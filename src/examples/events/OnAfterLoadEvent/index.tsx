import React from 'react';
import MuaazReactTreeView from '../../../components/muaaz-react-treeview/MuaazReactTreeView';
import { TreeItem } from '../../../components/muaaz-react-treeview-item/MuaazReactTreeViewItemProps';

const OnAfterLoadEvent = () => {
  const onAfterLoad = (data: any, item: TreeItem) => alert(`onAfterLoad event: ${new Date()}`)

  return (
    <div>
      <h3>onAfterLoad Event Example</h3>
      <MuaazReactTreeView 
        url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/public/api/countries.json"
        onAfterLoad={onAfterLoad}
      />
    </div>
  );
}

export default OnAfterLoadEvent;