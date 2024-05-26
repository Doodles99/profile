import { memo, SVGProps } from 'react';

const TimeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 54 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.3207 16.2563C19.0087 16.2563 20.6053 14.1543 20.6053 10.5947C20.6053 9.25439 20.349 8.12646 19.8583 7.25488C19.1478 5.8999 17.9247 5.16748 16.3793 5.16748C14.0795 5.16748 12.4535 6.71289 12.4535 8.88086C12.4535 10.917 13.9183 12.3965 15.9325 12.3965C17.1703 12.3965 18.1737 11.8179 18.6718 10.8145H18.6937C18.6937 10.8145 18.723 10.8145 18.7303 10.8145C18.745 10.8145 18.7963 10.8145 18.7963 10.8145C18.7963 13.2314 17.8807 14.6743 16.3353 14.6743C15.4271 14.6743 14.724 14.1763 14.4823 13.3779H12.6C12.9149 15.1138 14.3871 16.2563 16.3207 16.2563ZM16.3866 10.895C15.1708 10.895 14.3065 10.0308 14.3065 8.82227C14.3065 7.64307 15.2147 6.74219 16.3939 6.74219C17.5731 6.74219 18.4813 7.65771 18.4813 8.85156C18.4813 10.0308 17.5951 10.895 16.3866 10.895Z'
      fill='black'
    />
    <path
      d='M23.6965 16.1538C24.3923 16.1538 24.8683 15.6558 24.8683 14.9966C24.8683 14.3301 24.3923 13.8394 23.6965 13.8394C23.008 13.8394 22.5246 14.3301 22.5246 14.9966C22.5246 15.6558 23.008 16.1538 23.6965 16.1538ZM23.6965 10.6606C24.3923 10.6606 24.8683 10.1699 24.8683 9.51074C24.8683 8.84424 24.3923 8.35352 23.6965 8.35352C23.008 8.35352 22.5246 8.84424 22.5246 9.51074C22.5246 10.1699 23.008 10.6606 23.6965 10.6606Z'
      fill='black'
    />
    <path
      d='M31.7241 16H33.5332V14.0298H34.9614V12.4331H33.5332V5.43115H30.8672C28.9995 8.24365 27.5127 10.5947 26.5605 12.3452V14.0298H31.7241V16ZM28.311 12.3672C29.5415 10.1992 30.6401 8.46338 31.6509 6.96924H31.7534V12.4771H28.311V12.3672Z'
      fill='black'
    />
    <path d='M38.99 16H40.8797V5.43115H38.9973L36.2361 7.36475V9.18115L38.8655 7.33545H38.99V16Z' fill='black' />
  </svg>
);

const Memo = memo(TimeIcon);
export { Memo as TimeIcon };
