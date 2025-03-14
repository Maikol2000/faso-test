import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Trial from "@/images/trial.png";

interface TrialSectionProps {}

const TrialSectionOne: FC<TrialSectionProps> = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-blue-600 text-white">
      <div className="relative left-5">
        <img
          src="https://s3-alpha-sig.figma.com/img/2b1d/069a/49b440eeb8a39d570cab95aa2cf616fb?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UbxhgJts2u4U8sPEZY18pGAbZ1lLQHRRQSFkwA~wkrmwZuXUOxyOoKKWwFHum1v192Wv7YHzluAUk3fulNbPe5Sz366XzjJH8gmMKlrkiCUaVRAD-NLoQQPjzK1dm9IJf6NQOLlULMCodxJs1aF~rQVIYxTYAFJr64Yag2jQLzZcuZTBlJg0AyrNw0D7KZtEgpyPCNXrzt6BbKTzcWFpLjezciRV~29lN7XgWalu7DohjF~74w0NEYmzW0KbPhtcQMfxbRXCXoOzTt8qGNsIff2IdYaomTTDaZTJr7pq4JVCrqSjz9GI6GvkPnUu2Rv0eCXarwBzyi8N-FKTTozIoQ__"
          alt="FMRP Dashboard"
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Miễn phí dùng thử
            </h2>
            <div className="flex items-center gap-3 justify-center md:justify-start mb-8">
              <Image
                src={Trial}
                alt="FMRP Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <Link
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white rounded-full text-lg font-medium transition-transform hover:scale-105 hover:bg-white hover:text-blue-600"
            >
              Trải Nghiệm Ngay
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-2 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialSectionOne;
