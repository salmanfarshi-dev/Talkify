
import favicon from '../assets/favicon.png'

function FacebookLoader() {
  return (
    <div className="fixed inset-0 bg-[#34697B] flex flex-col items-center justify-center z-[9999]">
      <div className="w-20 h-20 rounded-full bg-[#fff7ed] flex items-center justify-center">
        <span className="text-white text-5xl font-bold"><img src={favicon} alt="icon" /></span>
      </div>

      <div className="flex gap-2 mt-8">
        <div className="w-3 h-3 bg-blue-300 rounded-full animate-bounce"></div>
        <div
          className="w-3 h-3 bg-blue-300 rounded-full animate-bounce"
          style={{ animationDelay: "0.15s" }}
        ></div>
        <div
          className="w-3 h-3 bg-blue-300 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
      </div>
    </div>
  );
}

export default FacebookLoader;