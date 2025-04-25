import { useState } from "react"
import { Tabs, Tab } from "../../components/tabs/Tabs"
import ItemStockCardInquiry from "./ItemStockCardInquiry";
import ItemLocationWiseInquiry from "./ItemLocationWiseInquiry";

const InventoryAndStockInquiry = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
                <Tab label="Item Stock Card Inquiry" disabled={false}>
                    <ItemStockCardInquiry />
                </Tab>
                <Tab label="Item Location Wise Inquiry" disabled={false}>
                    <ItemLocationWiseInquiry />
                </Tab>
            </Tabs>
        </div >
    )
}

export default InventoryAndStockInquiry