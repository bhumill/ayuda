import './App.css';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import EditPage from './pages/editProfile.js'

function App() {
  return ( <
    div className = "App" >
    <Header></Header>
    <EditPage></EditPage>
    <Footer></Footer> 
    </div>
  );
}

export default App;