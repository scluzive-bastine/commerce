import Price from 'components/price';
import Image from 'next/image';

const RelatedProduct = ({
  label,
  src,
  currencyCode,
  amount
}: {
  label: string;
  src: string;
  currencyCode: string;
  amount: string;
}) => {
  return (
    <div className="group relative h-full">
      <div className="relative h-[300px] w-full md:h-[250px] xl:h-[300px]">
        <Image className="h-full w-full object-cover" alt={label} fill src={src} />
        <div className="absolute bottom-5 hidden w-full justify-center transition-all ease-linear group-hover:flex md:bottom-10">
          <button className=" w-2/3 bg-black p-3 text-xs font-bold uppercase text-white md:p-4 md:text-sm">
            Buy Now
          </button>
        </div>
      </div>
      <article className="mt-2">
        <h2 className="mb-1 text-xs font-medium uppercase text-black md:text-sm">{label}</h2>
        <Price
          className="font-semibold text-blue-800"
          amount={amount}
          currencyCode={currencyCode}
        />
      </article>
    </div>
  );
};

export default RelatedProduct;
