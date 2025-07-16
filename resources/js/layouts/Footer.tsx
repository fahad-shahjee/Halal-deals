
import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
            <img src="/assets/logo.png" alt="logo" width="150" height="600" />
            </div>
            <p className="text-gray-600 mb-4">
              1191 O Clyde Rapid Suite 210, Wv,<br />
              Virginia, USA
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">📧 homyreal@halaldeals.com</p>
              <p className="text-gray-600">📞 +757 690-4878</p>
            </div>
            <div className="flex space-x-3 mt-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Terms of use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Terms & conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Cookie policy</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">QUICK LINK</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Live chat</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Self-service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Social</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Reviews</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">Copyright ©2025 Halal Deals.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-green-600">Privacy & Terms.</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Cookies.</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Contact Us</a>
            </div>
          </div>
        </div>

        {/* Green asterisk decoration */}
        <div className="flex justify-center mt-8">
          <span className="text-green-600 text-6xl">✱</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
