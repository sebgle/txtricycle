'use client';

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md py-24">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF5700]"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF5700]"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#BF5700]"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#BF5700] text-white font-semibold py-3 rounded-md hover:bg-[#8d4103] transition cursor-pointer"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-black">
        <p className="mb-3 font-semibold text-lg">Connect with us on social media!</p>
        <div className="flex justify-center gap-6 text-xl text-[#BF5700]">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://join.slack.com/t/texastriathlon/shared_invite/xyz123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Slack"
            className="hover:underline"
          >
            Slack
          </a>
        </div>
      </div>
    </section>
  );
}
