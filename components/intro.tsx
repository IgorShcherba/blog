import Avatar from "./avatar";
import MyPhoto from "../public/assets/blog/36-color-optimized.jpg";
const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Hi!
      </h1>
      <div className="flex items-center">
        <Avatar picture={MyPhoto.src} name="Igor Shcherba" />
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          I'm Igor, and I am a software developer. Besides coding, my interests
          include bikepacking and squash. <br />
          Here I document some of my thoughts and experiences, primarily for
          myself, to memorize them better.
        </h4>
      </div>
    </section>
  );
};

export default Intro;
