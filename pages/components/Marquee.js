
const Marquee = () => {
    return ( 
        <>
     <div className="marquee-sibling"><h1 className="h1" >What We Do</h1></div>
    <div className="container1">
    <div className="marquee-container">
   <marquee width="100%">
    <ul>
     <span className="vertical-line"></span>
     <img src="images/marq1.png" height={60}/>
     <li>Digital Transformation</li>
     <span className="vertical-line"></span>
     <img src="images/marq2.png" height={60}/>
     <li>Digital Product Development</li>
     <span className="vertical-line"></span>
     <img src="images/marq3.png" height={60}/>
     <li>Content Engineering</li>
     <span className="vertical-line"></span>
     <img src="images/marq4.png" height={60}/>
     <li>Courseware Development</li>
     <span className="vertical-line"></span>
     <img src="images/marq5.png" height={60}/>
     <li>LMS Solutions</li>
     <span className="vertical-line"></span>
     <img src="images/marq6.png" height={60}/>
     <li>Digital Publishing</li>
     <span className="vertical-line"></span>
     <img src="images/marq7.png" height={60}/>
     <li>Interactive ebooks</li>
     <span className="vertical-line"></span>
     <img src="images/marq8.png" height={60}/>
     <li>eLearning Solutions</li>
   
     </ul>
   </marquee>
    </div>
    
    </div>

      
      </>
     );
}
 
export default Marquee;
