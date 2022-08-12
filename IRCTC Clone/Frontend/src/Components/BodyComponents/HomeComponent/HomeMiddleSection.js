import React from 'react';

function HomeMiddleSection() {
    return (
        <div className='HomeMiddleSection'>

            <div className='HomeMiddleSection-box-line'></div>

            <div className='HomeMiddleSection-heading'>
                <div>Have you not found the right one?</div>
                <div>Find a service suitable for you here.</div>
            </div>

            <div className='HomeMiddleSection-body'>
                <div className='HomeMiddleSection-body-row'>
                    <a href='https://www.air.irctc.co.in/' target="_blank" rel="noreferrer" className='HomeMiddleSection-body-block'>
                        <i className="fas fa-plane"></i>
                        <div>FLIGHTS</div>
                    </a>

                    <a href='https://hotel.irctctourism.com/hotels' target="_blank" rel="noreferrer" className='HomeMiddleSection-body-block'>
                        <i className="fas fa-hotel"></i>
                        <div>HOTELS</div>
                    </a>

                    <a href='https://raildrishti.indianrailways.gov.in/' target="_blank" rel="noreferrer" className='HomeMiddleSection-body-block'>
                        <i className="fas fa-chart-line"></i>
                        <div>RAIL DRISHTI</div>
                    </a>

                    <a href='https://www.ecatering.irctc.co.in/' target="_blank" rel="noreferrer" className='HomeMiddleSection-body-block'>
                        <i className="fas fa-utensils"></i>
                        <div>E-CATERING</div>
                    </a>

                    <a href='https://www.bus.irctc.co.in/home' target="_blank" rel="noreferrer" className='HomeMiddleSection-body-block'>
                        <i className="fas fa-bus"></i>
                        <div>BUS</div>
                    </a>
                </div>

                <div className='HomeMiddleSection-body-row'>
                    <a href='http://www.irctctourism.com/cgi-bin/dev1.dll/irctc/booking/tourPackages.jsp' target="_blank" rel="noreferrer" className='HomeMiddleSection-body-block'>
                        <i className="fas fa-umbrella-beach"></i>
                        <div>HOLIDAY PACKAGES</div>
                    </a>

                    <a href='http://www.irctctourism.com/cgi-bin/dev1.dll/irctc/booking/bestSellerTrains.jsp' target="_blank" rel="noreferrer" className='HomeMiddleSection-body-block'>
                        <i className="fas fa-train"></i>
                        <div>TOURIST TRAIN</div>
                    </a>

                    <a href='https://www.irctctourism.com/gallery/' target="_blank" rel="noreferrer" className='HomeMiddleSection-body-block'>
                        <i className="fas fa-mountain"></i>
                        <div>HILL RAILWAYS</div>
                    </a>

                    <a href='https://www.ftr.irctc.co.in/ftr/' target="_blank" rel="noreferrer" className='HomeMiddleSection-body-block'>
                        <i className="fas fa-train"></i>
                        <div>CHARTER TRAIN</div>
                    </a>

                    <a href='https://www.irctctourism.com/gallery/' target="_blank" rel="noreferrer" className='HomeMiddleSection-body-block'>
                        <i className="fas fa-mountain"></i>
                        <div>GALLERY</div>
                    </a>
                </div>
            </div>

            <div className='HomeMiddleSection-box-line-2'></div>
        </div>
    );
};

export default HomeMiddleSection;