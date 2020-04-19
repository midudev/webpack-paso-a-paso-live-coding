import * as React from "react"

interface Props {
  handleClose: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

export const Modal = ({ handleClose }: Props) => {
  return (
  <div id="myModal" className="modal">
    <div className="modal-content">
      <span onClick={handleClose} className="close">&times;</span>
      <p>Hey! I'm a modal dynamically imported! ヽ(´▽`)/..</p>
      <p>Check the network to see my chunk.</p>
    </div>
  </div>
  )
}
