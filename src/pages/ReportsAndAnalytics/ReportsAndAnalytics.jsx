import { useState } from 'react'
import { Tab, Tabs } from '../../components/tabs/Tabs';
import SalesReport from './Reports/SalesReport';
import StockReports from './Reports/StockReports';
import CustomerReport from './Reports/CustomerReport';
import OrderReports from './Reports/OrderReports';
import ReturnsReports from './Reports/ReturnsReports';
import DebtorsReports from './Reports/DebtorsReports';
import SalesmanReports from './Reports/SalesmanReports';
import GeneralAccountsReports from './Reports/GeneralAccountsReports';
import OtherReports from './Reports/OtherReports';


const ReportsAndAnalytics = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className='flex flex-col mb-4'>
                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                    Reports and Analytics
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">
                    Generate and view reports and analytics for your business.
                </p>
            </div>

            <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
                <Tab label="Sales Reports" disabled={false}>
                    <SalesReport />
                </Tab>
                <Tab label="Stock Reports" disabled={false}>
                    <StockReports />
                </Tab>
                <Tab label="Customer Report" disabled={false}>
                    <CustomerReport />
                </Tab>
                <Tab label="Order Reports" disabled={false}>
                    <OrderReports />
                </Tab>
                <Tab label="Returns Reports" disabled={false}>
                    <ReturnsReports />
                </Tab>
                <Tab label="Debtors Report" disabled={false}>
                    <DebtorsReports />
                </Tab>
                <Tab label="Salesman Report" disabled={false}>
                    <SalesmanReports />
                </Tab>
                <Tab label="General Accounts" disabled={false}>
                    <GeneralAccountsReports />
                </Tab>
                <Tab label="Other" disabled={false}>
                    <OtherReports />
                </Tab>
            </Tabs>
        </>
    )
}

export default ReportsAndAnalytics;