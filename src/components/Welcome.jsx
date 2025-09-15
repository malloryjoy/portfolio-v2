import React from 'react';
import Nav from './Nav';
class Welcome extends React.Component {

    render() {
        
        return (<><section id="welcome" role="region" aria-label="my portfolio" className="!h-160" >
            <Nav />
            <div id="hd-lspcmn"></div>
           <div aria-labelledby="Mallory Joy">
           <h1 className="font-mogra text-shadow-xl text-xl">MALLORY JOY</h1>
           <p className="leading-1.5 text-base py-8">EST. 1994</p>
           <h2 className="mt-6 text-center font-vidaloka font-extrabold text-5xl">FEARLESS AMBITION. <span id="smo" className="ml-65">FLAWLESS WORK.</span></h2>
           <div className="mt-40 pb-22 mb-22 font-extrabold text-3xl text-black"><p><a aria-label="Scroll down to about me section" href="#aboutme"><i class="fa-solid fa-chevron-down"></i></a></p></div>
       </div>
        </section>
              
        </>)
      }

}

export default Welcome

