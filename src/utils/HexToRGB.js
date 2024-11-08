export default function hexToRgbA(hexColor, alpha) {
  let hex = hexColor.replace(/^#/, '')
  let r, g, b
  if (hex.length === 3) {
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16)
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16)
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16)
  } else if (hex.length === 6) {
    // Full format (6 digits)
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 2), 16)
    b = parseInt(hex.slice(4, 2), 16)
  } else {
    throw new Error('Invalid HEX color format')
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
