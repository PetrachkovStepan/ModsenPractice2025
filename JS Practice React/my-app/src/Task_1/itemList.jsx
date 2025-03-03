import Item from "./Item";
import './../App.css';

const ItemList = ({items}) => {

  return (
    <div className="myList">
        {items.map((itemItem) =>
            <Item itemItem={itemItem}></Item>
            )}
    </div>
  );
};

export default ItemList;