import React from 'react';

interface InsideAboutProps {
  mainText: string;
  para: string;
  svg: React.ReactNode;
}

const InsideAbout: React.FC<InsideAboutProps> = ({ mainText, para, svg }) => {
  return (
    <>
      <div className="w-[280px] h-full">
        <h1 className="f2 text-[1.3rem] tracking-tight font-semibold">{mainText}</h1>
        <p className="text-[15px] f4 opacity-80 font-light tracking-tight leading-[22px] mt-3">
          {para}
        </p>
      </div>
      <div className="w-[22%] h-full">
        {svg}
      </div>
    </>
  );
};

export default InsideAbout;
