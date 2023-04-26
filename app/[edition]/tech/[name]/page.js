import { getTechItem } from "../../fetchData";
import ReactMarkdown from "react-markdown";

const trendString = {
  UP: "Trending up",
  DOWN: "Trending down",
  NEW: "New",
};

const Tech = async ({ params }) => {
  const { quadrant, ring, name, description, trend } = await getTechItem(
    params.edition,
    decodeURIComponent(params.name)
  );
  return (
    <div>
      <h4 className="font-medium mb-2 text-xs">
        {quadrant} <b>·</b> <i>{ring}</i>{" "}
        {trend && (
          <>
            <b>·</b> <i>{trendString[trend]}</i>
          </>
        )}
      </h4>
      <h3 className="font-2xl mb-2">{name}</h3>
      <p className="text-md prose prose-base">
        <ReactMarkdown linkTarget="_blank">{description}</ReactMarkdown>
      </p>
    </div>
  );
};

export default Tech;
