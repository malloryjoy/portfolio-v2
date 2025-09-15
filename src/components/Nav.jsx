import React from 'react';
import '/src/index.css';

class Nav extends React.Component {
    render() {
        
        return (<><section id="mobileNav" className="pt-6">
            <ul>
                    <li className="navItem"><a className="navItem" href="#welcome">Home</a> </li>
                    <li className="navItem"><a className="navItem" href="#aboutme">About</a> </li>
                    <li className="navItem"><a className="navItem" href="#expertise">Projects</a> </li>
                    <li className="navItem"><a className="navItem" href="#resume">Resume</a> </li>
                    <li className="navItem"><a className="navItem" href="#contact">Contact</a> </li>
                    <li className="navItem"><a className="navItem" href="/ux-portfolio.html">UX Portfolio</a> </li>
                </ul>
           
            </section>
              
        </>)
      }


}

export default Nav