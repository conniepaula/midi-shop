import { FC } from 'react';
import Link from '@/components/Link';

const page: FC = async () => {
  return (
    <div className='mx-auto my-0 flex h-96 flex-col mt-8 items-center justify-center'>
      <span className='text-bold text-[10rem] leading-tight'>404</span>
      <h2 className='text-center text-2xl font-bold text-red-900 md:text-2xl'>Not Found</h2>
      <p className='mt-4 text-md '>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
};

export default page;
