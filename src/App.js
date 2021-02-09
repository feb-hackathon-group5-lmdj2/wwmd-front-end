
import './App.css';
import Home from './Home';
import StateDirectory from './StateDirectory';
import Share from './Share';
import Navigation from './Navigation';
import { BrowserRouter as Route } from 'react-router-dom';

function App() {

	return (
	<div>
    <div>
			<Navigation />
      </div>
		
				<Route exact path='/directory' component={StateDirectory} />
				<Route exact path='/share' component={Share} />
				<Route
					path='/'
					exact
					render={(routerProps) => {
						return <Home match={routerProps.match} />;
					}}
				/>
			<Route
				path='/states'
				exact
				render={(routerProps) => {
					return <StateDirectory match={routerProps.match} />
				}}
			/>

		</div>
	);
}

export default App;
