import { GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { twbg } from 'lib/constants';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="mx-auto grid max-w-screen-2xl grid-cols-12 gap-4 px-4 py-16 md:py-28">
      <div className="col-span-12 md:col-span-8">
        <div className="relative flex flex-col justify-between rounded-3xl bg-[#de6738] p-5 md:p-16">
          <h1 className="max-w-2xl text-3xl font-black uppercase text-black md:text-6xl md:leading-[70px]">
            We&apos;re changing the way things get made
          </h1>
          <div className="mt-5 grid grid-cols-12 gap-4 border-t border-black/50 pt-10 md:mt-20">
            <div className="col-span-12 md:col-span-6">
              <div className="mb-4 flex items-center space-x-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black p-2 text-white">
                  <GlobeAltIcon className="h-8 w-8" />
                </span>
                <span className="text-lg font-semibold md:text-2xl">Mission</span>
              </div>
              <p className="text-black">
                We are on a mission to empower creatives and independence in a commercial world
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="mb-4 flex items-center space-x-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black p-2 text-white">
                  <SparklesIcon className="h-8 w-8" />
                </span>
                <span className="text-lg font-semibold md:text-2xl">Sustainability</span>
              </div>
              <p className="text-black">
                We are challenging conventional retail, putting an end to dead stock, unconventional
                waste and futuristic
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 h-full w-full md:col-span-4">
        <div className="relative min-h-[400px] w-full rounded-3xl md:h-full">
          <Image className="h-full w-full rounded-3xl object-cover" fill alt="banner" src={twbg} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
