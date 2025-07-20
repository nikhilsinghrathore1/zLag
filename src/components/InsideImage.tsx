import React from 'react'

interface InsideImageProps {
  ind: number | string;
  text: string;
  post: string;
}

const InsideImage: React.FC<InsideImageProps> = ({ ind, text, post }) => {

  return (
               <>
               <div className='w-[70%] text-[2.7rem] relative z-10 items-end f5 h-full flex'>
               <h1 className='mr-12 opacity-20'>{ind}</h1>
               <h1>{text}</h1>
</div>
<div className='w-[30%] h-full flex items-end pb-3 justify-end p'>
               <h1 className='text-[1.1rem] font-light tracking-tight  f4'>{post}</h1>
</div>
               </>
  )
}

export default InsideImage