import { CSSProperties } from "react";
import MuaazReactTreeView from "./MuaazReactTreeView";

export interface MuaazReactTreeviewProps {
    className?: string,
    style?: CSSProperties,
    actionButtons?: JSX.Element[], 
    autoLoad?: boolean,
    json?: string,
    items?: any[],
    lazyLoad?: boolean,
    expandAll?: boolean,
    marginItems?: string | number,
    onAfterLoad?:  (data: any, item: any) => void;
    onBeforeLoad?: (data: any, item: any) => void;
    onRenderItem?: (item: any, treeview: MuaazReactTreeView) => JSX.Element;
    onSelectItem?: (item: any) => void;
    onCheckItem?: void,
    onColapsed?: (item: any) => void,
    onExpanded?: (item: any) => void,
    onLazyLoad?: (item: any, callback: (children: any[]) => void) => void,
    selectRow?: boolean,
    showCheckbox?: boolean,
    showIcon?: boolean,
    showRoot?: boolean,
    theme?: string,
    url?: string,

    onActionButtonClick?: (item: any, actionButton: any) => void;
}