import Grid from 'components/grid';
import ProductItem from 'components/product/product';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="relative inline-block h-full w-full" href={`/product/${product.handle}`}>
            <ProductItem
              label={product.title}
              src={product.featuredImage?.url}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              amount={product.priceRange.maxVariantPrice.amount}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
