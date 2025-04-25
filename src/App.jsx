import { HashRouter as Router, Routes, Route } from "react-router";
import DashboardLayout from "./components/layout/DashboardLayout";
import MasterDataManagement from "./pages/MasterFiles/MasterDataManagement";
import Dashboard from "./pages/Dashboard";
import CompanyMaster from "./pages/MasterFiles/CompanyMaster";
import TransportAgentMaster from "./pages/MasterFiles/TransportAgentMaster";
import CustomerMaster from "./pages/MasterFiles/CustomerMaster";
import SupplierMaster from "./pages/MasterFiles/SupplierMaster";
// import HSCodeClassificationChange from "./pages/MasterFiles/HSCodeClassificationChange";
import ClassificationMaster from "./pages/MasterFiles/ClassificationMaster";
import HSCodeMaster from "./pages/MasterFiles/HSCodeMaster";
import CategoryMaster from "./pages/MasterFiles/CategoryMaster";
import ItemMaster from "./pages/MasterFiles/ItemMaster";
import UtilityMaster from "./pages/MasterFiles/UtilityMaster";
import AreaMaster from "./pages/MasterFiles/AreaMaster";
import RouteMaster from "./pages/MasterFiles/RouteMaster";
import LocationMaster from "./pages/MasterFiles/LocationMaster";
import BankMaster from "./pages/MasterFiles/BankMaster";
import ItemWholeSalesMaster from "./pages/MasterFiles/ItemWholeSalesMaster";
import BankBranchMaster from "./pages/MasterFiles/BankBranchMaster";
import ReasonRemarkMaster from "./pages/MasterFiles/ReasonRemarksMaster";
import ShopSalesRepMaster from "./pages/MasterFiles/ShopSalesRepMaster";
import SalesRepMaster from "./pages/MasterFiles/SalesRepMaster";
// import InvoiceMaster from "./pages/MasterFiles/InvoiceMaster";
import ExpenseCategoryMaster from "./pages/MasterFiles/ExpenseCategoryMaster";
import CustomerDiscountSlabs from "./pages/MasterFiles/CustomerDiscountSlabs";
import InventoryAndStockInquiry from "./pages/InventoryAndStock/InventoryAndStockInquiry";
import SalesTransactions from "./pages/SalesTransactions/SalesTransactions";
import LedgerDataManagement from "./pages/FinanceAndAccounting/LedgerDataManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          {/* Master Files */}
          <Route path="master-data" element={<MasterDataManagement />} />
          {/* Admin */}
          <Route
            path="/master-data/company-master"
            element={<CompanyMaster />}
          />
          {/* <Route
            path="/master-data/hs-code-classification-change"
            element={<HSCodeClassificationChange />}
          /> */}
          <Route path="/master-data/bank-master" element={<BankMaster />} />
          <Route
            path="/master-data/bank-branch-master"
            element={<BankBranchMaster />}
          />
          <Route
            path="/master-data/location-master"
            element={<LocationMaster />}
          />
          <Route path="/master-data/area-master" element={<AreaMaster />} />
          <Route path="/master-data/route-master" element={<RouteMaster />} />
          <Route
            path="/master-data/utility-master"
            element={<UtilityMaster />}
          />
          {/* <Route
          {/* Product & Inventory */}
          <Route path="/master-data/item-master" element={<ItemMaster />} />
          <Route
            path="/master-data/hs-code-master"
            element={<HSCodeMaster />}
          />

          <Route
            path="/master-data/category-master"
            element={<CategoryMaster />}
          />

          <Route
            path="/master-data/classification-master"
            element={<ClassificationMaster />}
          />
          {/* <Route
            path="/master-data/hs-code-classification-change"
            element={<HSCodeClassificationChange />}
          /> */}
          {/* Business Partners */}
          <Route
            path="/master-data/customer-master"
            element={<CustomerMaster />}
          />
          <Route
            path="/master-data/supplier-master"
            element={<SupplierMaster />}
          />
          <Route
            path="/master-data/transport-agent-master"
            element={<TransportAgentMaster />}
          />
          {/* Pricing & Expenses */}
          <Route
            path="/master-data/item-whole-sales-master"
            element={<ItemWholeSalesMaster />}
          />
          <Route
            path="/master-data/customer-discount-slabs"
            element={<CustomerDiscountSlabs />}
          />
          <Route
            path="/master-data/customer-discount-slabs"
            element={<CustomerDiscountSlabs />}
          />
          <Route
            path="/master-data/expense-category-master"
            element={<ExpenseCategoryMaster />}
          />

          {/* Sales & Sales Rep */}
          {/* <Route
            path="/master-data/invoice-master"
            element={<InvoiceMaster />}
          /> */}
          <Route
            path="/master-data/sales-rep-master"
            element={<SalesRepMaster />}
          />

          <Route
            path="/master-data/shop-sales-rep-master"
            element={<ShopSalesRepMaster />}
          />
          {/* Other */}
          <Route
            path="/master-data/reason-remarks-master"
            element={<ReasonRemarkMaster />}
          />

          {/* Inventory and Stock Inquiry */}
          <Route
            path="/inventory-stock"
            element={<InventoryAndStockInquiry />}
          />

          {/* Sales and Transactions */}
          <Route path="/sales-transactions" element={<SalesTransactions />} />

          {/* Finance and Accounting */}
          <Route
            path="/finance-accounting"
            element={<LedgerDataManagement />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
