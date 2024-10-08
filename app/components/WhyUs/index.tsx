import ImageCard, { IImageCardProps } from "@/components/ui/imagecard";
import { randomUUID } from "crypto";

const whyusItems: IImageCardProps[] = [
  {
    imgSrc: "/images/whyus-1.png",
    title: "Lorem Ipsum",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imgSrc: "/images/whyus-2.png",
    title: "Lorem Ipsum",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imgSrc: "/images/whyus-3.png",
    title: "Lorem Ipsum",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imgSrc: "/images/whyus-4.png",
    title: "Lorem Ipsum",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

export default function WhyUs() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-4xl font-bold w-full flex items-center justify-center py-5">
        Why us?
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {whyusItems.map((item) => (
          <ImageCard key={randomUUID()} {...item} />
        ))}
      </div>
    </div>
  );
}
