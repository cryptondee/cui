import {
  BanknotesIcon,
  FireIcon,
  ChatBubbleLeftRightIcon,
  Cog8ToothIcon,
  ClipboardIcon,
  ArchiveBoxIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Fundraising Support",
    description:
      "Need funding support? We offer an assistive hand, connecting you with our angel investor community. Our collective DeFi experience is a resource you can bank on for growth.",
    icon: BanknotesIcon,
  },
  {
    name: "Marketing Strategy",
    description:
      "Our team crafts dynamic marketing strategies, shaped by keen market insights and user trends. We build unique narratives that help you stand out in the DeFi landscape.",
    icon: FireIcon,
  },
  {
    name: "Business Development",
    description:
      "With our industry knowledge and established networks, we identify growth opportunities and potential collaborations. We’re your key to strategic partnerships that can scale your operations.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "On-Chain Analysis",
    description:
      "Leverage our on-chain data analysis for strategic advantage. We decode user behavior, trend movements, and competitive dynamics, delivering actionable insights for decisive action",
    icon: LinkIcon,
  },
  {
    name: "Documentation",
    description:
      "We distill complexity into comprehension with our documentation services. By simplifying complex DeFi concepts, we foster community engagement and drive your project’s growth.",
    icon: ClipboardIcon,
  },
  {
    name: "Content Creation",
    description:
      "For all your content needs, our ghostwriting service is your solution. If needed, we tap into our extensive Key Opinion Leader network for external-based content. We shape your brand’s voice into high-quality content, making it accessible to diverse audiences. ",
    icon: ArchiveBoxIcon,
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-white pt-24 pb-8 sm:pt-32 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="self-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <div className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <div className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#6379E9]">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3>{feature.name} </h3>
                </div>
                <p className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
