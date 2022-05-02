import Link from "next/link";

const Navbar = () => {
    return (  
       <nav>
		
        <div className="logo">
           <a href="http://localhost:3000/"><img src="images\Impelsys-Logo.png" ></img></a> 
        </div>
        <div className="nav-container">
       
		<ul> 
			<li><a href="#">iPublishCentral Core Technologies</a>
                <ul>
					<li><Link href="/page2"><a href="#">iPC Scholar</a></Link></li>
					<li><a href="#">MedLearn</a></li>
				</ul>
			</li>
			<li><a href="#">Services</a> 
				<ul>
					<li><a href="#">Technology Services</a></li>
					<li><a href="#">Offshore Development Services</a></li>
					<li><a href="#">Learning and Content Services</a></li>
				</ul>
			</li>
			<li><a href="#">Innovation lab</a> 
				<ul>
					<li><a href="#">What We Do</a></li>
					<li><a href="#">SSAM.ai</a></li>
					<li><a href="#">Ai Practices</a></li>
			         <li><a href="#">Key Initiatives</a></li>
				</ul>
			</li>
			<li><a href="#">Company</a>
              <ul>
					<li><a href="#">Our Vision</a></li>
					<li><a href="#">Leadership Team</a></li>
					<li><a href="#">Why Impelsys</a>
					</li>
                    <li><a href="#">Careers</a></li>
			</ul>
			</li>
			<li><a href="#">Resources</a>
             <ul>
					<li><a href="#">Leadership Speaks</a></li>
					<li><a href="#">Case Studies</a></li>
					<li><a href="#">Blogs</a>
					</li>
			</ul>
			</li>
			<li><a href="#">Media</a>
              <ul>
					<li><a href="#">Webinar</a></li>
					<li><a href="#">Press Release</a></li>
					<li><a href="#">Press Coverage</a></li>
			         <li><a href="#">Events</a></li>
			 </ul> 
           
 			</li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	
         
         </div>
       </nav>
        
    );
}
 
export default Navbar;