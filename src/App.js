// import logo from './logo.svg';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Views/HomePage';
import PropertiesPage from './Views/PropertiesPage';
import PropertyDetailPage from './Views/PropertyDetailPage';
import ContactPage from './Views/ContactPage';
import NewProperty from './Views/Admin/NewProperty';
import LoginPage from './Views/Admin/LoginPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';





function App() {
  return (
    <div className='absolute w-full pb-10 min-h-screen'>
      <Router>
        <Header/>

        <div>
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route path='/property/:id' element={<PropertyDetailPage/>} />
            <Route exact path='/properties' element={<PropertiesPage/>} />
            <Route exact path='/contact' element={<ContactPage/>} />
            <Route exact path='/adminLogin' element={<LoginPage/>} />

            {/* Authentication required for this routes */}
            <Route element={<ProtectedRoutes/>}>
              <Route exact path='/addNew' element={<NewProperty/>} />
            </Route>

          </Routes>
        </div>

        <Footer/>
      </Router>
    
   
    </div>
  );
}

export default App;

