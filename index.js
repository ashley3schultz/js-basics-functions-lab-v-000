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
  const feet = distanceTravelledInFeet(start, finish)
  if feet < 400 {
    let fare = 0
  } else if feet > 2500 {
    let fare = 'cannot travel that far'
  }
  
}