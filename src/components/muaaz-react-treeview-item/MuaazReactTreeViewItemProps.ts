import MuaazReactTreeView from '../muaaz-react-treeview/MuaazReactTreeView';

export interface TreeItem {
  id: number;
  text: string;
  expanded?: boolean;
  children?: TreeItem[];
  [key: string]: any;
}

export interface MuaazReactTreeViewItemProps {
  treeview: MuaazReactTreeView,
  item: TreeItem,
  parent?: any,
  level: number,
  root?: any,
  selectRow?: boolean,
  expandAll?: boolean
}
