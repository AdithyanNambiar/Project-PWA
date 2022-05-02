const Footer = () => {
    return ( 
        <>
        <footer>
      <div className="main-content">
        <div className="box">
          <h2>Contact Us</h2>
          <div className="content">
            <p>NEW YORK, USA <br></br><br></br>
               Impelsys Inc.<br></br><br></br>
               116 West 23rd Street,<br></br><br></br>
               Suite 500, New York, NY 10011, USA<br></br><br></br>
               Tel:  +1 212 239 4138, Fax: +1 917 591 9536,<br></br><br></br>
               eBook Support: +1 646 593 8618
            </p>
          </div>
        </div>
        <div className="box">
          <h2>Site Map</h2>
          <div className="content">
              <a href="#" className="text">Industry Segments</a><br></br><br></br>
              <a href="#" className="text">Technology Services</a><br></br><br></br>
              <a href="#" className="text">Offshore Development Services</a><br></br><br></br>
              <a href="#" className="text">Learning & Content Services</a><br></br><br></br>
              <a href="#" className="text">Careers</a><br></br><br></br>
              <a href="#" className="text">Blogs</a><br></br><br></br>
          </div>
         
        </div>
        <div className="box">
              
            <button className="btn" type="submit">LET'S CONNECT</button>
            
            <img src="images/cmmi.png"/>
            <img src="images/iso.png"/>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">Impelsys | </span>
          <span className="far fa-copyright"></span><span> All rights reserved</span>
        </center>
      </div>
    </footer>

        </>
     );
}
 
export default Footer;