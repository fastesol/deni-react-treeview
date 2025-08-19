import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

declare class MuaazReactTreeView extends default_2.Component<MuaazReactTreeviewProps, MuaazReactTreeviewState> {
    api: any;
    container: any;
    constructor(props: MuaazReactTreeviewProps);
    componentDidUpdate(prevProps: MuaazReactTreeviewProps, prevState: MuaazReactTreeviewState): void;
    componentDidMount(): void;
    expandAllFinished(): void;
    render(): JSX_2.Element;
}
export default MuaazReactTreeView;

declare interface MuaazReactTreeviewProps {
    className?: string;
    style?: CSSProperties;
    actionButtons?: JSX.Element[];
    autoLoad?: boolean;
    json?: string;
    items?: any[];
    lazyLoad?: boolean;
    expandAll?: boolean;
    marginItems?: string | number;
    onAfterLoad?: (data: any, item: any) => void;
    onBeforeLoad?: (data: any, item: any) => void;
    onRenderItem?: (item: any, treeview: MuaazReactTreeView) => JSX.Element;
    onSelectItem?: (item: any) => void;
    onCheckItem?: void;
    onColapsed?: (item: any) => void;
    onExpanded?: (item: any) => void;
    onLazyLoad?: (item: any, callback: (children: any[]) => void) => void;
    selectRow?: boolean;
    showCheckbox?: boolean;
    showIcon?: boolean;
    showRoot?: boolean;
    theme?: string;
    url?: string;
    onActionButtonClick?: (item: any, actionButton: any) => void;
}

declare interface MuaazReactTreeviewState {
    loading: boolean;
    theme: string;
    expandAll?: boolean;
    selectedItem?: TreeItem;
    rootItem?: TreeItem;
}

declare interface TreeItem {
    id: number;
    text: string;
    expanded?: boolean;
    children?: TreeItem[];
    [key: string]: any;
}

export { }
