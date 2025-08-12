"use client";

import WeeklyEvents from "@/components/WeeklyEvents";

export default function CalendarPage() {
  return (
    <>
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 pt-25">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-4xl pt-5 font-bold text-[#BF5700] mb-2">
            Club Calendar
          </h1>
          <p className="text-gray-600 mb-8 pb-10">
            Stay up to date with our training sessions, races, and social events.
          </p>

          {/* Calendar Embed */}
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingTop: "75%" }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=64b914f64f30b3bd32c1ad0fa37e098eab88cf9911ec9b9b936858dc779e67fb%40group.calendar.google.com&ctz=America%2FChicago"
              className="absolute top-0 left-0 w-full h-full border-0"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </section>

      <WeeklyEvents />

    </>
  );
}
