import { v4 as uuidv4 } from 'uuid';
import Item from "./item";
import './transaction.css'



const Transaction =()=>{
  const data = [
    {title:'ค่าอาหาร',amount:'250'},
    {title:'ค่าน้ำ',amount:'150'},
    {title:'ค่าขนม',amount:'500'},
    {title:'ค่าน้ำมัน',amount:'400'},
    {title:'ค่าที่พัก',amount:'1800'},
    {title:'ค่างวดรถ',amount:'2300'}

  ]
    return(
    <ul className="item-list">
      {data.map((element)=>{
        return <Item key={uuidv4()} {...element}/>
      })}
      </ul>
    );
}

export default Transaction
    
