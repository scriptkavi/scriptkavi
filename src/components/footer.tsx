import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <footer className="h-32 flex items-center">
        <div className="flex items-center space-x-2 text-sm">
          <Image
            src="/scriptkavi.png"
            width={30}
            height={30}
            alt="ScriptKavi"
          />
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
              href="https://vercel.com"
              className="border-b-2 border-black"
              target="_blank"
            >
              Vercel.
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
