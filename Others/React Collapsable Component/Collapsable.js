import React, { useState, useRef } from 'react';
import './Collapsable.css';

function Collapsable(props) {
    const [isOpen, setIsOpen] = useState(false);

    const ParentRef = useRef();

    return (
        <div className='Collapsable'>
            <button className='toggle' onClick={() => setIsOpen(!isOpen)}>{props.label}</button>

            <div className='content-parent' ref={ParentRef} style={
                isOpen ?
                    { height: ParentRef.current.scrollHeight + "px" }
                    :
                    { height: "0px" }
            }>
                <div className='content'>{props.children}</div>
            </div>

        </div>
    );
};

export default Collapsable;