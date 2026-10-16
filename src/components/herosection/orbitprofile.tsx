import Image from "next/image";
import Profile from "../../../public/asset/PPN.jpg";
import { FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiMongodb,
  SiBetterauth,
} from "react-icons/si";

const OrbitProfile = () => {
  const innerIcons = [
    { Icon: FaHtml5, color: "text-orange-500" },
    { Icon: FaCss, color: " text-purple-500" },
    { Icon: FaJs, color: "text-yellow-500" },
    { Icon: BiLogoTypescript, color: "text-blue-400" },
    { Icon: FaNodeJs, color: "text-[#339933]" },
  ];
  const outerIcons = [
    { Icon: SiNextdotjs, color: "text-heading" },
    { Icon: SiTailwindcss, color: "text-cyan-400" },
    { Icon: SiGit, color: "text-red-500" },
    { Icon: SiGithub, color: "text-heading" },
    { Icon: SiMongodb, color: "text-green-400" },
    { Icon: SiBetterauth, color: "text-heading" },
    { Icon: FaReact, color: "text-sky-400" },
  ];

  return (
    <div className="m-10">
      <div className="relative h-32 w-32 shrink-0 sm:h-64 sm:w-64">
        <Image
          src={Profile}
          alt="My Profile"
          fill
          className="rounded-full object-cover"
        ></Image>
        <div className="absolute inset-0 rounded-full border-2 border-accent"></div>
        {/* first orbit */}
        <div className="orbit-ring absolute -inset-[1.75rem] rounded-full border border-accent sm:-inset-[2.5rem]">
          {innerIcons.map(({ Icon, color }, index) => {
            const angle = (index * 360) / innerIcons.length - 90;

            const radius = 50;

            const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

            return (
              <span
                key={index}
                className="orbit-icon absolute flex items-center justify-center rounded-full bg-ink -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className={color}>
                  <Icon className="size-5 sm:size-8" />
                </span>
              </span>
            );
          })}
        </div>
        {/* second orbit */}

        <div className="counter-orbit-ring absolute -inset-[3.75rem] rounded-full border border-accent-2/40 sm:-inset-[5.5rem]">
          {outerIcons.map(({ Icon, color }, index) => {
            const angle = (index * 360) / outerIcons.length - 90;

            const radius = 50;

            const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

            return (
              <span
                key={index}
                className="counter-orbit-icon absolute flex items-center justify-center rounded-full bg-ink -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className={color}>
                  <Icon className="size-5 sm:size-8" />
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrbitProfile;
