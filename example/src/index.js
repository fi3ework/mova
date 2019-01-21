import React from 'react'
import ReactDOM from 'react-dom'
import { observable, computed, action } from 'mobx'
import { Provider } from 'mobx-react'
import { connect } from '../../dist/index'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

console.log(connect)

class Model {
  @observable
  name = 'fi3ework'
  @observable
  pets = ['cat1']
  @computed
  get petCount() {
    return this.pets.length
  }
  @action
  increase = () => {
    this.pets.push('new cat')
  }
  @action
  decrease = () => {
    this.pets.pop()
  }
}

const model = new Model()

const Title = props => {
  return <div className="App">{props.petsCount}</div>
}

const List = props => {
  return props.pets.map(item => {
    return <p key={item}>{item}</p>
  })
}

const Buttons = props => {
  return (
    <div>
      <button onClick={props.increase}>+</button>
      <button onClick={props.decrease}>-</button>
    </div>
  )
}

const PetsCounter = connect(
  model,
  model => {
    return {
      petsCount: model.petCount
    }
  }
)(Title)

// const PetsList = connect(
//   {
//     pets: model.pets
//   },
//   null
// )(List)

const StateButtons = connect(
  model,
  model => {
    return {
      increase: model.increase,
      decrease: model.decrease
    }
  }
)(Buttons)

const App = () => {
  return (
    <div>
      <PetsCounter />
      <StateButtons />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
)
