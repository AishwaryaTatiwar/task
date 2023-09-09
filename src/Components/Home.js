import React from 'react'
import vect from './Images/vector.png';
import pic from './Images/Picture2.png';
import img1 from './Images/img1.png';
import img from './Images/textimg.png';
import arrow1 from './Images/arrow.png';
import arr2 from './Images/arr2.png';
import arr3 from './Images/arr3.png';
import people from './Images/people.png';
import pers from './Images/Perspective.png';
import pic10 from './Images/Picture10.png';
import gol from './Images/circles.png';

const Home = () => {
  // const info=(event)=>{
  //  event.target.value
  // }
  return (<>
  <div className='google'>
 <div ><img src={img} className='text'></img></div>
 <div className='pqr'><img src={vect} className='vec'></img>
  <img className='image' src={pic}></img></div>
  </div>
      {/* <h1 id='t1'>Google</h1>
      <h1 id='t2'>Developer</h1>
      <h1 id='t3'>Students</h1>
      <h1 id='t4'>Clubs</h1>
    <h2 id='t5'>RCOEM Chapter</h2> */}
 
  <img src={img1}></img>
  <p className='para1'>Google Developer Student Clubs are community groups for<br></br> college and university students interested in Google <br></br>developer technologies.</p>
  <button className='but'>JOIN US</button>
  <div className='arrows'>
  <img src={arrow1} className='i1'></img>
  <img src={arr2} className='i2'></img>
  <img src={arr3} className='i3'></img>
  </div>
  <p className='para2'>Get To Know Us!</p>
   {/* First copy  */}
  <p className='head1'>Our Mission</p>
   
  <center><div className='bar' style={ {backgroundColor : "blue"}}><p></p></div></center>
  <div className='multi-div'>
    <div ><img className= 'xyz' src={people}></img></div>
    <div> <p className='alignment'>Our mission involves community engagement,<br></br> leadership development, building strong tech<br></br> foundation, while enabling all tech enthusiasts to contribute to the global society.</p></div>
  </div>
  {/* Second copy */}
  <p className='head1'>Our Perspective</p>
   
  <center><div className='bar' style={ {backgroundColor : "green"}}><p></p></div></center>
  <div className='multi-div'>
    
    <div className='abc'> <p className='alignment1'>We’re a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team.</p></div>
    <div ><img className= 'xyz1' src={pers}></img></div>
  </div>
  {/* Third copy */}
  <p className='head1'>What Keeps Us Going?</p>
   
  <center><div className='bar' style={ {backgroundColor : "red"}}><p></p></div></center>
  <div className='multi-div'>
    <div ><img className= 'xyz' src={pic10}></img></div>
    <div> <p className='alignment'>Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.
The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.</p></div>
  </div>
  <center><div className='counts'><div className='container'>
  <img  className='numbers'src={gol}></img>
  <div className='centered'>03+</div>
  <p style={{fontSize:"32px",marginTop:"5px"}}>Years</p>
  </div>
  <div className='container'>
  <img  className='numbers'src={gol}></img>
  <div className='centered'>10+</div>
  <p style={{fontSize:"32px",marginTop:"5px"}}>Events</p>
  </div>
  <div className='container'>
  <img  className='numbers'src={gol}></img>
  <div className='centered'>1K+</div>
  <p style={{fontSize:"32px",marginTop:"5px"}}>Community Members</p>
  </div>
  <div className='container'>
  <img className='numbers' src={gol}></img>
  <div className='centered'>200+</div>
  <p style={{fontSize:"32px",marginTop:"5px"}}>Attendees</p>
  </div></div></center>
  
   
  </>
  )
}

export default Home
