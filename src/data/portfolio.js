
import { Database, Code, Server, FileJson, Layers, Globe, Cpu } from 'lucide-react';
import avatar from '../assets/Odoo main apps.webp';

export const personalInfo = {
    name: "Heffaf Mohamed Hicham",
    avatar,
    role: "Odoo ERP Developer | Python & ERP Customization Specialist",
    subtitle: "Building scalable business systems with Odoo & Python",
    description: "Specialized in crafting high-performance ERP solutions, custom Odoo modules, and seamless third-party integrations. Passionate about automating business workflows.",
    social: {
        github: "https://github.com/hicham10e",
        linkedin: "https://linkedin.com/in/hicham-heffaf",
        email: "mailto:mamadoheffaf@gmail.com"
    }
};

export const skills = [
    { name: "Odoo Development", icon: Layers, level: "Expert", desc: "Custom modules, ORM, Views, Security" },
    { name: "Python", icon: Code, level: "Expert", desc: "Core logic, Algorithms, Automation" },
    { name: "PostgreSQL", icon: Database, level: "Advanced", desc: "Database design, Query optimization" },
    { name: "REST APIs", icon: Server, level: "Advanced", desc: "Endpoints, Authentication, Integration" },
    { name: "React & JS", icon: FileJson, level: "Intermediate", desc: "Frontend enhancements" },
    { name: "System Integration", icon: Globe, level: "Expert", desc: "Connecting Odoo with external apps" },
];

export const projects = [
    {
        title: "Appointment Management System",
        category: "Odoo Module",
        description: "Developed a comprehensive appointment scheduling module for Odoo, featuring calendar views, email notifications, and automated reminders.",  
        tech: ["Odoo 17", "Python", "PostgresSQL", "QWeb",'Mail Templates','Security Rules'],
        github: "#"
    },
    {
        title: "Advanced HR Management Enhancement Module for Odoo",
        category: "Full Stack Odoo Customization",
        description: "Enhanced Odoo's HR module by adding custom features such as automated leave approvals, performance tracking dashboards, and integration with third-party payroll systems.",
        tech: [ "Python", "Odoo 17", "PostgreSQL", "Xml", "QWeb"],
        github: "#"
    },
    {
        title: "Real Estate Management System",
        category: "Odoo Custom Module", 
        description: "•	Designed and implemented 5 custom data models with validation rules, custom views and security access controls and reports.",
        tech: ["Python", "Odoo 17", "QWeb", "Wkhtmltopdf"],
        github: "#"
    }
];

export const experience = [
    {
        role: " Odoo Developer",
        company: "Freelance",
        period: "2025 - Present",
        desc: "Specializing in custom Odoo module development, system integrations, and workflow automation for diverse business needs."
    },
  
];
