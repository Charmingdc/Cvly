import ShapeDivider from "@/components/ui/ShapeDivider";

const Footer = () => {
  return (
    <div className='w-screen relative flex flex-col items-center text-center py-6 px-[5%] mt-48'>
      <p className='z-10'>
        © {new Date().getFullYear()}, Cvly. Built by
        <a
          href='https://adebayomuis.vercel.app'
          target='_blank'
          className='font-bold text-blue-800 underline ml-1'
        >
          Charmingdc
        </a>
      </p>

      <ShapeDivider />
    </div>
  );
};

export default Footer;
