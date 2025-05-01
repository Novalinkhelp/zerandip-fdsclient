import { useState } from 'react'
import GeneralDeliveryInformation from './GeneralDeliveryInformation';
import { Tab, Tabs } from '../../../components/tabs/Tabs';
import ParcelAndInvoicing from './ParcelAndInvoicing';


const DeliveryOutward = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className='flex flex-col mb-4'>
                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5">
                    Delivery Outward - Data Entry
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">
                    Data entry for the delivery outward.
                </p>
            </div>

            <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
                <Tab label="General Delivery Information" disabled={false}>
                    <GeneralDeliveryInformation />
                </Tab>
                <Tab label="Parcel and Invoicing" disabled={false}>
                    <ParcelAndInvoicing />
                </Tab>
            </Tabs>
        </>
    )
}

export default DeliveryOutward;