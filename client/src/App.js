import React, {useState} from 'react';
import Main from './views/Main';
import Details from './views/Details';
import { Router } from '@reach/router';

function App() {
    const [errors, setErrors] = useState([]); 
    return (
        <div className="App">
            <Router>
                <Main path="/" default errors={errors} setErrors={setErrors}/>
                <Details path={"/pirate/:id"} errors={errors} setErrors={setErrors}/>
            </Router>
        </div>
    );
}
export default App;
