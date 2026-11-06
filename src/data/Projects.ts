// import projectImage from "../assets/prueba.png";
// imagenes

import provateProject from "../assets/privateP.png";

import agentGraph from "../assets/agentGraph.png";

import faceRecognition from "../assets/faceRegognition.png";

import pythonSec from "../assets/CybersecurityLogo.png";

import portFolio from "../assets/portfolio.png";


export interface Project {
    name: string;
    slug: string;
    image: string;
    technologies: string[];
    description: string;
    github?: string;
    company?: string;
    responsibilities?: string[];
    architecture?: string;
}

export const projects: Project[] = [
    {
        name: "AI-Powered Web Application",
        slug: "ai-powered-web-application",
        image: provateProject,

        technologies: [
            "python",
            "java",
            "ai",
            "database",
            "react",
            "tailwind",
            "typescript",
            "docker",
            "postman",
            "powerbi",
        ],

        description:
            "Full Stack development of an AI-powered cybersecurity web application, including backend and frontend development, REST APIs, LLM and BERT integration, automated processes, and external service integrations.",

        company: "MeerKatSys",

        architecture: "Layered architecture - Microservices",

        responsibilities: [
            "Requirements gathering and analysis",
            "Risk analysis and project planning",
            "Backend and frontend development",
            "REST API development",
            "LLM and BERT integration",
            "Automated testing with Playwright",
            "Scheduled process automation",
            "External tool integration",
            "Technical documentation",
        ],
    },

    {
        name: "Graph-Based AI Agents",
        slug: "graph-based-ai-agents",
        image: agentGraph,
        technologies: [
            "typescript",
            "node",
            "ai",
            "docker",
        ],
        description:
            "Custom AI agent framework built from scratch using graph-based workflows, where each node represents actions such as LLM calls, tool execution, state transitions, and error handling.",
        
        architecture: "Layered architecture - Graph-Based Workflow Engine",
        
        github: "https://github.com/MauroMesa2020/code_agent_w_nodes",
    },

        {
        name: "Python Security",
        slug: "Pyton security",
        image: pythonSec,
        technologies: [
            "python",
            "typescript",
            "react",
            "tailwind",
            "docker",
        ],
        description:
            "Security-analysis-app provides automated static and dynamic code analysis using Semgrep and OWASP ZAP, combining Python and React for seamless vulnerability detection.",
        
        architecture: "Layered architecture",
        
        github: "https://github.com/MauroMesa2020/security-app",
    },

    {
        name: "AI Facial Recognition",
        slug: "ai-facial-recognition",
        image: faceRecognition,
        technologies: [
            "dotnet",
            "ai",
            "database",
            "docker",
        ],
        description:
            "A microservice-based facial recognition system using AI models for face detection and embedding generation.",
        github: "https://github.com/MauroMesa2020/facial-recognition",
    },

    {
        name: "Portfolio",
        slug: "portfolio",
        image: portFolio,
        technologies: [
            "typescript",
            "react",
            "tailwind",
        ],
        description:
            "Personal portfolio built with React, TypeScript and Tailwind CSS.",
        github: "https://github.com/MauroMesa2020/portfolio",
    },
];



