import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
    return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) return { title: "Project Not Found — KRONOS" };
    return {
        title: `${project.title} — KRONOS Architecture`,
        description: project.description.slice(0, 160),
    };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) notFound();

    const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
    const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

    return (
        <ProjectDetailClient project={project} nextProject={nextProject} />
    );
}
