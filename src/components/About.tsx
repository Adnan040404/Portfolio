import { Reveal } from "./ui/Reveal";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-text">About</h2>
        </Reveal>
        <div className="mt-6 max-w-2xl space-y-4">
          {profile.bio.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="leading-relaxed text-text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
