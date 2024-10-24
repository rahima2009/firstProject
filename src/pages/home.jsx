import { Cart_item } from "./../components/cart-item";

export const Home = ({ data }) => {
  return (
    <div>
      <h1>Главная</h1>
      <div className="d-flex flex-wrap justify-content-around  gap-4  mt-4">
        {
            data.map((product, i)  =>{
                return <Cart_item  key={i} {...product}/>
            })
        }
      </div>
      Home
    </div>
  );
};
