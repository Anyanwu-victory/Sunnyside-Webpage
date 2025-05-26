import React from "react";
import Image from "next/image";

const testimonialsUser = [
  {
    id: "1",
    image: "/images/image-emily.jpg",
    name: "Emily R",
    message:
      "We put trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    profession: "Marketing Director",
  },
  {
    id: "2",
    image: "/images/image-thomas.jpg",
    name: "Thomas S.",
    message:
      " Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    profession: "Chief Operating Director",
  },
  {
    id: "3",
    image: "/images/image-jennie.jpg",
    name: "Jennie F.",
    message:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    profession: "Business Owner",
  },
];

const TestimonialCard = ({ image, name, message, profession }) => (
  <div className="flex flex-col items-center text-center space-y-6 max-w-sm mx-auto">
    <Image
      src={image}
      alt={name}
      width={72}
      height={72}
      className="rounded-full object-cover"
    />
    <p className="text-Verydarkdesaturatedblue font-barlow text-sm leading-relaxed px-4">
      "{message}"
    </p>
    <div className="font-fraunces space-y-1">
      <h3 className="text-Verydarkdesaturatedblue font-bold">{name}</h3>
      <p className="text-Darkgrayishblue text-xs">{profession}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-Grayishblue font-fraunces font-bold uppercase text-2xl mb-16">
          Client Testimonials
        </h2>
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-8 justify-center items-start">
          {testimonialsUser.map((user) => (
            <TestimonialCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
