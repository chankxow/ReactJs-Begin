import Item from "./item";
import './transaction.css'
const Transaction =()=>{
  const data = [
    {id:1,title:'ค่าอาหาร',amount:'250'},
    {id:2,title:'ค่าน้ำ',amount:'150'},
    {id:3,title:'ค่าขนม',amount:'500'},
    {id:4,title:'ค่าน้ำมัน',amount:'400'},
    {id:5,title:'ค่าที่พัก',amount:'1800'},
    {id:6,title:'ค่างวดรถ',amount:'2300'}

  ]
    return(
    <ul className="item-list">
      {data.map((element)=>{
        return <Item key={element.id}{...element}/>
      })}
      </ul>
    );
}

export default Transaction
    
