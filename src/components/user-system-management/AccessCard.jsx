import { useEffect, useMemo, useState } from "react"
import ToggleSwitch from "../shared/ToggleSwitch"

const AccessCard = ({ card, onPermissionUpdate }) => {
    const [permissions, setPermissions] = useState(card.permissions);
    const [hasAllAccess, setHasAllAccess] = useState(false);

    useEffect(() => {
        const isAllAccessEnabled = Object.values(permissions).every(value => value === true);
        setHasAllAccess(isAllAccessEnabled);
    }, [permissions]);

    const permissionToggleSwitches = useMemo(() => {
        const handleToggleChange = (key, value) => {
            const updatedPermissions = { ...permissions, [key]: value };
            setPermissions(updatedPermissions);
            onPermissionUpdate(card.id, updatedPermissions); // Call the parent function to update permissions
        }
        return Object.entries(permissions).map(([key, value]) => (
            <div key={`${key}-${value}`} className="flex capitalize justify-between items-center mb-4">
                <label>{key}</label>
                <ToggleSwitch value={value} onToggle={(newValue) => handleToggleChange(key, newValue)} />
            </div>
        ))
    }, [permissions, onPermissionUpdate, card.id]);


    const handleAllAccessChange = (value) => {
        const updatedPermissions = {}
        Object.keys(permissions).forEach((key) => {
            updatedPermissions[key] = value;
        });
        setPermissions(updatedPermissions);
        onPermissionUpdate(card.id, updatedPermissions); // Call the parent function to update permissions
    }

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
            <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 tracking-tight truncate">
                        {card.title}
                    </h3>
                    <div className="flex items-center space-x-4">
                        <label className="font-semibold text-base md:text-lg text-gray-500">All Access</label>
                        <ToggleSwitch value={hasAllAccess} onToggle={handleAllAccessChange} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-4 p-3 sm:p-4 md:p-6 lg:p-8 ">
                <div>
                    {permissionToggleSwitches}
                </div>
            </div>
        </div >
    )
}

export default AccessCard