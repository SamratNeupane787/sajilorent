import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Faq() {
  const data = [
    {
      id: 1,
      question: "What is this website?",
      answer: "This website is a platform where you can rent items easily!"
    },
    {
      id: 2,
      question: "Is there a fee to rent an item?",
      answer: "Some items may have a rental fee; others may be free depending on the lender."
    },
    {
      id: 3,
      question: "How do I list my item for rent?",
      answer: "Sign up, go to your dashboard, and click 'List an Item' to get started."
    }
  ];
  return (
    <div className=" flex h-[22rem]   flex-col items-center justify-center">
      <div>
        <h1 className=" text-center text-3xl py-8 font-bold text-main-bg">
          Why Choose Us?
        </h1>
      </div>
      <div className=" container text-3xl">
        <Accordion
          type="single"
          collapsible
          className="min-w-full container px-4 "
        >
          {data.map((item) => (
            <AccordionItem
              key={item.id}
              value={`item-${item.id}`}
              className="text-2xl"
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}


export default Faq
