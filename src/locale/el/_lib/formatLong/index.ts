import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index'

const dateFormats = {
  full: 'EEEE, d MMMM y',
  long: 'd MMMM y',
  medium: 'd MMM y',
  short: 'd/M/yy'
}

const timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
}

const dateTimeFormats = {
  full: '{{date}} - {{time}}',
  long: '{{date}} - {{time}}',
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
}

const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
}

export default formatLong