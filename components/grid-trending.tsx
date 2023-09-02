import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import ProductItem from './product/product';

const Trending = async () => {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-trending-items' });

  if (!products?.length) return null;

  return (
    <div className="mx-auto grid max-w-screen-2xl grid-cols-12 gap-4 px-4">
      {products.map((product, i) => (
        <div
          className="relative col-span-6 md:col-span-4 xl:col-span-3"
          key={`${product.handle}${i}`}
        >
          <Link href={`/product/${product.handle}`}>
            <ProductItem
              label={product.title}
              src={product.featuredImage?.url}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              amount={product.priceRange.maxVariantPrice.amount}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Trending;
