import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const features = [
  {
    imgSrc: "/images/service-1.jpg",
    title: "Tailor Sewing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    imgSrc: "/images/service-2.jpg",
    title: "Measurement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    imgSrc: "/images/service-3.jpg",
    title: "Ready-made",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

export default function OurServices() {
  return (
    <div className="mt-10">
      <div className="w-full flex items-center justify-center m-5 text-4xl">
        Our Services
      </div>
      <div className="flex justify-center gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="text-center max-w-sm">
            <div className="relative overflow-hidden group">
              {/* Aspect ratio box for 2:3 */}
              <div className="w-full h-0 pb-[150%] relative">
                {/* Image with zoom on hover */}
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold mt-4">
                {feature.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
