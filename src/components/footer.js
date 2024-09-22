import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <div className="w-full bg-black flex flex-col items-center py-10">
      {/* Contact Section */}
      <div className="w-4/5 grid grid-cols-3 gap-8 mb-10">
        <div className="flex flex-col items-center">
          <div className="p-3 bg-white rounded-full">
            <PhoneIcon className="h-10 w-10 text-black" />
          </div>
          <p className="mt-4 text-lg font-medium text-white">+880 1234567891</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-3 bg-white rounded-full">
            <EnvelopeIcon className="h-10 w-10 text-black" />
          </div>
          <p className="mt-4 text-lg font-medium text-white">email@gmail.com</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-3 bg-white rounded-full">
            <MapPinIcon className="h-10 w-10 text-black" />
          </div>
          <p className="mt-4 text-lg font-medium text-white">
            Office address, Bangladesh
          </p>
        </div>
      </div>

      {/* Links Section */}
      <div className="w-4/5 grid grid-cols-3 gap-8 items-center text-center mb-10">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white hover:underline transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white hover:underline transition duration-300"
          >
            Clients
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white hover:underline transition duration-300"
          >
            Gallery
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white hover:underline transition duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Logo */}
        <a href="/">
          <img src="/logo2.png" alt="Logo" width={150} height={120} className="mx-auto" />
        </a>
      </div>

      {/* Google Maps */}
      <div className="w-4/5 h-72 mb-10">
  <iframe
    className="w-full h-full rounded-lg"
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58340.00070510724!2d90.32688519159737!3d23.951596681484627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sA%2F10%2C%20Bscic%20Industrial%20Area%2C%20Konabri%2C%20Gazipur%20-%201700%2C%20Dhaka%2C%20%20Bangladesh.!5e0!3m2!1sen!2sbd!4v1727012616187!5m2!1sen!2sbd"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


      {/* Copyright Section */}
      <div className="w-full border-t border-gray-600 py-6 text-center text-gray-500">
        <p>Copyright &copy; 2024 | All rights reserved | Designed and Developed by Tamvir</p>
      </div>
    </div>
  );
}
