import React, { useState, useEffect } from 'react';
import useElementInView from '../utils/ElementInView'
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet';

import '../css/App.css';
import videoSrc from '../assets/golf-vid.webm';
import open from '../assets/menu.svg';
import close from '../assets/close.svg';

import swimImg from '../assets/swim.webp'
import tennisImg from '../assets/tennis.webp'
import golfImg from '../assets/golf.webp'
import gymImg from '../assets/gym.webp'
import fancyImg from '../assets/fancy.webp'

import territoryImg from '../assets/Back4.jpg'
import fbImg from '../assets/fb.svg'


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const about = useElementInView('.about-text');
  const activitiesRef = useElementInView('.activities-cnt');
  const territoryRef = useElementInView('.territory');
  const fancyRef = useElementInView('.contact-text')
  const questionRef = useElementInView('.Faq-question')

  const [isClicked, setIsClicked] = useState(false)

  const [activeIndexes, setActiveIndexes] = useState({});

  const toggleAccordion = (index) => {
    setActiveIndexes((prevIndexes) => ({
      ...prevIndexes,
      [index]: !prevIndexes[index],
    }));
  };

  const faqs = [
    { question: "What's The Golf Season?", answer: "All Round. Our Golf Season ranges from winter to summer, anytime is Golf Season" },
    { question: "Are Caddies Available?", answer: "Yes. Caddies are available to Rent For ZAR20" },
    { question: "Is There A Pitching/Chipping area?", answer: "Yes. Both a Pitching and Chipping area are available" },
    { question: "What is the Dress Code?", answer: "Appropriate Golf Attire. Anything you'd wear at the Open" },
    { question: "Is it Beginner Friendly?", answer: "Yes. Practice and Instructors are available." },
    { question: "Is Food Available on the Premises?", answer: "Yes. A Bar and a Halfway House are available" },
    { question: "Are Credit Cards Accepted?", answer: "Yes. We accept Visa & MasterCard" },
    { question: "Are Memberships Available?", answer: "Yes. We offer competitive annual membership fees." },
    { question: "What is The Price For a Golf Game?", answer: "ZAR40 For Affliated members. And ZAR70 for Visitors" }
  ];

    


  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = (event) => {
      const video = document.getElementById('video');
      const text = document.getElementById('pg');
      const header = document.getElementById('header');
      const golf = document.getElementById('golf');
      const golfh1 = document.getElementById('golf-h1');
      const subline = document.getElementById('subline');

      if (video) {
        const scrollTop = window.scrollY;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

        let scaleValue = parseFloat(getComputedStyle(video).transform.split(',')[0].replace('matrix(', ''));
        if (scrollDirection === 'down' && scaleValue < 1) {
          scaleValue = 1;
          text.style.color = 'black';
          text.style.top = '0';
          video.play();
          header.style.animationPlayState = 'running';
          golf.style.animationPlayState = 'running';
          golfh1.style.animationPlayState = 'running';
          subline.style.animationPlayState = 'running';
        } else if (scrollDirection === 'up' && scaleValue > 0.5) {
          scaleValue = 0.5;
          text.style.color = 'white';
          text.style.top = 'unset';
          video.pause();
          header.style.animationPlayState = 'paused';
          golf.style.animationPlayState = 'paused';
          golfh1.style.animationPlayState = 'paused';
          subline.style.animationPlayState = 'paused';
        }

        video.style.transform = `scale(${scaleValue})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const video = document.getElementById('video');
    if (video) {
      video.autoplay = false;
      video.loop = false;
      video.muted = true;
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <>
      <section className='hero' id='hero'>
        <div className="container">
          
          <div className="video-container" dangerouslySetInnerHTML={{
            __html: 
            `<video id="video" autoPlay>
                  <source src=${videoSrc} type="video/webm" />
              </video>`,
          }}>
          </div>
          <div className='hero-text-container' id='pg'>
            <header id='header'>
              <div className='logo'>
                <a href="">Piet Retief Country Club</a>
              </div>
              <nav>
                <button className='menu-toggle' onClick={toggleMenu}>
                  <img src={menuOpen ? close : open} alt="Menu Icon" />
                </button>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                  <li className='nav-link'><a href="">Home</a></li>
                  <li className='nav-link'><a href="">Territory</a></li>
                  <li className='nav-link'><a href="">About</a></li>
                  <li className='nav-link'><a href="">Contact</a></li>
                </ul>
                <div>
                  <button className='cn-btn'>Book A Day</button>
                </div>
              </nav>
            </header>
            <div className='header-title'>
              <div className='golf' id='golf'>
                <h1 id='golf-h1'>Play Golf.</h1>
              </div>
              <div className='subline' id='subline'>
                <p className='subline-text'>
                  Experience golfing like never before at
                  <span className='italic'> Piet Retief's</span> one and only
                  golf club, where <span className='italic'>lush greens </span>
                  meet exceptional facilities and <span className='italic'> impeccable service.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

   <section className='page'>
      <section className='about' id='about'>
        <p className='about-text' ref={about.ref}>Piet Retief Country Club was founded in<span className='italic'> 1957</span> and since then been a cornerstone to <span className='italic'>leisure</span> activities to the small community of Piet Retief. It has a 9 hole golf course (which can be played as 18), <span className='italic'>squash</span> and <span className='italic'>tennis courts</span>, a <span className='italic'>swimming pool</span>, gym and a bowls section with a clubhouse and bar.

The club is situated on the N2 in the south-east corner of <span className='italic'>Mpumalanga</span>, about 30km north of Kwa zulu-Natal and 30km west of Swaziland.</p>
      </section>
      <section className='activities'>
      <section className='activities-cnt' ref={activitiesRef.ref}>
        
        <div className='activity-cnt'>
          <div className="act-img-cnt">
            <img src={swimImg} alt="" />
          </div>
          <div className="act-text">
            <h1 className='act-no'>01</h1>
            <h1 className='act-name'>Swim</h1>
          </div>

        </div>
        <div className='activity-cnt'>
          <div className="act-img-cnt">
            <img src={tennisImg} alt="" />
          </div>
          <div className="act-text">
            <h1 className='act-no'>02</h1>
            <h1 className='act-name'>Tennis</h1>
          </div>

        </div>
        <div className='activity-cnt'>
          <div className="act-img-cnt">
            <img src={golfImg} alt="" />
          </div>
          <div className="act-text">
            <h1 className='act-no'>03</h1>
            <h1 className='act-name'>Golf</h1>
          </div>

        </div>
        <div className='activity-cnt'>
          <div className="act-img-cnt">
            <img src={gymImg} alt="" />
          </div>
          <div className="act-text">
            <h1 className='act-no'>04</h1>
            <h1 className='act-name'>Gym</h1>
          </div>

        </div>

      </section>
      </section>
      <section className='territory' ref={territoryRef.ref} style={{backgroundImage:`url(${territoryImg})`}}>
          <div className='tt-header'>
            <h1>Our Territory </h1>
           <p> 9 Holes, 35 par =  {territoryRef.inView ? <CountUp end={2833} duration={5} />:0} meters of Pure Fun</p>
          </div>
      ,/</section>
      <section className='contact'>
        <div className='contact-text'>
          <div>
          <h1> <span className='italic'>Fancy A Game</span> ?</h1>
          <h2>Get in touch at <span className='italic'>{`(+27) 17 826 2625`}</span></h2>
          <h1> <span className='italic'>Where</span> ?</h1>
          
          <h2><span className='italic'>Lat: </span>{`-27.01215 `}  <span className='italic'> Lng:</span> {`30.7983`}</h2>
          <a href="https://maps.app.goo.gl/sYMX78bSnmYg5qWB7">1F De Wet St Piet Retief</a>
        </div>
        </div>
       
          <div className="contact-img-cnt">
            <img src={fancyImg} alt="" />
          </div>
      

      </section>
      
      <section className='FAQ'>
      <Helmet>
        <title>Frequently Asked Questions - Piet Retief Country Club</title>
        <meta name="description" content="Find answers to frequently asked questions about our golf course, including season details, availability of caddies, dress code, and more." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": ${JSON.stringify(faqs.map((faq, index) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            })))}
          }
          `}
        </script>
      </Helmet>
      <div className='Faq-header'>
        <h1 ref={questionRef.ref}>Frequently Asked</h1>
      </div>
      <div className='faq-questions'>
        {faqs.map((faq, index) => (
          <div className='Faq-question' key={index} >
            <div className="question-answer">
              <h2>{faq.question}</h2>
              <p className={activeIndexes[index] ? 'expanded' : ''}>
                {faq.answer}
              </p>
            </div>
            <div className='toggle'>
              <button onClick={() => toggleAccordion(index)}>{activeIndexes[index] ? "-" : "+"}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className='pricing'>
     
      <div className="plans">
      
      <div className='prices-cnt'>
        <h1><span className='italic'>Premium</span>
        </h1>
        <p>
        Our Pricing includes a Premium Membership for serious golfers
        Including additional perks such as free access to the pitching/chipping area,
        discounted lessons with instructors, and priority booking for tee times.
        </p>
      </div>
      <div className='prices-cnt'>
        <h1><span className='italic'>Lessons and Practice</span>
        </h1>
        <p>
        Lesson package with instructors.based on instructor's experience 
        and lesson duration. nominal fee for access to the pitching/chipping area 
        for non-members, included as a Standard and Premium membership benefit.
        </p>


      </div>
      <div className='prices-cnt'>
        <h1><span className='italic'>Standard</span>
        </h1>
        <p>
        competitive annual fees for general access to the golf course
        and basic facilities such as Tennis, Squash, Braai, Fishing And
        Swim, All Afiliated which gives you a discount on Golf Days
        </p>


      </div>
      
      <div className='prices-cnt'>
        <h1><span className='italic'>Events and Tournaments</span>
        </h1>
        <p>
        We Host regular tournaments and events, entry fees applicable
        that cover day costs Event packages for corporate or private events,
        including catering and use of facilities
        </p>


      </div>
      </div>
     

    </section>
    <section className='events-banner'>
      <div className='wrapper'>
        <div className='upcoming-event'>
          <h2>Upcoming Event:</h2>
        </div>
        <div className='event-date'>
          <h2>2 April 2024</h2>
        </div>
        <div className='event-price'>
          <h2>ZAR 200 PP </h2>
        </div>
        <div className='event-type'>
          <h2>Better BALL </h2>
        </div>
        <div className='event-time'>
          <h2>12:30</h2>
        </div>
        <div className='event-description'>
          <h2>Fundraising event </h2>
        </div>
      </div>
    </section>
    <footer>
      <div className='footer-cnt'>
      <div className="log">
        <h1>Piet Retief Country Club</h1>
      
      </div>
      <div className="stats">
        <h2>Grounds Specifications</h2>
        <ul>
          <li>Length <span className='italic'>2833 meters</span></li>
          <li>Holes <span className='italic'>9</span></li>
          <li>Par <span className='italic'>35</span></li>
          <li>Type <span className='italic'>Parklands</span></li>
          <li>Year Built <span className='italic'>1957</span></li>
        </ul>
      </div>
      <div className="stats">
        <h2>Amenities</h2>
        <ul>
          <li>Bar</li>
          <li>Halfway House </li>
          <li>Swimmming Pool </li>
        </ul>
      </div>
      <div className="stats">
        <h2>Affiliations</h2>
        <ul>
          <li>SAGA </li>
          <li>SALGU</li>
          <li>Non-associated Fairways </li>
        </ul>
      </div>
   


    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888.6536933979264!2d30.799034969495757!3d-27.010733203717372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeee49f4b2847ab%3A0x19f0561943a24e6c!2sPiet%20Retief%20Country%20Club!5e0!3m2!1sen!2sza!4v1721138264585!5m2!1sen!2sza&maptype=satellite"
  width="400px"
  
  height="200"
  style={{ border: "2px Solid #4c7766", maxHeight:"100%",  boxSizing:"border-box" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>
 <hr />
 <div className="legal">

  <p className="copy-right">&copy; {new Date().getFullYear()} Piet Retief Golf Club. All rights reserved. Designed and developed by <a className="austin-portfolio" href="https://austinmaturure.netlify.app" target="_blank" rel="noopener noreferrer">⚡</a></p>
  <a className="social-link" href="https://www.facebook.com/GOLFPietRetief/" target="_blank" rel="noopener noreferrer">
            <img src={fbImg} alt="Facebook" />
          </a>
 </div>
    </footer>
      </section>  
    </>
  );
}

export default App;
