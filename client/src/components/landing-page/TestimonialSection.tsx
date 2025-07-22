type Testimonial = { name: string; content: string; occupation: string };

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Charmingdc",
      content:
        "It’s like Bitly, but built specifically for resumes. Just clean and effective.",
      occupation: "Frontend Developer"
    },
    {
      name: "Ayomide",
      content:
        "I stopped wondering if anyone view my resume — because now I know",
      occupation: "Product Designer"
    },
    {
      name: "Coolerputt",
      content:
        "CVly made my resume feel like a real product. It’s simple, clean, and now I know exactly when recruiters engage with it",
      occupation: "Fullstack Developer"
    }
  ];

  return (
    <div className='w-full flex flex-col items-center justify-center text-center gap-1'>
      <h3 className='font-chewy font-bold text-2xl'>
        Loved by users who care about presentation
      </h3>

      <div className='w-full flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:gap-4'>
        {testimonials.map((testimonial, i) => {
          return (
            <div
              key={i}
              className='w-[90%] flex flex-col items-start justify-center
              text-left gap-2 bg-card py-4 px-[5%] border-b border-dashed
              rounded-2xl mt-6 shadow md:w-[22rem] md:min-h-[12rem]'
            >
              <p className='pb-1 border-b border-dashed'>
                {testimonial.content}
              </p>

              <p className='text-muted-foreground text-sm'>
                - {testimonial.name}, {testimonial.occupation}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
