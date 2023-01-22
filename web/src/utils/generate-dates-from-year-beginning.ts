import dayjs from "dayjs";

export default function generateDatesFromYearBeginning() {
  const firstDayOfTheYear = dayjs().startOf('year')
  const today = new Date()

  const dates = []
  let compareDate = firstDayOfTheYear

  while(compareDate.isBefore(today)) {
    dates.push(compareDate.toDate())
    compareDate.add(1, 'day')
  }

  return dates
}