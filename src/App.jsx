
import './App.css'
import Container from './Container'
import Button from './Button'
import Flex from './Flex'
import Image from './Image'
import Menu from './Menu'
import Logo from './assets/logo.png'
import Bg from './assets/bg.jpg'
import Dining from './assets/dining.png'
import Living from './assets/living_room.png'
import Bedroom from './assets/Bedroom.png'
import Syltherine from './assets/Syltherine.png'
import Leviosa from './assets/Liviosa.png'
import Lolito from './assets/Lolito.png'
import Respira from './assets/Respira.png'
import Grifo from './assets//Grifo.png'
import Muggo from './assets/Muggo.png'
import Pingky from './assets/Pingky.png'
import Potty from './assets/Potty.png'
import Rectangle24 from './assets/Rectangle 24.png'
import Rectangle25 from './assets/Rectangle 25.png'



function App() {
  

  return (
    <>
      {/* Menu Part Start  */}
      <div className="Menu py-5 bg-[#FFF3E3]">
        <Container>
          <Flex >
            <div className='w-[20%]'><Image imgSrc={Logo}/></div>
            <div className='w-[60%] flex justify-center gap-16'>
              <Menu menuName={'Home'}/>
              <Menu menuName={'Shop'}/>
              <Menu menuName={'About'}/>
              <Menu menuName={'Contact'}/>
            </div>
            <div className='w-[20%]'>
              <Button btnText={'Contact Us'} classname={'bg-[#B88E2F] p-3 rounded-full'}/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Menu Part End  */}



      {/* Banner Part Start  */}
      <div className="Banner relative">
       <Container>
       <div className="backgroundImage">
          <Image imgSrc={Bg} />
        </div>
       </Container>
      <Container>
        <Flex>
        <div className="w-[50%]"></div>
        <div className="w-[50%] absolute -mt-[545px] ml-[600px]">
          <div className="w-[643px] bg-[#FFF3E3] rounded-lg">
          <div className="text pl-7">
          <h6 className='font-semibold font-pop text-[16px] pt-[60px]'>New Arrival</h6>
          <h1 className='font-bold pt-[16px] pr-[160px] font-pop text-[52px] leading-[65px]'>Discover Our New Collection</h1>
          <p className='font-medium font-pop text-[18px] pt-[30px] pr-[72px] pb-[56px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <Button btnText={'BUY NOW'} classname={'bg-[#B88E2F] py-2 px-10 font-bold text-[16px] m-8'}/>
          </div>
          </div>
        </div>
        </Flex>
      </Container>
      </div>
      {/* Banner Part End  */}

      {/* Browse Part start  */}
       <div className="browse font-pop text-center m-9">
       <Container>
       <h1 className='font-bold text-[32px]'>Browse The Range</h1>
       <p className='font-normal text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </Container>
       </div>
      {/* Browse Part End  */}

      {/* Room Part start  */}
         <div className="room mb-[60px]">
          <Container>
            <Flex className={'gap-[90px]'}>
              <div className="w-1/3"><Image imgSrc={Dining}/>
              <p className='text-center font-pop font-semibold mt-3 text-[24px]'>Dining</p>
              </div>
              <div className="w-1/3"><Image imgSrc={Living}/>
              <p className='text-center font-pop font-semibold mt-3 text-[24px]'>Living</p>
              </div>
              <div className="w-1/3"><Image imgSrc={Bedroom}/>
              <p className='text-center font-pop font-semibold mt-3 text-[24px]'>Bedroom</p>
              </div>
              
            </Flex>
          </Container>
         </div>
      {/* Room Part End  */}

         {/* Our Product  */}
         <h1 className='font-bold font-pop text-center text-[40px] mb-[40px]'>Our Products</h1>
         {/* Our Product  */}

      {/* Product Part Start  */}
      <div className="product">
        <Container>
          <Flex className={'gap-[48px]'}>
            <div className="w-1/4">
            <div className="w-[285px] bg-[#F4F5F7]">
             <Image imgSrc={Syltherine}/>
             <div className="text font-pop">
              <h1 className='text-[24px] font-semibold py-1'>Syltherine</h1>
              <p className='font-medium text-[16px] text-[#898989] pb-1'>Stylish cafe chair</p>
              <h2 className='font-semibold text-[20px] pb-2'>Rp 2.500.000</h2>
             </div>
            </div>
            </div>
            <div className="w-1/4">
            <div className="w-[285px] bg-[#F4F5F7]">
             <Image imgSrc={Leviosa}/>
             <div className="text font-pop">
              <h1 className='text-[24px] font-semibold py-1'>Leviosa</h1>
              <p className='font-medium text-[16px] text-[#898989] pb-1'>Stylish cafe chair</p>
              <h2 className='font-semibold text-[20px] pb-2'>Rp 2.500.000</h2>
             </div>
            </div>
            </div>
            <div className="w-1/4">
            <div className="w-[285px] bg-[#F4F5F7]">
             <Image imgSrc={Lolito}/>
             <div className="text font-pop">
              <h1 className='text-[24px] font-semibold py-1'>Lolito</h1>
              <p className='font-medium text-[16px] text-[#898989] pb-1'>Luxury big sofa</p>
              <h2 className='font-semibold text-[20px] pb-2'>Rp 7.000.000</h2>
             </div>
            </div>
            </div>
            <div className="w-1/4">
            <div className="w-[285px] bg-[#F4F5F7]">
             <Image imgSrc={Respira}/>
             <div className="text font-pop">
              <h1 className='text-[24px] font-semibold py-1'>Respira</h1>
              <p className='font-medium text-[16px] text-[#898989] pb-1'>Outdoor bar table and stool</p>
              <h2 className='font-semibold text-[20px] pb-2'>Rp 500.000</h2>
             </div>
            </div>
            </div>
            
        
          
          
          </Flex>
        </Container>
      </div>

      <div className="product m-6">
        <Container>
          <Flex className={'gap-[48px]'}>
            <div className="w-1/4">
            <div className="w-[285px] bg-[#F4F5F7]">
             <Image imgSrc={Grifo}/>
             <div className="text font-pop">
              <h1 className='text-[24px] font-semibold py-1'>Grifo</h1>
              <p className='font-medium text-[16px] text-[#898989] pb-1'>Night lamp</p>
              <h2 className='font-semibold text-[20px] pb-2'>Rp 1.500.000</h2>
             </div>
            </div>
            </div>
            <div className="w-1/4">
            <div className="w-[285px] bg-[#F4F5F7]">
             <Image imgSrc={Muggo}/>
             <div className="text font-pop">
              <h1 className='text-[24px] font-semibold py-1'>Muggo</h1>
              <p className='font-medium text-[16px] text-[#898989] pb-1'>Small mug</p>
              <h2 className='font-semibold text-[20px] pb-2'>Rp 150.000</h2>
             </div>
            </div>
            </div>
            <div className="w-1/4">
            <div className="w-[285px] bg-[#F4F5F7]">
             <Image imgSrc={Pingky}/>
             <div className="text font-pop">
              <h1 className='text-[24px] font-semibold py-1'>Pingky</h1>
              <p className='font-medium text-[16px] text-[#898989] pb-1'>Cute bed set</p>
              <h2 className='font-semibold text-[20px] pb-2'>Rp 7.000.000</h2>
             </div>
            </div>
            </div>
            <div className="w-1/4">
            <div className="w-[285px] bg-[#F4F5F7]">
             <Image imgSrc={Potty}/>
             <div className="text font-pop">
              <h1 className='text-[24px] font-semibold py-1'>Potty</h1>
              <p className='font-medium text-[16px] text-[#898989] pb-1'>Minimalist flower pot</p>
              <h2 className='font-semibold text-[20px] pb-2'>Rp 500.000</h2>
             </div>
            </div>
            </div>
          </Flex>
        </Container>
      </div>
       {/* Button  */}
       <div className="button pb-[70px]">
        <Container>
          <div className="flex justify-center">
          <Button btnText={'Show More'} classname={'text-[#B88E2F] font-pop text-[16px] font-semibold py-2 px-20   border-[#B88E2F] border-[2px]'}/>
          </div>
        </Container>
       </div>
       {/* Button  */}
      {/* Product Part End  */}

      {/* Room Part Start  */}
      <div className="room bg-[#FCF8F3]">
        <Container>
          <Flex className={'gap-[72px]'}>
            <div className="w-1/3">
             <div className="text font-pop">
              <h1 className='text-[40px] font-bold pt-[220px]'>50+ Beautiful rooms inspiration</h1>
              <p className='text-[16px] font-medium pt-2'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
              <Button btnText={'Explore More'} classname={'text-white bg-[#B88E2F] font-semibold py-2 px-6 mt-5 text-[16px] mb-[210px]'}/>
             </div>
            </div>
            <div className="w-1/3 mt-[36px]"><Image imgSrc={Rectangle24}/></div>
            <div className="w-1/3 mt-[36px]"><Image imgSrc={Rectangle25}/></div>
          </Flex>
        </Container>
      </div>
      {/* Room Part End  */}



      {/* Last Part Start  */}
      {/* Text  */}
      <div className="text font-pop mt-[70px] text-center mb-16">
      <h6 className='font-semibold text-[20px]'>Share your setup with</h6>
      <h1 className='font-bold text-[40px]'>#FuniroFurniture</h1>
      </div>
      {/* Text  */}
      {/* Last Part End  */}






    </>
  )
}

export default App
