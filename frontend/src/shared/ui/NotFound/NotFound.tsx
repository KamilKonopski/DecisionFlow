const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background">
      <img src="/logotext.png" alt="Logo" className="w-40 sm:w-48 md:w-56 lg:w-64 mb-8" />
      <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Page not found</h2>
      <p className="max-w-md text-sm sm:text-base mb-8">
        Sorry, the page you are looking for doesn`t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/"
          className="px-3 py-2 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover transition"
        >
          Go home
        </a>
        <button
          onClick={() => window.history.back()}
          className="px-3 py-2 rounded-xl border border-border hover:bg-gray-50 transition"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
