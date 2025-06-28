import { useState } from 'react';
import { supabase } from '../../supabaseClient';

export default function SubmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
    appointment_date: '',
  });

  const [error, setError] = useState('');
  const [isFadingOut, setIsFadingOut] = useState(false); // to trigger fadeOut on form
  const [showMessage, setShowMessage] = useState(false); // to show thank you message

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const { error } = await supabase.from('submissions').insert([formData]);

    if (error) {
      setError('Something went wrong. Please try again.');
    } else {
      setIsFadingOut(true);

      // Wait for fadeOut animation to finish before showing thank you
      setTimeout(() => {
        setShowMessage(true);
        setIsFadingOut(false);
        setFormData({ name: '', email: '', comments: '', appointment_date: '' });
      }, 500); // match animation duration
    }
  };

  const isFormIncomplete = !formData.name || !formData.email || !formData.comments;

  return (
    <div className='flex min-h-[400px] justify-center'>
      {!showMessage ? (
        <form
          onSubmit={handleSubmit}
          className={`rounded-2xl p-6 w-full max-w-xl mx-auto my-10 flex flex-col gap-4
            ${isFadingOut ? 'animate-fadeOut pointer-events-none' : 'opacity-100'}
          `}
        >
          <h2 className="text-[#D6D6D6] font-spartan text-start text-[25px]">
            Schedule an Appointment
          </h2>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

        <textarea
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            rows={1}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none transition"
          />        

          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Comments"
            rows={3}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none transition"
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
            className={`bg-[#85AE71] hover:bg-[#92BF7C] font-spartan text-white font-medium py-2 rounded-lg shadow-md transition duration-200 ${isFormIncomplete && 'opacity-50 cursor-not-allowed hover:bg-[#85AE71]'}`}
          >
            Submit
          </button>

          {error && (
            <p className="text-red-600 mt-2 text-sm font-medium">{error}</p>
          )}
        </form>
      ) : (
        <div className="flex justify-center  animate-fadeIn">
          <div className="flex flex-col justify-center items-center p-6">
            <span className="font-spartan text-[30px]">Thank you!</span>
            <span className="font-spartan text-[16px]">We'll reach out to you in the next 24 hours.</span>
          </div>
        </div>
      )}
    </div>
  );
}
