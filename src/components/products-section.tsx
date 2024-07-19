import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";

export const ProductsSection = () => {
  return (
    <div>
      <div className="flex flex-col max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-center">
          <h2
            className=" font-semibold text-4xl tracking-tighter"
            data-main-heading="true"
          >
            Crafts
          </h2>
        </div>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            url={item.url}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 bg-cover border",
      className
    )}
  ></div>
);
const items = [
  {
    title: "scriptkavi/hooks",
    description:
      "Empower your react project with accessible and customizable hooks. Copy paste the modern hooks and use them in your React or NextJS applications.",
    header: (
      <Skeleton className="bg-[url('https://raw.githubusercontent.com/scriptkavi/hooks/main/apps/www/public/og.jpg')]" />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    url: "https://hooks.scriptkavi.com",
  },
  {
    title: "VedVyas.io",
    description: "Where developers learn together.",
    header: <Skeleton className="bg-[url('/vedvyas.png')]" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    url: "https://www.vedvyas.io",
  },
  {
    title: "LanTalk",
    description: "Chat with peers on local network.",
    header: <Skeleton className="bg-[url('/lantalk.png')]" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    url: "https://github.com/scriptkavi/lantalk",
  },
  {
    title: "Quick",
    description: "Share files across devices in the same network.",
    header: <Skeleton className="bg-[url('/quick.png')]" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    url: "https://github.com/scriptkavi/quick",
  },
];
