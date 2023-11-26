import Image from "next/image";

import logoImage from "@/public/logo.svg";

function Header() {
  return (
    <header className="p-8 w-full max-w-7xl my-0 mx-auto bg-slate-500">
      <div>
        <Image src={logoImage} alt="Small MIDI controller" />
      </div>
    </header>
  );
}

export default Header;
