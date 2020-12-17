import React, { useState } from 'react';

import Burger from './components/Burger';
import MenuContent from './components/MenuContent';

const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Burger open={open} setOpen={setOpen} />
            <MenuContent open={open} />
        </>
    );
}

export default Menu;