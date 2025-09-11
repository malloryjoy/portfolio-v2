import React from 'react';

class Welcome extends React.Component {

    render() {
        
        return (<><section id="welcome" role="region" aria-label="my portfolio">
            <div id="hd-lspcmn"></div>
           <div aria-labelledby="Mallory Joy">
           <h1 className="font-mogra text-shadow-lg text-shadow-pink-500">MALLORY JOY</h1>
           <p>EST. 1994</p>
           <h2>FEARLESS AMBITION. <span id="smo">FLAWLESS WORK.</span></h2>
           <h2 >FEARLESS AMBITION. <br /> FLAWLESS WORK.</h2>
           <div id="stlm"><p><a aria-label="Scroll down to about me section" href="#aboutme"><i class="fa-solid fa-chevron-down"></i></a></p></div>
       </div>
        </section>
              
        </>)
      }

}

export default Welcome

