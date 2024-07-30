import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const UtilajeMain = () => {
  const utilaje = [
    {
      name: "Buldozere",
      description: "Pentru nivelarea terenului și lucrări de împingere.",
      image: "/images/bulldozer.webp",
    },
    {
      name: "Excavatoare",
      description: "Pentru săpături, excavări și manipulare de materiale.",
      image: "/images/bulldozer.webp",
    },
    {
      name: "Macarale",
      description: "Pentru ridicarea și deplasarea materialelor grele.",
      image: "/images/bulldozer.webp",
    },
    {
      name: "Betoniere",
      description: "Pentru amestecarea și turnarea betonului.",
      image: "/images/bulldozer.webp",
    },
    {
      name: "Autobasculante",
      description:
        "Pentru transportul eficient al materialelor vrac și de construcții.",
      image: "/images/bulldozer.webp",
    },
    {
      name: "Compactori",
      description:
        "Pentru compactarea solului și a materialelor de construcție.",
      image: "/images/bulldozer.webp",
    },
    {
      name: "Schelă pentru Bloc",
      description:
        "Pentru lucrări de înălțime și construcții de structuri complexe.",
      image: "/images/bulldozer.webp",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-center mb-8">
        <h1 className="text-center text-md max-w-4xl">
          Suntem dedicați să vă susținem proiectele de construcții prin
          furnizarea unei game complete de utilaje specializate. De la buldozere
          și excavatoare la macarale, betoniere, autobasculante, compactori și
          alte echipamente esențiale, avem toate resursele necesare pentru a
          satisface nevoile diverse ale șantierelor dumneavoastră. Indiferent de
          dimensiunea sau complexitatea proiectului, vă garantăm că putem oferi
          soluții profesionale și eficiente, adaptate pentru a maximiza
          eficiența și calitatea lucrărilor dumneavoastră.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {utilaje.map((utilaj, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">{utilaj.name}</CardTitle>
              <CardDescription>{utilaj.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-48">
                <Image
                  src={utilaj.image}
                  alt={utilaj.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UtilajeMain;
