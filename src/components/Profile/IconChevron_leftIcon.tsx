import { memo, SVGProps } from 'react';

const IconChevron_leftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.27415 12.0006L16.2842 4.99053C16.4795 4.79527 16.4795 4.47868 16.2842 4.28342L15.7185 3.71774C15.5232 3.52247 15.2067 3.52247 15.0114 3.71774L7.08212 11.647C6.88685 11.8423 6.88685 12.1589 7.08212 12.3541L15.0114 20.2834C15.2067 20.4787 15.5232 20.4787 15.7185 20.2834L16.2842 19.7177C16.4795 19.5225 16.4795 19.2059 16.2842 19.0106L9.27415 12.0006Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(IconChevron_leftIcon);
export { Memo as IconChevron_leftIcon };
