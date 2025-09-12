import React from 'react';
import Nav from './Nav';
class Welcome extends React.Component {

    render() {
        
        return (<><section id="welcome" role="region" aria-label="my portfolio">
            <Nav />
            <div id="hd-lspcmn"></div>
           <div aria-labelledby="Mallory Joy">
           <h1 className="font-mogra text-shadow-xl">MALLORY JOY</h1>
           <p className="leading-1.5">EST. 1994</p>
           <h2 className="text-center font-vidaloka text-lg">FEARLESS AMBITION. <span id="smo">FLAWLESS WORK.</span></h2>
           <div className="mt-5em text-lg text-black"><p><a aria-label="Scroll down to about me section" href="#aboutme"><i class="fa-solid fa-chevron-down"></i></a></p></div>
       </div>
        </section>
              
        </>)
      }

}

export default Welcome

