import React from 'react'

export default function Toggle() {
    return (
        <div className="flex items-center space-x-4">
            <svg width="32" height="32" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 2a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0V3.4A1.4 1.4 0 0116 2zM6.1 6.1a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 11-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm19.8 0a1.4 1.4 0 010 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99a1.4 1.4 0 011.98 0zM9 16a7 7 0 1114 0 7 7 0 01-14 0zm-7 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8H3.4A1.4 1.4 0 012 16zm23.8 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8h-1.4a1.4 1.4 0 01-1.4-1.4zm-2.87 6.93a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 01-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm-15.84 0a1.4 1.4 0 011.98 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99zM16 25.8a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0v-1.4a1.4 1.4 0 011.4-1.4z" fill="url(#paint0_linear)">
                </path>
                <defs>
                    <linearGradient id="paint0_linear" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                        <stop className="transition-all duration-200" stopColor="#FACC15"></stop>
                        <stop className="transition-all duration-200" offset="1" stopColor="#FA9D16"></stop>
                    </linearGradient>
                </defs>
            </svg>
            <button style={{backgroundColor: "rgb(96, 211, 96)"}} id="headlessui-switch-1" role="switch" tabIndex="0" className="inline-flex items-center px-0.5 rounded-full w-18 h-9 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-500 focus:outline-none" aria-checked="false">
                <span className="sr-only">Enable dark mode</span>
                <span className="bg-white rounded-full w-8 h-8" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 5px, rgba(0, 0, 0, 0.1) 0px 1px 1px", transformOrigin: "50% 50% 0px"}}></span>
            </button>
            <svg width="24" height="24" fill="currentColor" className="transition-colors duration-200 text-gray-300">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z"></path>
            </svg>
        </div>
    )
}