import React from 'react';

const BookAppointment = () => {
  return (
    <section
      id="Booking"
      className="min-h-screen bg-white pt-20 flex items-center justify-center"
    >
      <form className="w-full max-w-3xl p-6 sm:p-8 bg-white shadow-xl rounded-2xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 px-4 py-4">
          Book an Appointment
        </h2>

        {/* Flex Container for Form Fields */}
        <div className="flex flex-col space-y-4 px-4">
          {/* Row 1 - Full Name and Email */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1 space-y-1">
              <label className="block text-gray-700 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200"
                required
              />
            </div>

            <div className="flex-1 space-y-1">
              <label className="block text-gray-700 text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200"
                required
              />
            </div>
          </div>

          {/* Row 2 - Phone and Date */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1 space-y-1">
              <label className="block text-gray-700 text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200"
                required
              />
            </div>

            <div className="flex-1 space-y-1">
              <label className="block text-gray-700 text-sm font-medium">Appointment Date</label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200"
                required
              />
            </div>
          </div>

          {/* Row 3 - Time and Specialization */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1 space-y-1">
              <label className="block text-gray-700 text-sm font-medium">Appointment Time</label>
              <input
                type="time"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200"
                required
              />
            </div>

            <div className="flex-1 space-y-1">
              <label className="block text-gray-700 text-sm font-medium">Specialization</label>
              <select 
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200 appearance-none"
                required
              >
                <option value="">Select specialization</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Orthopedic</option>
              </select>
            </div>
          </div>

          {/* Row 4 - Doctor */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1 space-y-1">
              <label className="block text-gray-700 text-sm font-medium">Doctor</label>
              <select 
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200 appearance-none"
                required
              >
                <option value="">Select Doctor</option>
                <option>Dr. John</option>
                <option>Dr. Smith</option>
                <option>Dr. Emily</option>
              </select>
            </div>
            {/* Empty div to maintain alignment */}
            <div className="flex-1"></div>
          </div>

          {/* Message */}
          <div className="mt-2 space-y-1">
            <label className="block text-gray-700 text-sm font-medium">Additional Message</label>
            <textarea
              placeholder="Write your message..."
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200"
              rows="4"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className='flex justify-center mb-2'>
        <button
          type="submit"
          className="flex  bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg mt-8 w-full sm:w-auto sm:px-8 font-semibold text-base sm:text-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          BOOK NOW
        </button>
        </div>
      </form>
    </section>
  );
};

export default BookAppointment;