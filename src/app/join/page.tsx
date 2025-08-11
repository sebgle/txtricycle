export default function Join() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 bg-white rounded shadow-md text-black">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        How to Join
      </h1>

      <div className="space-y-10 text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Step 1: Complete the Membership Packet</h2>
          <p>
            All members must complete the RecSports membership packet. Health insurance is <strong>required</strong> for participation.
          </p>
          <p className="mt-2">
            If you plan to be a driver, you must upload a picture of your valid Texas driver’s license and vehicle insurance.
            <span className="font-semibold"> Only drivers aged 18 or older with a valid Texas driver’s license are allowed to drive.</span>
          </p>
          <a
            href="https://secure.rs.utexas.edu/services/sportclubs/join/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 font-semibold underline hover:text-opacity-80"
          >
            Access the RecSports Membership Packet
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Step 2: Pay Your Dues</h2>
          <p>
            After completing your paperwork, pay your dues either online or by cash/check to one of our officers.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>$150</strong> for the full year</li>
            <li><strong>$100</strong> per semester</li>
            <li><em>No refunds available.</em></li>
          </ul>
          <p className="mt-3">
            <a
              href="https://secure.rs.utexas.edu/store/category.php?id=9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-opacity-80"
            >
              Pay Online Here
            </a>
          </p>
          <p className="mt-3">
            Checks should be made payable to <strong>UT Austin</strong> with <strong>“Triathlon”</strong> and your <strong>UTEID</strong> written in the memo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Stay Connected</h2>
          <p>
            Join our&nbsp;
            <a
              href="https://join.slack.com/t/texastriathlon/shared_invite/xyz123"  // <-- Replace with actual invite link
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-opacity-80"
            >
              Slack Workspace
            </a>
            &nbsp;to stay updated on social events, workouts, races, volunteering opportunities, and more.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Questions?</h2>
          <p>If you have any questions, please reach out to any of our club officers — we’re happy to help!</p>
        </section>
      </div>
    </section>
  );
}
