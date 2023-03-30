import wallpaper from '../../public/images/wallpaper.png'
import wallpaper2 from '../../public/images/wallpaper2.png'
import wallpaper3 from '../../public/images/wallpaper3.png'
import wallpaper4 from '../../public/images/wallpaper4.png'
import wallpaper5 from '../../public/images/wallpaper5.png'
import Image from 'next/image'


export default function Homepage(){
    return(
       <>
        <div className="w-full" >
            <div className="w-full bg-red">
                <Image
                src={wallpaper4}
                alt="wallpaper"
                className='object-cover w-full h-[100vh]'
                ></Image>
            </div>
        </div>
       </>
    )

}