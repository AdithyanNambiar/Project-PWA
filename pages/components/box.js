

const Box = () => {
    return ( 
        <> 
     <div className="imagegrid">
	
	<div className="imagegrid-item medium">
		<img src="images/box1.jpg" width={550} height={350} alt=""/>
		<div className="text1">
            <h3 className="B1">Courseware<br/>Development</h3>
            <hr></hr>
            <p className="P1">Leverage your existing content assets to an agile, SME-driven practice through our leading edge courseware development services</p>
            <button className="click1">READ MORE</button>
        </div>
	</div>

    <div className="imagegrid-item medium">
		<img src="images/box2.jpg" width={550} height={350} alt=""/>
        <div className="text2">
            <h3 className="B1">Offshore<br/>Development</h3>
            <hr></hr>
            <p className="P1">Ensure efficiency of our dedicated, state-of-the-art offshoring models while maintaining overall control facilitated by fully-owned captive centers</p>
            <button className="click2">READ MORE</button>
        </div>
	</div>
     
    <div className="imagegrid-item medium">
		<img src="images/box3.jpg" width={550} height={350} alt=""/>
        <div className="text3">
            <h3 className="B1">Technology<br/>Services</h3>
            <hr></hr>
            <p className="P1">Accelerate your business growth with tailor-made technology solutions for your bespoke requirements</p>
            <button className="click3">READ MORE</button>
        </div>
	</div>

    <div className="imagegrid-item medium">
		<img src="images/box4.jpg" width={550} height={350} alt=""/>
	    <div className="text4">
            <h3 className="B1">Content<br/>Engineering</h3>
            <hr></hr>
            <p className="P1">Generate value across your product life-cycle through our automated solutions and transformation services</p>
            <button className="click4">READ MORE</button>
        </div> 
	</div>
    </div>
        </>
    );
}
 
export default Box;