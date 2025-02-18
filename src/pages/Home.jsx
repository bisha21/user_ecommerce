import { useSelector } from "react-redux";
import Hero from "../_components/home/Hero";
import CatagorizedProduct from "../_components/home/CatagorizedProduct";
import ReviewCard from "../_components/review/reviewCard";
import NewArrival from "@/_components/products/NewArrivial";
import Tittle from "@/_components/Tittle";
import FAQAccordion from "@/_components/home/Accordian";

export default function Home() {

  return (
    <>
      <Hero />
     <section className="  bg-teal-100 m mx-auto">
      <Tittle label="Top Buyer" />
      <NewArrival />
     </section>
      <section className="py-12 bg-teal-200/50">
        <CatagorizedProduct category="Man"  />
      </section>
      <section className="py-12 bg-teal-100/50">
        <CatagorizedProduct category="Women" />
      </section>
      <section className="py-12 bg-teal-200/50">
        <CatagorizedProduct category="Kids" />
      </section>
      <section className=" bg-teal-100/50">
        <ReviewCard  />
      </section>
      <section className="bg-teal-200/50">
        <FAQAccordion/>
      </section>

    
    </>
  )
}
