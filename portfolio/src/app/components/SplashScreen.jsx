export default function Loader() {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="flex items-end space-x-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-5 h-5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500  rounded-full wave-dot"
              style={{ animationDelay: `${index * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
  