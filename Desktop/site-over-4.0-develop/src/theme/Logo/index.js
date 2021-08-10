/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const sizes = {
  small: {
    width: 360,
    height: 80,
  },
  large: {
    width: 80,
    height: 70,
  },
};

// eslint-disable-next-line react/prop-types
export function Logo({ size }) {
  const { width, height } = sizes[size] || sizes.small;
  return (
    <Link
      href="/"
    >
      <a>
        <Image
          src="/images/logo-overstack.png"
          width={width}
          height={height}
          alt="Logo Overstack"
        />
      </a>
    </Link>
  );
}
