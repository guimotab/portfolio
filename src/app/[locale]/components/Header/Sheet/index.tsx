import { useTranslations } from "next-intl";

interface SheetProps {
  children: JSX.Element
  closeSheet: () => any
}
const SheetRedirect = ({ children, closeSheet }: SheetProps) => {
  const t = useTranslations('teste');
  console.log("🚀 ~ Home ~ t:", t("title"))
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/10 dark:bg-black/40">
        <div className="fixed inset-0 z-60 bg-black/10 dark:bg-black/40" onClick={closeSheet} />
        <div className="relative inset-y-0 left-0 h-full w-3/5 bg-background">
          <div className="flex flex-col items-center w-full">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
export default SheetRedirect