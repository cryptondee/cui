import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  ChatBubbleBottomCenterIcon,
  Cog8ToothIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Fundraising Support",
    description:
      "We offer comprehensive support to projects seeking funding. Through our community of angel investors, we assist in raising capital and work closely with projects providing insights from our collective experience. We are committed to fostering a mutually beneficial relationship, allowing you to benefit from the breadth and depth of our knowledge within the DeFi space.",
    icon: ChartPieIcon,
  },
  {
    name: "Marketing Strategy",
    description:
      "Navigating the DeFi landscape requires a deep understanding of market dynamics and user behavior. Our team excels at designing innovative marketing strategies that resonate with your target audience. We closely follow market trends and user feedback, enabling us to develop and implement marketing strategies that will help you stand out and achieve your goals.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Business Development",
    description:
      "Our widely established networks and deep industry knowledge enable us to quickly identify opportunities and potential synergies. We offer strategic guidance and connections to grow your business. With Castle Capital, you gain access to a team that is always on the lookout for collaboration opportunities, capable of facilitating introductions and partnerships that can help you scale your operations.",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "On-Chain Analysis",
    description:
      "We provide comprehensive on-chain data analysis to uncover insights and identify strategic opportunities. This includes understanding user behavior, identifying key trends, assessing the competitive landscape, and providing actionable intelligence to inform decision-making. Our team deeply understands blockchain data structures and analytics, enabling us to provide detailed and valuable insights.",
    icon: Cog8ToothIcon,
  },
  {
    name: "Documentation",
    description:
      "We deliver meticulously crafted documentation services to capture the essence of your project. Our goal is to simplify complex DeFi concepts, foster community engagement, and drive your project's growth by providing clear, concise, and accessible information. Whether it's about demystifying your project's intricate technology or producing engaging educational content, we’ve got you covered.",
    icon: FunnelIcon,
  },
  {
    name: "Content Creation",
    description:
      "We offer a comprehensive content creation service, focusing on ghostwriting for all your content needs. We are also able to leverage out extensive Key Opinion Leader (KOL) network for external-based content, should it be desired. Our professional writers are adept at creating high-quality content tailored to your brand’s voice and values. We make your message accessible to a wide range of audiences, helping you connect with potential users, partners, and investors.",
    icon: FunnelIcon,
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-white pt-24 pb-8 sm:pt-32 pb-8">
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
