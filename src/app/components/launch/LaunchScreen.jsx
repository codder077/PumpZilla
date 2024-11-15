"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import LeftBGImg from './LeftBGImg';
import RightBGImg from './RightBGImg';
import Image from 'next/image';
import LaunchInput from './LaunchInput';
import LaunchTextArea from './LaunchTextArea';
import { Montserrat } from 'next/font/google';
import { CustomEase } from 'gsap/all';

let timeOut;
const mont = Montserrat({ subsets: ['cyrillic'] });
gsap.registerPlugin(CustomEase);

const LaunchScreen = () => {
  const searchParams = useSearchParams();
  const [formValue, setFormValue] = useState({
    name: "",
    symbol: "",
    description: "",
    website: "",
    telegram: "",
    twitter: "",
    initialBuy: ""
  });

  const changeFormValue = (name, value) => {
    const key =
      name === 'TOKEN NAME' ? 'name' :
      name === 'TOKEN SYMBOL' ? 'symbol' :
      name === 'TOKEN DESCRIPTION' ? 'description' :
      name === 'WEBSITE' ? 'website' :
      name === 'TELEGRAM' ? 'telegram' :
      name === 'TWITTER' ? 'twitter' :
      'initialBuy';
    let newVal = { ...formValue };
    newVal[key] = value;
    setFormValue(newVal);
  };

  const DebounceChange = (key, value) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      changeFormValue(key, value);
    }, 800);
  };

  const springAni = (e) => {
    gsap.to(e.target, {scale:0.6, duration:0.1});
    gsap.to(e.target, {scale:1, duration:0.5, delay:0.1, ease: CustomEase.create("custom", "M0,0 C0.129,0.352 0.131,0.32 0.19,0.533 0.226,0.664 0.305,1.349 0.378,1.396 0.417,1.421 0.534,0.9 0.6,0.9 0.647,0.9 0.701,1.167 0.76,1.172 0.8,1.174 0.862,0.937 0.903,0.937 0.943,0.936 1,1 1,1 ")});
    
  }

  useEffect(() => {
    if (searchParams.get('launch') === 'true') {
      gsap.set('#LaunchScreen', { pointerEvents: 'all', display: 'flex' });
      gsap.to('#LaunchScreen', { opacity: 1 });
      gsap.to('#HomeScreen', { opacity: 0 });
      gsap.set('#HomeScreen', { pointerEvents: 'none', delay: 0.3, display: 'none' });
    } else {
      gsap.set('#HomeScreen', { pointerEvents: 'all', display: 'block' });
      gsap.to('#HomeScreen', { opacity: 1 });
      gsap.to('#LaunchScreen', { opacity: 0 });
      gsap.set('#LaunchScreen', { pointerEvents: 'none', delay: 0.2, display: 'none' });
    }
  }, [searchParams]);

  return (
    <div id="LaunchScreen" className="absolute z-10 md:pt-20 pt-16 md:pl-16 pl-4 md:pr-0 pr-4 top-0 left-0 hidden pointer-events-none opacity-0 w-full h-dvh">
      <LeftBGImg />
      <RightBGImg />

      <div className="flex relative z-10 p-4 sm570:pt-4 pt-3 w-full h-full gap-4 md:flex-row flex-col justify-between items-center">
        <div className="md:w-2/5 w-full md:h-full h-[47%] flex lg890md:pl-10 md:pl-4 justify-start items-center">
          <div className="rounded-3xl overflow-hidden relative xl1120lg:w-4/5 md:w-11/12 w-full md:h-3/4 h-full bg-blackPry">
            <div className="flex justify-center items-center sm570:gap-4 gap-2 md:flex-col sm570:flex-row flex-col w-full h-full lg:p-8 md:p-4 sm570:p-8 p-2 relative z-10">
              <div className="md:w-1/2 sm570:w-auto w-[20%] md:h-auto sm570:h-[90%] h-auto aspect-square rounded-full p-1 flex justify-center items-center relative bg-gradient-to-bl from-[#5E6EFF] to-[#B910BC]">
                <Image src={'/profile.png'} alt="profile" width={100} height={100} className="w-full h-full object-contain object-center" />
                <button className="absolute sm570:bottom-0 -bottom-1 sm570:right-0 -right-1 flex justify-center items-center sm570:p-2 p-1 sm570:rounded-2xl rounded-md border-4 border-blackPry bg-gradient-to-b from-bluePry to-[#5E6EFF]">
                  <Image src={'/pencil.png'} alt="edit" width={40} height={40} className="xl:size-7 sm570:size-5 size-2" />
                </button>
              </div>
              <div className=' w-full flex md:flex-col sm570:flex-row flex-col justify-center items-center sm570:gap-4 gap-0 sm570:px-0 px-4'>
              <LaunchInput DebounceChange={DebounceChange} bgClr={'#1B1C1E'} font={'beat'} name={'TOKEN NAME'} required={true} type={'text'} />
              <LaunchInput DebounceChange={DebounceChange} bgClr={'#1B1C1E'} font={'beat'} name={'TOKEN SYMBOL'} required={true} type={'text'} />
              </div>
            </div>
            <Image src={"/form bg.png"} alt="bg" aria-hidden width={200} height={300} className="pointer-events-none w-full h-full absolute top-0 left-0 z-0 object-cover object-center mix-blend-color-dodge" />
          </div>
        </div>
        <div className="md:w-1/2 w-full md:h-full h-[92%] flex justify-end items-center xl1120lg:px-14 lg:px-10 md:px-8 px-0 xl:pb-10 lg:pb-8 md:pb-6 pb-4 xl:pt-10 lg:pt-8 md:pt-6 sm570:py-12 py-6 ">
          <div className="w-full h-full">
            <h4 className={`${mont.className} font-black text-white xl:text-4xl lg:text-3xl sm570:text-2xl text-lg w-full md:text-center sm570:text-left text-center md:pt-0 sm570:pt-1 pt-5`}>LAUNCH YOUR TOKEN !</h4>
            <p className={`bg-gradient-to-r from-[#4EA5FF] to-[#B972FF] bg-clip-text text-transparent ${mont.className} font-medium xl:py-2 py-0 pb-3 md:text-center sm570:text-left text-center xl:text-base lg:text-sm sm570:text-xs text-[10px]`}>No presale, No Team Allocation, Lower Gas</p>
            <div className=' w-full flex justify-center items-center md:gap-0 gap-2 md:flex-col sm570:flex-row flex-col'>
            <LaunchTextArea DebounceChange={DebounceChange} bgClr={'#111111'} font={'bebas'} name={'TOKEN DESCRIPTION'} required={false} type={'text'} />
            <LaunchInput DebounceChange={DebounceChange} bgClr={'#111111'} font={'bebas'} name={'WEBSITE'} required={false} type={'text'} />
            </div>
            <div className="flex w-full justify-center items-center sm570:gap-2 gap-1">
              <LaunchInput DebounceChange={DebounceChange} bgClr={'#111111'} font={'bebas'} name={'TELEGRAM'} required={false} type={'text'} />
              <LaunchInput DebounceChange={DebounceChange} bgClr={'#111111'} font={'bebas'} name={'TWITTER'} required={false} type={'text'} />
            </div>
            <div className=' w-full flex md:flex-col sm570:flex-row flex-col justify-center items-center md:gap-0 sm570:gap-2 gap-0'>
            <LaunchInput DebounceChange={DebounceChange} bgClr={'#111111'} font={'bebas'} name={'INITIAL BUY'} required={false} type={'text'} />
            <div className="w-full flex justify-center sm570:my-3 my-1 items-center">
              <button onClick={springAni} className="font-cheese sm570:py-2 py-1 sm570:px-10 px-8 xl:text-4xl lg:text-3xl sm570:text-2xl text-lg mx-auto rounded-xl text-white bg-gradient-to-r from-[#FF4672] to-[#B972FF]" style={{ boxShadow: '5px 5px 10px rgba(0,0,0,0.3)' }}>LAUNCH</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function LaunchPageWrapper() {
  return (
    <Suspense>
      <LaunchScreen />
    </Suspense>
  );
}
