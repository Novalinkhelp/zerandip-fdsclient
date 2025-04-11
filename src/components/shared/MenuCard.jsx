import { useNavigate } from "react-router";

const MenuCard = ({ card }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="flex items-center">
          <div className="rounded-full p-2 sm:p-3 md:p-4 bg-white/80 backdrop-blur text-blue-700 mr-3 sm:mr-4 md:mr-5 shadow-md transform transition-transform duration-300 hover:rotate-12">
            <span className="text-sm sm:text-base md:text-lg">{card.icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 tracking-tight truncate">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 leading-relaxed line-clamp-2">
              {card.description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 flex-grow bg-gray-50">
        {card.buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => navigate(button.path)}
            className="w-full text-left px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 rounded-lg bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-700 flex items-center justify-between transition-all duration-200 shadow-sm hover:shadow group cursor-pointer"
          >
            <div className="flex items-center flex-1 min-w-0">
              {button.icon && (
                <span className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0">
                  {button.icon}
                </span>
              )}
              <span className="font-medium text-xs sm:text-sm md:text-base truncate">
                {button.name}
              </span>
            </div>
            <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-0 group-hover:translate-x-1 duration-300 ml-2 flex-shrink-0">
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
