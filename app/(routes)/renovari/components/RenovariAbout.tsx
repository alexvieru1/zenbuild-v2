import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const servicii = [
  {
    title: "Consultanță personalizată",
    description:
      "Înțelegem că fiecare proiect este unic. De aceea, începem cu o consultare detaliată pentru a înțelege nevoile și dorințele dumneavoastră, asigurându-ne că fiecare detaliu este luat în considerare.",
  },
  {
    title: "Proiectare și planificare",
    description:
      "Designerii și arhitecții noștri colaborează îndeaproape cu dumneavoastră pentru a crea un plan care să reflecte viziunea și stilul dorit. Vom realiza schițe și planuri 3D pentru a vă oferi o imagine clară a rezultatului final.",
  },
  {
    title: "Managementul materialelor",
    description:
      "Ne ocupăm de achiziția materialelor de cea mai bună calitate, lucrând cu furnizori de renume pentru a asigura durabilitatea și estetica proiectului. Gestionăm întregul lanț de aprovizionare pentru a vă scuti de griji.",
  },
  {
    title: "Execuție",
    description:
      "Echipa noastră de meșteri calificați pune în practică fiecare detaliu al proiectului. De la demontări și reconstrucții până la finisaje de lux, ne asigurăm că fiecare etapă este realizată cu precizie și profesionalism.",
  },
  {
    title: "Supravegherea lucrărilor",
    description:
      "Managerii noștri de proiect monitorizează constant progresul lucrărilor, asigurându-se că termenele sunt respectate și că standardele de calitate sunt menținute. Comunicăm transparent cu dumneavoastră pe tot parcursul procesului.",
  },
  {
    title: "Servicii post-renovare",
    description:
      "După finalizarea lucrărilor, oferim o inspecție finală și asistență pentru orice ajustări necesare. Suntem alături de dumneavoastră pentru a ne asigura că sunteți complet mulțumit de noul dumneavoastră spațiu.",
  },
];

const RenovariAbout = () => {
  return (
    <div className="w-full 4xs:p-2 lg:p-8">
      <h2 className="text-center mb-4 4xs:text-md font-semibold">Ce oferim:</h2>
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
      <div className="flex flex-col justify-center p-4 mt-8 md:text-center">
        <h2>Alegeți Zen Build pentru renovări care depășesc așteptările.</h2>
        <p className="mt-4">
          Suntem aici pentru a transforma visurile în realitate, cu o atenție
          deosebită la detalii și o dedicare neclintită față de excelență.
        </p>
      </div>
    </div>
  );
};

export default RenovariAbout;
