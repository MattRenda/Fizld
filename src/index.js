import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import reducer from './Components/Redux/reducer';
import { Provider } from 'react-redux';
import saga from './Components/Redux/saga';
import configureStore from './Components/ReduxUtility/configureStore';

const reducers={
	reducer,
}
const sagas =[
	saga,
]
	
const store = configureStore({reducers,sagas});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);