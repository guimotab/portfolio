import { useRecoilValue } from "recoil"
import { openImage } from "../atom"

const useOpenImage = () => {
    return useRecoilValue(openImage)
}
export default useOpenImage