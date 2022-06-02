import './sass/style.scss'
import Header from './components/Header'
import Input from './components/Input'
import Line from './components/Line'
import ButtonAdd from './components/Button/ButtonAdd'
import List from './components/List'
import Panigation from './components/Panigation'

function App() {
  return (
    <div className="App">
        <Header title={'TO DO LIST APPLICATION'} />
        <div className="crossbar">
          <Input />
          <ButtonAdd />
        </div>
        <Line fullWidth />
        <List />
        <Line fullWidth />
        <Panigation />

    </div>
  );
}

export default App;
