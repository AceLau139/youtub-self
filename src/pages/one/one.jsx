import React, {useState} from 'react';
import "./one.css";
import {Slider} from "infinite-react-carousel";
import { plans } from "../../data";

const One = () => {
  const [name, setName] = useState(plans[0].desc);
  const [price, setPrice] = useState(plans[0].price);
  const [planDesc, setDesc] = useState(plans[0].planDesc);
  const [day, setDay] = useState(plans[0].Days);
  const [time, setTime] = useState(plans[0].time);
  
  const changePlan = (a) => 
  {
    setName(plans[a].desc);
    setPrice(plans[a].price);
    setDesc(plans[a].planDesc);
    setDay(plans[a].Days);
    setTime(plans[a].time);
  };  



  return (
    <div className='container'>
    <div className="row">
        <div className="col-lg-7 col-md-12 col-xl-7">
  <h3>I will create a video review about your music</h3>
  <div className="heading">
    <img src="img/desktop-design.jpg"/>
    <div>
      <h4>Logan Spidrhnds <span>@spiderhandspnz</span></h4>
      <div>
        <span>New Zealand</span>
      <span>I speak English</span>
      <span>1,200 orders completed</span>
      </div>
      <button>Message me</button>
    </div>
  </div>
    <div>
      <h2>A Kiwi Musician that enjoys reviewing your Singles, EPs and Albums</h2>
      <p>Hi There! I&aposm Logan, AKA Spiderhands. I&aposm a Top-Rated Seller on Fiverr with 900+ 5-Star Ratings for my Music Reviews, with a background in Music Theory, Performance, Composition and Studio Production. Let&aposs listen to your music, and give it the care and</p><span id="dots2"></span><p id="more2">attention that it deserves!</p>
        <span onClick="myFunction2()" id="myBtn2" style={{borderBottom: '1px' + 'solid' + 'black'}}><b>Read more</b></span>
    </div>
    <div className="skill">
      <h6>Skills</h6>
      <div className="skillSet">
        <span className="skillsubset">Music</span>
        <span className="skillsubset">Customer service</span>
        <span className="skillsubset">Guitar</span>
        <span className="skillsubset">Music composition</span>
        <span className="skillsubset">Music production</span>
        <span className="skillsubset">Songwriting</span>
        <span className="skillsubset">Audio editing</span>
        <span className="skillsubset">Audio mastering</span>
        <span className="skillsubset">Audio mixing</span>
        <span className="skillsubset">Audio engineering</span>
      </div>
    </div>
    <span ><b className="aboutMe">More about me</b></span>
  </div>
  <div className="col-lg-5 col-md-12 col-xl-4">
  <div className="Buy">
    <div className="PriceSelect">
      <button onClick={() => changePlan(0)}>Basic</button>
      <button onClick={() => changePlan(1)}>Standard</button>
      <button onClick={() => changePlan(2)}>Premium</button>
    </div>
    <div>
      <div>
      <span><b>{name}</b></span>
      <span><b>{price}</b></span>
      </div>
      <p>{planDesc}</p>
      <h6 style={{marginLeft: 20 +'px'}}><b>{day}</b></h6>
  <dl style={{marginLeft: 20 +'px'}}>
  <dd>~ Song/Audio Review</dd>
  <dd>-Up to {time} Minutes</dd>
  <dd>-Feedback (written or recorded)</dd>
  </dl>
    </div>
    <button id="purchase">Continue {price}</button>
    <span id="Compare">Compare packages</span>
  </div>
    <button id="Contact">Contact me</button>
  </div>
  
  <div className="Rated">
    <div>
      <img src="./img/desktop-design.jpg" />
      <div>
        <h6>Top Rated Seller</h6>
        <p>Vetted by Fiverr and completed at least 100 orders on time with a minimum 4.7 rating</p>
      </div>
    </div>
    <div>
      <img src="./img/desktop-design.jpg"/>
      <div>
        <h6>Highly Responsive</h6>
        <p>Known for exceptionally quick replies</p>
      </div>
    </div>
  </div>
  
  <div className="PeopleLove">
    <div>
          <h5>What people loved about this seller</h5>
    <span>See all reviews</span>

      </div>
        <Slider className="slider">
          <div>
          <img src="/img/star.png" alt="" />
          </div>
          <div>
          <img src="/img/star.png" alt="" />
          </div>
          <div>
          <img src="/img/star.png" alt="" />
          </div>
          <div>
          <img src="/img/star.png" alt="" />
          </div>
        </Slider>
  </div>
  <div className="aboutPig">
    <h3>About this gig</h3>
    <p>Hey there, Fellow Musician! <b>Keen to get your latest Single, EP or Album reviewed by</b> someone that actually cares?</p>
    <span id="dots"></span><div id="more">
      
    <p>Well, you found the right place! Here&aposs how my gig can help you:</p>
    <ul>
      <li>It&aposll cost as little as $20USD to create an in-depth, non-biased, professionally recorded-and-edited [High-Quality] video review, all about your music. </li>
      <li> I review all types of genres, and can do Single, EP or Album reviews of whatever scale you need. Need more than 6 tracks reviewed? Message me for a quote!
</li>
      <li>With my 900+ 5-star ratings, you can be assured that you&aposll receive a structured, personable, detailed, honest and industry-grade addition to your press kit.</li>
      <li>No matter the scope - your review will be delivered within a maximum of 7 days!</li>
      <li>There&aposs also an *optional* upload to our &aposSP REVIEWS&apos YouTube playlist included within each gig package.</li>
      <li>Finally - once you&aposve received and accepted the delivered review, feel free to use it for whatever promotional purposes you prefer. It&aposs all yours!</li>
    </ul>
    <p>If you have any questions, please don&apost hesitate to ask! I look forward to listening to you soon. Oh, and have a great day!</p>
          
      <div>
    <span>Kind Regards,</span>
    <dl>
  <dd><b>~ Logan (A.K.A Spiderhands)</b></dd>
  <dd>-Music Reviewer / Management</dd>
</dl></div>
  </div>
    <span onClick="myFunction()" id="myBtn" style={{borderBottom: 1+'px' +'solid'+ 'black'}}><b>Read more</b></span>
  </div>

<div>
    <div className="imgGroup">
<img src="img/desktop-design.jpg"/>
<img src="img/desktop-design.jpg"/>
<img src="img/desktop-design.jpg"/>
  </div>

  <div className="Details">
    <h6>Topic:</h6>
    <span>Music production . Songwriting & composing</span>
  </div>
</div>
<div>
  <h1>Compare packages</h1>
  
  <table style={{marginTop: '45px', marginBottom: "110px"}} className='col-lg-5 col-md-12 col-xl-7'>
  <thead>
  <tr  className="text-start">
    <th scope="col" rowSpan={4}>Package</th>
    <td scope="col">HK$165</td>
    <td scope="col">HK$330</td>
    <td scope="col">HK$495</td>
  </tr>
  <tr  className="text-start"> 
    <th scope="col">Basic</th>
    <th scope="col">Standard</th>
    <th scope="col">Premium</th>
  </tr>
  <tr className="text-justify">
    <td scope="col">1 SONG REVIEWED + YOUTUBE UPLOAD</td>
    <td scope="col">2-3 SONGS REVIEWED + YOUTUBE UPLOAD</td>
    <td scope="col">4-6 SONGS REVIEWED + YOUTUBE UPLOAD</td>
  </tr>
  <tr  className="text-justify">
    <td scope="col">I will create a High-Quality Video Review of One Song for you to use for Promotion + YouTube Upload</td>
    <td scope="col">I will create a High-Quality Video Review of 2-3 Songs for you to use for Promotion + YouTube Upload</td>
    <td scope="col">I will create a High-Quality Video Review of 4-6 Songs for you to use for Promotion + YouTube Upload</td>
  </tr>
  </thead>
   <tbody className="text-center">

<tr>
  <th scope="row" className="text-start" style={{width: '160px'}}>Song/Audio Review</th>
  <td>3</td>
  <td>Send Invoice</td>
</tr>
<tr>
  <th scope="row"className="text-start" style={{width: '160px'}}>Feedback (written or recorded)</th>
  <td>4</td>
  <td>Ship</td>
</tr>
<tr>
  <th scope="row"className="text-start" style={{width: '160px'}}>Minutes Included</th>
  <td>7</td>
  <td>21</td>
  <td>42</td>
</tr>
<tr>
  <th scope="row"className="text-start" style={{width: '160px'}}>Delivery Time</th>
  <td>4 days</td>
  <td>5 days</td>
  <td>6 days</td>
</tr>
<tr>
  <th rowSpan={5} scope="row" className="text-start">Total</th>
  <td>HK$165</td>
  <td>HK$330</td>
  <td>HK$495</td>
</tr>

</tbody>
<tfoot className="text-center">
<tr>
<td></td>
<td><button style={{width: '170px', height: '40px', backgroundColor: 'green', color:"white"}}>Select</button></td>
<td><button style={{width: '170px', height: '40px', backgroundColor: 'green', color:"white"}}>Select</button></td>
<td><button style={{width: '170px', height: '40px', backgroundColor: 'green', color:"white"}}>Select</button></td>
</tr>
</tfoot>
</table>
</div>
  <div className="recommend">
    <h2>Recommended for you </h2>
    <div>
      <img src="./img/desktop-design.jpg"/>
      <img src="./img/desktop-design.jpg"/>
    </div>
  </div>
  
    </div>
    </div>
  );
};

export default One;
