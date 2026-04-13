import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-black tracking-tighter text-white drop-shadow-[0_0_10px_rgba(230,0,0,0.8)]">
                ACTINN<span className="text-gym-red">FITNESS</span>
              </span>
            </Link>
            <p className="text-gray-400 mt-4 max-w-sm">
              Premium fitness destination designed for total transformation. Build your power, reshape your body, and achieve the impossible.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gym-dark flex items-center justify-center text-gray-400 hover:text-white hover:bg-gym-red transition-all shadow-glow-red">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gym-dark flex items-center justify-center text-gray-400 hover:text-white hover:bg-gym-red transition-all shadow-glow-red">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gym-dark flex items-center justify-center text-gray-400 hover:text-white hover:bg-gym-red transition-all shadow-glow-red">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Membership', path: '/membership' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-gray-400 hover:text-gym-red hover:pl-2 transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-gym-red flex-shrink-0 mt-1" size={20} />
                <span>3rd floor, Durganagar signal, above Vijaya Diagnostic Centre, Mailardevpally, Hyderabad, TS 500077</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-gym-red flex-shrink-0" size={20} />
                <span>7330922633</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-gym-red flex-shrink-0" size={20} />
                <span>actinnfitness77@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ACTINN FITNESS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
