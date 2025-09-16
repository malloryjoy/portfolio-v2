import React from 'react';


class Expertise extends React.Component {
    render() {
        
        return (<><section id="expertise" class="bg-section-purple text-white flex flex-col items-center justify-center" role="region" aria-label="Areas of Expertise">
            <h2 className="color-white">Areas of Expertise</h2>
            <div id="skills" class="grid grid-cols-1 items-center sm:ml-20 md:grid-cols-2 gap-2 px-8 w-full max-w-xl">
                <div class="text-left">
                    <ul>
                        <li>Web Design</li>
                        <li>Technical Documentation</li>
                        <li>Copywriting for Web</li>
                        
                    </ul>
                </div>
                <div class="text-left">
                    <ul>
                        <li>Wordpress Development</li>
                        <li>UX Design</li>
                        <li>Copywriting for Social Media</li>
                        
                    </ul>
                </div>
            </div>
 
 
 
 
        </section>
              
        </>)
      }


}

export default Expertise