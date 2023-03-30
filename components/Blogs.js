import Image from "next/image";

export default function Blogs({ posts }) {
  console.log(posts);
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
          {posts && posts.length > 0
            ? posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={new Date(post.publish_date * 1000)}
                      className="text-gray-500"
                    >
                      {new Date(post.publish_date * 1000).toDateString()}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute" />
                      {post.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                      {post.subtitle}
                    </p>
                  </div>
                  <div className="sticky mt-8 flex items-center gap-x-4">
                    <Image
                      src={post.thumbnail_url}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                      width={100}
                      height={100}
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.authors}
                      </p>
                    </div>
                  </div>
                </article>
              ))
            : `loading posts`}
        </div>
      </div>
    </div>
  );
}
