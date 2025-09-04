"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// No carousel needed
const Companies = () => {
  return (
    <section className="text-center">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary mb-2">About AAUCO</h2>
        <p className="text-lg text-secondary mb-6">
          from coffee belt to global stage
        </p>
        <div className="flex flex-col items-center gap-2">
          {/* Row 1: 5 flags (emojis) */}
          <div className="flex justify-center gap-6 mb-2 text-6xl">
            <span role="img" aria-label="Philippines">
              🇵🇭
            </span>
            <span role="img" aria-label="Canada">
              🇨🇦
            </span>
            <span role="img" aria-label="UAE">
              🇦🇪
            </span>
            <span role="img" aria-label="Spain">
              🇪🇸
            </span>
            <span role="img" aria-label="Taiwan">
              🇹🇼
            </span>
          </div>
          {/* Row 2: 11 flags (emojis) */}
          <div className="flex justify-center gap-6 text-6xl">
            <span role="img" aria-label="Thailand">
              🇹🇭
            </span>
            <span role="img" aria-label="Vietnam">
              🇻🇳
            </span>
            <span role="img" aria-label="South Korea">
              🇰🇷
            </span>
            <span role="img" aria-label="Japan">
              🇯🇵
            </span>
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            <span role="img" aria-label="Malaysia">
              🇲🇾
            </span>
            <span role="img" aria-label="Singapore">
              🇸🇬
            </span>
            <span role="img" aria-label="Laos">
              🇱🇦
            </span>
            <span role="img" aria-label="Myanmar">
              🇲🇲
            </span>
            <span role="img" aria-label="Brunei">
              🇧🇳
            </span>
            <span role="img" aria-label="Cambodia">
              🇰🇭
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
