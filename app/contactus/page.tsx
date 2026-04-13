import PageHero from "@/components/PageHero";
import { services, site } from "@/lib/content";

export const metadata = {
  title: "Contact — Guardian Service Center",
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch."
        subtitle="Have a project in mind? Need a quote? We'd love to hear from you. Fill out the form or reach us directly — we typically respond within 24 hours."
      />
      <section className="bg-white">
        <div className="gsc-container gsc-section">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-5">
              <div>
                <p className="gsc-eyebrow text-brand-black">Call us</p>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="mt-4 block font-display text-3xl font-bold text-brand-black hover:text-brand-yellow md:text-4xl"
                >
                  {site.phone}
                </a>
                <a
                  href={`tel:${site.phoneAltRaw}`}
                  className="mt-2 block font-display text-2xl text-brand-black/70 hover:text-brand-yellow md:text-3xl"
                >
                  {site.phoneAlt}
                </a>
              </div>
              <div>
                <p className="gsc-eyebrow text-brand-black">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block font-display text-2xl font-bold text-brand-black hover:text-brand-yellow md:text-3xl"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="gsc-eyebrow text-brand-black">Visit</p>
                <p className="mt-4 max-w-sm font-display text-xl text-brand-black md:text-2xl">
                  {site.addressLine1}
                  <br />
                  {site.addressLine2}
                  <br />
                  {site.addressLine3}
                </p>
              </div>
              <div>
                <p className="gsc-eyebrow text-brand-black">Hours</p>
                <p className="mt-4 text-lg text-brand-black/70">{site.hours}</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form className="space-y-6 rounded-2xl border border-brand-black/10 bg-white p-8 shadow-sm md:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="First Name" type="text" name="firstName" placeholder="John" />
                  <Field label="Last Name" type="text" name="lastName" placeholder="Doe" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Email" type="email" name="email" placeholder="john@example.com" />
                  <Field label="Phone" type="tel" name="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-brand-black/60">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    className="mt-2 w-full rounded-lg border border-brand-black/15 bg-white px-4 py-3 text-brand-black outline-none transition focus:border-brand-yellow"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug}>{s.name}</option>
                    ))}
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-brand-black/60">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full rounded-lg border border-brand-black/15 bg-white px-4 py-3 text-brand-black outline-none transition focus:border-brand-yellow"
                  />
                </div>
                <button type="submit" className="gsc-btn w-full justify-center">
                  Send Message <span aria-hidden>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type,
  name,
  placeholder,
}: {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-brand-black/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-brand-black/15 bg-white px-4 py-3 text-brand-black outline-none transition focus:border-brand-yellow"
      />
    </div>
  );
}
