const Legend = () => {
  return (
    <ul className="prose prose-sm max-w-none text-slate-800 dark:text-slate-300">
      <li className="text-lg leading-6 flex justify-between mb-1">
        <h2>Ring definition</h2>
      </li>
      <li>
        <h4>Adopt</h4>
        <p>
          The following items are the Skai standard and are widely used in our
          production systems, accompanied by clear guidelines, best practices
          and optionally training and enablement.
          <br />
          Teams should adhere to these standards.
        </p>
      </li>
      <li>
        <h4>Trial</h4>
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
        <h4>Assess</h4>
        <p>
          The following items have a high potential for our tech roadmap.
          However, we haven’t tried them so far.
          <br />
          Teams are welcome to explore these items.
        </p>
      </li>
      <li>
        <h4>Hold</h4>
        <p>
          The following items shouldn’t be used in new projects in Skai. If it
          already exists, keep it in minimal maintenance mode or deprecate it.
        </p>
      </li>
    </ul>
  );
};

export default Legend;
