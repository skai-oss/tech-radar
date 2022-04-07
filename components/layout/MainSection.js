const MainSection = ({ children }) => (
  <div className="space-y-6 lg:col-start-2 lg:col-span-2">
    <section aria-labelledby="tech-radar-section">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">{children}</div>
      </div>
    </section>
  </div>
);

export default MainSection;
