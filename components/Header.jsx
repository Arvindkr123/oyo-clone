import Image from 'next/image';
import Block from './Block';

const Header = () => {
  return (
    <div className="flex justify-between items-center h-24 px-10 border-b-2 border-gray-300">
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="logo"
        className="w-28 h-28"
      />
      <div className=" h-full flex">
        <Block
          title="Become a member"
          para="Additional 0% off on stays"
          src="/member.png"
        />
        <Block
          src="/bag.png"
          title="OYO for business"
          para="Trusted by 5000 coperates"
        />
        <Block
          src="/company.png"
          title="List your property"
          para="Start earning in 30 mins"
        />
        <Block
          src="/phone.png"
          title="+91 9315207665"
          para="Call us to book now."
        />
        <Block src="/user.png" title="Login/Sign up" para="" />
      </div>
    </div>
  );
};

export default Header;
