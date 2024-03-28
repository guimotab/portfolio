import { useSetRecoilState } from "recoil"
import { openImage } from "../atom" 

export const useUpdateOpenImage = () =>{
    const setPreferences = useSetRecoilState<string[]>(openImage)
    return (event: string[]) => {
      return setPreferences(event)
    }
 }