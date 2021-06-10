import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Vummidi',
    number: 9553825999
  },
  {
    id: 2,
    name: 'Sri',
    number: 9848053519
  },
  {
    id: 3,
    name: 'Satya',
    number: 9553832999
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
