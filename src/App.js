import './App.css'
import Home from './Home'
import BadgeModal from './BadgeModal'
// import Navigation from './Navigation'
import { Route } from 'react-router-dom'


function App() {
    return (
        <div> 
            {/* <Navigation /> */}
            <div>

                {/* <Route exact path='/share' component={BadgeModal} /> */}
                
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
