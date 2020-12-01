import React from 'react';

class App extends React.Component{
  state = {
    name: 'mooky'
  }
  render(){
    const { name } = this.state
    console.log('render')
    return (
      <div>
      hello {name}!!
      <button onClick={this.testCustomFunction}>change</button>
      </div>
    )
  }
  testCustomFunction = () => {
    this.setState(current => (current.name === "mooky" ? {name: "joon"} : {name: "mooky"}));
  }
  componentDidMount(){
    console.log('did mount')
  }
  componentDidUpdate(){
    console.log('updated')
  }
}

// function App(){
//   return(
//     <div>
//       hello3
//     </div>
//   )
// }

export default App;
