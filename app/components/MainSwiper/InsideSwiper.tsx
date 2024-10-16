import { Button } from "@/components/ui/button";
import clsx from "clsx";
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
  headerClassname = "text-2xl sm:text-3xl md:text-4xl font-bold text-white",
  subHeader,
  subHeaderClassname = "text-sm sm:text-base md:text-lg text-white",
  buttonText = "Click Me",
  buttonClassname = "",
  buttonHref = "/",
}: IInsideSwiperProps) {
  return (
    <div
      className="h-full w-full bg-cover bg-center flex flex-col gap-2 sm:gap-3 md:gap-4 items-center justify-center p-4 sm:p-6 md:p-8"
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <h2 className={headerClassname}>{header}</h2>
      {subHeader && (
        <p
          className={clsx(
            "flex items-center justify-center text-center",
            subHeaderClassname
          )}
        >
          {subHeader}
        </p>
      )}
      {buttonText && (
        <Link href={buttonHref}>
          <Button
            className={`mt-2 sm:mt-3 md:mt-4 ${buttonClassname}`}
            size="lg"
          >
            {buttonText}
          </Button>
        </Link>
      )}
    </div>
  );
}
