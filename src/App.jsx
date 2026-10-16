import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import clicker3 from './assets/images/clicker3.jpg'
import printer from './assets/images/3dPrinter.jpg'

import './App.css'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

const services = [
  {
    number: "01",
    title: "Cute Clickers",
    text: "Our signature tactile treats—from name clickers to tiny sandwiches, burgers, and playful pocket companions.",
    color: "coral",
  },
  {
    number: "02",
    title: "Action Figures",
    text: "Characters you love, brought to life as carefully printed display pieces with crisp, personality-filled details.",
    color: "lilac",
  },
  {
    number: "03",
    title: "Coasters & Keychains",
    text: "Useful little objects made joyful. Personalize a glass coaster or create a keychain that is distinctly yours.",
    color: "mint",
  },
  {
    number: "04",
    title: "Custom Creations",
    text: "Have a sketch, idea, or reference? We turn your preferences into a tangible piece, made one layer at a time.",
    color: "yellow",
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <div className="min-h-screen text-ink flex flex-col">
        {/* ===== NAVBAR +  Hero ===== */}
        <div className="text-black h-full bg-gradient-to-br from-primary via-primary to-lilac">
          {/* === NAVBAR === */}
          <nav className=" px-10">
            <div  className="grid content-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
              <div className="flex items-start justify-between h-16">

                {/* ===== LOGO ===== */}
                <div className="flex items-center h-full">
                  <a                 
                    href="#home" 
                    onClick={() => setActiveTab('Home')}
                    className="flex text-2xl font-bricolage items-center gap-2.5 text-black focus:outline-none font-bold
                    ">Fiezy Studio</a>
                </div>

                {/* Navigasi Desktop: Home, Services, About, Contact */}
                <div className="hidden md:flex items-center space-x-1 lg:space-x-2 h-full">
                  {navLinks.map((link) => {
                    const isActive = activeTab === link.name;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setActiveTab(link.name)}
                        className={`px-3.5 py-2 text-md font-medium transition-colors ${
                          isActive
                            ? 'border-b text-black font-bold'
                            : 'text-neutral-500 transition-transform duration-700 ease-in-out hover:scale-105 hover:text-black'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                  <a href="#contact" className="bg-ink text-white px-4 py-3 rounded-full text-md font-medium flex items-center gap-2">
                    Start a project <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>

                {/* Butang Hamburger Mudah Alih (Mobile Button) */}
                <div className="flex md:hidden h-full">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-lg text-neutral-500 hover:text-black"
                    aria-label="Toggle Menu"
                  >
                    {isOpen ? (
                      // Ikon Tutup (X)
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      // Ikon Menu (Hamburger)
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Menu Dropdown untuk Mobile */}
                {isOpen && (
                  <div className="md:hidden rounded-lg bg-white mt-4 p-3 space-y-1 shadow-lg">
                    {navLinks.map((link) => {
                      const isActive = activeTab === link.name;
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={() => {
                            setActiveTab(link.name);
                            setIsOpen(false);
                          }}
                          className={`flex px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                            isActive
                              ? 'bg-neutral-800 text-white font-semibold'
                              : 'text-neutral-500 hover:text-white hover:bg-neutral-800'
                          }`}
                        >
                          {link.name}
                        </a>
                      );
                    })}
                  </div>
                )}

              </div>
            </div>    
          </nav>
  
          {/* === Hero Section === */}
          <div id="home" className = "flex flex-col lg:flex-row items-stretch justify-evenly align-center xl:px-45 px-6 py-8 ">
            {/* HERO 1 */}
            <div className = "flex flex-col justify-center ">
              <p className="flex items-center gap-2 font-bricolage uppercase text-md text-neutral-500 tracking-wide"><span className="bg-coral-deep w-10 h-0.5 rounded-full"></span> Small things, big joy</p>
              <h1 className ="font-bricolage font-bold text-7xl pt-5">
                Ideas, made 
              </h1>
              <h1 className="text-coral-deep font-bricolage font-bold text-7xl italic">touchable.</h1>
              <p className="font-dm text-lg pt-6 text-neutral-500 w-3/5">
                We turn playful ideas into delightful 3D-printed objects—from satisfying clickers to custom keepsakes made just for you.
              </p>
              <div className="flex items-center gap-5 pt-6">
                <a className='flex items-center gap-3 text-black bg-coral-deep rounded-full px-4 py-4 font-medium tracking-wide hover:bg-coral' href = "#"><p>Explore our work</p> <i class="fa-solid fa-arrow-right"></i></a>
                <a href = "#" className = "flex items-center text-black font-dm font-bold border-b-1 border-black">Have something in mind? </a>
              </div>
              <div>
                <p className="font-dm text-sm font-bold pt-6 tracking-wide">
                  Made with care
                </p>
                <p className="font-dm text-sm font-bold text-neutral-400 tracking-wide">
                  Designed and printed in our studio
                </p>
              </div>
            </div>

            {/* Hero 2 */}
            <div className = "flex w-full py-20 px-0 justify-center xl:justify-end ">
              <img src = {clicker3} alt="Clicker 3" className = "h-125 object-cover rounded-full shadow-xl"/>
            </div>
          </div>  

        </div>
        
        {/* === Products === */}
        <div id="services" className = "flex items-center justify-evenly text-xs bg-ink text-white py-5 font-bricolage font-bold uppercase">
            <span>Custom Clickers</span><i className = "h-2 w-2 bg-coral-deep rounded-full" /><span>Action Figures</span><i className = "h-2 w-2 bg-coral-deep rounded-full" />
            <span>Keychains</span><i className = "hidden md:inline-block h-2 w-2 bg-coral-deep rounded-full" /><span className="hidden md:inline-block">Glass Coasters</span><i className = "hidden md:inline-block h-2 w-2 bg-coral-deep rounded-full" />
            <span className="hidden md:inline-block">Made For You</span>
        </div>

        {/* What We Make */}
        <div className = "py-20 xl:px-45 px-6 bg-primary">
          <p className="flex items-center gap-2 font-bricolage uppercase text-md text-neutral-500 tracking-wide"><span className="bg-coral-deep w-10 h-0.5 rounded-full"></span> What We Make</p>
          <div className = "flex flex-col lg:flex-row items-stretch justify-between align-center py-7">
              <h1 className =" font-bricolage font-bold text-5xl pt-5 lg:w-2/5">
                Little objects.
                Lots of character.
              </h1>
              <p className=" font-dm text-lg pt-6 text-neutral-500 lg:w-2/5">
               From our bestselling clickers to one-off custom requests, every piece is designed to feel personal, playful, and wonderfully made.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
            {services.map((service) => (
              <article className={`bg-${service.color} px-6 py-8 rounded-4xl flex flex-col shadow-lg justify-between`} key={service.title}>
                <span className="font-dm font-bold text-neutral-500 text-sm mb-5">{service.number}</span>
                <span className='mb-5'><i class="fa-solid fa-cubes"></i></span>
                <h3 className="font-bricolage font-bold text-4xl mb-7">{service.title}</h3>
                <p className="font-dm text-md text-neutral-500">{service.text}</p>
                <a href="#contact" aria-label={`Ask about ${service.title}`} className="flex font-dm font-bold mt-10 items-center gap-3">
                  Tell me more  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* === Meet Us === */}
        <div id="about" className = "bg-third flex flex-col lg:flex-row gap-10 items-stretch justify-between align-center xl:px-45 px-6 py-8">
          {/* 1 */}
          <div className = "flex w-full py-20 px-0 justify-center">
            <img src = {printer} alt="Clicker 3" className = "h-180 object-cover rounded-4xl shadow-xl"/>
          </div>
          
          {/* 2 */}
          <div className = "flex flex-col item-center justify-center">
            <p className="flex items-center gap-2 font-bricolage uppercase text-md text-neutral-500 tracking-wide"><span className="bg-coral-deep w-10 h-0.5 rounded-full"></span> Meet Fiezy Studio</p>
            <h1 className ="font-bricolage font-bold text-5xl pt-5">
              Playful by nature.
            </h1>
            <h1 className="text-coral-deep font-bricolage font-bold text-5xl italic">Precise by design.</h1>
            <p className="font-dm text-2xl font-bold pt-6 text-neutral-700 w-3/5">
             We believe everyday objects should bring a little more delight.
            </p>
            <p className="font-dm text-lg pt-6 text-neutral-500 w-3/5">
             Fiezy Studio is a small 3D printing studio making tactile, colorful pieces with personality. We obsess over the details—from the first sketch and material choice to the final satisfying click.
            </p>
            <hr className="bg-neutral-400 mt-5"/>
            <div className = "flex items-start justify-start mt-5">
              <p className="font-dm text-md font-bold tracking-wide text-coral-deep mr-4">
                01
              </p>
              <p className="font-dm text-md font-bold tracking-wide text-black w-1/5">
                Personal
              </p>
              <p className="font-dm text-md font-medium tracking-wide text-neutral-500 w-2/5">
                Made around your idea
              </p>
            </div>
            <hr className="bg-neutral-400 mt-5"/>
            <div className = "flex items-start justify-start mt-5">
              <p className="font-dm text-md font-bold tracking-wide text-coral-deep mr-4">
                02
              </p>
              <p className="font-dm text-md font-bold tracking-wide text-black w-1/5">
                Considered
              </p>
              <p className="font-dm text-md font-medium tracking-wide text-neutral-500 w-2/5">
                Refined in every detail
              </p>
            </div>
            <hr className="bg-neutral-400 mt-5"/>
            <div className = "flex items-start justify-start mt-5">
              <p className="font-dm text-md font-bold tracking-wide text-coral-deep mr-4">
                03
              </p>
              <p className="font-dm text-md font-bold tracking-wide text-black w-1/5">
                Joyful
              </p>
              <p className="font-dm text-md font-medium tracking-wide text-neutral-500 w-2/5">
                Made to make you smile
              </p>
            </div>
            <hr className="bg-neutral-400 mt-5"/>
          </div>
        </div>

          {/* Contact */}
        <div id="contact" className = "xl:px-45 px-6 py-20 bg-paper">
          <div className = "bg-linear-to-bl from-ink from-60%  via-yellow via-100% to-yellow to-90% rounded-3xl shadow-lg flex flex-col lg:flex-row gap-10 items-start justify-between align-center xl:px-25 xl:py-20 py-10 px-6">
            <div className = "flex flex-col item-center justify-center">
              <p className="flex items-center gap-2 font-bricolage uppercase text-sm font-bold text-neutral-300 tracking-wide"><span className="bg-coral-deep w-10 h-0.5 rounded-full"></span> Custom orders welcome</p>
              <h1 className ="font-bricolage font-bold text-white text-5xl pt-5">
                Let's make your idea
              </h1>
              <h1 className="text-coral-deep font-bricolage font-bold text-5xl italic">REAL</h1>
              <p className="font-dm text-lg pt-6 text-neutral-300 w-3/5">
              Tell us what you are imagining. A custom name, favorite character, special color, or an idea no one has made before—we would love to hear it.
              </p>
            </div>

            {/* FORM */}
            <div className="grid grid-cols-1 w-full">
              <form className="flex flex-col gap-4 bg-paper py-10 px-6 rounded-3xl shadow-lg">
                <div className ="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-dm text-sm font-bold text-neutral-600">Your Name</span>
                    <input type="text" placeholder="John Doe" className="px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-coral-deep" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-dm text-sm font-bold text-neutral-600">Your Email</span>
                    <input type="email" placeholder="your.email@example.com" className="px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-coral-deep" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-dm text-sm font-bold text-neutral-600">What would you like to make?</span>
                  <select id="idea" className="text-neutral-500 px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-coral-deep">
                    <option value="" className="text-neutral-400">Select an option</option>
                    <option value="product">Custom Clicker</option>
                    <option value="design">Action Figure</option>
                    <option value="design">Coaster or Keychain</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-dm text-sm font-bold text-neutral-600">Tell us a little more</span>
                  <textarea placeholder="Color, size, or any other details..." className="px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-coral-deep"></textarea>
                </div>
                <button type="submit" className="bg-coral-deep text-white px-4 py-2 rounded-lg hover:bg-coral transition-colors">Send Idea</button>
              </form>
            </div>
          </div>
          
        </div>

        <footer className = "border-t-1 border-neutral-300 bg-paper grid grid-cols-4 items-center justify-start py-10 lg:px-50 px-5">
          <div className="flex items-center h-full">
            <a                 
              href="#home" 
              onClick={() => setActiveTab('Home')}
              className="flex text-lg font-bricolage items-center gap-2.5 text-black focus:outline-none font-bold
              ">Fiezy Studio</a>
          </div>
          <p className='flex justify-start font-dm text-sm text-neutral-400 tracking-wide'>Objects worth holding onto.</p>
          <div className="flex justify-evenly">
            <a href="#services"><i class="fa-brands fa-tiktok"></i></a>
            <a href="#about"><i class="fa-brands fa-instagram"></i></a>
            <a href="#contact"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
          <small className='flex justify-end' >© {new Date().getFullYear()} Fiezy Studio</small>
        </footer>
        


      </div>
    </>

  )
}

export default App
