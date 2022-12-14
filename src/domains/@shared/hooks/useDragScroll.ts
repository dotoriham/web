import { useRef, useState } from "react";

export default function useDragScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current!.scrollLeft);
  };

  const onDragEnd = () => setIsDrag(false);

  const onDragMove = (e: React.DragEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  return {
    scrollRef,
    onDragStart,
    onDragEnd,
    onDragMove,
  };
}
