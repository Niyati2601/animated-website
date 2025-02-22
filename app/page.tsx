"use client";

import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Link from "next/link";
import infoCards from "./libs/InfoCards";
import { CheckCheck, LucideIcon } from "lucide-react";
import { ReactElement } from "react";
import pricingCards from "./libs/PricingCards";

export default function Home() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      <Navbar />
      <header
        id="home"
        className="flex flex-col md:flex-row w-full h-screen items-center justify-between p-8 relative overflow-x-hidden overflow-y-hidden"
      >
        <div className="flex flex-col w-full md:w-1/2 max-w-7xl">
          <div className="">
            <h1 className="text-4xl font-black md:text-8xl">Insightful</h1>
            <h2 className="text-md md:text-2xl">Start growing today!</h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-500">
            Insightful is an AI-powered sales optimization tool that provides
            data-driven insights to boost sales performance.
          </p>
          <div className="w-full flex items-center justify-center md:justify-start gap-4 mt-4">
            <button className="w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors">
              Try 7 days free!
            </button>
            <button className="w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors">
              Contact
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end relative">
          <Spline
            className="w-full flex scale-[.5] sm:scale-[.75] lg:scale-[1] items-center justify-center md:justify-start"
            scene="https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode"
          />
        </div>
      </header>

      <section
        id="about"
        className="h-fit min-h-screen w-full flex relative items-center justify-center p-8"
      >
        <div className="absolute -z-10 h-full w-full overflow-hidden">
          <Spline scene="https://prod.spline.design/CeEdiDxlV-khoM4e/scene.splinecode" />
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className="text-4xl md:text-5xl font-bold">
            No more time wasted!
          </h3>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-2 justify-between relative">
            {infoCards.map((infoCard) => {
              return (
                <InfoCard
                  key={infoCard.id}
                  Icon={infoCard.icon}
                  title={infoCard.title}
                >
                  <p className="text-sm sm:text-base text-center md:text-left">
                    {infoCard.bodyText}
                  </p>
                </InfoCard>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="h-fit min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8"
      >
        <h4 className="text-4xl md:text-5xl font-bold">Pricing</h4>
        <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-2 lg:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 items-center h-fit w-full max-w-7xl gap-8">
          {pricingCards.map((pricingCard) => {
            return (
              <PricingCard
                oneliner={pricingCard.oneliner}
                title={pricingCard.title}
                price={pricingCard.price}
                benefits={pricingCard.benefits}
                key={pricingCard.id}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
interface InfoCardProps {
  title: string;
  Icon: LucideIcon;
  children: ReactElement<any, any>;
}

function InfoCard({ title, Icon, children }: InfoCardProps) {
  return (
    <div className="w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}
interface IPricingCardProps {
  title: string;
  price: number;
  benefits: string[];
  oneliner: string;
}

function PricingCard({ title, price, benefits, oneliner }: IPricingCardProps) {
  return (
    <div className="h-fit w-full rounded flex flex-col p-8 gap-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
      <div className="flex flex-col gap-2">
        <div>
          <h6 className="text-2xl">{title}</h6>
          <p className="text-sm text-zinc-500">{oneliner}</p>
        </div>
        <p className="text-4xl font-bold">
          ${price}{" "}
          <span className="text-sm font-normal text-zinc-500">/ Month</span>
        </p>
      </div>
      <button className="bg-fuchsia-700 rounded p-2 text-sm transition-colors hover:bg-fuchsia-800">
        Try 7 days free!
      </button>
      <div className="flex flex-col w-full gap-4">
        {benefits.map((benefit, i) => {
          return (
            <p
              key={i}
              className="text-sm text-zinc-500 flex items-center gap-2"
            >
              <span>
                <CheckCheck />
              </span>
              {benefit}
            </p>
          );
        })}
      </div>
    </div>
  );
}
function Navbar() {
  return (
    <div className="w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between p-4">
        <h6 className="font-bold">Insightful</h6>
        <ul className="flex gap-8">
          <li>
            <Link
              href="#home"
              className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
            >
              Pricing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
