import AnimatedButton from "../home/AnimatedButton";

const DownloadResumeBtn = () => {
  return (
    <AnimatedButton
      show={true}
      href="/VishalDas_Resume.pdf"
      download="VishalDas_Resume.pdf"
      text="Download Resume"
      className="border border-emerald-500/70 rounded-full p-1.5 sm:p-2 px-3 sm:px-4 text-sm sm:text-base md:text-lg hover:bg-emerald-500/10 transition-colors duration-300"
    />
  );
};

export default DownloadResumeBtn;
