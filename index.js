export default function unreachable (value) {
  throw new TypeError('Encountered impossible value: ' + JSON.stringify(value))
}
