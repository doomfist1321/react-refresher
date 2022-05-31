import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../context/categories.context';
import './category.styles.scss';

export const Category = () => {

  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <div className="category-container">
      {products && products.map(product => (<ProductCard key={product.id} product={product} />))}
    </div>
  )

}