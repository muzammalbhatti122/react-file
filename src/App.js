import logo from './logo.svg';
import './App.css';
import { Child } from './components/child/child';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
     <Child></Child>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
