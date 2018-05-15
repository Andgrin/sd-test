import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import EmploeeReducer from './reducers/emploee';

import './reset.css';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    EmploeeReducer,
    window.devToolsExtension && window.devToolsExtension()
);

render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root') 
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
