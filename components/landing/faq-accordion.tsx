import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items, title }: { items: FaqItem[]; title?: string }) {
  return (
    <div>
      {title && (
        <h2 className="text-4xl md:text-5xl font-display tracking-tight leading-[1.05] mb-12 max-w-2xl">
          {title}
        </h2>
      )}
      <Accordion type="single" collapsible className="max-w-2xl">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-foreground/10">
            <AccordionTrigger className="text-base font-medium hover:no-underline py-6">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
