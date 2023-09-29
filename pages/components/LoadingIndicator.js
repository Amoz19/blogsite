const LoadingIndocator = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent backdrop-sepia-0">
      <div className="loader bg-blue-700 px-7 py-2 rounded-full flex space-x-2">
        <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingIndocator;
