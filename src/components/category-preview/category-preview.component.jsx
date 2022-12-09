import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewComponent,
  Preview,
  Title,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewComponent>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {
          //first 4 indexes
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </Preview>
    </CategoryPreviewComponent>
  );
};

export default CategoryPreview;
