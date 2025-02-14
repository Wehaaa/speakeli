'use client'

import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';

interface CallToActionProps {
  size?: 'lg' | 'sm';
  text?: string;
  secondaryText?: string;
  buttonText?: string;
  theme?: 'dark' | 'light';
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  size = 'lg',
  text = "Besoin d'aide pour définir l'offre qui vous correspond le mieux ?",
  secondaryText = null,
  buttonText = "Let's go",
  theme = 'dark',
}) => {

  const containerStyles = {
    dark: '',
    light: 'text-slate-900 border border-orange-200'
  };

  const buttonVariant = 'default';
  const buttonThemeClass = theme === 'dark' ? 'bg-white shadow-2xl shadow-orange-900/20' : 'bg-orange-300/70 hover:bg-orange-300';
  const buttonSizeClass = size === 'lg' ? 'h-16 px-8 text-xl md:text-2xl' : 'h-8 px-4 py-0 text-lg';
  
  const buttonShadowClass = theme === 'dark' ? 'shadow-2xl shadow-orange-900/20' : '';

 const arrowClasses = `
    ${theme === 'dark' ? 'text-orange-300' : 'text-white'}
  `;

  const bodyClasses = `
    relative
    w-full
    px-8 
    ${size === 'lg' ? 'xl:px-32 py-24' : 'py-8'}
    ${containerStyles[theme]}
    relative
    overflow-hidden
  `;

  const contentClasses = `
    relative z-10 
    mx-auto
    flex flex-col items-center
    text-center
    gap-6
    ${size === 'lg' ? 'md:max-w-lg' : 'md:flex-row md:items-end md:justify-between md:text-left'}
  `;

  const titleClasses = `
    font-bebas
    leading-[135%]
    ${size === 'lg' ? 'text-2xl md:text-4xl' : 'text-2xl md:text-3xl min-h-12 flex items-center'}
  `;

  const secondaryTextClass = `
    text-sm
    ${theme === 'dark' ? 'text-zinc-900/70' : 'text-slate-600'}
  `;

  return (
    <div className={bodyClasses}>
      <div className={contentClasses}>
        <div className={titleClasses}>{text}</div>
        {size === 'lg' && secondaryText && (
          <div className={secondaryTextClass}>
            {secondaryText}
          </div>
        )}
        <div className={`relative ${buttonShadowClass}`}>
          <Link href="/contact" className={buttonVariants({ variant: buttonVariant, size: "lg", className: `${buttonThemeClass} ${buttonSizeClass}` })}>
            {buttonText}
            <span className={arrowClasses}>
              <ArrowRightIcon className="w-6 h-6 ml-2 " />
            </span>
          </Link>
        </div>

      </div>
      {theme === 'dark' ? (
        size === 'lg' ? (
          <div className="absolute inset-0 z-0 bg-orange-200">
            <div className="absolute left-0 right-0 top-50 translate-y-[-75%] m-auto w-[60%] aspect-square rounded-full bg-yellow-100 opacity-30 blur-[100px]"></div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--color-orange-300)_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-orange-200">
            <div className="absolute left-0 top-50 translate-x-[-15%] translate-y-[-75%] m-auto w-[60%] aspect-square rounded-full bg-yellow-100 opacity-30 blur-[100px]"></div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--color-orange-300)_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>
        )
      ) : (
        size === 'lg' ? (
          <div className="absolute inset-0 z-0 bg-white">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--color-orange-200)_1px,transparent_1px)] [background-size:16px_16px]"></div>      
            <div className="absolute left-0 right-0 top-50 translate-y-[-75%] m-auto w-[70%] aspect-square rounded-full bg-white opacity-60 blur-[100px]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-white">
            <div className="absolute z-10 left-0 top-50 translate-x-[-15%] translate-y-[-75%] m-auto w-[70%] aspect-square rounded-full bg-white opacity-60 blur-[100px]"></div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--color-orange-200)_1px,transparent_1px)] [background-size:16px_16px]"></div> 
          </div>
        )
      )}
    </div>
  );
};

export default CallToAction;