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
    <div
      id="services"
      className="relative isolate overflow-hidden bg-gray-900 pt-24 pb-8 sm:pt-32 pb-8"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="self-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Services
          </h2>
          <div className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <div className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#6379E9]">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3>{feature.name} </h3>
                </div>
                <p className="mt-1 text-base leading-7 text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M422.545 535.797L607.344 678 1155 135.361 607.344 406.249 555.19 211.723c199.368-70.865 124.02-221.876-54.572-290.193C423.666-51.137 163.593-12.682 180.13 140.149c18.193 144.101 240.554 32.985 324.87 105.49L319 330.5l24.156 333.992-359.61-64.695z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
