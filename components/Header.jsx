import Image from 'next/image';
import Block from './Block';
import Link from 'next/link';

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
        <div className="flex items-center px-3">
          <Image
            alt="user login image"
            src="/user.png"
            width={200}
            height={200}
            className="w-10 h-10 rounded-full mr-5"
          />
          <Link href="/login">
            <h3 className="font-bold">SignUp/Login</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
