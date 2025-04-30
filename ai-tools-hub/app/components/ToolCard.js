export default function ToolCard({ name, description, link }) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 inline-block"
      >
        Learn More
      </a>
    </div>
  );
}
