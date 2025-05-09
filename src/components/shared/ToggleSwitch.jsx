import { useState } from "react"

const ToggleSwitch = ({ value, onToggle }) => {
    const [enabled, setEnabled] = useState(value || false)

    const handleToggle = () => {
        const isToggled = !enabled
        setEnabled(isToggled)
        if (onToggle) {
            onToggle(isToggled)
        }
    }

    return (
        <div className="flex items-center">
            <button
                type="button"
                role="switch"
                aria-checked={enabled}
                onClick={handleToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full
                    transition-colors focus:outline-none
                    ${enabled ? "bg-blue-600" : "bg-blue-300"}`}
            >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-gray-50
                    ${enabled ? "translate-x-6" : "translate-x-1"}`} />
            </button>
        </div>
    )
}

export default ToggleSwitch