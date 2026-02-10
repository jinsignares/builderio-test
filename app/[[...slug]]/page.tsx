import { Content, fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-react";
import { customComponents } from "../../builder-registry";

const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

interface PageProps {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<Record<string, string>>;
}

const FALLBACK_HOMEPAGE_CONTENT = {
  data: {
    title: "Homepage",
    blocks: [
      {
        id: "block-hero",
        component: {
          name: "Hero",
          options: {
            title: "Turn absence management into a <strong>productivity engine</strong>",
            description: "Fixing absences is just the start. TeamSense delivers instant ROI through automated call-offs — building the digital connection that links every worker, workflow, and insight driving frontline productivity.",
            buttonText: "Book a Demo",
            buttonLink: "/demo",
          }
        }
      },
      {
        id: "block-logos",
        component: {
          name: "LogoGrid",
          options: {
            headline: "TRUSTED BY INNOVATIVE COMPANIES",
            logos: [
              { name: "Pella", image: "/assets/images/demo/pella-white.png" },
              { name: "HelloFresh", image: "/assets/images/demo/hello-fresh-white.png" },
              { name: "Saint Gobain", image: "/assets/images/demo/saint-gobain-white.png" },
              { name: "Kenco", image: "/assets/images/demo/kenco-white.png" },
              { name: "AAM", image: "/assets/images/demo/aam-white.png" },
            ]
          }
        }
      },
      {
        id: "block-zpattern-1",
        component: {
          name: "ZPattern",
          options: {
            headline: "Eliminate call-off chaos",
            description: "<p>Replace your call-off hotline with a text-based system that automatically updates supervisors and logs attendance.</p>",
            imagePosition: "right",
            backgroundColor: "white",
            image: "/assets/images/homepage/absent-sms-bkg.png"
          }
        }
      },
      {
        id: "block-zpattern-2",
        component: {
          name: "ZPattern",
          options: {
            headline: "Engage your entire team",
            description: "<p>Send company announcements, safety updates, and pulse surveys directly to employee phones via text.</p>",
            imagePosition: "left",
            backgroundColor: "gray",
            image: "/assets/images/homepage/absence-manager-bkg.png"
          }
        }
      },
      {
        id: "block-features",
        component: {
          name: "FeatureCards",
          options: {
            headline: "Why TeamSense?",
            cards: [
              {
                title: "100% Adoption",
                description: "Since it works via text message, everyone already has the app installed.",
              },
              {
                title: "Zero Friction",
                description: "No logins, passwords, or company emails to manage.",
              },
              {
                title: "HRIS Integration",
                description: "Syncs seamlessly with ADP, UKG, Workday, and more.",
              }
            ]
          }
        }
      },
      {
        id: "block-testimonials",
        component: {
          name: "Testimonials",
          options: {
            title: "What our customers say",
            testimonials: [
              {
                quote: "TeamSense has been a game changer for our attendance tracking. It's so simple for our employees.",
                author: "HR Manager",
                company: "Manufacturing Co."
              },
              {
                quote: "The ability to communicate instantly with our floor staff has improved engagement significantly.",
                author: "Operations Director",
                company: "Logistics Inc."
              },
              {
                quote: "Implementation was incredibly fast. We were up and running in days, not months.",
                author: "Plant Manager",
                company: "Automotive Parts Supplier"
              }
            ]
          }
        }
      }
    ]
  }
};

export default async function Page(props: PageProps) {
  const { params, searchParams } = props;
  const resolvedParams = await params;
  const urlPath = `/${resolvedParams.slug?.join('/') || ''}`;
  const resolvedSearchParams = await searchParams;

  let content = null;
  try {
    content = await fetchOneEntry({
      model: "page",
      apiKey: PUBLIC_API_KEY,
      userAttributes: { urlPath },
      options: getBuilderSearchParams(resolvedSearchParams),
    });
  } catch (error) {
    console.warn("Failed to fetch from Builder.io (expected during migration without valid API Key):", error);
  }

  // FALLBACK: If no content found and we are on the homepage, use hardcoded content
  // This simulates the migration result before the user connects Builder.io
  if (!content && urlPath === '/') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content = FALLBACK_HOMEPAGE_CONTENT as any;
  }

  if (!content) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 dark:bg-zinc-900">
        <h1 className="text-4xl font-bold dark:text-white">Page Not Found</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Make sure you have created a page in Builder.io with the URL: <strong>{urlPath}</strong>
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          And ensure your Public API Key is correct in .env.local
        </p>
      </div>
    );
  }

  return (
    <Content
      content={content}
      model="page"
      apiKey={PUBLIC_API_KEY}
      customComponents={customComponents}
    />
  );
}
