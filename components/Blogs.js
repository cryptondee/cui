/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/line-clamp'),
    ],
  }
  ```
*/
import { useRef } from "react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "A Visit from the Palace to the Marketplace",
    href: "#",
    description:
      "To celebrate The Castle Chronicle passing 200 subscribers (sitting at 217) one month after genesis, I thought I would divulge a little more about Castle Capital, what we are all about, and highlight some of our key members. Check it out here.",
    date: "Feb 23, 2023",
    datetime: "2023-02-23",
    category: { title: "DeFi", href: "#" },
    author: {
      name: "Atomist",
      role: "King",
      href: "#",
      imageUrl: "/assets/Team/Atomist.jpg",
    },
  },
  {
    id: 2,
    title: "Enter through the Gate and into the Courtyard",
    href: "#",
    description:
      "The market continues to hold bullish sentiment for crypto after rebuffing several regulatory attacks along with an uncertain CPI print. So let’s get straight into it 👇️.",
    date: "Feb 15, 2023",
    datetime: "2023-02-15",
    category: { title: "DeFi", href: "#" },
    author: {
      name: "Atomist",
      role: "King",
      href: "#",
      imageUrl: "/assets/Team/Atomist.jpg",
    },
  },
  {
    id: 3,
    title: "Come See What Riches Lay Inside",
    href: "#",
    description:
      "Another week on and charts continue to catch bids as sidelined bears still coping. Let’s get straight into the details 👇️.",
    date: "Feb 08, 2023",
    datetime: "2023-02-08",
    category: { title: "DeFi", href: "#" },
    author: {
      name: "Atomist",
      role: "King",
      href: "#",
      imageUrl: "/assets/Team/Atomist.jpg",
    },
  },
  {
    id: 4,
    title: "A Visit from the Palace to the Marketplace",
    href: "#",
    description:
      "We’re starting to see more and more countries having plans/experimenting with CBDCs, steadily integrating and adopting crypto into their financial systems. Most of CTs eyes were on gambling (Rollbit etc) and Canto with a few notable looks at the Metis ecosystem. Vela also went live not too long ago (migrated from DXP). JonesDAO jUSDC jGLP vaults are also launching this coming Friday which may be worth paying attention to. Personally will be looking into NFT-Fi plays (derivatives/options/fractionalization) soon.",
    date: "Jan 29, 2023",
    datetime: "2023-01-29",
    category: { title: "DeFi", href: "#" },
    author: {
      name: "Atomist",
      role: "King",
      href: "#",
      imageUrl: "/assets/Team/Atomist.jpg",
    },
  },
  // More posts...
];

export default function Blogs() {
  const myRef = useRef(null);
  return (
    <div id="newsletter" className="bg-white py-24 sm:py-32">
      <div className="text-center cotnent-center mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Castle Chronicle
          </h2>
          <p className="text-justify mt-2 text-lg leading-8 text-gray-600">
            As part of our contribution back to the space, we produce a{" "}
            <strong>free</strong> weekly newsletter, The Castle Chronicle,
            documenting our commentary of news, narratives, events and fresh
            technologies in the space.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                  width={100}
                  height={100}
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
