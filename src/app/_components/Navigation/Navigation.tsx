import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { FaDiscord, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { NavigationContainer } from './NavigationContainer';

import { orbitron } from '~/app/fonts';
import styles from './styles.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/blog', label: 'Blog' },
];

const socialLinks = [
  { href: 'https://x.com/tuatmcc', icon: FaXTwitter },
  { href: 'https://x.com/tuatkyopro', icon: FaXTwitter },
  { href: 'https://github.com/tuatmcc', icon: FaGithub },
];

interface Props {
  children: ReactNode;
}

export const Navigation: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <NavigationContainer>
        <div className="w-full h-full pl-8 pt-24 overflow-y-auto flex flex-col justify-between">
          <ul className="flex flex-col gap-8">
            {links.map((link) => (
              <li
                key={link.href}
                className={classNames(
                  styles.linkItem,
                  orbitron.className,
                  ' relative flex text-gray-100 text-2xl tracking-wider',
                )}
              >
                <a href={link.href} className=" flex justify-end w-full p-2">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative">
            <div className="absolute top-0 right-0 w-[4px] bottom-0 bg-blue-600" />
            <ul className="relative flex flex-col gap-8 p-4">
              {socialLinks.map((socialLink) => (
                <li key={socialLink.href} className="flex">
                  <a
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 justify-end"
                  >
                    <socialLink.icon className="text-gray-200 w-6 h-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </NavigationContainer>
    </>
  );
};
