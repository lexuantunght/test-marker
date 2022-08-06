import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoSettings, IoSettingsOutline } from 'react-icons/io5';

type SidebarProps = {
    items?: Array<{
        name: string;
        path: string;
        title: string;
        icon: JSX.Element;
        outlineIcon: JSX.Element;
    }>;
};

const Sidebar = ({ items = [] }: SidebarProps) => {
    const [focusedItem, setFocusedItem] = React.useState(-1);
    const location = useLocation();

    React.useEffect(() => {
        const focused = items.findIndex((item) => item.path === location.pathname);
        if (focused >= 0) {
            setFocusedItem(focused);
        } else {
            setFocusedItem(0);
        }
    }, []);

    return (
        <div className="app-sidebar-container">
            <div className="app-sidebar-tabs">
                {items.map((item, index) => (
                    <Link
                        className={
                            focusedItem === index
                                ? 'app-sidebar-tab app-sidebar-focused'
                                : 'app-sidebar-tab'
                        }
                        key={index}
                        to={item.path}
                        onClick={() => {
                            if (focusedItem !== index) {
                                setFocusedItem(index);
                            }
                        }}
                        title={item.title}
                    >
                        {focusedItem === index ? item.icon : item.outlineIcon}
                    </Link>
                ))}
            </div>
            <button className="app-sidebar-tab app-sidebar-setting">
                <IoSettings size={30} className="app-sidebar-setting-focused" />
                <IoSettingsOutline size={30} className="app-sidebar-setting-unfocused" />
            </button>
        </div>
    );
};

export default Sidebar;
