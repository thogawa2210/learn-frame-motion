import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface IInsideSwiperProps {
  imgSrc: string;
  header: string;
  headerClassname?: string;
  subHeader: string;
  subHeaderClassname?: string;
  buttonText?: string;
  buttonClassname?: string;
  buttonHref?: string;
}

export default function InsideSwiper({
  header,
  imgSrc,
  headerClassname = "text-4xl font-bold text-white",
  subHeader,
  subHeaderClassname = "text-white",
  buttonText,
  buttonClassname,
  buttonHref = "/",
}: IInsideSwiperProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={imgSrc}
        alt={header}
        layout="fill"
        objectFit="cover"
        className="z-0  h-full w-full object-cover"
      />
      <div className="absolute h-full w-full flex items-center justify-center flex-col gap-3 z-10">
        <div className={headerClassname}>{header}</div>
        <div className={subHeaderClassname}>{subHeader}</div>
        <Link href={buttonHref}>
          <Button className={buttonClassname} size="lg">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
