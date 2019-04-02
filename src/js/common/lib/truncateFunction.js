import { getCopy } from '~lib/copyDefaults'

const { deviceSizes, numberOfLines } = getCopy('truncate')

export function truncate (content, variant, align) {
  const windowWidthInPx = window.innerWidth
  let charactersToDisplay
  let lineCount
  let characterCount

  deviceSizes.forEach(device => {
    const currentWindowSize = windowWidthInPx <= device.windowWidthMax
    let type = variant === 'fullWidthFlex' ? 'halfWidth' : variant

    if (currentWindowSize && lineCount === undefined) {
      if (
        (device.tablet &&
          (variant === 'textRight' || variant === 'textLeft')) ||
        device.mobile
      ) {
        lineCount = numberOfLines.default
        type = 'default'
      }
      if (variant !== 'default' && variant !== 'fullWidthFlex') {
        if (device.desktop) {
          if (variant === 'textRight' || variant === 'textLeft') {
            type = 'imageOnSide'
          }
          if (type === 'halfWidth') {
            lineCount = numberOfLines.halfWidthDesktop
          } else {
            lineCount = numberOfLines.imageOnSide
          }
        } else if (device.tablet) {
          if (type === 'halfWidth') {
            lineCount = numberOfLines.halfWidthTablet
          }
        }
      } else {
        lineCount = numberOfLines.default
      }
    }
    characterCount = device.characterCount[type]
      ? device.characterCount[type]
      : device.characterCount.default

    if (windowWidthInPx <= device.windowWidthMax &&
      (charactersToDisplay === undefined) && lineCount !== undefined) {
      charactersToDisplay = characterCount * lineCount
    }
  })

  let stringDisplayed = content.slice(0, charactersToDisplay)

  if (content.length < charactersToDisplay) {
    return stringDisplayed
  }

  const lastSpace = stringDisplayed.lastIndexOf(' ')
  stringDisplayed = stringDisplayed.slice(0, lastSpace)
  let lastCharIsAlphaNumeric = stringDisplayed.match(/[^a-zA-Z0-9]$/g)

  while (lastCharIsAlphaNumeric !== null && stringDisplayed.length > 0) {
    stringDisplayed = stringDisplayed.slice(0, stringDisplayed.length - 1)
    lastCharIsAlphaNumeric = stringDisplayed.match(/[^a-zA-Z0-9]$/g)
  }

  return stringDisplayed + '...'
}
