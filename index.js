// Code your solution in this file!
function distanceFromHqInBlocks(st) {
  return st < 42 ? 42 - st : st - 42
}

function distanceFromHqInFeet(st) {
  return distanceFromHqInBlocks(st) * 264
}

function distanceTravelledInFeet(start, finnish) {
  return start < finnish ? finnish - start : start - finnish
}
