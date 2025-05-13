const QuickActionCard = ({ title, description, icon, link, color }) => {
    const colorClasses = {
        blue: "bg-blue-50 text-blue-700",
        green: "bg-green-50 text-green-700",
        purple: "bg-purple-50 text-purple-700",
        orange: "bg-orange-50 text-orange-700",
    };

    return (
        <a
            href={link}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
        >
            <div className={`inline-flex p-3 rounded-lg ${colorClasses[color]} mb-4`}>
                {icon}
            </div>
            <h3 className="text-base font-medium">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
        </a>
    )
}

export default QuickActionCard