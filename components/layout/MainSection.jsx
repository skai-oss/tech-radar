const MainSection = ({ children }) => (
  <section aria-labelledby="tech-radar-section">
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">{children}</div>
    </div>
  </section>
);

export default MainSection;
