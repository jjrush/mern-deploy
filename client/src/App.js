import React, {useState} from 'react';
import Main from './views/Main';
import AddPirate from './views/AddPirate';
import PirateDetail from './views/PirateDetail'
import { Router } from '@reach/router';
import io from 'socket.io-client';

function App() {
    const [socket] = useState(() => io(':8000'));
    const [errors, setErrors] = useState([]);
    const [pirates, setPirates] = useState([]);
    return (
        <div className="App">
            <Router>
                <Main path="/pirates" default socket={socket} errors={errors} setErrors={setErrors}
                    pirates={pirates} setPirates={setPirates}
                />
                <AddPirate path={"/pirate/new"} socket={socket} errors={errors} setErrors={setErrors}
                        pirates={pirates} setPirates={setPirates}
                />
                <PirateDetail path={"/pirate/:id"}/>
            </Router>
        </div>
    );
}
export default App;
