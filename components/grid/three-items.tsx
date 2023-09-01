import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import FeaturedItem from './featured-item';

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <>
      <section className="mx-auto max-w-screen-2xl px-4 pt-10 md:pt-20">
        <div className="grid grid-cols-12 items-center gap-8">
          <div className="col-span-12 md:col-span-7">
            <h1 className="max-w-screen-xl text-3xl font-medium text-black dark:text-neutral-200 md:text-5xl md:leading-[68px]">
              Crafted Elegance, Where Simplicity Becomes Extraordinary
            </h1>
          </div>
          <div className="col-span-12 md:col-span-5">
            <h1 className="max-w-screen-xl text-sm font-normal text-black dark:text-neutral-200 md:text-xl md:leading-[32px]">
              Discover the art of refined shopping, our curated collection celebrates the beauty of
              simplicity in every click. Explore now and experience sophistication in every detail
            </h1>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-5">
            <div className="flex">
              <Link href="/search">
                <button className="group flex items-center space-x-2 rounded-full bg-black px-6 py-3.5 text-white">
                  <span>Show now</span>
                  <ArrowUpRightIcon className="w-4 transition-all duration-200 group-hover:scale-125" />
                </button>
              </Link>
            </div>
            <Link href={`/product/${firstProduct.handle}`} className="group h-full w-full">
              <div className="relative mt-8 h-[500px] w-full rounded-3xl">
                <FeaturedItem
                  src={firstProduct.featuredImage.url}
                  alt={firstProduct.title}
                  product={firstProduct}
                />
                <button className="absolute right-10 top-10 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-black text-white">
                  <ArrowUpRightIcon className="w-6 transition-all duration-200 group-hover:scale-125" />
                </button>
              </div>
            </Link>
          </div>
          <div className="col-span-12 flex min-h-[500px] flex-col space-y-4 md:col-span-3 md:h-full">
            {/* <div className='relative w-full h-1/2 rounded-3xl'> */}
            <Link href={`/product/${secondProduct.handle}`} className="h-full w-full">
              <FeaturedItem
                src={secondProduct.featuredImage.url}
                alt={secondProduct.title}
                product={secondProduct}
              />
            </Link>
            {/* </div> */}
            <div className="relative h-1/2 w-full rounded-3xl bg-black ">
              <div className="relative p-10 text-white">
                <button className="mb-10 rounded-full border border-gray-100 px-6 py-2.5 text-white outline-none">
                  Special offer
                </button>
                <p className="text-lg font-light md:text-3xl">
                  Save 20% of this hoilday season using code ST2023
                </p>
                {/* <p className="text-sm md:text-lg font-light">Designed to stand the test of time</p> */}
              </div>
            </div>
          </div>
          <div className="col-span-12 min-h-[500px] w-full md:col-span-4 md:h-full">
            <Link href={`/product/${thirdProduct.handle}`} className="group h-full w-full">
              <FeaturedItem
                src={thirdProduct.featuredImage.url}
                alt={thirdProduct.title}
                product={thirdProduct}
              >
                <button className="mt-5 flex items-center space-x-2 rounded-full border border-white bg-transparent px-6 py-3.5 text-white">
                  <span>Show now</span>
                  <ArrowUpRightIcon className="w-4 transition-all duration-200 group-hover:scale-125" />
                </button>
              </FeaturedItem>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
