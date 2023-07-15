import Item from "./item";
import './transaction.css'
const Transaction =()=>{

    return(
    <ul className="item-list">
      <Item title='ค่าอาหาร' amount='250'/>
      <Item title='ค่าไฟ' amount='150'/>
      <Item title='ค่าขนม' amount='500'/>
      <Item title='ค่าน้ำมัน' amount='400'/>
    </ul>
    );
}

export default Transaction
    