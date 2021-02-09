import './App.css'
import Home from './Home'
import StateDirectory from './StateDirectory'
import Share from './Share'
import Navigation from './Navigation'
import { Route } from 'react-router-dom'


function App() {
    return (
        <div>
            <Navigation />
            <div>
                <Route exact path='/directory' component={StateDirectory} />
                <Route exact path='/share' component={Share} />
                <Route
                    path='/'
                    exact
                    render={(routerProps) => {
                        return <Home match={routerProps.match} />;
                    }}
                />
               


            </div>
        </div>
    );
}


export default App
