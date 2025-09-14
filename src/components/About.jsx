import React from 'react';
import '/src/index.css';

class About extends React.Component {
    render() {
        
        return (<><section id="aboutme" role="main" >
          
          <div className="bg-red-400">
  If this box is red, Tailwind is working!
</div>
            <div role="region" id="mystory" aria-label="about me">
            <img class="rounded-full w-7/24 h-7/24 float-start" id="defaultimage" src="/src/assets/myface.jpg" alt="Mallory Joy face" />
            <h2 class="font-vidaloka text-left text-lg mt-5" aria-label="Hi! I'm Mallory.">Hi! I'm Mallory.</h2>
            <p class="font-inter text-left">I am a full stack developer based out of the east coast of the United States. The beginning of my career can be traced
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