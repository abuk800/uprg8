import { Separator } from "@/components/ui/separator";

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
      fill="currentColor"
    />
  </svg>
);

export type FooterLink = { title: string; href: string };
export type FooterSection = { title: string; links: FooterLink[] };

export interface Footer01Props {
  logoSrc: string;
  logoAlt: string;
  tagline: string;
  sections: FooterSection[];
  contactTitle: string;
  address: string[];
  email: string;
  phone: { label: string; href: string };
  linkedin?: string;
  copyright: string;
}

const linkClass = "text-base font-normal text-muted-foreground transition-colors hover:text-foreground";

/** Footer: Logo und Tagline links, Linkspalten und Kontakt rechts, darunter Trennlinie und Copyright. */
const Footer = ({ logoSrc, logoAlt, tagline, sections, contactTitle, address, email, phone, linkedin, copyright }: Footer01Props) => {
  return (
    <footer className="py-10 pb-28 md:pb-10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12">
            <div className="col-span-full lg:col-span-4">
              <div className="flex flex-col gap-6">
                <a href="#" aria-label="Nach oben">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logoSrc} alt={logoAlt} width={110} height={40} className="h-10 w-auto" loading="lazy" />
                </a>
                <p className="max-w-[300px] text-base font-normal text-muted-foreground">{tagline}</p>
                {linkedin && (
                  <div className="flex items-center gap-4">
                    <a href={linkedin} rel="noopener" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
                      <LinkedinIcon />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="col-span-1 hidden lg:block" />

            {sections.map(({ title, links }) => (
              <div key={title} className="col-span-2">
                <div className="flex flex-col gap-4">
                  <p className="text-base font-medium text-foreground">{title}</p>
                  <ul className="flex flex-col gap-3">
                    {links.map((l) => (
                      <li key={l.title}>
                        <a href={l.href} className={linkClass}>
                          {l.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="col-span-3">
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground">{contactTitle}</p>
                <address className="flex flex-col gap-3 not-italic">
                  <p className="text-base font-normal text-muted-foreground">
                    {address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <a href={`mailto:${email}`} className={`${linkClass} break-all`}>
                    {email}
                  </a>
                  <a href={phone.href} className={linkClass}>
                    {phone.label}
                  </a>
                </address>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <p className="text-center text-sm font-normal text-muted-foreground">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
