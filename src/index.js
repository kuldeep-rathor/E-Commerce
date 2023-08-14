import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// adding the bootstratp files 
 import "../node_modules/react-bootstrap/dist/react-bootstrap"
//  import "../node_modules/npm/react-bootstrap@2.8.0/dist/react-bootstrap.min.js"
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
