import MuaazReactTreeView from './MuaazReactTreeView'
import { TreeItem } from '../muaaz-react-treeview-item/MuaazReactTreeViewItemProps'

class MuaazReactTreeviewApiImpl {

  static addItem = (scope: MuaazReactTreeView, text: string, isLeaf: boolean, parentNode: TreeItem): TreeItem => {
    const parent = parentNode || scope.state.selectedItem || scope.state.rootItem;
    if (!parent) {
      throw new Error('You must specify a parent node!');
    }
    const newItem: TreeItem = {
      id: Math.random(), // Generate a unique ID
      text: text,
      children: [],
      isLeaf: isLeaf,
    }
    parent.children = parent.children || [];
    parent.children.push(newItem);
    parent.expanded = true;
    _selectNode(scope, newItem);

    return newItem;
  }

  static findFolder = (scope: MuaazReactTreeView, folderToFind: any): TreeItem => {
    if (!scope.state.rootItem || !scope.state.rootItem.children) {
      throw new Error('No root item found!');
    }
    const dataToFind = _normalizeDataToFind(folderToFind);
    const node = _findNode(scope.state.rootItem.children, dataToFind);
    if (!node || dataToFind['isLeaf'] === true) {
      throw new Error('Folder not found!');
    } else {
      return node;
    }
  }

  static findItem = (scope: MuaazReactTreeView, itemToFind: any): TreeItem => {
    if (!scope.state.rootItem || !scope.state.rootItem.children) {
      throw new Error('No root item found!');
    }
    const dataToFind = _normalizeDataToFind(itemToFind);
    dataToFind['isLeaf'] = true;
    const node = _findNode(scope.state.rootItem.children, dataToFind);
    if (!node) {
      throw new Error('Item not found!');
    } else {
      return node;
    }
  }

  static findNode = (scope: MuaazReactTreeView, nodeToFind: any): TreeItem => {
    if (!scope.state.rootItem || !scope.state.rootItem.children) {
      throw new Error('No root item found!');
    }
    const dataToFind = _normalizeDataToFind(nodeToFind);
    const node = _findNode(scope.state.rootItem.children, dataToFind);
    if (!node) {
      throw new Error('Node not found!');
    } else {
      return node;
    }
  }

  static expandAll = (scope: MuaazReactTreeView): void => {
    if (scope.state.rootItem) {
      _expand(scope.state.rootItem);
    }
  }

  static getItems = (scope: MuaazReactTreeView): TreeItem[] => {
    return scope.state.rootItem?.children || [];
  }
  
  static getParentNode = (scope: MuaazReactTreeView, item: TreeItem): TreeItem | undefined => {
    const currentItem = item || scope.state.selectedItem;
    if (!currentItem) return undefined;
    return _getParentItem(scope, currentItem);
  }

  static getRootItem = (scope: MuaazReactTreeView): TreeItem => {
    if (!scope.state.rootItem) {
      throw new Error('No root item found!');
    }
    return scope.state.rootItem;
  }

  static getSelectedItem = (scope: MuaazReactTreeView): TreeItem | undefined => {
    return scope.state.selectedItem;
  }

  static removeItem = (scope: MuaazReactTreeView, id: any): void => {
    const node = scope.api.findNode(id);
    const parentNode = _getParentItem(scope, node);
    if (parentNode && parentNode.children) {
      const childIndex = parentNode.children.findIndex((child: TreeItem) => {
        return child.id === node.id;
      });

      parentNode.children.splice(childIndex, 1);
    }

    if (scope.state.selectedItem && scope.state.selectedItem.id === id) {
      scope.setState({
        selectedItem: undefined,
      });
    }

    scope.forceUpdate();
  }

  static selectItem = (scope: MuaazReactTreeView, itemToFind: any): void => {
    const item = scope.api.findNode(itemToFind);
    if (item) {
      _selectNode(scope, item);
    } else {
      throw new Error('Item not found.');
    }
  }

}

function _findNode(children: TreeItem[], dataToFind: any): TreeItem | null {
  const keys = dataToFind ? Object.keys(dataToFind) : []
  for (let index = 0; index < children.length; index++) {
    const child = children[index];
    let allFieldsAreEqual = true;

    for (let index2 = 0; index2 < keys.length; index2++) {
      const key = keys[index2];

      if (child[key] !== dataToFind[key]) {
        allFieldsAreEqual = false;
      }
    }

    if (allFieldsAreEqual) {
      return child;
    }

    if (child.children) {
      const searchInChildren = _findNode(child.children, dataToFind);
      if (searchInChildren) {
        return searchInChildren;
      }
    }
  }
  return null;
}

//
function _getParentItems(scope: MuaazReactTreeView, item: TreeItem): TreeItem[] {
  const parents: TreeItem[] = [];
  let currentItem: TreeItem | undefined = item;
  while (true) {
    currentItem = _getParentItem(scope, currentItem);
    if (currentItem) {
      if ((currentItem.root) && (!scope.props.showRoot)) {
        break;
      } else {
        parents.push(currentItem);
      }
    } else {
      break;
    }
  }
  return parents;
}

//
function _getParentItem(scope: MuaazReactTreeView, item: TreeItem, parentItem?: TreeItem): TreeItem | undefined {
  const parent = parentItem || scope.state.rootItem;
  if (!parent) return undefined;
  const itemsToFind = parent.children;
  if (itemsToFind) {
    for (let index = 0; index < itemsToFind.length; index++) {
      const itemToFind = itemsToFind[index];
      if (itemToFind.id === item.id) {
        return parent;
      }
      if (itemToFind.children) {
        const parent2 = _getParentItem(scope, item, itemToFind);
        if (parent2) {
          return parent2;
        }
      }
    }
  }
  return undefined;
}

//
function _normalizeDataToFind(dataToFind: any): any {
  let normalizedData: any = {};
  if ((typeof dataToFind === 'number') || (typeof dataToFind === 'string')) {
    normalizedData['id'] = dataToFind;
  } else if (typeof dataToFind === 'object') {
    normalizedData = dataToFind;
  } else {
    throw new Error('Parameter set in a wrong way.');
  }
  return normalizedData;
}

//
function _selectNode(scope: MuaazReactTreeView, item: TreeItem): void {
  const parentItems = _getParentItems(scope, item);
  parentItems.forEach(function (parent: TreeItem) {
    if (!parent.expanded) {
      parent.expanded = true;
    }
  });
  scope.setState({
    selectedItem: item,
  });
  setTimeout(() => {
    if (scope.container) {
      let selectedRowElem: Element | null = null;
      if (scope.props.selectRow) {
        selectedRowElem = scope.container.querySelector('.muaaz-react-treeview-item-container.selected')
      } else {
        const selectedElem = scope.container.querySelector('.icon-and-text.selected')
        if (selectedElem) {
          selectedRowElem = selectedElem.closest('.muaaz-react-treeview-item-container')
        }
      }
      if (selectedRowElem) {
        (selectedRowElem as any).scrollIntoViewIfNeeded()
      }
    }
  })
  if (scope.props.onSelectItem) {
    scope.props.onSelectItem(item);
  }
}

function _expand(item: TreeItem): void {
  if (item.children) {
    item.children.forEach((i: TreeItem) => {
      if (i.children) {
        i.expanded = true;
        _expand(i);
      }
    });
  }
}


export default MuaazReactTreeviewApiImpl