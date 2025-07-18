import { Page1 } from "../components/Page-1";
import { Page2 } from "../components/Page-2";

// Default component for unmatched routes
const NotFound = ({ slugs }: { slugs: string[] }) => (
  <div>
    <h1>Page Not Found</h1>
    <p>No page found for: /{slugs?.join('/')}</p>
  </div>
);

export default async function CatchAllPage({ params }: { params: Promise<{ slugs: string[] }> }) {
  const slugs = (await params).slugs;

  // Join all slugs to create the full path
  const fullPath = slugs.join('/');

  switch (fullPath) {
    case 'page-1':
      return <Page1 />;
    case 'page-1/page-2':
      return <Page2 />;
    default:
      return <NotFound slugs={slugs} />;
  }
}

export const dynamicParams = true;
export const dynamic = 'force-static';