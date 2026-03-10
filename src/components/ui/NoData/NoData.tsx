import React from 'react'

type NoDataProps = {
    title?: string
    message?: string
    icon?: React.ReactNode
    action?: {
        label: string
        onClick: () => void
    }
}

export const NoData: React.FC<NoDataProps> = ({
    title = 'No data available',
    message = 'There is no data to display at this time.',
    icon,
    action,
}) => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
            {icon && <div className="mb-4 text-slate-400">{icon}</div>}
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {title}
            </h3>
            <p className="mb-6 max-w-md text-slate-600">{message}</p>
            {action && (
                <button
                    type="button"
                    onClick={action.onClick}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                >
                    {action.label}
                </button>
            )}
        </div>
    )
}