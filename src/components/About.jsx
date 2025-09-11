import React from 'react';

class About extends React.Component {
    render() {
        
        return (<><section id="aboutme" role="main">
          
            <div id="myface">
            <img class="circle" id="defaultimage" src="./myface.jpg" alt="Mallory Joy face" />
            </div>
            <div role="region" id="mystory" aria-label="about me">
            <h2 class="sectionheader" aria-label="Hi! I'm Mallory.">Hi! I'm Mallory.</h2>
            <p>I am a full stack developer based out of the east coast of the United States. The beginning of my career can be traced
                back to my early teens, as every 'cool kid' started creating profiles on Myspace. I would rapid fire choose theme after theme
                for my own profile, while sitting in awe at the people who knew how to manipulate the HTML and CSS of a theme to make
                it their own. As the social media industry boomed, so did my interest in web design and software engineering.
            <br /><br />
            Outside of the world wide web, I like movies (horror!), music (indie!), and traveling (everywhere!). As you read this, I am probably scribbling away in a journal,
                reading a book, or playing piano. Ask me about my favorite sitcom, and tell me yours!<br /><br />
            In short, I love a good story, and a great adventure. Ready to leave the Shire?</p>
            </div><div></div>
           
        </section>
              
        </>)
      }


}

export default About