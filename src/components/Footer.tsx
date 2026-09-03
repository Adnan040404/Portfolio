import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-10 text-center text-sm text-text-muted sm:flex-row sm:justify-between sm:text-left">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.title} · Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
