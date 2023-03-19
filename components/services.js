import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  ChatBubbleBottomCenterIcon,
  Cog8ToothIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Fundraising",
    description:
      "Castle Capital can aid your funding requirements via our community of angel investors. We believe in working closely with projects and supporting them in much more than just capital. When you raise with Castle, you get a whole army of natives behind you.",
    icon: ChartPieIcon,
  },
  {
    name: "Marketing Strategy",
    description:
      "We understand the wider market and what gets DeFi users out of bed. Along with a strong network of partners, our internal foundation has a wealth of experience designing and implementing strategies in order to help you achieve your goals, whatever they may be.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Business Development",
    description:
      "Castle Capital prides itself on knowing what is happening and where, fast! We have wide networks within the space, which when tied to our deep knowledge base, enable us to spot synergies and connect you with potential partners in order to grow and scale your business.",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Tokenomic Design",
    description:
      "As DeFi enthusiasts, we understand the importance of tokenomics and believe in incentivizing user actions for sustainable growth. Token models should benefit all parties in an ecosystem, resulting in an investable token tied to the product's success.",
    icon: Cog8ToothIcon,
  },
  {
    name: "Product Strategy",
    description:
      "With our experience in product launches and knowledge of the market, we guide your product and go-to-market strategy for product market fit. We can identify gaps in the market to exploit and solidify your user base.",
    icon: FunnelIcon,
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="self-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our services
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
