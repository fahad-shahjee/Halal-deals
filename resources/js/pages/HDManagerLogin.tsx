import React, { useState } from 'react';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';

const HDManagerLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('HD Manager login:', formData);
  };

  const handleGoogleLogin = () => {
    console.log('Continue with Google');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      
      {/* Main content with background image */}
      <div 
        className="flex-1 flex items-center justify-center py-12 px-4"
        style={{
          backgroundImage: "url('/assets/hd-manager/signin-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Left Column - Login Form */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="max-w-sm mx-auto w-full">
                  <h1 className="text-2xl font-semibold text-green-600 mb-2">
                    Business Admin{' '}
                    <span className="text-gray-700">Sign in</span>
                  </h1>
                  
                  <div className="text-right mb-8">
                    <a href="#" className="text-gray-600 hover:text-green-600 underline text-sm font-medium">
                      Reset password
                    </a>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-normal text-sm mb-2 block">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-12 border-gray-300 rounded-lg text-gray-700 font-light"
                      />
                    </div>

                    <div>
                      <Label htmlFor="password" className="text-gray-700 font-normal text-sm mb-2 block">
                        Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          className="h-12 border-gray-300 rounded-lg pr-12 text-gray-700 font-light"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gray-400 hover:bg-gray-500 text-white rounded-full text-sm font-medium"
                    >
                      Sign in
                    </Button>
                  </form>

                  <div className="mt-8">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500 font-light">OR</span>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleGoogleLogin}
                      className="w-full mt-6 h-12 border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 font-medium"
                    >
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Continue with Google
                    </Button>
                  </div>

                  <div className="mt-6 text-center text-xs text-gray-500 font-light">
                    By continuing, you agree to the{' '}
                    <a href="#" className="text-green-600 hover:underline font-medium">Terms of use</a>
                    {' '}and{' '}
                    <a href="#" className="text-green-600 hover:underline font-medium">Privacy Policy</a>.
                  </div>
                </div>
              </div>

              {/* Right Column - Account Creation Info */}
              <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-center">
                <div className="max-w-sm mx-auto w-full">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Create an account
                  </h2>
                  <p className="text-gray-600 mb-8 text-sm font-light leading-relaxed">
                    Get exclusive UK vouchers on shopping, food, travel & more. Sign up and start saving today.
                  </p>

                  <ul className="space-y-4 mb-8 text-sm">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 font-light leading-relaxed">
                        Click 'Sign Up' at the top-right of the homepage.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 font-light leading-relaxed">
                        Enter your name and a valid email address.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 font-light leading-relaxed">
                        Set a secure password using letters and symbols.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 font-light leading-relaxed">
                        (Optional) Select your preferred voucher categories.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 font-light leading-relaxed">
                        Accept the terms and privacy policy.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 font-light leading-relaxed">
                        Click 'Create Account' and check your email!
                      </span>
                    </li>
                  </ul>

                  <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium">
                    Create an account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HDManagerLogin;