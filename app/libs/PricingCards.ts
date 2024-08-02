interface PricingCards {
    price: number;
    title: string;
    benefits: string[];
    id: number;
    oneliner: string;
}

export const pricingCards: PricingCards[] = [
    {
        id: 1,
        price: 0,
        title: "Free",
        benefits: ["10 users included", "2 GB of storage", "Help center access", "Email support"],
        oneliner: "Sign up for free",
    },
    {
        id: 2,
        price: 9.99,
        title: "Pro",
        benefits: ["20 users included", "10 GB of storage", "Help center access", "Priority email support"],
        oneliner: "Get started with Pro",
    },
    {
        id: 3,
        price: 19.99,
        title: "Business",
        benefits: ["30 users included", "15 GB of storage", "Help center access", "Phone and email support"],
        oneliner: "Get started with Business",
    },
]

export default pricingCards