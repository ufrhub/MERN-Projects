import React from 'react'

function HomeBottomSection() {

    return (
        <div className='HomeBottomSection'>

            <div className='HomeBottomSection-heading'>HOLIDAYS</div>

            <div className='HomeBottomSection-body'>
                <div className='HomeBottomSection-card'>
                    <img src='https://www.irctc.co.in/nget/assets/images/exterior.jpg' alt='' />
                    <div className='HomeBottomSection-card-head'>Maharajas' Express</div>
                    <p>Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World's Leading Luxury train” by World Travel Awards consecutively for last six years.</p>
                    <div className='HomeBottomSection-card-readmore'>
                        <a style={{ textDecoration: "none", color: "black", fontWeight: "700" }} href='https://www.the-maharajas.com/' target="_blank" rel="noreferrer" >Read More<i style={{ padding: "5px" }} className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className='HomeBottomSection-card'>
                    <img src='https://www.irctc.co.in/nget/assets/images/Thailand.jpg' alt='' />
                    <div className='HomeBottomSection-card-head'>International Packages</div>
                    <p>Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.</p>
                    <div className='HomeBottomSection-card-readmore'>
                        <a style={{ textDecoration: "none", color: "black", fontWeight: "700" }} href='https://www.irctctourism.com/' target="_blank" rel="noreferrer" >Read More<i style={{ padding: "5px" }} className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className='HomeBottomSection-card'>
                    <img src='https://www.irctc.co.in/nget/assets/images/Kashmir.jpg' alt='' />
                    <div className='HomeBottomSection-card-head'>Domestic Air Packages</div>
                    <p>Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!</p>
                    <div className='HomeBottomSection-card-readmore'>
                        <a style={{ textDecoration: "none", color: "black", fontWeight: "700" }} href='https://www.irctctourism.com/' target="_blank" rel="noreferrer" >Read More<i style={{ padding: "5px" }} className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className='HomeBottomSection-card'>
                    <img src='https://www.irctc.co.in/nget/assets/images/Buddha_Banner.jpg' alt='' />
                    <div className='HomeBottomSection-card-head'>Buddhist Circuit Tourist Train</div>
                    <p>India, the country where Buddhism originated has rich memories of the Buddhist legacy. As part of its drive towards austerity, the only kind of art & architecture that it supported were Stupas, Chaityas & Viharas. Buddhist Train India will help you visit all these places up close for a truly religious experience.</p>
                    <div className='HomeBottomSection-card-readmore'>
                        <a style={{ textDecoration: "none", color: "black", fontWeight: "700" }} href='https://www.irctcbuddhisttrain.com/' target="_blank" rel="noreferrer" >Read More<i style={{ padding: "5px" }} className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className='HomeBottomSection-card'>
                    <img src='https://www.irctc.co.in/nget/assets/images/Manali.jpg' alt='' />
                    <div className='HomeBottomSection-card-head'>Rail Tour Packages</div>
                    <p>IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available</p>
                    <div className='HomeBottomSection-card-readmore'>
                        <a style={{ textDecoration: "none", color: "black", fontWeight: "700" }} href='https://www.irctctourism.com/' target="_blank" rel="noreferrer" >Read More<i style={{ padding: "5px" }} className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className='HomeBottomSection-card-add'>
                    <a href='https://www.air.irctc.co.in/' target="_blank" rel="noreferrer">
                        <img style={{ width: "100%", height: "100%" }} src='https://tpc.googlesyndication.com/simgad/15938063325336530651' alt='' />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default HomeBottomSection