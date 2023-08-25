import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

export default function App() {
  const [userName, setUserName] = useState(' ');

  // get the current user's name and set it to the state. Also save the name in the input field
  useEffect(() => {
    const promptName = prompt('Hey there, please enter your name.');
    setUserName(promptName || '{User Name}!');
  }, []);

  // get current date and time
  const currentDate = new Date();

  // Get various components of the current date and time
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('default', { month: 'short' });
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  // am or pm
  const ampm = hours >= 12 ? 'pm' : 'am';

  // Format the date and time as a string
  const formattedDateTime = `${day} ${month} ${year} ${hours}:${minutes}${ampm}`;


  

  return (
    <div className="d-flex grand-parent ">
      <div className="container main row ">
        <div className="col-5 h-75 left-border yellow-border justify-content-center align-items-center d-flex purple">
        <div className="row align-items-center">
        <div className="col-2 h-50 bottom-border">
                  <img src="left-indicator-light.svg" alt="left" className="img-fluid" />
                </div>

                <div className="col-10">
                    <div className="round-div">
                        <div className="mid-circle">
                            <div className="child-circle d-flex justify-content-center align-items-center">
                                <div className="p0 white-text">0</div>
                                <div className="p10 white-text">25m</div>
                                <div className="p25 white-text">50m</div>
                                <div className="p35 white-text">100m</div>
                                <div className="p50 white-text">200m</div>
                                <div className="p65 white-text">300m</div>
                                <div className="p75 white-text">400m</div>
                                <div className="p85 white-text">500m</div>
                                <div className="p100 white-text">600m</div>

                                <div className="smallest-circle d-flex flex-column text-center justify-content-center align-items-center white-text m-0">
                                    {/* <div className="white-text m-0 text-center align-items-center" style={{ }}> */}
                                    <div>
                                      <p style={{fontSize: '3rem'}}>250</p>  
                                      <p >Marquis Goal</p>
                                    </div>
                                      
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                           
                    </div>
                </div>
                
                
            </div>
        </div>

        <div className="col-2 h-75 gap-1 d-flex flex-column purple justify-content-center align-items-center">
            <div className="current-date white-text ">{formattedDateTime}</div>
            {/* <div className='bi-alarm' style={{fontSize:'2rem', color: 'cornflowerblue'}}></div> */}
            <input
              type="text"
              className="form-control light-background bi-person-fill  "

              // placeholder={`Hi ${userName || 'User Name'}!`}
              // placeholder={`Hi ${userName || 'User Name'}!`}
              // onChange={(e) => setUserName(e.target.value)}
              disabled
              value={`Hi ${userName || 'User Name'}!`}
              // pt-4
              
              style={{ color: 'white', border: 'none', fontSize: '1rem' }}
            />
            <div className='pt-8'>
              <img src='nav-map.png' alt='Navigation map' className='img-fluid pt-8 w-80' />
            </div>

            <div>
            <img src='nav-icon.svg' alt='Navigation Pin Icon' />
            </div>

            <div className='pt-8 white-text'>
              24 Days Left
            </div>

           
              <div className='d-flex justify-content-center flex-row gap-4 mt-5 z-1'>
                <img src='wifi-icon.svg' alt='Wifi icon' />
                <img src='bluetooth-icon.svg' alt='bluetooth icon' />
                <img src='location-icon.svg' alt='location icon' />
                <img src='phone-icon.svg' alt='phone icon' />
                <img src='music-icon.svg' alt='music icon' />
                <img src='mic-icon.svg' alt='mic icon' />
              </div>
          

        </div>

        <div className="col-5 h-75 right-border yellow-border  justify-content-center align-items-center d-flex purple">
            <div className="row align-items-center">
                <div className="col-10">
                    <div className="round-div">
                        <div className="mid-circle">
                            <div className="child-circle d-flex justify-content-center align-items-center">
                                <div className="p0 white-text">0%</div>
                                <div className="p10 white-text">10%</div>
                                <div className="p25 white-text">25%</div>
                                <div className="p35 white-text">35%</div>
                                <div className="p50 white-text">50%</div>
                                <div className="p65 white-text">65%</div>
                                <div className="p75 white-text">75%</div>
                                <div className="p85 white-text">85%</div>
                                <div className="p100 white-text">100%</div>
                                <div className="smallest-circle d-flex justify-content-center align-items-center ">
                                    <div className="white-text shadow-text" style={{textAlign: 'center'}}>
                                    <h1>55</h1>% 
                                    <p className=''>Estimated KPI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                           
                    </div>
                </div>
                <div className="col-2 h-50 bottom-border">
                    <img src="right-indicator-light.svg" alt="right" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
