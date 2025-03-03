import './../App.css';

const Item = ({itemItem}) => {
  return (
    <div className="myItem">{itemItem.text}</div>
  );
};

export default Item;