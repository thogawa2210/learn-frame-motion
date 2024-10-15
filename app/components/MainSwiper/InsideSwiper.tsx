import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  buttonText = "Click Me", // Default text if not provided
  buttonClassname = "", // Default to empty if not provided
  buttonHref = "/",
}: IInsideSwiperProps) {
  return (
    <div
      className="h-full w-full bg-cover flex flex-col gap-3 items-center justify-center"
      style={{
        backgroundImage: `url(${imgSrc})`, // Inline style for dynamic image
      }}
    >
      <div className={headerClassname}>{header}</div>
      <div className={subHeaderClassname}>{subHeader}</div>
      {buttonText && (
        <Link href={buttonHref}>
          <Button className={buttonClassname} size="lg">
            {buttonText}
          </Button>
        </Link>
      )}
    </div>
  );
}
