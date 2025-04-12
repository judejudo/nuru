import React from "react";

interface SocialIconProps {
  icon: string;
  handle: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ icon, handle }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <div className="text-white text-xl">{handle}</div>
    </div>
  );
};
