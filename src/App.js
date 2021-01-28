import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Importing Components
import SideBar from "./components/SideBar/SideBar"
import Pages from "./pages/Pages"
import MyDay from  "./pages/MyDay";
import Birthdays from  "./pages/Birthdays";

function App() {  

  const [page, setPage] = useState("/");

  return (
    <div className="App">
      <Router>
        <SideBar
          page={page}
          setPage={setPage}
         />
        <Switch>
          <Route path='/' exact component={MyDay} />
          <Route path='/birthdays' component={Birthdays} />
        </Switch>
      </Router>
      <header>
        <h1>Alex's Todo List</h1>
      </header>
      <Pages page={page} />
    </div>
  );
}

export default App;