import Image from "next/image";
import Link from "next/link";
import scriptkavilogo from "../../public/scriptkavi.png";

const Footer = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <footer className="h-32 flex items-center">
        <div className="flex items-center space-x-2 text-sm">
          <Image src={scriptkavilogo} height={30} alt="ScriptKavi" />
          <div>
            Crafted by{" "}
            <Link
              href="https://www.linkedin.com/in/sunnynk19/"
              className="border-b-2 border-black"
              target="_blank"
            >
              ScriptKavi.
            </Link>
          </div>
          <div>
            Hosted on{" "}
            <Link
              href="https://www.netlify.com"
              className="border-b-2 border-black"
              target="_blank"
            >
              Netlify.
            </Link>
          </div>
          <div>
            The source code is available on{" "}
            <Link
              href="https://github.com/scriptkavi"
              className="border-b-2 border-black"
              target="_blank"
            >
              Github.
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
