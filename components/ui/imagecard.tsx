import ScaleInView from "@/app/components/ScaleInView";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ReactNode } from "react";

export interface IImageCardProps {
  imgSrc: string;
  width?: number;
  height?: number;
  title?: string;
  content?: string;
  footer?: ReactNode;
}

export default function ImageCard({
  imgSrc,
  width = 300,
  height = 300,
  title = "",
  content = "",
  footer,
}: IImageCardProps) {
  return (
    <Card className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <a href="#"> */}
      <ScaleInView>
        <Image
          className="rounded-t-lg"
          src={imgSrc}
          alt="Noteworthy Technology"
          width={width}
          height={height}
        />
      </ScaleInView>
      {/* </a> */}
      <CardContent className="p-5">
        <a href="#">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </CardTitle>
            <CardDescription className="font-normal text-gray-700 dark:text-gray-400">
              {content}
            </CardDescription>
          </CardHeader>
        </a>
      </CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
}
