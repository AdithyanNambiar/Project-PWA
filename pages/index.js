import Head from 'next/head'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SlideShow from './components/SlideShow'
import styles from '../styles/Home.module.css'
import Typewriter from './components/typewriter'
import Box from './components/box'
import Card from './components/card'
import Grid from './components/grid'
import Footer from './components/Footer'
import Overlay from './components/overlay'
import Slider from './components/slider'
import Marquee from './components/Marquee'


export default function Home() {
  return (
    
  <>
   <Head>
   <title>
     Home-Impelsys
   </title>
   <meta charset="UTF-8" />
   <meta name="description" content="First Page."></meta>
   <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
   <meta name="theme-color" content="#fff" />
   <link rel='icon' href='/imp-logo.ico'/>
   <link rel='manifest' href='/manifest.json'/>
   <link rel="apple-touch-icon" href="/icon.png"></link>
   <script
    src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
    async=""
  ></script>
   </Head>
   <div>
    </div>
    <body>
    <img className='GPW' src="images/GPWlogo-01.png" width={90} height={160}/>
    <Header />
    <Navbar />
    
     <SlideShow />
     <Marquee />
     <h2 className='h2'>Platforms by Impelsys</h2>
     <Typewriter />
     <Box />
     <h2 className='h22'>Industry Segments</h2>
     <h5>Create impactful digital transformation outcomes with our<br></br>paramount industry solutions</h5>
     <Card />
     <h2 className='h23'>Advantage</h2>
     <Grid />
     <h2 className='h24'>Our Clients</h2>
     <Slider/>
     <h2 className='h25'>We are Driven by Purpose</h2>
     <a href="#" className='A'>A message from Sameer Shariff</a>
     <p>Our Relationships Are Driven By Our Values</p>
     <Overlay/>
      <Footer/>
   </body>

  </>
   
  )

  
}
