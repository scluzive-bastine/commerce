import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { hmbg, hmbg2 } from 'lib/constants';
import Image from 'next/image';
import Link from 'next/link';

const TwoProducts = () => {
  return (
    <section className="mx-auto mt-20 grid max-w-screen-2xl grid-cols-12 gap-8 px-4">
      <div className="col-span-12 md:col-span-6">
        <Link href="/" className="group">
          <div className="relative min-h-[500px] w-full rounded-3xl md:h-[800px]">
            <Image className="h-full w-full rounded-3xl object-cover" fill alt="image" src={hmbg} />
            <div className="absolute bottom-10 left-10">
              <h1 className="text-xl font-normal text-white md:text-3xl">Shop Hoddies for $20</h1>
              <button className=" mt-5 flex items-center space-x-2 rounded-full border border-white bg-transparent px-6 py-3.5 text-white">
                <span>Show now</span>
                <ArrowUpRightIcon className="w-4 transition-all duration-200 group-hover:scale-125" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Link href="/" className="group">
          <div className="relative min-h-[500px] w-full rounded-3xl md:h-[800px]">
            <Image
              className="h-full w-full rounded-3xl object-cover"
              fill
              alt="image"
              src={hmbg2}
            />
            <div className="absolute bottom-10 left-10">
              <h1 className="text-xl font-normal text-white md:text-3xl">Ready to wear for $50</h1>
              <button className=" mt-5 flex items-center space-x-2 rounded-full border border-white bg-transparent px-6 py-3.5 text-white">
                <span>Show now</span>
                <ArrowUpRightIcon className="w-4 transition-all duration-200 group-hover:scale-125" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TwoProducts;
