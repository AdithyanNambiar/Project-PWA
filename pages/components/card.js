const Card = () => {
    return ( 
        <>
        <div className="row">
  <div className="column">
    <div className="card"> 
       <img className="img1" src="images/circle1.png" ></img>
        <h6 className="H1">Publishers</h6>
        <ul>We provide publishers <br></br>with:</ul>
        <ul>
        <li>Cutting-edge delivery infrastructure</li>
        <li>Latest Workflow managment systems</li>
        <li>Advanced Content engineering services </li>
        </ul>
        <button className="b1">READ MORE</button>
    </div>
  </div>
  <div className="column">
    <div className="card">
    <img className="img2" src="images/circle2.png" ></img>
    <h6 className="H2">Professional Organizations</h6>
        <ul>We assist professional bodies with:</ul>
        <ul>
        <li>Hosting and Sharing scholarly ancillaries</li>
        <li>Innovative search, cross-reference features</li>
        <li>Content curation and digitization</li>
        </ul>
        <button className="b2">READ MORE</button>
    </div>
  </div>
  <div className="column">
    <div className="card">
    <img className="img3" src="images/circle3.png" ></img>
    <h6 className="H3">Educational <br></br>Institutions</h6>
        <ul>We empower academic institutions with:</ul>
        <ul>
        <li>Unique e-learning and digital publishing platform</li>
        <li>Innovative, interactive LMS portals</li>
        <li>Scalable, futuristic learning solutions</li>
        </ul>
        <button className="b3">READ MORE</button>
    </div>
  </div>
  <div className="column">
    <div className="card">
    <img className="img4" src="images/circle4.png" ></img>
    <h6 className="H4">Enterprises</h6>
        <ul>We transform corporate training through:</ul>
        <ul>
        <li>Bespoke digital content solutions</li>
        <li>Cloud-based content distribution</li>
        <li>On-the-go <br></br>Courseware</li>
        </ul>
        <button className="b4">READ MORE</button>
    </div>
  </div>
  </div>
        </>
      );
}
 
export default Card; 
