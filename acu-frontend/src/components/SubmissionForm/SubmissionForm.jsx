import { useState } from 'react';
import { supabase } from '../../supabaseClient';

export default function SubmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    comments: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const [isFadingOut, setIsFadingOut] = useState(false); // to trigger fadeOut on form
  const [showMessage, setShowMessage] = useState(false); // to show thank you message

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Apply phone validation only for the phone field
    if (name === 'phone') {
      // Allow only numbers, spaces, parentheses, hyphens, and +
      value = value.replace(/[^0-9+\-\(\)\s]/g, '');
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const { error } = await supabase.from('submissions').insert([formData]);

    if (error) {
      setError('Something went wrong. Please try again.');
      console.error(error);
    } else {
      setIsFadingOut(true);

      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Wait for fadeOut animation to finish before showing thank you
      setTimeout(() => {
        setShowMessage(true);
        setIsFadingOut(false);
        setFormData({
          name: '',
          email: '',
          comments: '',
          appointment_date: '',
          phone: '',
        });
      }, 500); // match animation duration
    }
  };

  const isFormIncomplete =
    !formData.name || !formData.email || !formData.comments || !formData.phone;

  return (
    <div className="flex min-h-[400px] justify-center">
      {!showMessage ? (
        <form
          onSubmit={handleSubmit}
          id="schedule_appointment"
          className={`mx-auto my-10 flex w-full max-w-xl flex-col gap-4 rounded-2xl p-6 ${isFadingOut ? 'pointer-events-none animate-fadeOut' : 'opacity-100'} `}
        >
          <h2 className="text-start font-spartan text-[25px] text-[#D6D6D6]">
            Schedule an Appointment
          </h2>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="rounded-lg border border-gray-300 bg-white/80 px-4 py-2 text-gray-800 placeholder-gray-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="rounded-lg border border-gray-300 bg-white/80 px-4 py-2 text-gray-800 placeholder-gray-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            pattern="^[0-9\-\+\(\)\s]{10,}$"
            title="Please enter a valid phone number (at least 10 digits)."
            className="rounded-lg border border-gray-300 bg-white/80 px-4 py-2 text-gray-800 placeholder-gray-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <textarea
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            rows={1}
            className="resize-none rounded-lg border border-gray-300 bg-white/80 px-4 py-2 text-gray-800 placeholder-gray-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Comments"
            rows={3}
            className="resize-none rounded-lg border border-gray-300 bg-white/80 px-4 py-2 text-gray-800 placeholder-gray-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* <input
            name="appointment_date"
            type="datetime-local"
            value={formData.appointment_date}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          /> */}

          <button
            type="submit"
            disabled={isFormIncomplete}
            className={`rounded-lg bg-[#85AE71] py-2 font-spartan font-medium text-white shadow-md transition duration-200 hover:bg-[#92BF7C] ${isFormIncomplete && 'cursor-not-allowed opacity-50 hover:bg-[#85AE71]'}`}
          >
            Submit
          </button>

          {error && (
            <p className="mt-2 text-sm font-medium text-red-600">{error}</p>
          )}
        </form>
      ) : (
        <div className="flex animate-fadeIn justify-center">
          <div className="flex flex-col items-center justify-center p-6">
            <span className="font-spartan text-[30px]">Thank you!</span>
            <span className="text-center font-spartan text-[16px]">
              We'll reach out to you in the next 24 hours.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
