import Image from "next/image";

const Header = () => {
  return (
    <>
      {/* <header className="flex w-full flex-col gap-3 bg-white/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 md:h-16 md:flex-row md:items-center lg:px-4"> */}
      <header className="flex w-full flex-col gap-3  p-3   md:h-16 md:flex-row md:items-center lg:px-4">
        <div className="flex w-full items-center gap-8">
          <div className="flex items-center gap-2">
            <a
              className="rounded focus:outline-0 focus:ring-0 focus-visible:bg-zinc-200"
              data-testid="header-logo"
              href="/"
            >
              <span className="sr-only">Home</span>
              <Image
                src="/scriptkavi.png"
                width={50}
                height={50}
                alt="ScriptKavi"
              />
            </a>
          </div>
          <div
            className="ml-auto flex items-center gap-2 sm:gap-4"
            data-testid="header-right"
          >
            <button
              className="shrink-0 items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background font-medium hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs hidden gap-[6px] rounded-full shadow-none sm:flex"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R2j6ua76uf:"
              data-state="closed"
            >
              Feedback
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
