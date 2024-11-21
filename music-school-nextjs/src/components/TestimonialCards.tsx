"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "The instructors here are top-notch! I've improved my piano skills tremendously.",
    name: "Alice Johnson",
    title: "Piano Student",
  },
  {
    quote:
      "This music school offers a fantastic environment for learning and growth. Highly recommend it!",
    name: "Michael Smith",
    title: "Guitar Student",
  },
  {
    quote:
      "Thanks to this school, I've gained confidence in my singing abilities.",
    name: "Emily Davis",
    title: "Vocal Student",
  },
  {
    quote:
      "The lessons are engaging and tailored to each student's needs. I'm very pleased with my progress.",
    name: "James Brown",
    title: "Violin Student",
  },
  {
    quote:
      "A wonderful place to learn music. The staff is very supportive and knowledgeable.",
    name: "Jessica Williams",
    title: "Drum Student",
  },
];

export default function MusicSchoolTestimonialCards() {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mb-8 z-10'>
        Hear our Harmony: Voices of success
      </h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'>
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction='right'
            speed='slow'
          />
        </div>
      </div>
    </div>
  );
}
