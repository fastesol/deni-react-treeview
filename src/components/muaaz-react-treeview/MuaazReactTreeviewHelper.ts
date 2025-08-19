import {ROOT_ITEM} from './MuaazReactTreeviewConsts'
import axios from 'axios';
import MuaazReactTreeView from './MuaazReactTreeView';
import { TreeItem } from '../muaaz-react-treeview-item/MuaazReactTreeViewItemProps';

const loadingSetup = (treeview: MuaazReactTreeView): void => {
  //by props.url
  if (treeview.props.url || treeview.props.json || treeview.props.lazyLoad) {
    if (treeview.props.autoLoad !== false) {
      treeview.api.load();
    }
  } else {
    //by props.items
    if (treeview.props.items) {
      treeview.api.loadData(treeview, treeview.props.items);
    }
  }
}

const setTheme = (treeview: MuaazReactTreeView, newTheme: string): void => {
  const theme = newTheme || 'classic';
  // In Vite, themes are imported at build time, so we just set the state
  // The CSS classes will be applied through the component's className
  treeview.setState({ theme });
}

const load = (treeview: MuaazReactTreeView, item?: TreeItem): Promise<any> => {
  treeview.setState({
    loading: true
  });

  return new Promise(function(success: (value: any) => void, reject: (reason: any) => void) {

    if (treeview.props.url || treeview.props.json) {
      let urlToLoad = treeview.props.url || treeview.props.json;
      if (treeview.props.lazyLoad && urlToLoad) {
        const currentItem = item || treeview.state.rootItem || ROOT_ITEM;
        if (currentItem) {
          const itemCopy = { ...currentItem };
          delete (itemCopy as any)['children'];
          urlToLoad += '?lazyLoad=true&item=' + JSON.stringify(itemCopy);
        }
      }

      if (urlToLoad) {
        axios.get(urlToLoad)
          .then(res => {
            treeview.setState({
              loading: false
            });
            treeview.api.loadData(treeview, res.data, item);
            success(res.data);
          })
          .catch(error => {
            console.error(`Error loading data: ${error.message}`)
          })
      }
    } else if (treeview.props.lazyLoad) {
      treeview.setState({
        loading: false
      });
      reject('TODO: under construction');
    } else {
      treeview.setState({
        loading: false
      });
      const msg = 'To use load function you must define lazyLoad:true or a valid url.';
      console.error(msg);
      reject(msg);
    }
  });
}

//
// item is a optional param that when it is set data must be an array (children)
//
const loadData = (treeview: MuaazReactTreeView, data: any, item?: TreeItem): void => {
  //
  const dataToLoad = data || [];

  //onBeforeLoad event
  if (treeview.props.onBeforeLoad) {
    treeview.props.onBeforeLoad(dataToLoad, item);
  }

  //
  if (item) {
    //
    if (dataToLoad instanceof Array) {
      item.children = dataToLoad;
    } else {
      throw new Error('When item param is set the data must be an array.');
    }
  } else {
    const rootItem = _resolveRootItem(dataToLoad);
    if (rootItem) {
      treeview.setState({
        rootItem: rootItem
      });
    }
  }

  //onAfterLoad event
  if (treeview.props.onAfterLoad) {
    treeview.props.onAfterLoad(dataToLoad, item);
  }

}

function _resolveRootItem(items: any): TreeItem | null {
  let rootItem: TreeItem = Object.assign({}, ROOT_ITEM);

  if (items) {
    if (items instanceof Array) {
      (rootItem as any)['children'] = items;
    } else if (items instanceof Object) {
      rootItem = items;
    } else {
      throw new Error('Parameter "items" adjusted in a wrong way.');
    }
    return rootItem;
  }
  return null;
}

export {
  loadingSetup,
  setTheme,
  load,
  loadData
};