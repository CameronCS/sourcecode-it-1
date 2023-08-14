import React from 'react'

export default function PageTitle({ focus_ctx, blur_ctx }) {

  document.onblur(() => {
    document.title = blur_ctx;
  })

  document.onfocus(() => {
    document.title = focus_ctx;
  })

  return (
    <></>
  )
}
