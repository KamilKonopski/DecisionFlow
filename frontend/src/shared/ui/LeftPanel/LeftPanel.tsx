import Navigation from "./Navigation/Navigation";

const LeftPanel = () => {
  return (
    <aside
      className="
        w-20 md:w-64
        min-h-screen
        py-4
        flex flex-col items-center
        shadow-[-5px_4px_10px_rgba(0,0,0,0.5)]
        transition-all
      "
    >
      <div className="w-12 md:w-40 mb-6">
        <img src="logotext.png" alt="DecisionFlow Logo" className="hidden md:block" />
        <img src="logo.png" alt="DecisionFlow Logo" className="block md:hidden" />
      </div>
      <Navigation />
    </aside>
  );
};

export default LeftPanel;
