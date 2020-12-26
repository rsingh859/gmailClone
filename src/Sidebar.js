import React from 'react';
import "./Sidebar.css";
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {
    return (
        <div classname='sidebar'>
            <Button startIcon={<AddIcon fontSize='large' />}
                    classname='sidebar__compose'
                >
                Compose
                </Button>
        </div>
    );
}

export default Sidebar;
