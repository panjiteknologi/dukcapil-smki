import type { ImgHTMLAttributes } from 'react';
import KemendagriLogo from './logo-kemendagri.svg';

const Logo = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src={KemendagriLogo}
      alt="Logo Kementerian Dalam Negeri"
      width={40}
      height={40}
      {...props}
    />
  );
};

export default Logo;
