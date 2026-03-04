import { timeToHumanText } from '../../utils/timeToHumanText'

export const TimeToHumanText = ({
    dateISOString = new Date().toISOString(),
}: {
    dateISOString: string
}) => {
    const date = new Date(dateISOString)
    return <div>{timeToHumanText(date.getHours(), date.getMinutes())}</div>
}
