import './App.css';
import Functional from './component/Functional'
import ClassCompo from './component/ClassCompo'
import Counter from './component/Counter'
import Counter1 from './component/Counter1'


function App() {

  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* <Functional name="Athira"/>
      <ClassCompo name="Anna"/> */}
      <Counter/>
      <Counter1/>

    </div>
  );
}


export default App;

// function sum(n,m){
//   res=n+m
//   console(res)
// }
// 

//sum(12,5)
