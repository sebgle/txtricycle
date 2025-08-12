"use client";

export default function WeeklyEvents() {
  const events = [
    {
      day: "Monday",
      activity: "Group Ride",
      time: "6:00 PM",
      location: "Meet at Gregory Gym",
    },
    {
      day: "Tuesday",
      activity: "Swim Practice",
      time: "7:00 AM",
      location: "Gregory Gym Pool",
    },
    {
      day: "Wednesday",
      activity: "Track Run",
      time: "6:30 PM",
      location: "Mike A. Myers Stadium",
    },
    {
      day: "Thursday",
      activity: "Group Ride",
      time: "6:00 PM",
      location: "Meet at Gregory Gym",
    },
    {
      day: "Saturday",
      activity: "Long Ride / Brick Workout",
      time: "7:00 AM",
      location: "Varies — posted in group chat",
    },
    {
      day: "Sunday",
      activity: "Recovery Run",
      time: "8:00 AM",
      location: "Lady Bird Lake Trail",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#BF5700] mb-10 text-center">
          Weekly Events
        </h2>

        {/* Event Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-[#BF5700] mb-2">
                {event.day}
              </h3>
              <p className="text-gray-800 font-semibold">{event.activity}</p>
              <p className="text-gray-600">{event.time}</p>
              <p className="text-gray-500 text-sm mt-2">{event.location}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          All times subject to change — updates posted in our{" "}
          <a
            href="https://utexastriathlon.slack.com/archives/C027F3YT72L" 
            className="text-[#BF5700] underline hover:opacity-80"
          >
            Slack
          </a>
          .
        </p>
      </div>
    </section>
  );
}
