export const calcLeftGroup = (pos, curItem, length) => {
  let left = 0
  if (pos < curItem) {
    left = `${(length - 2 * curItem + 2 * pos) * 100}%`
  } else if (pos === curItem) {
    left = '0%'
  } else {
    left = `${(pos * 2 - 2 * curItem - length) * 100}%`
  }
  return left
}

export const calcLeftCarousel = (pos, curItem, length) => {
  let left = 0
  if (curItem === -1) {
    left = `${pos * 100}%`
  } else {
    if (pos >= curItem - 1) {
      left = `${(pos - curItem) * 100}%`
    } else {
      left = `${(pos + length - curItem - 1) * 100}%`
    }
  }
  return left
}
