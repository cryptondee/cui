import Image from "next/image";
const people = [
  {
    name: "0xAtomist",
    role: "Founder - King",
    imageUrl: "/assets/Team/Atomist.jpg",
    twitterUrl: "https://twitter.com/0xAtomist",
    description:
      "Content creator for all things Defi, with a specialization in Marketing, Networking, and Community Building across the Crypto Industry",
  },
  {
    name: "SniperMonke.soul 🛸(💙,🧡)",
    role: "Duke",
    imageUrl: "/assets/Team/Snipe.jpg",
    twitterUrl: "https://twitter.com/SniperMonke01",
    description:
      "Resident bot builder and GMX communications dev, Shitposter and Always Online Janitor",
  },
  {
    name: "defipleb",
    role: "Duke",
    imageUrl: "/assets/Team/Defipleb.jpg",
    twitterUrl: "https://twitter.com/defipleb",
    description:
      "Gigachad Low-cap caller with conviction, best networker in town",
  },
  {
    name: "HanSolar.eth",
    role: "Duke",
    imageUrl: "/assets/Team/Hansolar.jpg",
    twitterUrl: "https://twitter.com/hansolar21",
    description: "Crypto Options and Macro Expert, sound fundamental basis",
  },
  {
    name: "0x_Vlad",
    role: "Lords",
    imageUrl: "/assets/Team/0x_Vlad.jpg",
    twitterUrl: "https://twitter.com/0x_Vlad/",
    description:
      "Resident Technical Analist with a focus on trends and a MentFX student (FX). TP POLICE",
  },
  {
    name: "CJ",
    role: "Lords",
    imageUrl: "/assets/Team/CJ3.jpg",
    twitterUrl: "https://twitter.com/CJCJCJCJ_/",
    description:
      "Our own Crypto Scrapper and filter. Follow for quite litterly everything",
  },

  // More people...
];

export default function Team() {
  return (
    <div id="team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Castle Capital is a private community of budding researchers,
            analysts, builders, investors and traders from across crypto and
            DeFi Initially spawned in late 2021, The Castle has grown slowly and
            organically, handpicking members for their knowledge, edge and reach
            in the space
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
                height={100}
                width={100}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-800">{person.role}</p>
              <p className="text-base leading-7 text-gray-400">
                {person.description}
              </p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={person.twitterUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
