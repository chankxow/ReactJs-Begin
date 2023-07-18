import PropTypes from 'prop-types';

const Item = (props)=>{
    const {title,amount} = props
    return <li>{title}<span>{amount}</span></li>

}

Item.prototype={
    title,
    amount
}
export default Item