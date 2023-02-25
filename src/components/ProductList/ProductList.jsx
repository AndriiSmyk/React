import './ProductList.css'

const ProductList = ({products , deleteProduct}) =>{
    return(
        <div>
      <ul>
        {
          products.map((product)=>(
            <li key={product.id}>
              {product.title} - {product.price}
              <button onClick={ () => deleteProduct(product.id) }>Del</button>
            </li>
          ))
        }
      </ul>
        </div>
    )
}

export default ProductList