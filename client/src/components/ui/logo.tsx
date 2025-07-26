import logoImage from "@assets/logoxxxx_1752746948987.png";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 200, height = 80 }: LogoProps) {
  return (
    <img
      src={logoImage}
      alt="AEMOS VOLTURA"
      className={`${className} filter brightness-0 invert`}
      style={{ 
        width, 
        height, 
        objectFit: 'contain',
        filter: 'brightness(0) invert(1)'
      }}
    />
  );
}