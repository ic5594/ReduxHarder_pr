import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: 'p1', price: 6, title: 'MY First Book', descrpition: 'The First book I ever wrote'},
  {id: 'p2', price: 5, title: 'MY Second Book', descrpition: 'The Second book I ever wrote'}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            title={product.title}
            key={product.id}
            id={product.id}
            price={product.price}
            description={product.descrpition}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
