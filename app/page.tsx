import Banner from 'components/banner';
import { Carousel } from 'components/carousel';
import Trending from 'components/grid-trending';
import { ThreeItemGrid } from 'components/grid/three-items';
import TwoProducts from 'components/grid/two-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <TwoProducts />
      <Banner />
      <Trending />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
