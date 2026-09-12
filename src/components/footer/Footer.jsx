import React from 'react'
import FooterLogo from '../../assets/logo-text.png'

function Footer() {
  return (


    <footer className="bg-white border-t border-gray-200 text-gray-600 text-sm py-10 sm:py-12 mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 sm:mb-12">
          
          {/* Brand Info Section (Mobile-এ সেন্টারে থাকবে, Desktop-এ বামে থাকবে) */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={FooterLogo} alt="" />
            </div>

            {/* Subtitle */}
            <p className="text-gray-500 text-sm max-w-md leading-relaxed px-2 sm:px-0">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links with Bullet Dots */}
            <div className="flex items-center gap-3 text-sm font-medium text-gray-600 pt-1">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
                GitHub
              </a>
              <span className="text-gray-400 text-xs">•</span>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
                Twitter
              </a>
              <span className="text-gray-400 text-xs">•</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column Links (মোবাইলে লুকানো থাকবে 'hidden md:block' দিয়ে, বড় স্ক্রিনে দেখাবে) */}
          <div className="hidden md:block">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider & Copyright */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p className="text-center sm:text-left">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>

    
  )
}

export default Footer
