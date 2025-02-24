import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export async function loader() {
  // let product = await getProductFromCSVFile(params.pid);
  return {
    identity: {
      siteIcon: './assets/favicon.ico',
      googleSiteVerificationId: 'gXcOiKXqS6dYh94ne9By1BLxr_J94W0lt7zjuarWIA8',
    },
    themeConfig: {
      enableRadius: true,
      fontSans: 'Inter',
      primaryColor: '#0c7864',
      secondaryColor: '#0461c9',
    }
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData("root");

  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        { data?.identity?.googleSiteVerificationId && <meta name="google-site-verification" content={ data.identity.googleSiteVerificationId } />}
        { data?.identity?.siteIcon && <link rel="icon" type="image/x-icon" href={ data.identity.siteIcon }/>}
        { data?.themeConfig && 
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-sans: ${
                  data.themeConfig?.fontSans || '#0c7864'
                };
                --primary-color: ${
                  data.themeConfig?.primaryColor || '#0c7864'
                };
                --secondary-color: ${
                  data.themeConfig?.secondaryColor || '#0c7864'
                };
                --radius: ${
                  data.themeConfig?.enableRadius ? '0.5rem' : '0'
                };
              }
            `,
          }}
        />}
      </head>
      <body className="font-sans bg-gray-50">
        {children}
        <footer className="bg-black text-white text-center text-sm p-2">
        <p>Copyright 2025. Develop by <a href="https://www.masbroweb.com/" className="underline" target="_blank">Jasa Pembuatan Website Medan</a></p>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
