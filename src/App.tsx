import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  const [userName, setUserName] = useState('{User Name}');

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Hey {User Name}"
            className="form-control mt-4 text-center"
          />
          <div 
            className="position-relative bg-success h-80vh d-flex justify-content-center align-items-center border border-4 border-white border rounded-pill w-100 p-5 m-2 gap-5 "  >
            <div className="position-relative bg-warning rounded-pill w-full h-7"></div>
            <div className="middle-rectangle"></div>
            <div className="position-relative bg-warning rounded-pill w-full h-7"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
