import * as React from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
}

export const AnimateOnScroll = ({
  children,
  className = "",
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
}: AnimateOnScrollProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once && el) {
              observer.unobserve(el);
            }
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={`${className} transform transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
