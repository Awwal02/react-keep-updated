import React from 'react'
import ReactDOM from 'react-dom'

const isLoggedIn = false
function HOC(Component) {
  if (isLoggedIn) return <Component val={1} />
  else return <Component val={2} />
}

function Comp({val}) {
  return <div>{val} reached</div>
}

function App() {
  return HOC(Comp)
}

ReactDOM.render(<App />, document.getElementById('root'))
