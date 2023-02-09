import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

//this is no longer supported
// ReactDOM.render(<App/>, document.getElementById('root')) 

// now is this
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)
