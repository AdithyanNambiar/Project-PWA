
import Header from './components/Header'
import Navbar from './components/Navbar';
import Head from 'next/head'
import Footer from './components/Footer';

const page2 = () => {
    return ( 
<>
<img className='GPW' src="images/GPWlogo-01.png" width={90} height={160}/>
<Header/>
<Navbar/>
<Head>
  <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
  <meta name="theme-color" content="#fff" />
  <meta name="description" content="Second Page."></meta>
  <title>
    iPC Scholar - Impelsys 
  </title>
  <link rel='icon' href='/imp-logo.ico'/>
  <link rel='manifest' href='/manifest.json'/>
  <link rel="apple-touch-icon" href="/icon.png"></link>
  </Head>
<div >
  <img src="images/page2bg.jpg" className='bg2'/>
  <img src="images/iPClogo.png" className='bg1'/>
  <h3 className='pg2h3'>A Superior Delivery Platform Digitally<br></br> Disrupting the Publishing Industry</h3>
</div>

<body>
    <h3 className='h3'>One platform for all your academic, professional <br></br>and scholarly products</h3>
    <p className='p2'>iPC Scholar is a cloud-based, content-agnostic platform designed to cater to a wide spectrum of journal and e-book <br></br>publishers, education providers, and other types of enterprises outside the STM realm. Impelsys offers customers a<br></br>single branded platform to deliver their content in a variety of formats. As a key differentiator, Impelsys highlights<br></br>its <b> microservices architecture </b>, allowing for flexibility and scalability in building and maintaining custom versions of<br></br>the online publishing platform.</p>
    <h4 className='h4'>Make your content on-the-go with our state-of-the-art<br></br>reader technology for online and offline reading</h4>
</body>
<img className='mobile' src="images/mobile.png"/>

<div className='contain'>
  <img src="images/iPClogo2.png" width={210} height={60}></img><h2 className='H22'>Features</h2>
</div>

<h2 className='M'>Learn more about the unique<br></br>benefits of iPC Scholar</h2>

<button className='button'>Contact Us</button>
<Footer/>

</>
  );
}
 
export default page2;