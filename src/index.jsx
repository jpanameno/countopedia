import ReactDOM from 'react-dom/client'; 
import "./CSS/style.css";
import Header from './Layout/header'; 
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*  */

root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
      <Header />
      <div className='px-4'>
        <Counter />
      </div> 
  </div>
);
 