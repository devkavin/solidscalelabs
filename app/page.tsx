import { Hero } from "@/components/sections/Hero";
import { ServicesTabs } from "@/components/sections/ServicesTabs";
import { Proof } from "@/components/sections/Proof";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <ServicesTabs />
      <Proof />
      <Process />
      <CaseStudies />
      <FAQ />
      <Contact />
    </>
  );
}
