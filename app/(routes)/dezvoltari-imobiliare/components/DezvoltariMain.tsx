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
      title: "Proiect Rezidențial Premium",
      description:
        "Lucrăm la dezvoltarea unui complex rezidențial modern, care va oferi locuințe de înaltă calitate, cu finisaje premium și dotări complete. Acest proiect reflectă angajamentul nostru pentru excelență și confort.",
      images: [
        "/images/ongoing-projects/residence-1.jpg",
        "/images/ongoing-projects/residence-2.jpg",
        "/images/ongoing-projects/residence-3.jpg",
      ],
    },
    {
      title: "Spațiu Comercial Multifuncțional",
      description:
        "Construim un spațiu comercial de mari dimensiuni, gândit să găzduiască diverse afaceri într-un mediu modern și eficient. Proiectul este adaptat pentru a răspunde cerințelor pieței actuale și viitoare.",
      images: [
        "/images/ongoing-projects/business-1.jpg",
        "/images/ongoing-projects/business-2.jpg",
        "/images/ongoing-projects/business-3.jpg",
      ],
    },
    {
      title: "Complex de Birouri Ecologic",
      description:
        "În desfășurare se află un complex de birouri proiectat pentru a minimiza impactul asupra mediului, folosind tehnologii de construcție sustenabile și soluții energetice inovatoare.",
      images: [
        "/images/ongoing-projects/eco-1.jpg",
        "/images/ongoing-projects/eco-2.jpg",
        "/images/ongoing-projects/eco-3.jpg",
      ],
    },
    {
      title: "Renovare Clădire Istorică",
      description:
        "Suntem în proces de renovare a unei clădiri istorice, unde păstrăm elementele de patrimoniu, integrând în același timp facilități moderne pentru a aduce clădirea la standardele actuale.",
      images: [
        "/images/ongoing-projects/historical-1.jpg",
        "/images/ongoing-projects/historical-2.jpg",
      ],
    },
    {
      title: "Amenajare Parc Industrial",
      description:
        "Lucrăm la dezvoltarea unui parc industrial, proiectat pentru a oferi infrastructură și facilități moderne pentru diverse industrii. Acest proiect este esențial pentru stimularea dezvoltării economice locale.",
      images: [
        "/images/ongoing-projects/industrial-1.jpg",
        "/images/ongoing-projects/industrial-2.jpg",
        "/images/ongoing-projects/industrial-3.jpg",
      ],
    },
  ];

  const completedProjects = [
    {
      title: "In curand!",
      description: "In curand vom reveni cu lucrarile noastre finalizate",
      images: ["/images/completed-projects/va-urma.jpg"],
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
