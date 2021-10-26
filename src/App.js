import './App.css';
import Profile from './components/Profile';
import alPacino from "./alPacino.jpg"

function App() {
  //create a function to pass it as props
  const handleName = (name) => {
    alert(`Hello ${name}`)
  }
  return (
    <div className="App">
      <Profile image={alPacino} fullname='Al Pacino' bio="insert any description" handleName={handleName} test={50} />
      <Profile fullname="React" bio="Javascript library for building User Interfaces" handleName={handleName} test="hi" />
      <Profile fullname="Med" handleName={handleName} test={false} />
    </div>
  );
}

export default App;
