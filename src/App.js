import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './Components/Home/HomePage';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Detailed from './Components/detailedPage/Detailed';
import ThankYou from './Components/Thankyou/ThankYou';
import NotFound from './Components/Notfound/NotFound';
import Footer from './Components/Footer/Footer';
import Free from './Components/freeTemp/Free';
import Freedetail from './Components/freeTemp/Freedetail';
import Thankfree from './Components/freeTemp/Thankfree';

// import v from '../src/images/'
function App() {
  return (
<BrowserRouter>
<NavBar/>
<Routes>

<Route  path="/" element={<HomePage />}/>
<Route  path="/thakjeuyeyou112jrhghrhdgdhdgdvhd9876789jdEUIEU3U3U32UI43838ydjhgUYtyrtdhy9UJJSSH9276gdgnc12(*-*)487/:id" element={<ThankYou />}/>
<Route  path="/detailed/:id" element={<Detailed />}/>
<Route path="/free" element={ <Free/> }/>
<Route path="/freed/:id" element={ <Freedetail/> }/>
<Route path="/thankfree183636egndh03984*5^n/:id" element={ <Thankfree/> }/>
<Route path="*" element={<NotFound/>}/>



</Routes>
<Footer/>
</BrowserRouter>
  );
}

export default App;


