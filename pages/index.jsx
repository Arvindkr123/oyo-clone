import { Footer, Header, Header2, Header3, Header4 } from '@/components';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
const Home = () => {
  return (
    <div>
      <Head>
        <title>
          OYO : India's Best Online Hotel Booking Site for Sanitaized Stay.{' '}
        </title>
        <link rel="icon" href={'/icon.png'}></link>
      </Head>
      <Header />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className="my-14">
          <Image
            src="/banner1.avif"
            width={200}
            height={200}
            alt="banner image"
            className="w-full h-80"
          />
        </div>
        <div className="mb-14">
          <Image
            src="/banner2.avif"
            width={200}
            height={200}
            alt="banner image"
            className="w-full h-40"
          />
        </div>
        <Header4 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
