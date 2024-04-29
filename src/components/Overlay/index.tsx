interface OverlayProps {
  children: JSX.Element
  closeOverlay: () => any
}
const Overlay = ({ children, closeOverlay }: OverlayProps) => {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/10 dark:bg-black/40">
      <div className="fixed inset-0 z-60 bg-black/10 dark:bg-black/40" onClick={closeOverlay} />
        <div className="relative left-[50%] top-[50%] max-w-[60rem] w-full">
          <div className="absolute translate-x-[-50%] translate-y-[-50%] w-fit">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
export default Overlay