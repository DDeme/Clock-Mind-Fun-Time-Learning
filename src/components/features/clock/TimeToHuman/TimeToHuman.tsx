import { timeToHumanText } from '../../../../utils/timeToHumanText'

export const TimeToHumanText = ({
    hours,
    minutes,
}: {
    hours: number
    minutes: number
}) => {
    return <div>{timeToHumanText(hours, minutes)}</div>
}
