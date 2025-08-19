import { TreeItem } from '../MuaazReactTreeViewItemProps';

export interface ActionButtonsProps {
  buttons: React.ReactElement[],
  item: TreeItem,
  onActionButtonClick?: (item: TreeItem, actionButton: React.ReactElement) => void
}
