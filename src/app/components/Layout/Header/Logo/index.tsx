import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={120}
        height={30}
        className="w-35 h-auto"
        quality={100}
      />
    </Link>
  );
};

export default Logo;
