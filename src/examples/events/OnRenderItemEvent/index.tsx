import React from 'react';
import MuaazReactTreeView from '../../../components/muaaz-react-treeview/MuaazReactTreeView';
import { TreeItem } from '../../../components/muaaz-react-treeview-item/MuaazReactTreeViewItemProps';

const OnRenderItemEvent = () => {
  const deleteItemClick = (id: any) => {
    alert(`Delete item with id: ${id}`);
  }

  const editItemClick = (item: TreeItem) => {
    alert(`Edit item: ${item.text}`);
  }

  const onRenderItem = (item: TreeItem, treeview: MuaazReactTreeView) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>{item.text}</span>
        <button onClick={() => editItemClick(item)} style={{ fontSize: '12px', padding: '2px 6px' }}>
          Edit
        </button>
        <button onClick={() => deleteItemClick(item.id)} style={{ fontSize: '12px', padding: '2px 6px', backgroundColor: '#ff6b6b', color: 'white', border: 'none' }}>
          Delete
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3>onRenderItem Event Example</h3>
      <MuaazReactTreeView 
        url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/public/api/countries.json"
        onRenderItem={onRenderItem}
      />
    </div>
  );
}

export default OnRenderItemEvent;