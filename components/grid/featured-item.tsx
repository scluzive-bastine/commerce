import Image from 'next/image';

const FeaturedItem = ({
  children,
  product,
  ...props
}: {
  product?: {
    title: string;
    description: string;
  };
} & React.ComponentProps<typeof Image>) => {
  return (
    <div className="relative h-full w-full rounded-3xl bg-black">
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image className="h-full w-full rounded-3xl object-cover opacity-90" fill {...props} />
      ) : null}
      <div className="absolute bottom-10 pl-10 text-white">
        {product ? <h2 className="mb-2 text-lg md:text-4xl">{product.title}</h2> : null}
        {product ? <p className="text-sm font-light md:text-lg">{product.description}</p> : null}
        {children}
      </div>
    </div>
  );
};

export default FeaturedItem;
