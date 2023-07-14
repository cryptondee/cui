import Image from "next/image";
const people = [
  {
    name: "0xAtomist - (Marketing & Tokenomics Lead)",
    role: "Founder - King",
    imageUrl: "/assets/Team/Atomist.jpg",
    twitterUrl: "https://twitter.com/0xAtomist",
    description:
      "Our content creator for all things DeFi, with a specialisation in marketing, protocol design and networking. As a Chemical Engineer by trade, he has a wealth of experience in understanding complex systems, problem solving and leading multi-disciplinary teams, all of which led him to create the Castle we know today",
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
    <div id="team" className="bg-white pt-6 py-24 sm:py-32 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-6 text-base leading-8 text-gray-600">
            Our team also consists of other brilliant minds who contribute in
            various capacities, from research and analysis to community
            management and marketing. We believe that our team members'
            collective wisdom and experience are key factors in Castle Capital's
            effectiveness and impact in the DeFi space.
          </p>
        </div>
      </div>
    </div>
  );
}
