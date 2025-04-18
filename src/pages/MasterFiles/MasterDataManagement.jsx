import {
  ClipboardList,
  Users2,
  CircleUser,
  Ellipsis,
  Building2,
  CircleDollarSign,
  Building,
  MapPin,
  Map,
  Route,
  Wrench,
  Package,
  Barcode,
  ListFilter,
  Tags,
  Truck,
  Receipt,
  UserRound,
  BadgePercent,
  DollarSign,
  PiggyBank,
  FileCog,
  MessageSquareText,
  ShoppingCart,
} from "lucide-react";
import MenuCard from "../../components/shared/MenuCard";

const MasterDataManagement = () => {
  const menuCards = [
    {
      id: "admin",
      title: "Admin",
      description: "Corporate / Administrative related Master Files",
      icon: <Building2 className="w-10 h-10" />,
      buttons: [
        {
          name: "Company Master",
          path: "/master-data/company-master",
          icon: <Building className="w-4 h-4" />,
        },
        {
          name: "Bank Master",
          path: "/master-data/bank-master",
          icon: <Building className="w-4 h-4" />,
        },
        {
          name: "Bank Branch Master",
          path: "/master-data/bank-branch-master",
          icon: <Building className="w-4 h-4" />,
        },
        {
          name: "Location Master",
          path: "/master-data/location-master",
          icon: <MapPin className="w-4 h-4" />,
        },
        {
          name: "Area Master",
          path: "/master-data/area-master",
          icon: <Map className="w-4 h-4" />,
        },
        {
          name: "Route Master",
          path: "/master-data/route-master",
          icon: <Route className="w-4 h-4" />,
        },
        {
          name: "Utility Master",
          path: "/master-data/utility-master",
          icon: <Wrench className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "inventory",
      title: "Product & Inventory",
      description: "Product & Inventory related Master Files",
      icon: <ClipboardList className="w-10 h-10" />,
      buttons: [
        {
          name: "Item Master",
          path: "/master-data/item-master",
          icon: <Package className="w-4 h-4" />,
        },
        {
          name: "Hs Code Master",
          path: "/master-data/hs-code-master",
          icon: <Barcode className="w-4 h-4" />,
        },
        {
          name: "Category Master",
          path: "/master-data/category-master",
          icon: <ListFilter className="w-4 h-4" />,
        },
        {
          name: "Classification Master",
          path: "/master-data/classification-master",
          icon: <Tags className="w-4 h-4" />,
        },
        {
          name: "HS Code Classification Change",
          path: "/master-data/hs-code-classification-change",
          icon: <FileCog className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "business-partners",
      title: "Business Partners",
      description: "Manage business partner information",
      icon: <Users2 className="w-10 h-10" />,
      buttons: [
        {
          name: "Customer Master",
          path: "/master-data/customer-master",
          icon: <Users2 className="w-4 h-4" />,
        },
        {
          name: "Supplier Master",
          path: "/master-data/supplier-master",
          icon: <Building className="w-4 h-4" />,
        },
        {
          name: "Transport Agent Master",
          path: "/master-data/transport-agent-master",
          icon: <Truck className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing & Expenses",
      description: "Pricing, Discounts and Expenses related Master Files",
      icon: <CircleDollarSign className="w-10 h-10" />,
      buttons: [
        {
          name: "Item Whole Sales Master",
          path: "/master-data/item-whole-sales-master",
          icon: <DollarSign className="w-4 h-4" />,
        },
        {
          name: "Customer Discount Slabs",
          path: "/master-data/customer-discount-slabs",
          icon: <BadgePercent className="w-4 h-4" />,
        },
        {
          name: "Expense Category Master",
          path: "/master-data/expense-category-master",
          icon: <PiggyBank className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "sales-rep",
      title: "Sales & Sales Rep",
      description: "Sales and Sales Representative related Master Files",
      icon: <CircleUser className="w-10 h-10" />,
      buttons: [
        {
          name: "Invoice Master",
          path: "/master-data/invoice-master",
          icon: <Receipt className="w-4 h-4" />,
        },
        {
          name: "Sales Rep Master",
          path: "/master-data/sales-rep-master",
          icon: <UserRound className="w-4 h-4" />,
        },
        {
          name: "Shop Sales Rep Master",
          path: "/master-data/shop-sales-rep-master",
          icon: <ShoppingCart className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "other",
      title: "Other",
      description: "Other Business Process related Master Files",
      icon: <Ellipsis className="w-10 h-10" />,
      buttons: [
        {
          name: "Reason/Remarks Master",
          path: "/master-data/reason-remarks-master",
          icon: <MessageSquareText className="w-4 h-4" />,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Master Data Management
        </h1>
        <p className="text-gray-600 mt-2">
          Manage all the master data for your business from one place
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {menuCards.map((card) => (
          <MenuCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default MasterDataManagement;
