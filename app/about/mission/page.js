
import Button from "@/app/components/Button"
import Image from "next/image"
import raju_photo from "@/public/images/raju_photo.jpg"

export default function Mission() {
  return (
   <main className='mt-10'>
      <div>Mission page</div>

      
      <div className="w-[400px]">
        <Image placeholder="blur" src = {raju_photo} alt ="Raju Photo" />
      </div>

      <Button />
   </main>
  )
}
