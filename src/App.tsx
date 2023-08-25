// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  // const [userName, setUserName] = useState('{User Name}');

  // get current date and time
  const currentDate = new Date();

  // Get various components of the current date and time
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; 
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  // am or pm
  const ampm = hours >= 12 ? 'pm' : 'am';

  // Format the date and time as a string
  const formattedDateTime = `${day} ${month} ${year} ${hours}:${minutes}${ampm}`;



  return (
    <div className="d-flex grand-parent">
      <div className="container main row ">
        <div className="col-5 h-75 left-border yellow-border justify-content-center align-items-center d-flex">
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
                                <div className="smallest-circle d-flex justify-content-center align-items-center ">
                                    <div className="white-text shadow-text" style={{textAlign: 'center'}}>250 <br/> Marquis Goal</div>
                                </div>
                            </div>
                        </div>
                           
                    </div>
                </div>
                
                
            </div>
        </div>

        <div className="col-2 h-75 yellow-border">
            <div className="current-date white-text pt-2">{formattedDateTime}</div>
          center
        </div>

        <div className="col-5 h-75 right-border yellow-border  justify-content-center align-items-center d-flex">
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
                                    <div className="white-text shadow-text" style={{textAlign: 'center'}}>55% <br/> Estimated KPI</div>
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
