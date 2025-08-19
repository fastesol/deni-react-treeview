import React from 'react';
import MuaazReactTreeView from '../../../components/muaaz-react-treeview/MuaazReactTreeView';
import { TreeItem } from '../../../components/muaaz-react-treeview-item/MuaazReactTreeViewItemProps';

const OnSelectItemEvent = () => {
  const onSelectItemHandler = (item: TreeItem) => alert(`onSelectItem - item : ${item.text}`)

  return (
    <div>
      <h3>onSelectItem Event Example</h3>
      <MuaazReactTreeView 
        url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/public/api/countries.json"
        onSelectItem={onSelectItemHandler}
      />
    </div>
  );
}

export default OnSelectItemEvent;