import Item from "./item";
import './transaction.css'
const Transaction =()=>{
  const data = [
    {title:'ค่าอาหาร',amount:'250'},
    {title:'ค่าน้ำ',amount:'150'},
    {title:'ค่าขนม',amount:'500'},
    {title:'ค่าน้ำมัน',amount:'400'}
  ]
    return(
    <ul className="item-list">
      <Item title={data[0].title} amount={data[0].amount}/>
      <Item title={data[1].title} amount={data[1].amount}/>
      <Item title={data[2].title} amount={data[2].amount}/>
      <Item title={data[3].title} amount={data[3].amount}/>
    </ul>
    );
}

export default Transaction
    
