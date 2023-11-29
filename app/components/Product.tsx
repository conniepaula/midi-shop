import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
  sx?: string;
}

function Product(props: ProductProps) {
  const { imageUrl, id, name, price, sx = '' } = props;
  return (
    <Link
      href={`/product/${id}`}
      passHref
      className={`group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 ${sx}`}
    >
      <Image src={imageUrl} alt='' height={400} width={500} />
      <footer className='absolute bottom-1 left-1 right-1 flex items-center justify-between rounded-md bg-neutral-50/90 p-4 transition-all group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-full md:opacity-0'>
        <strong className='text-lg'>{name}</strong>
        <span className='text-xl font-bold text-red-900'>{price}</span>
      </footer>
    </Link>
  );
}

export default Product;
