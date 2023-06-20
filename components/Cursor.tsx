// import { useRef, useEffect } from "react";

// export default function CustomCursor() {
//   const cursorRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!cursorRef.current) return;

//     document.addEventListener("mousemove", (e) => {
//       if (!cursorRef.current) return;
//       cursorRef.current.style.top = e.pageY + "px";
//       cursorRef.current.style.left = e.pageX + "px";
//     });

//     document.addEventListener("click", () => {
//       if (!cursorRef.current) return;
//       cursorRef.current.classList.add("expand");
//       setTimeout(() => {
//         if (!cursorRef.current) return;
//         cursorRef.current.classList.remove("expand");
//       }, 500);
//     });
//   }, []);

//   return <div className="cursor" ref={cursorRef}></div>;
// }



import { useRef, useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

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

    document.addEventListener("mouseover", (e) => {
      if (!cursorRef.current) return;
      if (e.target instanceof HTMLElement && e.target.style.cursor === "pointer") {
        setIsPointer(true);
        cursorRef.current.classList.add("pointer");
      } else {
        setIsPointer(false);
        cursorRef.current.classList.remove("pointer");
      }
    });
  }, []);

  return <div className={`cursor${isPointer ? " pointer" : ""}`} ref={cursorRef}></div>;
}
