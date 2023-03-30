import ill1 from '../../public/images/ill1.png'
import ill2 from '../../public/images/ill2.png'
import ill3 from '../../public/images/ill3.png'
import ill4 from '../../public/images/ill4.png'
import ill5 from '../../public/images/ill5.png'
import ill6 from '../../public/images/ill6.png'
import ill7 from '../../public/images/ill7.png'
import Image from 'next/image'
import style from '../../styles/Home.module.css'

const characters = [{
    'img': 'ill1',
    'description': 'Cyberpunk boy of National Tide'
},{
    'img': 'ill2',
    'description': 'Little girl with straw hat'
},
]

let Illustration = () =>{
    for(let i = 0; i < characters.length; i++){
        return characters[i];
    }
}

export default function Demonstration(){
   
    return (
        <>
            <Accordeon />
        </>
    )
}

const Accordeon = () => {
    return (
        <section className='w-full'>
                <article className='flex flex-col'>
                    <div className='h-36 flex justify-center items-center'>
                        <h1 className='font-extrabold text-5xl text-cyan-700'>Some characters from Midjourney</h1>
                    </div>
                    <div className='flex w-full justify-center'>
                        <div className='w-[100px] h-[600px] hover:w-[400px] transition-all relative group'>
                            <Image src={ill1} alt="ill1" className='rounded-lg transition-all hover:w-[450px] h-full object-cover'>
                                
                            </Image>
                            <p className='absolute bottom-0 text-white w-full justify-center items-center flex opacity-0 h-14  transition ease-in-out group-hover:opacity-100 rounded-b-lg bg-[rgba( 255, 255, 255, 0.25 )] shadow-card backdrop-blur'
                            
                            >
                                Cyberpunk boy of National Tide
                            </p>
                        </div>
                        <div className='w-[100px] h-[600px] hover:w-[400px] transition-all relative group'>
                            <Image src={ill2} alt="ill2" className='rounded-lg transition-all hover:w-[450px] h-full object-cover'>

                            </Image>
                            <p className='absolute bottom-0 text-white w-full justify-center items-center flex opacity-0 h-14  transition ease-in-out group-hover:opacity-100 rounded-b-lg bg-[rgba( 255, 255, 255, 0.25 )] shadow-card backdrop-blur'>
                                Little Girl with Straw Hat
                            </p>
                            
                        </div>
                        <div className='w-[100px] h-[600px] hover:w-[400px] transition-all relative group'>
                            <Image src={ill3} alt="ill3" className='rounded-lg transition-all hover:w-[450px] h-full object-cover'>

                            </Image>
                            <p className='absolute bottom-0 text-white w-full justify-center items-center flex opacity-0 h-14 transition ease-in-out group-hover:opacity-100 rounded-b-lg bg-[rgba( 255, 255, 255, 0.25 )] shadow-card backdrop-blur'>
                                Girl Looking at Something
                            </p>
                            
                        </div>
                        <div className='w-[100px] h-[600px] hover:w-[400px] transition-all relative group'>
                            <Image src={ill4} alt="ill4" className='rounded-lg transition-all hover:w-[450px] h-full object-cover'>

                            </Image>
                            <p className='absolute bottom-0 text-white w-full justify-center items-center flex opacity-0 h-14 transition group-hover:opacity-100 rounded-b-lg bg-[rgba( 255, 255, 255, 0.25 )] shadow-card backdrop-blur'>
                                Rich Dog Posing for a Painting
                            </p>
                            
                        </div>

                        <div className='w-[100px] h-[600px] hover:w-[400px] transition-all relative group'>
                            <Image src={ill5} alt="ill5" className='rounded-lg transition-all hover:w-[450px] h-full object-cover'>

                            </Image>
                            <p className='absolute bottom-0 text-white w-full justify-center items-center flex opacity-0 h-14 transition group-hover:opacity-100 rounded-b-lg bg-[rgba( 255, 255, 255, 0.25 )] shadow-card backdrop-blur'>
                                Futuristic Space Girl
                            </p>
                            
                        </div>

                        <div className='w-[100px] h-[600px] hover:w-[400px] transition-all relative group'>
                            <Image src={ill6} alt="ill6" className='rounded-lg transition-all hover:w-[450px] h-full object-cover'>

                            </Image>
                            <p className='absolute bottom-0 text-white w-full justify-center items-center flex opacity-0 h-14 transition group-hover:opacity-100 rounded-b-lg bg-[rgba( 255, 255, 255, 0.25 )] shadow-card backdrop-blur'>
                                Princess in an Imaginary World
                            </p>
                            
                        </div>
                        <div className='w-[100px] h-[600px] hover:w-[400px] transition-all relative group'>
                            <Image src={ill7} alt="ill7" className='rounded-lg transition-all hover:w-[450px] h-full object-cover'>

                            </Image>
                            <p className='absolute bottom-0 text-white w-full justify-center items-center flex opacity-0 h-14 transition group-hover:opacity-100 rounded-b-lg bg-[rgba( 255, 255, 255, 0.25 )] shadow-card backdrop-blur'>
                                Dark Jedi Assassin
                            </p>
                            
                        </div>
                    </div>
                </article>
            </section>        
    )
}