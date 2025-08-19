```javascript
import React from 'react'
import MuaazReactTreeView from 'muaaz-react-treeview'
import { FaTrash, FaEdit } from 'react-icons/fa';

const ActionButtonsOption: React.FC = () => {
  const onActionButtonClick = (item, actionButton) => {
    const buttonName = actionButton.type.name;

    switch (buttonName) {
      case 'FaTrash':
        alert('Action: trash, Item: ' + item.text);
        break;
      case 'FaEdit':
        alert('Action: edit, Item: ' + item.text);
        break;
      default:
    }
  }

  const actionButtons = [
    (<FaTrash key={1} size="15" color="#ff9980" />),
    (<FaEdit key={2} size="15" color="#3679b0" />)    
  ];

  return (
    <MuaazReactTreeView
      url="https://raw.githubusercontent.com/denimar/muaaz-react-treeview/develop/src/assets/data/countries.json"
      selectRow={ true }
      actionButtons={ actionButtons }
      onActionButtonClick={ onActionButtonClick }
    />
  )
}

export default ActionButtonsOption
```
