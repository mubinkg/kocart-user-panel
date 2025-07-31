import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-indigo-800 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Logo Section */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                            <div className="text-indigo-800 font-bold text-sm">
                                <div className="flex flex-col items-center">
                                    <div className="text-red-500 text-xs">🛒</div>
                                    <div>KoCart</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Korean Brands Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Korean Brands</h3>
                        <ul className="space-y-2 text-sm">
                            <li>• Dr.Piel</li>
                            <li>• LOTTE</li>
                            <li>• AMUSE</li>
                            <li>• SAMYANG</li>
                            <li>• Rom&nd</li>
                            <li>• Binggrae</li>
                        </ul>
                        <button className="text-sm text-gray-300 hover:text-white mt-3 underline">See all</button>
                    </div>

                    {/* Our Categories Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Categories</h3>
                        <ul className="space-y-2 text-sm">
                            <li>• Mens&apos; Fashion</li>
                            <li>• Women&apos;s Fashion</li>
                            <li>• Kids</li>
                            <li>• Electrics</li>
                            <li>• Beauty</li>
                            <li>• Home & Decor</li>
                        </ul>
                        <button className="text-sm text-gray-300 hover:text-white mt-3 underline">See all</button>
                    </div>

                    {/* Download App Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Download App</h3>
                        <div className="flex flex-col items-start space-y-4">
                            {/* QR Code */}
                            <div className="w-20 h-20 bg-white rounded p-2">
                                <div className="w-full h-full bg-black rounded flex items-center justify-center">
                                    <div className="grid grid-cols-8 gap-px">
                                        {Array.from({ length: 64 }).map((_, i) => (
                                            <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? "bg-white" : "bg-black"}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* App Store Buttons */}
                            <div className="space-y-2">
                                <div className="bg-black rounded px-3 py-1 flex items-center space-x-2">
                                    <div className="text-white text-xs">
                                        <div className="text-[10px] text-gray-300">GET IT ON</div>
                                        <div className="font-semibold">Google Play</div>
                                    </div>
                                </div>
                                <div className="bg-black rounded px-3 py-1 flex items-center space-x-2">
                                    <div className="text-white text-xs">
                                        <div className="text-[10px] text-gray-300">Download on the</div>
                                        <div className="font-semibold">App Store</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-end space-x-4 mb-8">
                    <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
                    <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
                    <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
                    <Linkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-400 border-t border-indigo-700 pt-6">
                    Copyright © 2025 KoCart, All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
