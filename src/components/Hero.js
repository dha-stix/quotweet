import React from 'react'
import heroImage from "../images/heroImage.svg"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className="w-full px-8 pt-16 pb-5 lg:flex lg:flex-row min-h-[90vh] items-center bg-slate-50 flex-col ">
        <div className="flex flex-col mb-16" style={{flex:0.6}}>
            <h2 className="lg:text-4xl font-bold mb-4 text-2xl">
                Activate your fans, share great quotes
            </h2>
            <p className="opacity-30 text-lg mb-8 font-semibold">Read, share and tweet life-changing, inspiring quotes with your followers. With Quotweet, educate and grow your Twitter followers.</p>
            
            <Link to="/quotes" className="relative inline-flex items-center justify-start px-6 py-4 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group w-[200px] shadow-lg">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">GET QUOTES</span>
            </Link>
        </div>

        <div className="flex items-center justify-center w-2/3" style={{flex: 0.4}}>
            <img src={heroImage} alt="Quotweet" className=""/>
        </div>
    </section>
  )
}

export default Hero