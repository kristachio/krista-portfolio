
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "React JS Developer",
          "Front End Developer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypewriterText;