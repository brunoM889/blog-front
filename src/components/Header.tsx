import { DarkIcon, GithubIcon, LightIcon } from "./Icons";
import { useAppState } from "../store/store";

interface Props {
  backHome: () => void;
}

function Header({ backHome }: Props) {
  const { changeTheme, changeLang, lang, theme } = useAppState();

  return (
    <header className="w-full flex items-center h-36">
      <div className="grow">
        <button
          className="w-fit text-xl hover:opacity-70 transition-opacity font-semibold cursor-pointer max-[340px]:text-lg"
          onClick={backHome}
        >
          Bruno Minighin
        </button>
      </div>
      <div className="flex gap-4 items-center max-[340px]:gap-2">
        <button
          className={`h-[35px] w-[35px] rounded flex items-center justify-center font-thin ${
            theme ? "hover:bg-[#202020]" : "hover:bg-[#dfdfdf]"
          }`}
          onClick={() => {
            changeLang(!lang);
          }}
        >
          {lang ? "esp" : "eng"}
        </button>
        <button
          className="h-fit w-fit"
          onClick={() => {
            changeTheme(!theme);
          }}
        >
          {theme ? (
            <LightIcon
              className={theme ? "hover:bg-[#202020]" : "hover:bg-[#dfdfdf]"}
            />
          ) : (
            <DarkIcon
              className={theme ? "hover:bg-[#202020]" : "hover:bg-[#dfdfdf]"}
            />
          )}
        </button>
        <a
          className="h-fit w-fit"
          href="https://github.com/BrunoM889"
          target="_blank"
        >
          <GithubIcon w={25} h={25} />
        </a>
      </div>
    </header>
  );
}

export default Header;
