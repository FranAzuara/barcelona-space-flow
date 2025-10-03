import React, { useState, useEffect } from 'react';
import { FaCampground, FaFire, FaTint, FaHotTub, FaHiking } from 'react-icons/fa';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const options = [
    {
      title: "Luxury Tent",
      description: "Cozy glamping under the stars",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      icon: <FaCampground size={24} className="text-white" />
    },
    {
      title: "Campfire Feast",
      description: "Gourmet s'mores & stories",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
      icon: <FaFire size={24} className="text-white" />
    },
    {
      title: "Lakeside Retreat",
      description: "Private dock & canoe rides",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      icon: <FaTint size={24} className="text-white" />
    },
    {
      title: "Mountain Spa",
      description: "Outdoor sauna & hot tub",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      icon: <FaHotTub size={24} className="text-white" />
    },
    {
      title: "Guided Adventure",
      description: "Expert-led nature tours",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
      icon: <FaHiking size={24} className="text-white" />
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] bg-gradient-to-r from-secondary/10 to-primary/5 rounded-2xl p-4 md:p-8 font-sans text-white"> 
      {/* Options Container */}
      <div className="options flex flex-col md:flex-row w-full md:max-w-[900px] h-[500px] md:h-[400px] mx-0 items-stretch overflow-hidden relative rounded-lg">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: window.innerWidth < 768 
                ? 'cover' 
                : (activeIndex === index ? 'auto 100%' : 'auto 120%'),
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) 
                ? 'translate(0, 0)' 
                : (window.innerWidth < 768 ? 'translateY(-60px)' : 'translateX(-60px)'),
              minWidth: window.innerWidth < 768 ? '100%' : '60px',
              minHeight: window.innerWidth < 768 ? '40px' : '100px',
              margin: 0,
              borderRadius: 0,
              borderWidth: window.innerWidth < 768 ? '1px' : '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#fff' : '#292929',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(0,0,0,0.50)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? (window.innerWidth < 768 ? '5 1 0%' : '7 1 0%') : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div 
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
              }}
            ></div>
            
            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-3 md:bottom-5 flex items-center justify-start h-10 md:h-12 z-2 pointer-events-none px-2 md:px-4 gap-2 md:gap-3 w-full">
              <div className="icon min-w-[32px] md:min-w-[44px] max-w-[32px] md:max-w-[44px] h-[32px] md:h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border border-[#444] md:border-2 flex-shrink-0 flex-grow-0 transition-all duration-200">
                <div className="scale-75 md:scale-100">
                  {option.icon}
                </div>
              </div>
              <div className="info text-white whitespace-pre relative">
                <div 
                  className="main font-bold text-sm md:text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-xs md:text-base text-gray-300 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default InteractiveSelector;
