import React, { type ComponentProps } from 'react'
import { ResultNotification } from '../ResultNotification/ResultNotification'

type FeedbackSectionProps = ComponentProps<typeof ResultNotification> & {
    isFeedbackVisible: boolean
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({
    isFeedbackVisible,
    ...props
}) => {
    if (!isFeedbackVisible) {
        return null
    }

    return (
        <div className={`flex flex-col gap-4 animate-slide-up`}>
            <ResultNotification {...props} />
        </div>
    )
}
