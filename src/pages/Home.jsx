import { useSelector } from "react-redux";
import Hero from "../components/home/Hero";
import CatagorizedProduct from "../components/home/CatagorizedProduct";
import ReviewCard from "../components/review/reviewCard";

export default function Home() {

  return (
    <>
      <Hero />
      <section className="py-12 bg-gray-100">
        <CatagorizedProduct category="Man" className="bg-slate-200"  />
      </section>
      <section className="py-12 bg-gray-200">
        <CatagorizedProduct category="Women" className="bg-slate-400" />
      </section>
      <section className="py-12 bg-gray-300">
        <CatagorizedProduct category="Kids" />
      </section>
      <section className="py-12 bg-gray-300">
        <ReviewCard />
      </section>
    
    </>
  )
}
