import scrollWindow from "@/utils/scrollWindow"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BsFillArrowUpCircleFill } from "react-icons/bs"

const RollTopPage = () => {

  const [rollTopPage, setRollTopPage] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', rollPage)

    return () => {
      document.removeEventListener("scroll", rollPage)
    }
  }, [])

  function rollPage() {
    if (window.scrollY > 400) {
      setRollTopPage(true)
    } else {
      setRollTopPage(false)
    }
  }

  return rollTopPage && (
    <Link href={"/#header"} scroll={false}
      className="fixed bottom-10 right-10 text-primary z-20 hover:cursor-pointer dark:text-gray-200" >
      <BsFillArrowUpCircleFill
        onClick={event => scrollWindow("header")}
        size={45}
      />
    </Link>
  )
}

export default RollTopPage