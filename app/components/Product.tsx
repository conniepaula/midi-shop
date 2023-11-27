import Image from 'next/image';

interface ProductProps {
  src: string;
  name: string;
  price: number;
  sx?: string;
}

function Product(props: ProductProps) {
  const { src, name, price, sx = '' } = props;
  return (
    <a
      className={`group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white bg-gradient-to-br from-neutral-900 to-neutral-800 ${sx}`}
    >
      <Image src={src} alt='' height={400} width={500} objectFit='cover' />
      <footer className='absolute bottom-1 left-1 right-1 flex translate-y-full items-center justify-between rounded-md bg-neutral-50 p-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
        <strong className='text-lg'>{name}</strong>
        <span className='text-xl font-bold text-red-900'>£{price}</span>
      </footer>
    </a>
  );
}

export default Product;
