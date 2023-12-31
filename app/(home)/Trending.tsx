import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TrendingCardProps = {
  className?: string;
  post: Post;
};

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      <div className="z-0 relative w-full h-full">
        <Image
          fill
          alt="tech"
          placeholder="blur"
          src={post?.image}
          sizes="(max-width: 480px) 100dvw,
                 (max-width: 768px) 75dvw,
                 (max-width: 1060px) 50dvw, 
                 33dvw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post?.category}
        </h4>
        <div className="text-wh-100 mt-2">{post?.title}</div>
      </div>
    </Link>
  );
};

type Props = {
  trendingPosts: Array<Post>;
};

const Trending = ({ trendingPosts }: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold font-opensans">
          TRENDING
        </div>
        <p className="text-sm">Trending AI Posts is here.</p>
      </div>

      {/* Flex ile Ana Div
        <div className='flex justify-between gap-3 my-3 '>
          Birinci büyük
          <div className='basis-1/2 bg-wh-500 h-96'></div>
          Sağdaki büyük
          <div className='flex flex-col basis-1/2 gap-3 h-96'>
            <div className='basis-1/2 bg-wh-500'></div>
          küçükler
            <div className='flex basis-1/2 gap-3'>
              <div className='basis-1/2 bg-wh-500'></div>
              <div className='basis-1/2 bg-wh-500'></div>
            </div>
          </div>
        </div> */}

      {/* grid option
          {/* Ana Div */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        {/* Birinci büyük */}
        <TrendingCard
          className="col-span-2 row-span-2"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className="col-span-2 row-span-1 "
          post={trendingPosts[1]}
        />
        <TrendingCard
          className="col-span-1 row-span-1"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className="col-span-1 row-span-1"
          post={trendingPosts[3]}
        />
      </div>

      <p className="text-sm ">
        AI algorithms can quickly process vast amounts of data and identify
        patterns that humans may have missed. This enhanced data analysis allows
        investors to make more informed decisions about when to buy or sell
        stocks. AI-powered trading systems can analyze historical data, news
        articles, social media sentiment, and various other factors to predict
        stock market movements with greater accuracy.
      </p>
    </section>
  );
};

export default Trending;
