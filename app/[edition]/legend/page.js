const Legend = () => {
  return (
    <ul className=" mt-0 prose text-slate-800 prose-h2:text-slate-800 dark:prose-h2:text-slate-100 prose-h4:text-slate-800 dark:prose-h4:text-slate-100 prose-ul:text-slate-800 font-light prose-a:font-light prose-a:text-slate-800 dark:text-slate-100 dark:prose-a:text-slate-100">
      <li>
        <h2 className="font-thin text-4xl mt-0">Ring definition</h2>
      </li>
      <li>
        <h4 className="font-thin text-2xl">Adopt</h4>
        <p>
          The following items are the Skai standard and are widely used in our
          production systems, accompanied by clear guidelines, best practices
          and optionally training and enablement.
          <br />
          Teams should adhere to these standards.
        </p>
      </li>
      <li>
        <h4 className="font-thin text-2xl">Trial</h4>
        <p>
          The following items are part of our tech roadmap. We are already
          experimenting with them and might have limited usage in our production
          systems.
          <br />
          According to risk assessment, teams are encouraged to participate in
          these trials.
        </p>
      </li>
      <li>
        <h4 className="font-thin text-2xl">Assess</h4>
        <p>
          The following items have a high potential for our tech roadmap.
          However, we haven’t tried them so far.
          <br />
          Teams are welcome to explore these items.
        </p>
      </li>
      <li>
        <h4 className="font-thin text-2xl">Hold</h4>
        <p>
          The following items shouldn’t be used in new projects in Skai. If it
          already exists, keep it in minimal maintenance mode or deprecate it.
        </p>
      </li>
    </ul>
  );
};

export default Legend;
