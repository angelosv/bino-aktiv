import React, { useState, useRef, useEffect } from 'react';

import Burger from './components/Burger';
import MenuContent from './components/MenuContent';

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
            return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    },
    [ref, handler],
    );
};

const Menu = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <MenuContent open={open} />
        </div>
    );
}

export default Menu;