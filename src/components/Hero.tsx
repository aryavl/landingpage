
import MainHero from './Hero/MainHero'
import SubHero from './Hero/SubHero'

const Hero = () => {
  return (<>
    <div className='container__style mt-5 h-[180vh] md:h-[120vh] lg:h-[100vh]'>
    <MainHero/>
    
    </div>
    <SubHero/>
    </>
  )
}

export default Hero