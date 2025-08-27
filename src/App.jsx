import React from 'react'
import './App.css'
import './index.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


function App() {


  return (
    <>
    <Header />

    <section className='lg:,'>
      <section className="bg-gray-200">
      <div className="flex mx-18 pb-16">
        <div>
        <p className='text-4xl font-bold pb-6 text-green-700 w-[10em]'>Empowering Africa's Trade Ecosystem With Innovation and Research</p>
        <p className='text-lg w-[21em] pb-6 text-gray-700'>Leading the way in trade facilitation, research, and industrial financing to drive Africa's economic growth.</p>
        <div className='flex'>
          <button className='bg-yellow-500 text-black py-2 px-4 rounded-3xl'>Learn More About CRAFT</button>
          <button className='bg-transparent border border-green-700 text-green-700 py-2 px-4 rounded-3xl ml-4'>Contact Us</button>
        </div>
        </div>
        <div className="ml-[45em] mt-[-3em]">
          <img src="src/assets/Mask group.svg" alt="" srcset="" className='w-72' />
          <img src="src/assets/Ellipse 66 (1).png" alt="" srcset="" className='mt-[-15em] ml-[-1.5em]' />
          <img src="src/assets/Mask group.png" alt="" srcset="" className='w-52 ml-[-5em] mt-[-2em]'/>
        </div>
      </div>
      </section>
      <section className="lg: pt-10 mx-18 pb-10">
      <div className='flex'>
        <div>
        <img src="src/assets/second map body.png" alt="" srcset="" className='w-96' />
        </div>
        <div className='ml-[38em]'>
           <p className='text-4xl font-bold pb-6 text-green-700 w-[10em]'> Who We Are </p>
           <p className='text-lg w-[20.5em] pb-6 text-gray-700 mt-[-1em]'>the <span className='text-black font-bold'>Centre for Research in African Trade Facilitation(CRAFT)</span>, established by renowned Trade Information Management Expert Dr. Aloefuna Ekenechukwu, is at the forefront of advancing trade facilitation across Africa. Registered with the Nigerian Corporate Affairs Commission in 2022, CRAFT is dedicated to simplifying and optimizing trade processes in line with the Africa Continental Free Trade Area (AfCFTA) framework.</p>
        </div>
      </div>
      <div className="">
      <div className="flex gap-48 justify-center pb-10">
        <div className='flex'>
          <div>
          <img src="src/assets/star.png" alt="" srcset="" className='w-28 mt-4.5' /></div>
          <p className='bg-yellow-500 text-black py-2 px-4 rounded-xl  ml-3'>Established in 2020, officially registered in 2022.</p>
        </div>
        <div className='flex'>
          <div>
          <img src="src/assets/star.png" alt="" srcset="" className='w-28 mt-4.5' /></div>
          <p className='bg-yellow-500 text-black py-2 px-4 rounded-xl  ml-3'>Conducted International Trade Facilitation Training in Kigali, Rwanda, attended by 36 federal agencies.</p>
        </div>
        <div className='flex'>
          <div>
          <img src="src/assets/star.png" alt="" srcset="" className='w-28 mt-4.5' /></div>
          <p className='bg-yellow-500 text-black py-2 px-4 rounded-xl ml-3'>Championing Single Window Trading Systems across Africa.</p>
        </div>
      </div>
      <button className='border text-green-700 py-2 px-4 rounded-3xl ml-[75em]'>Discover Our Story</button>
      </div>
      </section>
    <section className="lg: bg-gray-200 pb-10">
       <p className='text-4xl text-center pt-6 font-bold pb-20 text-green-700'> Our Service & Expertise</p>
      <div className="mx-36 grid grid-cols-3 justify-center gap-y-5 gap-x-44">
          <div className='flex'>
          <img src="src/assets/money arrow.svg" alt="" srcset="" className='w-10 mt-[-4em]' />
          <p className=' text-gray-600 py-2 px-4 ml-1 w-[11em]'><span className='text-green-600 font-bold'>Trade Facilitation</span><br />Established in 2020, officially registered in 2022.</p>
        </div>
          <div className='flex'>
          <img src="src/assets/volume.svg" alt="" srcset="" className='w-10 mt-[-3em]' />
          <p className=' text-gray-600 py-2 px-4 ml-1 w-[13em]'><span className='text-green-600 font-bold'>Trade Finance</span><br />Securing financing solutions for businesses and governments.</p>
        </div>
          <div className=''>
          <img src="src/assets/Vector.png" alt="" srcset="" />
          <p className=' text-gray-600 mt-[-2em] ml-10 w-[11em]'><span className='text-green-600 font-bold'>Commodity Trade</span><br />Optimizing Africa’s commodity export processes.</p>
        </div>
          <div className='flex pt-8'>
          <img src="src/assets/Vector (1).svg" alt="" srcset="" className='w-10 mt-[-4em]' />
          <p className=' text-gray-600 ml-5 w-[11em]'><span className='text-green-600 font-bold'>Capacity Building</span><br />Training programs for trade professionals and stakeholders.</p>
        </div>
          <div className='pt-8'>
          <img src="src/assets/man small.png" alt="" srcset="" className='mb-[-3em] ' />
          <p className=' text-gray-600 ml-15 mt-[-2em] w-[11em]'><span className='text-green-600 font-bold'>Research & Policy Analysis</span><br />Supporting data-driven trade policies and strategies.</p>
        </div>
        <div className='pt-20'>
          <button className='border text-green-700 py-2 px-4 rounded-3xl '>Discover Our Story</button>
          </div>
        </div>
        </section>
        <section className="lg: bg-green-700 flex gap-x-60">
        <section className='lg: pt-10'>
          <div className="mx-18">
           <p className='text-4xl font-bold pb-6 text-yellow-500 w-[12em]'> Our Mission for Africa's Trade Future</p>
           <p className="text-gray-300 w-[20.1em] pb-6">At CRAFT, we focus on revolutionizing trade processes by simplifying customs procedures, implementing electronics trade system, and harmonizing regulations across the continent. We are committed to:</p>
          </div>
              
          <div className="mx-18 flex gap-6">
            <div className="flex">
              <p className="bg-yellow-500 text-black w-32 py-2 px-1 rounded-xl">Implementing 24-hour customs clearance.</p>
            </div>
            <div className="">
              <p className="bg-yellow-500 text-black w-55 rounded-xl py-2 px-1">Partnership with governments for transparent trade processes.</p>
              </div>
          </div>
          <div className="pt-4 mx-18 flex gap-4">
            <div className="">
              <p className="bg-yellow-500 text-black w-70 rounded-xl py-2 px-1">Supporting digital trade transformation initiatives such as Nigeria's Single Window Trade system.</p>
            </div>
            <div className="">
              <button className='border text-white py-2 px-4 rounded-3xl mt-10'>Learn More</button>
            </div>
          </div>

          </section>
          <section className="mx-18 pt-20 pb-15">
            <div className="">
              <img src="src/assets/plane disk body.png" alt="" srcset="" className='w-65'/>
              <img src="src/assets/Dotted.png" alt="" srcset="" className='w-40 mt-[-23.3em] ml-[-4em]'/>
              <img src="src/assets/plane body.png" alt="" srcset="" className='ml-[13em] mt-[-7em] w-25'/>
              <img src="src/assets/second man.png" alt="" srcset="" className='ml-[13em] mt-[8em] w-40'/>
            </div>
          </section>
          </section>

          <section className='mx-18 pt-10 pb-15'>
             <p className='text-4xl text-center font-bold text-green-700 pb-20'> Our Impact So Far</p>
             <div className="flex gap-80">
                 <div>
                <img src="src/assets/Rectangle 1100 (1).png" alt="" srcset="" className='w-60 pb-3'/>
                <p className='w-50 pb-3'>Facilitating International trade workshops for Nigeria's NTFC.</p>
                <div className='bg-green-800 p-0.5 pt-1 w-40'></div>
              </div>

                 <div>
                <img src="src/assets/Rectangle 1101 (1).png" alt="" srcset="" className='w-60 pb-3'/>
                <p className='w-50 pb-3'>Advocating for streamlined trade infrastructure development.</p>
                <div className='bg-green-800 p-0.5 pt-1 w-40'></div>
              </div>

                 <div className='pb-10'>
                <img src="src/assets/Rectangle 1102 (1).png" alt="" srcset="" className='w-60 pb-3'/>
                <p className='w-50 pb-3'>Supporting SMEs in accessing business and project funding.</p>
                <div className='bg-green-800 p-0.5 pt-1 w-40'></div>
              </div>
             </div>
               <button className='border text-green-700 py-1 px-2 rounded-3xl '>Read About Our Achievements</button>
          </section>

             <section className="lg: bg-gray-200 pb-10">
              <div className='mx-18'>
       <p className='text-4xl text-center pt-6 font-bold pb-10 text-green-700'> Our Services Charter</p>
       <p className=' text-gray-600 w-[40em] text-center ml-[23em] pb-10'>CRAFT offers tailored services to governments, international NGOs, corporations, and SMEs, with a special focus on startup acceleration. Our services include:</p>

       <div className="flex ml-44 gap-23 pb-5">

        <p className="bg-[rgba(112,147,110,0.75)] w-60 text-center rounded p-1">Trade Facilitation Consulting</p>

        <p className="bg-[rgba(112,147,110,0.75)] w-60 text-center rounded p-1">Supply Chain Optimization</p>
        
        <p className="bg-[rgba(112,147,110,0.75)] w-72 text-center rounded p-1">Trade Risk Assessment and Audits</p>
       </div>

        <div className="flex ml-60 gap-23">
        <p className="bg-[rgba(112,147,110,0.75)] w-80 text-center rounded h-8">Trade Agreement compliance Assistance</p>

        <p className="bg-[rgba(112,147,110,0.75)] w-80 text-center rounded p-1">Customs  Brokerage and Logistics Services</p>
       </div>

       </div>

       </section>
       
         <section className="mx-18 flex pb-16 pt-24">
        <div>
        <p className='text-3xl font-bold pb-6 text-green-700 w-[12em]'>Workshops, Conferences & Training Programs</p>
        <p className='text-lg w-[21em] pb-6 text-gray-700'>We offer world-class training programs, trade missions, and conferences aimed at enhancing capacity building for trade professionals and businesses in Africa. Whether you’re a policymaker or a private sector business, our training programs are designed to empower you with the knowledge to succeed in today’s competitive trade environment.</p>
        </div>
        <div className="ml-96 mt-[-4em]">
          <img src="src/assets/Group 153.png" alt="" srcset="" className='w-[35em]' />
        </div>
      </section>

         <section className="lg: bg-gray-200 pb-10">
       <p className='text-4xl text-center pt-6 font-bold pb-20 text-green-700'>Upcoming Event</p>

       <div className="flex gap-10">

         <div className="ml-80 mt-[-3em]">
          <img src="src/assets/Replace Image.png" alt="" srcset="" className='w-[20em]' />
        </div>
        
        <div className="mt-[-1em]">
          <p className='text-2xl font-bold pb-2'>International Trade Facilitation Training</p>
        <p className='text-lg w-[29em] pb-4 text-gray-700'>Some brief information about the event that is about to take place in Abuja will be inserted here.</p>
        <div className='flex pb-8 ml-3 gap-5'>
          <p className='bg-blue-300 rounded-4xl text-blue-700 px-2'> 31 November 2024</p>
          <p className='bg-blue-200 rounded-4xl text-blue-500 px-2'>Abuja</p>
        </div>
          <button className='border text-green-700 py-1 px-2 rounded-3xl '>Register Now</button>
        </div>
       </div>
       </section>


           <section className="lg: bg-green-700 pt-10 pb-10">
          <div className="mx-18 flex gap-x-96">
            <div>
           <p className='text-3xl font-bold pb-6 text-yellow-500 w-[12em]'>Let's Get in Touch</p>
           <p className='text-lg text-white pb-5 w-79'>We’re here to help you with any trade facilitation, financing, or research needs. Reach out to us at our Abuja office or fill out our online contact form to get started.</p>
            <p className='text-2xl pb-6 text-yellow-500 w-[12em]'>Office Address</p>
             <p className='text-lg text-white pb-5 w-[24em]'>2nd Floor, Ogun House, Ralph Shodeinde Street, Central Business District, Abuja.</p>
             <div className='flex gap-1'>

              <img src="src/assets/mess.png" alt="" srcset="" className='h-4 mt-1'/>
              <p className='text-white pr-3'>info@craftafrica.org</p>

              <img src="src/assets/Vector (1).png" alt="" srcset="" className='h-4 mt-1'/>
              <p className='text-white'>+234 810 123 4567</p>
              </div>
              </div>

          <div className="ml-40">
            <p className='text-yellow-500 pb-6'>Get in touch</p>

            <div className='pb-6'>
            <input type="text" className='text-black bg-white border-b border-white focus:outline-none rounded-md pr-40 h-8 ' placeholder='Your name' />
            </div>

            <div className='pb-6'>
            <input type="text" className='text-black bg-white border-b border-white focus:outline-none rounded-md pr-40 h-8' placeholder='Your email' />
            </div>

            <div className='pb-6'>
            <input type="text" className='text-black bg-white border-b border-white focus:outline-none rounded-md pr-40 pb-16 pt-1' placeholder='Your message' />
            </div>
               <button className='border text-yellow-500 py-1 px-2 rounded-3xl '>Send Message</button>
          </div>
          </div>
       </section>
      </section>
      <Footer />
    </>
  )
}

export default App
