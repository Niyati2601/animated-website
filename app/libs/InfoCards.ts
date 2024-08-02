import {AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon} from "lucide-react";

interface InfoCard {
    title: string;
    icon: LucideIcon;
    bodyText: string;
    id: number;
}

export const infoCards: InfoCard[] = [
    {
        id: 1,
        title: "Next.js",
        icon: ArrowUpNarrowWide,
        bodyText: "A React framework for production",
    },
    {
        id: 2,
        title: "Tailwind",
        icon: ArrowDownNarrowWide,
        bodyText: "Rapidly build modern websites without writing any CSS",
    },
    {
        id: 3,
        title: "Open Source",
        icon: AlarmClockOff,
        bodyText: "Available on GitHub",
    },
]

export default infoCards