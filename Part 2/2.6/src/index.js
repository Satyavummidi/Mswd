import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Vummidi'
  },
  {
    id: 2,
    name: 'Sri'
  },
  {
    id: 3,
    name: 'Satya'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
