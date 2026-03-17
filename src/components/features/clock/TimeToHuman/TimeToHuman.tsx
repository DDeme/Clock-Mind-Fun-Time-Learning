import { useTranslation } from 'react-i18next'
import { timeToHumanText } from '../../../../utils/timeToHumanText'

export const TimeToHumanText = ({
    hours,
    minutes,
}: {
    hours: number
    minutes: number
}) => {
    const { i18n } = useTranslation()
    return <div>{timeToHumanText(hours, minutes, i18n.language)}</div>
}
