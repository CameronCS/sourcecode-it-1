import React from 'react'
import "./NavNeonButton.css"

export default function NavNeonButton({ ctx, color, onPress }) {
  let __classname;
  if (color === 0) {
    __classname = "nav-common"
  } else if (color === 1) {
    __classname = "nav-common pink-nav"
  } else if (color === 2) {
    __classname = "nav-common green-nav"
  }
  return (
    <span
      className={__classname}
      onClick={onPress}
    >
      {ctx}
      <span class="spin-effect-1 nav-out"></span>
      <span class="spin-effect-2 nav-out"></span>
      <span class="spin-effect-3 nav-out"></span>
      <span class="spin-effect-4 nav-out"></span>
    </span>
  )
}
