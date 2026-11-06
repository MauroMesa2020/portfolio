import javaLogo from "../assets/java.svg";
import typescriptLogo from "../assets/typescript.svg";
import springLogo from "../assets/spring.svg";
import nodeLogo from "../assets/node.svg";
import dotnetLogo from "../assets/dotnet-svgrepo-com.svg";
import databaseLogo from "../assets/database.svg";
import dockerLogo from "../assets/docker.svg";
import aiLogo from "../assets/ai-logo.svg";
import pythonLogo from "../assets/python.svg";
import powerbiLogo from "../assets/powerbi.svg";
import postmanLogo from "../assets/postman.svg";
import kafkaLogo from "../assets/kafka.svg";
import nextLogo from "../assets/next-js.svg";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwind.svg";
import paymentGatewayLogo from "../assets/payment-gateway.svg";

export interface Technology {
    name: string;
    slug: string;
    logo: string;
}

export const technologies: Technology[] = [
    {
        name: "Java",
        slug: "java",
        logo: javaLogo,
    },
    {
        name: "Spring",
        slug: "spring",
        logo: springLogo,
    },
    {
        name: "Node.js",
        slug: "node",
        logo: nodeLogo,
    },
    {
        name: "TypeScript",
        slug: "typescript",
        logo: typescriptLogo,
    },
    {
        name: ".NET",
        slug: "dotnet",
        logo: dotnetLogo,
    },
    {
        name: "Python",
        slug: "python",
        logo: pythonLogo,
    },
    {
        name: "AI",
        slug: "ai",
        logo: aiLogo,
    },
    {
        name: "Kafka",
        slug: "kafka",
        logo: kafkaLogo,
    },
    {
        name: "React",
        slug: "react",
        logo: reactLogo,
    },
    {
        name: "Next.js",
        slug: "next",
        logo: nextLogo,
    },
    {
        name: "Tailwind",
        slug: "tailwind",
        logo: tailwindLogo,
    },
    {
        name: "Payment Gateways",
        slug: "payment-gateway",
        logo: paymentGatewayLogo,
    },
    {
        name: "Databases",
        slug: "database",
        logo: databaseLogo,
    },
    {
        name: "Docker",
        slug: "docker",
        logo: dockerLogo,
    },
    {
        name: "Postman",
        slug: "postman",
        logo: postmanLogo,
    },
    {
        name: "Power BI",
        slug: "powerbi",
        logo: powerbiLogo,
    },
];

