import { Building2, PencilRuler, Paintbrush, Armchair } from "lucide-react";

export const services = [
  {
    id: "architecture",
    number: "01",
    title: "Architectural Design",
    description: "Creating visionary structures that harmonize with their environment while pushing the boundaries of modern aesthetics and functional living.",
    tags: ["Residential", "Commercial", "Master Planning"],
    icon: Building2,
  },
  {
    id: "interior",
    number: "02",
    title: "Interior Architecture",
    description: "Crafting spatial experiences that elevate daily life, balancing luxurious materials with intuitive layouts and bespoke detailing.",
    tags: ["Space Planning", "Custom Millwork", "Material Selection"],
    icon: PencilRuler,
  },
  {
    id: "styling",
    number: "03",
    title: "Interior Styling",
    description: "Curating the final layer of your space with hand-selected art, objects, and furnishings that reflect your unique narrative.",
    tags: ["Art Curation", "Furniture Sourcing", "Decor"],
    icon: Paintbrush,
  },
  {
    id: "furniture",
    number: "04",
    title: "Custom Furniture",
    description: "Designing bespoke furniture pieces tailored exclusively for your space, ensuring perfect proportion, comfort, and uncompromising quality.",
    tags: ["Bespoke Design", "Material Exploration", "Craftsmanship"],
    icon: Armchair,
  },
];
