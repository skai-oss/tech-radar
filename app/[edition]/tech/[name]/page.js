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
      <h3 className="font-thin text-4xl flex gap-1 items-center">{name}</h3>
      <h4 className="font-medium mb-8 text-xs italic">
        {quadrant} <b>·</b> {ring}
        {trend && (
          <>
            <b>·</b> {trendString[trend]}
          </>
        )}
      </h4>
      <article className="prose text-slate-800 prose-ul:text-slate-800 font-light prose-a:font-light prose-a:text-slate-800 dark:text-slate-100 dark:prose-a:text-slate-100">
        <ReactMarkdown linkTarget="_blank">{description}</ReactMarkdown>
      </article>
    </div>
  );
};

export default Tech;
