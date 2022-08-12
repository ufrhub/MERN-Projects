import React from 'react';
import Collapsable from './Collapsable';
import './Collapsable.css';

function Vision() {

    return (
        <React.Fragment>
            <div className='Vision'>
                <Collapsable label="Click Me" >
                    <h1>Lorem Ipsum</h1>

                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Collapsable>

                <Collapsable label="Toggle" >
                    <h1>Lorem Ipsum</h1>

                    <div>
                        Lorem ipsum dolor sit amet
                    </div>
                </Collapsable>
            </div>
        </React.Fragment>
    );
};

export default Vision;