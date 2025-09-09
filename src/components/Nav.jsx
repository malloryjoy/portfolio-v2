import React from 'react';

class Nav extends React.Component {
    render() {
        
        return (<><section id="mobileNav">
            <div class="off-screen-menu">
                <ul id="mobileLinks">
                    <li class="navItem"><a href="#welcome">Home</a> </li>
                    <li class="navItem"><a href="#aboutme">About</a> </li>
                    <li class="navItem"><a href="#expertise">Projects</a> </li>
                    <li class="navItem"><a href="#resume">Resume</a> </li>
                    <li class="navItem"><a href="#contact">Contact</a> </li>
                    <li class="navItem"><a href="/ux-portfolio.html">UX Portfolio</a> </li>
                </ul>
              </div>
            </section>
              
        </>)
      }


}

export default Nav