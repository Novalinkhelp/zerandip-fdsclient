import { useState } from "react"
import { Tabs, Tab } from "../../components/tabs/Tabs"
import CashSales from "./CashSales";
import CreditSales from "./CreditSales";
import Quotation from "./Quotation";
import GoodsReturn from "./GoodsReturn";

const SalesTransactions = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
                <Tab label="Cash Sales" disabled={false}>
                    <CashSales />
                </Tab>
                <Tab label="Credit Sales" disabled={false}>
                    <CreditSales />
                </Tab>
                <Tab label="Quotation" disabled={false}>
                    <Quotation />
                </Tab>
                <Tab label="Goods Return" disabled={false}>
                    <GoodsReturn />
                </Tab>
            </Tabs>
        </div>
    )
}

export default SalesTransactions