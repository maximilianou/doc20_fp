import withLayout from "../comps/MyLayout";
import { connect } from 'react-redux';
//import { withRedux } from 'next-redux-wrapper';
const mapStateToProps = (state) => {
  return { products: state.products };
};
const ProductListItem = ( { product } ) => (
  <li className='product'>
    <span className='name'>product name</span>
    <span className='price'>product price</span>
  </li>
);
const ProductsList = ( { products } ) => {
    const renderProductList = (prod) => ( <ProductListItem product={prod} /> );
    return <ul>{ products.map( renderProductList ) }</ul>;
};
const Products = connect(mapStateToProps)(withLayout(ProductsList));
//const Products = withRedux(mapStateToProps)(withLayout(ProductsList));
export default Products;
