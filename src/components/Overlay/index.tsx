interface OverlayProps {
  children: JSX.Element
  closeOverlay: () => any
}
const Overlay = ({ children, closeOverlay }: OverlayProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/10" onClick={closeOverlay}>
      <div className="relative left-[50%] top-[50%] z-50 ">
        <div className="absolute translate-x-[-50%] translate-y-[-50%]">
          {children}
        </div>
      </div>
    </div>
  )
}
export default Overlay