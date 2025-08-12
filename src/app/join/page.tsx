export default function Join() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 bg-white shadow-md text-black">
      <h1 className="text-4xl py-5 text-center font-bold text-[#BF5700] mb-6">
        How to Join
      </h1>

      <div className="space-y-10 text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Step 1: Complete the Membership Packet</h2>
          <p>
            We’re thrilled you’re interested in joining the Texas Triathlon & Cycling Club! To get started, all members must complete the RecSports membership packet. Please note, health insurance is <strong>required</strong> to participate safely in all our activities.
          </p>
          <p className="mt-2">
            If you plan to be a driver, you’ll need to upload a photo of your valid Texas driver’s license and vehicle insurance. <span className="font-semibold">Only drivers 18 or older with a valid Texas driver’s license can drive for the club.</span>
          </p>
          <a
            href="https://secure.rs.utexas.edu/services/sportclubs/join/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 font-semibold underline hover:text-[#914202] text-[#BF5700]"
          >
            Access the RecSports Membership Packet
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Step 2: Pay Your Dues</h2>
          <p>
            After completing your paperwork, you can pay your dues online or in person by cash/check to one of our officers.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>$150</strong> for the full year</li>
            <li><strong>$100</strong> per semester</li>
            <li><em>Please note: dues are non-refundable.</em></li>
          </ul>
          <p className="mt-3">
            <a
              href="https://secure.rs.utexas.edu/store/category.php?id=9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-[#914202] text-[#BF5700]"
            >
              Pay Online Here
            </a>
          </p>
          <p className="mt-3">
            If paying by check, please make it payable to <strong>UT Austin</strong> with <strong>“Triathlon”</strong> and your <strong>UTEID</strong> in the memo line.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Stay Connected</h2>
          <p>
            Join our&nbsp;
            <a
              href="https://utexastriathlon.slack.com/archives/C027F3YT72L"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-[#914202] text-[#BF5700]"
            >
              Slack Workspace
            </a>
            &nbsp;to get the latest updates on social events, workouts, races, volunteer opportunities, and more.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Have Questions or Want to Chat?</h2>
          <p className="mb-10">
            We’d love to meet you in person! Feel free to drop by any of our practices and talk to one of our officers — whether you want to learn more, ask questions, or just say hi, everyone’s welcome.
          </p>
          <p>
            You can also reach out anytime to any of our club officers — we’re here to help you get started and make the most of your experience.
          </p>
        </section>
      </div>
    </section>
  );
}
