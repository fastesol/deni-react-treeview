import React from 'react';
import './MuaazReactTreeView.scss'
import MuaazReactTreeViewItem from '../muaaz-react-treeview-item/MuaazReactTreeViewItem'
import { MuaazReactTreeviewApi } from './MuaazReactTreeviewApi'
import { loadingSetup, setTheme } from './MuaazReactTreeviewHelper'
import { MuaazReactTreeviewProps } from './MuaazReactTreeviewProps';
import '../styles/themes/index'; // Import all themes

interface TreeItem {
  id: number;
  text: string;
  expanded?: boolean;
  children?: TreeItem[];
  [key: string]: any;
}

interface MuaazReactTreeviewState {
  loading: boolean,  
  theme: string,
  expandAll?: boolean,
  selectedItem?: TreeItem,
  rootItem?: TreeItem,
}

class MuaazReactTreeView extends React.Component<MuaazReactTreeviewProps, MuaazReactTreeviewState> {
  api: any;
  container: any;

  constructor(props: MuaazReactTreeviewProps) {
    super(props);
    this.state = {
      loading: false,
      theme: props.theme || 'classic',
      expandAll: props.expandAll,
    };
    this.expandAllFinished = this.expandAllFinished.bind(this);
  }

  componentDidUpdate(prevProps: MuaazReactTreeviewProps, prevState: MuaazReactTreeviewState) {
    const { items } = this.props;
    const rootItem = this.api.getRootItem()
    if (prevProps.items !== items) {
      rootItem.children = items;
      //treeviewHelper.loadData.call(this, this.props.items);
    }
    if (this.state.expandAll) {
      this.expandAllFinished();
    }
  }

  componentDidMount() {
    this.api = MuaazReactTreeviewApi(this);
    setTheme(this, this.props.theme || 'classic');
    loadingSetup(this);
  }

  expandAllFinished() {
    this.setState({ expandAll: false });
  }

  render() {
    const rootItem = this.api ? this.api.getRootItem() : undefined
    const domTreeviewItem = (<MuaazReactTreeViewItem root={true} treeview={this} level={0} item={rootItem} />);
    let children = rootItem && rootItem.children;
    if (children && children.length === 0) {
      if (this.props.items && this.props.items.length > 0) {
        children = this.props.items;
      }
    }
    let className = 'muaaz-react-treeview-container unselectable ' + this.state.theme;
    if (this.props.className) {
      className += ' ' + this.props.className;
    }
    const hasItems = (children !== undefined && children.length > 0);
    if (this.state.loading && (!this.props.lazyLoad || !hasItems)) {
      className += ' loading';
    }
    const showComponent = hasItems && (!this.state.loading || this.props.lazyLoad);
    const style = this.props.style || undefined

    return (
      (showComponent) ? (
        <div ref={(elem) => this.container = elem} className={className} style={style} >
          {domTreeviewItem}
          {_createComponentsChildren(this, domTreeviewItem, 1, children, this.state.expandAll)}
        </div>
      ) : <div className={className}></div>
    )
  }

}

//MuaazReactTreeView.propTypes = treeviewProps.propTypes;
//MuaazReactTreeView.defaultProps = treeviewProps.defaultProps;

function _createComponentsChildren(treeview: any, parent: any, level: number, children: TreeItem[] | undefined, expandAll = false) {
  if (expandAll && children) {
    children = children.map((c: TreeItem) => {
      c.expanded = true;
      return c;
    });
  }
  return (
    <div>
      {
        (parent.props.item && parent.props.item.expanded && children && children.length) ?
          children.map(function (child: TreeItem) {
            const domTreeviewItem = <MuaazReactTreeViewItem 
              expandAll={expandAll} 
              treeview={treeview} 
              parent={parent} 
              level={level} 
              item={child}
            />;
            return (
              <div key={String(child.id)}>
                {domTreeviewItem}
                {_createComponentsChildren(treeview, domTreeviewItem, level + 1, child.children || undefined)}
              </div>
            )
          })
          : undefined
      }
    </div>
  );
}

export default MuaazReactTreeView;