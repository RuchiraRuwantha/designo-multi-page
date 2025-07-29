import { useEffect, useState } from "react";
import type { Breakpoint } from "../types";

const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>("mobile");

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w >= 1024) setBreakpoint("desktop");
            else if (w >= 640) setBreakpoint("tablet");
            else setBreakpoint("mobile");
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return breakpoint;
};

export default useBreakpoint;