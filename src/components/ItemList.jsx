import Item from "./Item";

const ItemList = ({ data = [] }) => {
  return data.map((product) => <Item info={product} key={product.id} />);
};

export default ItemList;
