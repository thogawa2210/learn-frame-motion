import ImageCard from "@/components/ui/imagecard";

export default function WhyUs() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-4xl font-bold w-full flex items-center justify-center py-5">
        Why us?
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ImageCard imgSrc="/images/whyus-1.png" />
        <ImageCard imgSrc="/images/whyus-2.png" />
        <ImageCard imgSrc="/images/whyus-3.png" />
        <ImageCard imgSrc="/images/whyus-4.png" />
      </div>
    </div>
  );
}
