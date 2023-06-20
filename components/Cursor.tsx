import { useRef, useEffect } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    document.addEventListener("mousemove", (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.top = e.pageY + "px";
      cursorRef.current.style.left = e.pageX + "px";
    });

    document.addEventListener("click", () => {
      if (!cursorRef.current) return;
      cursorRef.current.classList.add("expand");
      setTimeout(() => {
        if (!cursorRef.current) return;
        cursorRef.current.classList.remove("expand");
      }, 500);
    });
  }, []);

  return <div id="cursor" className="cursor" ref={cursorRef}></div>;
}

