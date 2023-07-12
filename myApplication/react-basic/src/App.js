import Transaction from './component/transaction'
import './App.css'


function App() {
  const design = {color:'red',textAlign:'center',fontSize:'1.5em'}
  return (
    <div className='container'>
      <h1 style={design}>บัญชีรายรับราย - รายจ่าย</h1>
      <Transaction/>
    </div>
  );
}

export default App;
