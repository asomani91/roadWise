import React from "react";
import "../Footer/footer.css"
function Footer() {
    return (
        <footer id="footer">
        <div className="row">

              <div className="column large-7 medium-6 w-1000-stack ss-copyright">
                  <span>© Copyright The Cool Group 2021</span> 
              </div>
          </div>
  
          <div className="ss-go-top">
              <a className="smoothscroll" title="Back to Top" href="#top">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"/></svg>
               </a>
          </div>
        </footer>
    );
}

export default Footer;