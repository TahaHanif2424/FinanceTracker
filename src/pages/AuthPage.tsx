import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Signup from "../components/a-level/auth/Signup";
import Login from "../components/a-level/auth/Login";

export default function AuthPage() {
  const [searchParams, setSearchPrams] = useSearchParams();
  const navigate = useNavigate();

  const changeMode = () => {
    if (searchParams.get("mode") === "login") {
      navigate("/auth?mode=signup");
    } else {
      navigate("/auth?mode=login");
    }
  };

  useEffect(() => {
    if (!searchParams) {
      setSearchPrams({ mode: "login" });
      return;
    }
    const mode = searchParams.get("mode");
    if (mode !== "signup" && mode !== "login") {
      setSearchPrams({ mode: "login" });
    }
  }, [searchParams, setSearchPrams]);

  const mode = searchParams.get("mode");
  const componentRender =
    mode === "login" ? (
      <Login changeMode={changeMode} />
    ) : (
      <Signup changeMode={changeMode} />
    );

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-career-lightGray">
      {/* Decorative subtle circles with theme colors */}
      <div className="absolute top-16 left-16 w-64 h-64 bg-career-mediumGreen rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-16 right-16 w-80 h-80 bg-career-darkGreen rounded-full filter blur-3xl opacity-20"></div>

      {/* Auth card */}
      <div className="flex flex-col w-full max-w-md">
        <div className="flex items-center mb-2">
          <img src="/logo-bg.png" alt="Future Connect" className="w-16 h-16" />
          <h1 className="text-lg font-semibold text-career-darkGreen ml-2">
            Future Connect
          </h1>
        </div>

        <div className="relative z-10">{componentRender}</div>
      </div>
    </div>
  );
}
