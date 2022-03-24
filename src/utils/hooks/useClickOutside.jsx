import { useEffect, useRef } from "react";

export const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => { 
    const maybeHandler = (event) => {
      if (event !== undefined && event !== null){
        if (!domNode.current.contains(event.target)) {
          handler()
        }
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler)
    };
  });

  return domNode
}