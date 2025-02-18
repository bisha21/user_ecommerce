import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const FAQAccordion = () => {
  return (
    <div className=" max-w-4xl mx-auto py-[10px]">
      <h2 className="text-2xl font-bold text-center mb-5">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="shipping">
          <AccordionTrigger className="text-lg font-[600]">
            🚚 Shipping & Delivery
          </AccordionTrigger>
          <AccordionContent className="text-[16px] font-[500]">
            We offer fast delivery worldwide. Orders are shipped within 3-5
            business days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger className="text-lg font-[600]">
            🔄 Returns & Refunds
          </AccordionTrigger>
          <AccordionContent className="text-[16px] font-[500]">
            You can return products within 30 days of purchase. Refunds are
            processed within 7 days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="payment">
          <AccordionTrigger className="text-lg font-[600]">
            💳 Payment & Security
          </AccordionTrigger>
          <AccordionContent className="text-[16px] font-[500]">
            We accept credit cards, PayPal, and UPI. Your payment is secure with
            SSL encryption.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="offers">
          <AccordionTrigger className="text-lg font-[600]">
            🎉 Discounts & Offers
          </AccordionTrigger>
          <AccordionContent className="text-[16px] font-[500]">
            Subscribe to our newsletter for exclusive discounts and deals!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
