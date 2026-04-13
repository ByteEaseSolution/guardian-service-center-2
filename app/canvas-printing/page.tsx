import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";
import { services } from "@/lib/content";

const service = services.find((s) => s.slug === "canvas-printing")!;

export const metadata = {
  title: `${service.name} — Guardian Service Center`,
  description: service.shortDescription,
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={service.tagline}
        subtitle={service.shortDescription}
      />
      <ServiceDetail service={service} />
    </>
  );
}
