const Title = ()=><h1>บัญชีรายรับราย - รายจ่าย</h1>
const Description =()=><p>บันทึกข้อมูลบัญชีรายรับ-รายจ่าย</p>
const Transaction =()=>{
  return(
  <ul>
    <li>ค่าเดินทาง<span>-200</span></li>
    <li>ค่าเดินทาง<span>+20000</span></li>
    <li>ค่าเดินทาง<span>-500</span></li>
  </ul>
  );
  
}

function App() {
  return (
    <>
    <Title/>
    <Description/>
    <Transaction/>
    </>
  );


}

export default App;
