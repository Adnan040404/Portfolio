import { Reveal } from "./ui/Reveal";
import { experience, education, certifications } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-text">Experience</h2>
        </Reveal>

        <div className="mt-8 flex flex-col gap-8">
          {experience.map((item, i) => (
            <Reveal key={item.org} delay={i * 0.08}>
              <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-6">
                <p className="text-sm font-medium text-text-muted">{item.period}</p>
                <div>
                  <h3 className="font-semibold text-text">{item.role}</h3>
                  <p className="text-sm font-medium text-accent">
                    {item.org}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {item.points.map((point) => (
                      <li key={point} className="text-sm leading-relaxed text-text-muted">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                Education
              </h3>
              <div className="mt-3">
                <p className="font-semibold text-text">{education.degree}</p>
                <p className="text-sm text-text-muted">{education.school}</p>
                <p className="mt-1 text-sm text-text-muted">
                  {education.period} · CGPA {education.cgpa}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                Certifications
              </h3>
              <ul className="mt-3 space-y-1.5">
                {certifications.map((cert) => (
                  <li key={cert.name} className="text-sm text-text-muted">
                    <span className="text-text">{cert.name}</span> — {cert.issuer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
