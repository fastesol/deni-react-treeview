import React from 'react';
import MuaazReactTreeView from '../../../components/muaaz-react-treeview/MuaazReactTreeView';
import { TreeItem } from '../../../components/muaaz-react-treeview-item/MuaazReactTreeViewItemProps';

const ActionButtonsOption = () => {
  const onActionButtonClick = (item: TreeItem, actionButton: React.ReactElement) => {
    alert(`Action button clicked for item: ${item.text}, action: ${actionButton.props.children}`);
  }

  const actionButtons = [
    <span key="edit" style={{ color: 'blue', cursor: 'pointer' }}>✏️</span>,
    <span key="delete" style={{ color: 'red', cursor: 'pointer' }}>🗑️</span>
  ];

  return (
    <div>
      <h3>Action Buttons Option Example</h3>
      <MuaazReactTreeView 
        url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/public/api/countries.json"
        actionButtons={actionButtons}
        onActionButtonClick={onActionButtonClick}
      />
    </div>
  );
}

export default ActionButtonsOption;