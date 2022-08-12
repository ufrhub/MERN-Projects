import React from 'react';
import HomeTopSection from './HomeTopSection';
import HomeMiddleSection from './HomeMiddleSection';
import HomeBottomSection from './HomeBottomSection';

function Home() {
    return (
        <React.Fragment>

            <div className='Home'>
                <HomeTopSection />
                <HomeMiddleSection />
                <HomeBottomSection />
            </div>
        </React.Fragment>
    );
};

export default Home;