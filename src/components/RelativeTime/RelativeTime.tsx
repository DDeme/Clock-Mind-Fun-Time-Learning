import { timeToHumanText } from '../../utils/timeToHumanText'

export const TimeToHumanText = ({ date = new Date() }) => {
    return <div>{timeToHumanText(date.getHours(), date.getMinutes())}</div>
}
