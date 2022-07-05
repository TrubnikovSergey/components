import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/counter'

const container = document.querySelector('#root')
const root = createRoot(container)

const App = () => {
    return <Counter/>
}

root.render(<App/>)