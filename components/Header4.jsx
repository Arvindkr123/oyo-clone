'use client';

import Image from 'next/image';

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5">
      <div className="flex items-center">
        <Image
          className="w-32 h-32 rounded-lg mr-5"
          src="/fire.jpg"
          width={200}
          height={200}
          alt="fire image"
        />
        <div className="text-xl">
          <p className="font-bold ">Get access to exclusive deals</p>
          <p className="">only the best deals reach your inbox</p>
        </div>
      </div>
      <div className="flex">
        <input
          className="w-80 h-16 px-6 py-3 mr-5 outline-none border border-r-gray-300"
          type="email"
          name=""
          id=""
          placeholder="e.g. john@gmail.com"
        />
        <button
          type="submit"
          className="w-48 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer"
        >
          Notify
        </button>
      </div>
    </div>
  );
};

export default Header4;
