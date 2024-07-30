import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const servicii = [
  {
    title: "Finisaje",
    description:
      "Servicii de finisare interioară și exterioară, inclusiv vopsit, tencuială decorativă și aplicare de tapet. Asigurăm un aspect estetic și durabil pentru orice spațiu.",
  },
  {
    title: "Montaj Rigips",
    description:
      "Instalarea plăcilor de rigips pentru pereți despărțitori, tavane false și alte structuri. Oferim soluții rapide și eficiente pentru compartimentarea spațiilor.",
  },
  {
    title: "Lucrări de Fier",
    description:
      "Construcția și montajul de structuri metalice, inclusiv balustrade, scări și cadre din fier. Asigurăm rezistență și siguranță pentru orice proiect.",
  },
  {
    title: "Montare Termosistem",
    description:
      "Aplicarea sistemelor de izolație termică pe fațadele clădirilor, pentru a asigura eficiența energetică și confortul interior. Folosim materiale de calitate superioară pentru rezultate durabile.",
  },
  {
    title: "Reconsolidări",
    description:
      "Servicii de reconsolidare și renovare a clădirilor existente, pentru a îmbunătăți stabilitatea structurală și a prelungi durata de viață a construcțiilor.",
  },
  {
    title: "Instalații Electrice și Sanitare",
    description:
      "Montaj și întreținere pentru instalații electrice, sanitare și de încălzire. Asigurăm funcționarea corectă și eficientă a sistemelor esențiale.",
  },
  {
    title: "Izolații Termice și Fonice",
    description:
      "Aplicarea materialelor izolante pentru eficiența energetică și reducerea zgomotului, contribuind la un mediu confortabil și economic.",
  },
  {
    title: "Pardoseli",
    description:
      "Montaj și recondiționare pentru diverse tipuri de pardoseli, inclusiv gresie, parchet și mochetă. Asigurăm un finisaj perfect pentru orice tip de spațiu.",
  },
  {
    title: "Tâmplărie și Feronerie",
    description:
      "Instalare și întreținere pentru uși, ferestre și alte elemente din lemn sau metal. Oferim soluții personalizate pentru nevoile clienților noștri.",
  },
  {
    title: "Acoperișuri",
    description:
      "Montaj, reparații și întreținere pentru acoperișuri din diverse materiale, asigurând durabilitate și protecție.",
  },
];

const ServiciiMain = () => {
  return (
    <div className="w-full 4xs:p-2 lg:p-8">
      <h2 className="text-center mb-4 4xs:text-md font-semibold">
        Vă invităm să aruncați o privire asupra serviciilor de calitate oferite
        de noi:
      </h2>
      <div className="flex justify-center">
        <div className="w-[80%]">
          {servicii.map((serviciu, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger>{serviciu.title}</AccordionTrigger>
                <AccordionContent>{serviciu.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h3 className="text-center mb-4 4xs:text-md font-semibold my-12">
            Posibilitatea de leasing de persoane în domeniul construcțiilor
            (oferim echipe specializate).
          </h3>
          <p>
            Suntem specializați în leasingul de personal pentru industria
            construcțiilor, oferind soluții flexibile pentru echipele de lucru
            necesare proiectelor dumneavoastră. Această opțiune vă permite să
            beneficiați de forță de muncă calificată și experimentată fără a vă
            asuma responsabilitățile și costurile directe ale angajării.
          </p>
          <div className="flex justify-center items-center mt-8">
            <Tabs defaultValue="offers" className="w-full max-w-xl">
              <TabsList className="flex justify-center">
                <TabsTrigger value="offers">Ce Oferim</TabsTrigger>
                <TabsTrigger value="benefits">
                  Beneficii pentru Parteneri
                </TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
              <TabsContent value="offers" className="w-full">
                <ul className="list-disc ml-4">
                  <li>
                    Echipe de muncitori calificați și bine antrenați în diverse
                    domenii ale construcțiilor.
                  </li>
                  <li>
                    Flexibilitate în ajustarea dimensiunii și compoziției
                    echipei în funcție de cerințele fiecărui proiect.
                  </li>
                  <li>
                    Supraveghere și management dedicat pentru a asigura
                    eficiența și calitatea lucrărilor.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="benefits" className="w-full">
                <ul className="list-disc ml-4">
                  <li>Reducerea costurilor administrative și de recrutare.</li>
                  <li>Acces rapid la resurse umane de înaltă calitate.</li>
                  <li>
                    Concentrare sporită pe activitățile cheie ale proiectului.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="contact" className="w-full">
                <p>
                  Pentru a discuta despre cum leasing-ul de personal poate
                  îmbunătăți eficiența și rentabilitatea proiectelor
                  dumneavoastră, vă rugăm să ne contactați. Suntem aici pentru a
                  găsi soluțiile ideale pentru succesul fiecărui proiect.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciiMain;
