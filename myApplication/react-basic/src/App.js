import Transaction from './component/transaction'

const design = {color:'red',textAlign:'center',fontSize:'1.5em'}

const Title = ()=><h1 style={design}>บัญชีรายรับราย - รายจ่าย</h1>

function App() {
  return (
    <>
    <Title/>
    <Transaction/>
    </>
  );
}

export default App;
