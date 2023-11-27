import Image from 'next/image';

import logoImage from '@/public/logo.svg';

function Header() {
  return (
    <header className='mx-auto my-0 flex w-full max-w-[1180px] items-center justify-between gap-6 rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200/30 p-3'>
      <Image src={logoImage} alt='Small MIDI controller' width={150} />
      <h1 className='text-lg  font-bold text-red-900'>Premium MIDI Controllers</h1>
    </header>
  );
}

export default Header;
