import * as React from "react"

interface Props {
  name: string
}

// I intentionally left the Modal as named import, in order
// to show you a possible workaround if you don't want to move
// to export default
const Modal = React.lazy(() => import("./Modal.tsx").then(module =>
  ({ default: module.Modal })
))

export const Hi = ({name}: Props) => {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <div>
      <h1>Hi {name}, this is an example of dynamic import with Typescript</h1>
      <button onClick={() => setShowModal(true)}>
        Press the button to import Modal async
      </button>
      {showModal && (
        <React.Suspense fallback={null}>
          <Modal handleClose={() => setShowModal(false)} />
        </React.Suspense>
      )}
    </div>
  )
}
