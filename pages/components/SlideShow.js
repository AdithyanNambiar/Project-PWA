

const SlideShow = () => {
    return (  
      <>
      <div className="container">
            <div className="slideshow">
         
                <button className="slide-btn slide-btn-1"></button>
                <button className="slide-btn slide-btn-2"></button>
                <button className="slide-btn slide-btn-3"></button>
                <button className="slide-btn slide-btn-4"></button>
              
                <div className="slideshow-wrapper">
                    <div className="slide1">
                        <img className="slide-img" src="images/banner1.jpg"/>
                        <p className="T1">We are a Purpose Driven <br></br> Company : "Purpose Comes <br></br>First, Profit Comes Second"<br></br>- Sameer Shariff, CEO </p>
                    </div>
                    <div className="slide2">
                        <img className="slide-img" src="images/banner2.jpg"/>
                        <p className="T2">A Global Market Leader <br></br> in Delivering Impactful,<br></br>Engaging, and Adaptable<br></br>Online Learning Solutions</p>
                    </div>
                    <div className="slide3">
                        <img className="slide-img" src="images/banner3.jpg"/>
                        <p className="T3">Advanced, Interactive,<br></br>Customized Content Delivery<br></br>Platforms for On-the-Go<br></br>Learning</p>
                    </div>
                    <div className="slide4">
                        <img className="slide-img" src="images/banner4.jpg"/>
                        <p className="T4">At the heart of building <br></br> a great workplace <br></br><u>culture</u> lies TRUST.</p>

                    </div>
                </div>
            </div>
        </div>
    

      </>
    );
}
 
export default SlideShow;
