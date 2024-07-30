"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const DezvoltariMain = () => {
  const ongoingProjects = [
    {
      title: "Cavar Residence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
      images: [
        "/images/ongoing-projects/cavar-1.png",
        "/images/ongoing-projects/cavar-2.png",
        "/images/ongoing-projects/cavar-3.png",
      ],
    },
    {
      title: "Lakefield Residence",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [
        "/images/ongoing-projects/lakefield-1.png",
        "/images/ongoing-projects/lakefield-2.png",
        "/images/ongoing-projects/lakefield-3.png",
      ],
    },
    {
      title: "Avalon Residence",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      images: [
        "/images/ongoing-projects/avalon-1.png",
        "/images/ongoing-projects/avalon-2.png",
        "/images/ongoing-projects/avalon-3.png",
      ],
    },
  ];

  const completedProjects = [
    {
      title: "Sud Residence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
      images: [
        "/images/completed-projects/sud-1.webp",
        "/images/completed-projects/sud-2.webp",
        "/images/completed-projects/sud-3.webp",
      ],
    },
    {
      title: "Corbeanca Residence",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [
        "/images/completed-projects/corbeanca-1.webp",
        "/images/completed-projects/corbeanca-2.webp",
        "/images/completed-projects/corbeanca-3.webp",
      ],
    },
    {
      title: "Upground Residence",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      images: [
        "/images/completed-projects/upground-1.webp",
        "/images/completed-projects/upground-2.webp",
        "/images/completed-projects/upground-3.jpg",
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center my-8 p-8">
      <h2 className="text-center text-lg font-semibold my-8 underline">
        Proiecte în Curs de Desfășurare
      </h2>
      <div className="flex justify-center">
        <div className="w-full grid grid-container 4xs:grid-cols-1">
          {ongoingProjects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="flex flex-col items-center mb-8 xl:mb-16"
            >
              <h3 className="p-2 text-md font-semibold mb-2">
                {project.title}
              </h3>
              <p className=" p-2 mb-4 text-center">{project.description}</p>
              <Carousel
                className="w-[70%] lg:w-[30%] my-4 xl:my-8"
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
              >
                <CarouselContent className="rounded-lg">
                  {project.images.map((image, imageIndex) => (
                    <CarouselItem
                      key={`${projectIndex}-${imageIndex}`}
                      className="px-2 xl:px-4"
                    >
                      <Card className="rounded-lg overflow-hidden">
                        <CardContent className="p-0 aspect-square relative">
                          <img
                            src={image}
                            alt={`${project.title} ${imageIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-center text-lg font-semibold my-8 underline">
        Proiecte Finalizate
      </h2>
      <div className="flex justify-center">
        <div className="w-full grid grid-container 4xs:grid-cols-1">
          {completedProjects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="flex flex-col items-center mb-8 xl:mb-16"
            >
              <h3 className="p-2 text-md font-semibold mb-2">
                {project.title}
              </h3>
              <p className=" p-2 mb-4 text-center">{project.description}</p>
              <Carousel
                className="w-[70%] lg:w-[30%] my-4 xl:my-8"
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
              >
                <CarouselContent className="rounded-lg">
                  {project.images.map((image, imageIndex) => (
                    <CarouselItem
                      key={`${projectIndex}-${imageIndex}`}
                      className="px-2 xl:px-4"
                    >
                      <Card className="rounded-lg overflow-hidden">
                        <CardContent className="p-0 aspect-square relative">
                          <img
                            src={image}
                            alt={`${project.title} ${imageIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DezvoltariMain;
