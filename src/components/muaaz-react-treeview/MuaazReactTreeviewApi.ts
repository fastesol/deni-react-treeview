import MuaazReactTreeviewApiImpl from './MuaazReactTreeviewApiImpl'
import { load, loadData, setTheme } from './MuaazReactTreeviewHelper'
import MuaazReactTreeView from './MuaazReactTreeView'
import { TreeItem } from '../muaaz-react-treeview-item/MuaazReactTreeViewItemProps'

const MuaazReactTreeviewApi = (scope: MuaazReactTreeView) => {
  return {

    //
    //
    //
    addItem: (text: string, isLeaf: boolean, parentNode: TreeItem) => {
      return MuaazReactTreeviewApiImpl.addItem(scope, text, isLeaf, parentNode);
    },

    //
    // folderToFind can be passed as a "id" or as a "object" ex:
    //
    //  treeviewEl.api.findFolder(456) //456 is a id value or
    //  treeviewEl.api.findFolder({name: 'Brazil'}) //it will searches for the first folder that match the passed data and leaf is not true
    //
    findFolder: (folderToFind: any) => {
      return MuaazReactTreeviewApiImpl.findFolder(scope, folderToFind);
    },

    //
    // Expand all the children from the rootItem recursively
    expandAll: () => {
      MuaazReactTreeviewApiImpl.expandAll(scope);
    },
    //
    // folderToFind can be passed as a "id" or as a "object" ex:
    //
    //  treeviewEl.api.findFolder(456) //456 is a id value or
    //  treeviewEl.api.findFolder({name: 'Brazil'}) //it will searches for the first folder that match the passed data and leaf is not true
    //
    findNode: (nodeToFind: any) => {
      return MuaazReactTreeviewApiImpl.findNode(scope, nodeToFind);
    },

    //
    // itemToFind can be passed as a "id" or as a "object" ex:
    //
    //  treeviewEl.api.findItem(357) //357 is a id value or
    //  treeviewEl.api.findItem({name: 'Dog'}) //it will searches for the first item that match the passed data and leaf is true
    //
    findItem: (itemToFind: any) => {
      return MuaazReactTreeviewApiImpl.findItem(scope, itemToFind);
    },

    //
    //
    //
    getItems: () => {
      return MuaazReactTreeviewApiImpl.getItems(scope);
    },

    //
    //
    //
    getParentNode: (item: TreeItem) => {
      return MuaazReactTreeviewApiImpl.getParentNode(scope, item);
    },


    //
    //
    //
    getRootItem: () => {
      return MuaazReactTreeviewApiImpl.getRootItem(scope);
    },

    //
    //
    //
    getSelectedItem: () => {
      return MuaazReactTreeviewApiImpl.getSelectedItem(scope);
    },

    //
    //
    //
    load: (item: TreeItem) => load(scope, item),  

    //
    //
    //
    loadData: loadData.bind(scope),

    //
    //
    //
    removeItem: (id: any) => {
      MuaazReactTreeviewApiImpl.removeItem(scope, id);
    },

    //
    // itemToFind can be passed as a "id" or as a "object" ex:
    //
    //  treeviewEl.api.selectItem(357) //357 is a id value or
    //  treeviewEl.api.selectItem({name: 'Dog'}) //it will searches for the first item that match the passed data and leaf is true
    //
    selectItem: (itemToFind: any) => {
      MuaazReactTreeviewApiImpl.selectItem(scope, itemToFind);
    },

    //
    //
    //
    setTheme: (newTheme: string) => {
      setTheme(scope, newTheme);
    },

  }

}

export {
  MuaazReactTreeviewApi
};