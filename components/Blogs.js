import Image from "next/image";
import React, { useState } from "react";
import Cutoff from "./Cutoff";

export default function Blogs({ posts }) {
  const revPost = posts.reverse();
  const showPost = revPost.slice(0, 9);

  return (
    <div id="newsletter" className="bg-[#282C31] pt-24 pb-6 sm:py-32">
      <Cutoff />
      <div className="text-center cotnent-center mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl pb-12 font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Castle Chronicle
          </h2>
          <p className="text-justify mt-2 text-lg leading-8 text-gray-600">
            Every week, we deliver The Castle Chronicle - a free newsletter
            filled with the latest DeFi news, narratives, and technology
            explorations. It's our way of enriching the DeFi community with
            emerging trends and insights.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {showPost && showPost.length > 0
            ? showPost.map((post) => (
                <a key={post.id} href={post.web_url}>
                  <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        dateTime={new Date(post.publish_date * 1000)}
                        className="text-gray-500"
                      >
                        {new Date(post.publish_date * 1000).toDateString()}
                      </time>
                    </div>
                    <div className="group relative">
                      <Image
                        src={post.thumbnail_url}
                        alt=""
                        className="h-100 w-100 bg-gray-50"
                        width={500}
                        height={500}
                      />
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <span className="absolute" />
                        {post.title}
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                        {post.subtitle}
                      </p>
                    </div>
                    <div className="sticky mt-8 flex items-center gap-x-4">
                      <span> By</span>
                      <div className="text-sm leading-6">
                        {post.authors.map((author, index) => (
                          <span key={index} className="">
                            {author}{" "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </a>
              ))
            : `loading posts`}
        </div>
      </div>
    </div>
  );
}
