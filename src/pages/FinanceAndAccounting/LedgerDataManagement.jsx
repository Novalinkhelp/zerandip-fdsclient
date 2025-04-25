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
  CreditCard,
  FileText,
  UserMinus,
  Calendar,
  UserCheck,
} from "lucide-react";
import MenuCard from "../../components/shared/MenuCard";

const LedgerDataManagement = () => {
  const menuCards = [
    {
      id: "debtors-ledger",
      title: "Debtors Ledger",
      description: "Handle data entry processes of Debtors Ledger",
      icon: <UserMinus className="w-10 h-10" />,
      buttons: [
        {
          name: "Customer Account - Journals",
          path: "/finance-accounting/debtors-ledger/customer-journals",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          name: "Old P.D. Return Cheques",
          path: "/finance-accounting/debtors-ledger/old-pd-return-cheques",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          name: "Standard Receipts",
          path: "/finance-accounting/debtors-ledger/standard-receipts",
          icon: <Receipt className="w-4 h-4" />,
        },
        {
          name: "Debit Note",
          path: "/finance-accounting/debtors-ledger/debit-note",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          name: "Cheque Details",
          path: "/finance-accounting/debtors-ledger/cheque-details",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          name: "Write Off Post - Dated Cheques",
          path: "/finance-accounting/debtors-ledger/write-off-post-dated-cheques",
          icon: <FileText className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "general-accounts",
      title: "General Accounts",
      description: "Handle data entry processes of General Accounts",
      icon: <FileText className="w-10 h-10" />,
      buttons: [
        {
          name: "Receipts",
          path: "/finance-accounting/general-accounts/receipts",
          icon: <Receipt className="w-4 h-4" />,
        },
        {
          name: "Payments",
          path: "/finance-accounting/general-accounts/payments",
          icon: <CreditCard className="w-4 h-4" />,
        },
        {
          name: "General Account - Journals",
          path: "/finance-accounting/general-accounts/general-journals",
          icon: <FileText className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "delivery",
      title: "Delivery",
      description: "Handle data entry processes of Delivery",
      icon: <Truck className="w-10 h-10" />,
      buttons: [
        {
          name: "Delivery Outward",
          path: "/finance-accounting/delivery/delivery-outward",
          icon: <Truck className="w-4 h-4" />,
        },
        {
          name: "Dating Non - Dated Cheques",
          path: "/finance-accounting/delivery/dating-non-dated-cheques",
          icon: <FileText className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "schedules",
      title: "Schedules",
      description: "Handle data entry processes of schedules",
      icon: <Calendar className="w-10 h-10" />,
      buttons: [
        {
          name: "Rep Daily Working Schedule",
          path: "/finance-accounting/schedules/rep-daily-working-schedule",
          icon: <Calendar className="w-4 h-4" />,
        },
        {
          name: "Sales Rep Visit",
          path: "/finance-accounting/schedules/sales-rep-visit",
          icon: <UserCheck className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "miscellaneous",
      title: "Miscellaneous",
      description: "Other business processes",
      icon: <Ellipsis className="w-10 h-10" />,
      buttons: [
        {
          name: "Verify Balance Data Entry",
          path: "/finance-accounting/miscellaneous/verify-balance-data-entry",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          name: "Local Purchases",
          path: "/finance-accounting/miscellaneous/local-purchases",
          icon: <Receipt className="w-4 h-4" />,
        },
        {
          name: "Goods Issue / Location Transfer",
          path: "/finance-accounting/miscellaneous/goods-issue-location-transfer",
          icon: <Truck className="w-4 h-4" />,
        },
        {
          name: "Changing Selling Price",
          path: "/finance-accounting/miscellaneous/changing-selling-price",
          icon: <DollarSign className="w-4 h-4" />,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Ledger Data Management
        </h1>
        <p className="text-gray-600 mt-2">
          Manage ledger of your business from one place
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

export default LedgerDataManagement;
