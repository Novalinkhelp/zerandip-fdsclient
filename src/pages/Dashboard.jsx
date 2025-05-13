import { useEffect, useState } from "react"
import { fetchLowStockItems } from "../utils/mockApi"
import Table from "../components/table/Table"
import { AlertTriangle, Car, ClipboardCheck, ClipboardList, Package, ShoppingCart } from "lucide-react"
import QuickActionCard from "../components/dashboard/QuickActionCard"

const Dashboard = () => {
  const [lowStockItems, setLowStockItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetchLowStockItems();
        if (response) {
          setLowStockItems(response);
        }
      } catch (error) {
        console.error("Error fetching low stock items:", error);
      }
    }

    fetchItems();
  }, [])


  const columns = [
    {
      key: "itemCode",
      header: "Item Code",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.itemCode}</span>
      ),
    },
    {
      key: "itemDescription",
      header: "Item Description",
      render: (item) => <span className="text-gray-800">{item.itemDescription}</span>,
    },
    {
      key: "minimumStockQuantity",
      header: "Minimum Stock Quantity",
      render: (item) => <span className="text-gray-600">{item.minimumStockQuantity}</span>,
    },
    {
      key: "rsQuantityInHand",
      header: "R/S Quantity In Hand",
      render: (item) => <span className="text-gray-600">{item.rsQuantityInHand}</span>,
    },
    {
      key: "wsQuantityInHand",
      header: "W/S Quantity In Hand",
      render: (item) => <span className="text-gray-600">{item.wsQuantityInHand}</span>,
    },
  ];

  const quickLinks = [
    {
      title: "New Sale",
      description: "Create a new sales transaction.",
      icon: <ShoppingCart className="w-6 h-6 text-blue-500" />,
      link: "/sales-transactions/",
      color: "blue",
    },
    {
      title: "Inventory",
      description: "Check and manage inventory.",
      icon: <Package className="w-6 h-6 text-green-500" />,
      link: "/master-data/item-master",
      color: "green",
    },
    {
      title: "Inquiries",
      description: "Item inquiries and stock checks.",
      icon: <ClipboardCheck className="w-6 h-6 text-purple-500" />,
      link: "/inventory-stock",
      color: "purple",
    },
    {
      title: "Reports",
      description: "View business reports.",
      icon: <ClipboardList className="w-6 h-6 text-orange-500" />,
      link: "/reports-analytics",
      color: "orange",
    }
  ]

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-6">
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Welcome to Zerendib Automotive.</h1>
          </div>
          <p className="text-blue-100 mt-2">Use the quick links to get started. Keep an eye on low stock items.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {quickLinks.map((link, index) => (
          <QuickActionCard
            key={index}
            title={link.title}
            description={link.description}
            icon={link.icon}
            link={link.link}
            color={link.color}
          />
        ))}
      </div>

      {lowStockItems.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-semibold">Low Stock Items</h2>
            </div>
            <div>
              <a href="/master-data/item-master" className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 underline flex items-center">
                View Inventory
              </a>
            </div>
          </div>

          <Table
            data={lowStockItems}
            columns={columns}
            currentPage={1}
            totalPages={10}
            onPageChange={(page) => console.log(`Page changed to ${page}`)}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-800">No Low Stock Items Found</h1>
        </div>
      )
      }
    </div>
  )
}

export default Dashboard