import React from 'react';
import './index.scss';

const footer = () => {
    return (
        <div id='footer'>
            <div id='upper_footer'>
                    <div className="footer-section">
                      <h4>Get to Know Us</h4>
                      <a href=""> Terms and Conditions</a>
                      <a href=""> Privacy Policy</a>
                </div>
                <div className="footer-section"><h4>Vote With Our Platform</h4>
                      <a href="">Advertize your Product</a>
                    <a href=""> Post Election Timetable</a>
                                
                </div>
                <div className="footer-section"><h4>Let Us Help You</h4>
                    <a href="">Help Centre</a>
                    <a href=""> Return Policy</a>
                </div>
                <div className="footer-section"><h4>Voting Machine Internationl</h4>
                    <a href=""> Africa</a>
                    <a href="">The Word</a>
                </div>
           </div>
           <div id='lower_footer'>
              <span>Copyright @thejust 2020</span>
            </div>
        </div>
    );
};
 export default footer;