import Image from 'next/image';

import logoImage from '@/public/logo.svg';

function Header() {
  return (
    <header className='mx-auto my-0 w-full max-w-[1080px] bg-slate-500 p-8'>
      <div>
        <Image src={logoImage} alt='Small MIDI controller' />
      </div>
    </header>
  );
}

export default Header;
