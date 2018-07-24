// Code your solution in this file!
function distanceFromHqInBlocks(st) {
  return st < 42 ? 42 - st : st - 42
}

function distanceFromHqInFeet(st) {
  return distanceFromHqInBlocks(st) * 264
}

function distanceTravelledInFeet(start, finish) {
  return start < finish ? (finish - start) * 264 : (start - finish) * 264
}

function calculatesFarePrice(start, finish) {
  const feet = distanceTravelledInFeet(start, finish) - 400
  if (feet < 0) {
    fare = 0
  } else if (feet > 2100) {
    fare = 'cannot travel that far'
  } else if (feet > 1600) {
    fare = 25
  } else if (fare > 400) {
    fare = (0.02 * feet)
  }
  return fare
}
