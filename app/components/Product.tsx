import Image from 'next/image';
import Link from 'next/link';

import { Product as ProductType } from '@/types/productTypes';

interface ProductProps extends ProductType {
  sx?: string;
}

function Product(props: ProductProps) {
  const { imageUrl, id, name, price, sx = '' } = props;
  return (
    <Link
      href={`/product/${id}`}
      passHref
      prefetch={false}
      className={`group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 ${sx}`}
    >
      <Image src={imageUrl} alt={name} height={400} width={500} />
      <footer className='absolute bottom-1 left-1 right-1 flex items-center justify-between rounded-md bg-neutral-50/90 p-4 transition-all group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-full md:opacity-0'>
        <strong className='text-lg'>{name}</strong>
        <span className='text-xl font-bold text-red-900'>{price}</span>
      </footer>
    </Link>
  );
}

export default Product;
