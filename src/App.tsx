import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';

const API_KEY = import.meta.env.VITE_REACT_API_KEY
const CITY_NAME = 'Johannesburg,za'
const LATITUDE = -26.2041;
const LONGITUDE = 28.0473;

export default function App() {
  const [userName, setUserName] = useState('');
  const [showModal, setShowModal] = useState(true);
  const [modalName, setModalName] = useState('');
  const [currentTemperature, setCurrentTemperature] = useState(null);

  const goalRef = useRef(null);
  const percentageRef = useRef(null);
  const finalValue = 55;
  const finalGoalRef = 250;
  const animationDuration = 3000; 

  // get location's temperature from api
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setCurrentTemperature(Math.round(data.main.temp));
      })
  })
  

  // get the current user's name and set it to the state. Also save the name in the input field
  // useEffect(() => {
  //   const promptName = prompt('Hey there, please enter your name.');
  //   setUserName(promptName || '{User Name}');
  // }, []);



  const handleModalClose = () => {
    setShowModal(false);
  }

  const handleNameSubmit = () => {
    setUserName(modalName);
    setShowModal(false);
  }

  console.log(API_KEY)
  console.log('hello')

  // setting the initial value of the percentage
  useEffect(() => {
    const startValue = 0;
    let startTime = null;

    function updateValue(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const increment = (finalValue - startValue) * (progress / animationDuration);

      if (progress < animationDuration) {
        percentageRef.current.textContent = Math.round(startValue + increment);
        requestAnimationFrame(updateValue);
      } else {
        percentageRef.current.textContent = finalValue;
      }
    }

    requestAnimationFrame(updateValue);
  }, []);


    // Animation for the 250 value
    useEffect(() => {
      const startValue = 0;
      let startTime = null;
  
      function updateGoal(timestamp) {
        if (!startTime) startTime = timestamp;
  
        const progress = timestamp - startTime;
        const increment = (finalGoalRef - startValue) * (progress / animationDuration);
  
        if (progress < animationDuration) {
          goalRef.current.textContent = Math.round(startValue + increment);
          requestAnimationFrame(updateGoal);
        } else {
          goalRef.current.textContent = finalGoalRef;
        }
      }
  
      requestAnimationFrame(updateGoal);
    }, []);

  // get current date and time
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('default', { month: 'short' });
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  // am or pm
  const ampm = hours >= 12 ? 'pm' : 'am';

  // Format the date and time as a string
  const formattedDateTime = `${day} ${month} ${year} ${hours}:${minutes}${ampm}`;

  // calculate the remaining days in the month. E.g. on the 01 of Janaury display 30 Days To Go
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const remainingDays = daysInMonth - day
  const daySegmentHeight = 100 / daysInMonth
  const progress = (daysInMonth - remainingDays) / daysInMonth
  const progressValue = `calc(-100% + ${progress * 100}%)`

  // engine sound when music icon is clicked
  const playSound = () => {
    const audio = new Audio('/engine-sound.mp3');
    audio.play();
  }

  return (
    <div className="d-flex grand-parent ">
      <div className="container main row ">
        
        <div className="col-5 h-75 left-border yellow-border justify-content-center align-items-center d-flex purple">
          
        <div className="row align-items-center">
          <div className="d-flex flex-row  justify-content-end">
            <span className='light-purple-text weather-icon'>{currentTemperature}°</span>
          </div>
        <div className="col-2 h-50 bottom-border">
                  <img src="left-indicator-light.svg" alt="left" className="img-fluid" style={{cursor: 'pointer'}}/>
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

                                <div className="smallest-circle d-flex flex-column text-center justify-content-center align-items-center white-text">
                                    {/* <div className="white-text m-0 text-center align-items-center" style={{ }}> */}
                                    <div>
                                      <span ref={goalRef} style={{fontSize: '3rem', }}>0</span>  
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
         
            <div className="current-date light-purple-text ">{formattedDateTime}</div>
        
            <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Your Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={modalName}
              onChange={(e) => setModalName(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button style={{ backgroundColor: 'rgb(187, 63, 187)' }} onClick={handleNameSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        <input
          type="text"
          className="form-control light-background icon-input white-text"
          disabled
          value={`Hi ${userName || '{User Name}'}`}
          style={{ color: 'white', border: 'none', fontSize: '1rem' }}
        />


           <div className='timeline-container'>
              <img src='nav-map.png' alt='Navigation map' className='nav-map img-fluid w-80' />
              <img
                src='nav-icon.svg'
                alt='Navigation Icon'
                className='nav-icon img-fluid'
                style={{
                  cursor: 'pointer',
                  animationDuration: '5s',
                  animationTimingFunction: 'ease-in-out',
                  top: '-3rem',
                  position: 'relative',
                  transform: `translateY(${progressValue})`
                }}
              />
              <div className='pt-8 white-text'>
                {remainingDays} Days To Go
              </div>
            </div>

            

           
              <div className='d-flex justify-content-center flex-row gap-4 mt-4 z-1'>
                <img src='wifi-icon.svg' alt='Wifi icon' style={{cursor: 'pointer'}}/>
                <img src='bluetooth-icon.svg' alt='bluetooth icon' style={{cursor: 'pointer'}}/>
                <img src='location-icon.svg' alt='location icon' style={{cursor: 'pointer'}}/>
                <img src='phone-icon.svg' alt='phone icon' style={{cursor: 'pointer'}}/>
                <img src='music-icon.svg' alt='music icon' style={{cursor: 'pointer'}} onClick={playSound}/>
                <img src='mic-icon.svg' alt='mic icon' style={{cursor: 'pointer'}}/>
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
                                    <span ref={percentageRef} style={{fontSize: '3rem', }}>55</span> % 
                                    <p className=''>Estimated KPI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                           
                    </div>
                </div>
                <div className="col-2 h-50 bottom-border">
                    <img src="right-indicator-light.svg" alt="right" className="img-fluid " style={{cursor: 'pointer'}} />
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
