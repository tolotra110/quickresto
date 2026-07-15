function Card({ title, value, icon: Icon, loading = false }) {
  return (
    <div className="bg-blue-1000 w-71 p-4 rounded-2xl shadow-2xl hover:bg-blue-900 transition duration-300">
      
      <div className="flex items-center justify-between">
        
        <div>
          <p className="text-white text-sm">{title}</p>

          {loading ? (
            <h2 className="text-xl text-gray-400 mt-1">Loading...</h2>
          ) : (
            <h2 className="text-xl text-white font-bold mt-1">
              {value ?? 0}
            </h2>
          )}
        </div>

        <div className="text-blue-400 text-3xl">
          {Icon && <Icon />}
        </div>

      </div>

    </div>
  );
}

export default Card;