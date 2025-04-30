import Head from "next/head";
import ToolCard from "../components/ToolCard";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>AI Tools Hub</title>
        <meta name="description" content="Directory of AI Tools" />
      </Head>
      <h1 className="text-3xl font-bold text-center mb-4">
        Welcome to AI Tools Hub
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Tool Cards */}
        <ToolCard
          name="Jasper AI"
          description="AI-powered content generation tool."
          link="https://jasper.ai"
        />
        <ToolCard
          name="Copy.ai"
          description="AI-based copywriting tool."
          link="https://copy.ai"
        />
      </div>
    </div>
  );
}
