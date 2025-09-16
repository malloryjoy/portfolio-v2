import React from 'react';

class Projects extends React.Component {
    render() {
        
        return (<><section id="projects" role="region" aria-label="Sample Work" className="flex flex-col items-center justify-center">
            <h2 className="color-black text-shadow-dark">Sample Work</h2>
            
            <div id="row2" className="grid grid-cols-1 sm:ml-20 md:grid-cols-2 gap-2 w-full max-w-xl">
                <table>
                    <tbody>
                        <tr><th className="text-white">Wordpress Websites</th></tr>
                        <tr><td ><a href="https://www.providence-golf.com/" target="_blank" aria-label="Providence Golf Club (opens in a new tab)">Providence Golf Club</a></td></tr>
                        <tr><td><a href="https://www.seaviewgolf.com/" target="_blank" aria-label="Seaview Golf Club (opens in a new tab)">Seaview Golf Club</a></td></tr>
                        <tr><td><a href="https://www.citrusnational.com/" target="_blank" aria-label="Citrus National Golf Club (opens in a new tab)">Citrus National Golf Club</a></td></tr>
                        <tr><td><a href="https://sunshineclosetdesigns.com/" target="_blank" aria-label="Sunshine Closet Designs (opens in a new tab)">Sunshine Closet Designs</a></td></tr>
                        <tr><td><a href="https://golf.nbcsportsnext.com/template-library/" target="_blank" aria-label="NBC Sports Next Template Library (opens in a new tab)">NBC Sports Next Template Library</a></td></tr>
                    </tbody>
                   
                </table>
            
            
                <table>
                    <tbody>
                        <tr><th className="text-white">Technical Documentation</th></tr>
                        <tr><td><a href="/OnlineStoreSetup.pdf" target="_blank" aria-label="Getting started with WooCommerce (opens in a new tab)">Online Store Setup</a></td></tr>
                        <tr><td><a href="/BasicBuildProcess.pdf" target="_blank" aria-label="Website Build Basics (opens in a new tab)">Website Build Basics</a></td></tr>
                        <tr><td><a href="/SunstoneWalkthrough.pdf" target="_blank" aria-label="Sunstone Build Process (opens in a new tab)">Sunstone Build Process</a></td></tr>
                        <tr><td><a href="/AspenWalkthrough.pdf" target="_blank" aria-label="Fairway Build Process (opens in a new tab)">Aspen Build Process</a></td></tr>
                        <tr><td><a href="/accessingyourwebsite.pdf" target="_blank" aria-label="Accessing Your Website (opens in a new tab)">Accessing Your Website</a></td></tr>
                        </tbody>
                </table>
                </div>
            </section>
        </>)
      }


}

export default Projects




