import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-grain px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-[8rem] leading-none text-blood">404</h1>
        <h2 className="mt-4 font-display text-3xl text-paper tracking-wider">PÁGINA SUMIU</h2>
        <p className="mt-2 text-sm text-steel font-mono">Tipo aquele ex: não tá mais aqui.</p>
        <div className="mt-6">
          <Link to="/" className="btn-blood">VOLTAR PRA REAL</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tia Luh — Media Kit | Sem Papas, Sem Pose" },
      { name: "description", content: "Media Kit oficial da Tia Luh (@universoluh.oficial). Mãe de 3, real desde os 16. +1M no TikTok, +180k no Instagram. Parcerias que não romantizam." },
      { name: "author", content: "Luana Cristina — Tia Luh" },
      { property: "og:title", content: "Tia Luh — Media Kit" },
      { property: "og:description", content: "Mãe de 3, sem papas na língua. +1M seguidores TikTok. Parcerias reais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;700&family=Permanent+Marker&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-ink-grain">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
