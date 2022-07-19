import BasicForm from './Components/Forms/BasicForm';
import logo1 from './Images/instagram.png'
import './App.css';

function App() {
  return (
    <div className='main' >
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div >
              <img src={logo1} alt='logo1' class='cnt-img'/>
            </div>
          </div>
          <div>
            <h2>Login Page</h2>
              <div>
                  <BasicForm/>
              </div>
          </div>
        </div>
      </div>       
    </div>
  );
}

export default App;
