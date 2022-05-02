import Head from "next/head";

const Grid = () => {
    return (
        <>
        <div>
        <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       </Head>
        <div className="wrapper">
         <div className="item1">
           <img src="images\stocks.jpg" width={600} height={620}></img>
         </div>
         <div className="item3">
           <img src="images\grid1.png"></img>
           <ul>20 +</ul>
           <p>Years of Expertise</p>
         </div>
         <div className="item4">
         <img src="images\grid2.png"></img>
           <ul>800 +</ul>
           <p>Experts</p>
         </div>
         <div className="item7">
         <img src="images\grid3.png"></img>
          <ul>250 +</ul>
          <p>Satisfied Customers</p>
         </div>
         <div className="item8">
         <img src="images\grid4.png"></img>
          <ul>2500 +</ul>
          <p>Customised Solutions<br></br>Developed</p>
         </div>
         <div className="item11">
         <img src="images\grid5.png"></img>
          <ul>1,000,000 +</ul>
          <p>Products Published</p>
         </div>
        </div>
        </div>
        </>
      );
}
 
export default Grid;
