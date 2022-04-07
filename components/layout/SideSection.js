const SideSection = ({ children }) => (
  <section
    aria-labelledby="changelog-title"
    className="lg:col-start-0 lg:col-span-1"
  >
    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
      {children}
    </div>
  </section>
);

export default SideSection;
