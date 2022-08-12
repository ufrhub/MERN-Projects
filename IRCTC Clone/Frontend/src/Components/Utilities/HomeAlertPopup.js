import React, { useState } from 'react';
import './HomeAlertPopup.css';

function HomeAlertPopup() {

    const [showAlert, setShowAlert] = useState(true);

    return (
        <div style={showAlert === true ? { display: "block" } : { display: "none" }} className='HomeAlertPopup'>

            <div className='HomeAlertPopup-card'>
                <div className='HomeAlertPopup-card-head'>Alert</div>

                <div className='HomeAlertPopup-card-body'>
                    <div className='HomeAlertPopup-card-img'>
                        <img style={{ width: "52vw", maxHeight: "110px" }} src='https://contents.irctc.co.in/en/Web_alerts_700x90.jpeg' alt='' />
                    </div>

                    <div className='HomeAlertPopup-card-msg'>
                        <div>Get your favourite food at your train seat through e-Catering available at selected stations.</div>
                        <div>COVID 19 Alert:</div>
                        <div><i className="fas fa-circle"></i> All passengers are advised to wear face covers/masks at the entry/exit and during travel.</div>
                        <div><i className="fas fa-circle"></i> All passengers are advised that on arrival at their destination, the travelling passenger shall follow the Covid protocol/guidelines issued by Ministry of Home affairs, Ministry of Health and Family Welfare and concerned State/UTs on the subject from time to time.</div>
                        <div><i className="fas fa-circle"></i> <a href='http://contents.irctc.co.in/en/CovidVaccinationInfoEng.pdf' target="_blank" rel="noreferrer">Information on Covid 19 Vaccination Programme</a></div>
                    </div>

                    <div className='HomeAlertPopup-card-btn'>
                        <div className='HomeAlertPopup-card-underline'></div>
                        <button onClick={e => setShowAlert(false)}>OK</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeAlertPopup;