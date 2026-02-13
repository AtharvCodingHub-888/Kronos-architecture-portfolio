export interface Project {
    slug: string;
    title: string;
    tag: string;
    year: string;
    location: string;
    type: string;
    description: string;
    heroImage: string;
    gallery: string[];
}

export const PROJECTS: Project[] = [
    {
        slug: "villa-aether",
        title: "Villa Aether",
        tag: "Concrete · Cliffside",
        year: "2024",
        location: "Santorini, Greece",
        type: "Residential Villa",
        description:
            "Perched on a volcanic cliff edge, Villa Aether is a meditation on raw concrete and infinite horizon. The residence dissolves the boundary between interior sanctuary and Aegean expanse through floor-to-ceiling glazing, cantilevered terraces, and a material palette drawn directly from the island's geological memory. Every surface is a deliberate act of restraint — board-formed concrete, honed basalt, and brushed bronze — allowing light and landscape to become the primary ornament.",
        heroImage:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
            "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=900&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
        ],
    },
    {
        slug: "the-monolith",
        title: "The Monolith",
        tag: "Brutalist · Tower",
        year: "2024",
        location: "Tokyo, Japan",
        type: "Mixed-Use Tower",
        description:
            "Rising from Tokyo's Shibuya district, The Monolith is a 42-storey vertical city that rejects the glass curtain wall orthodoxy in favour of deep-set concrete façades, weathering steel screens, and strategically carved voids that channel daylight into the building's core. The programme interweaves residences, ateliers, and contemplative garden floors — each level articulated as a distinct spatial event within a unified monumental form.",
        heroImage:
            "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=80",
            "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=900&q=80",
            "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=900&q=80",
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=900&q=80",
            "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=900&q=80",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
            "https://images.unsplash.com/photo-1429681601148-75510b2cef43?w=900&q=80",
        ],
    },
    {
        slug: "zen-pavilion",
        title: "Zen Pavilion",
        tag: "Wood · Japan",
        year: "2023",
        location: "Kyoto, Japan",
        type: "Cultural Pavilion",
        description:
            "Set within a restored maple forest on the outskirts of Kyoto, Zen Pavilion is an exercise in architectural silence. The structure hovers on slender steel stilts above a reflecting pool, its cross-laminated timber shell folding around a single ceremonial void. Interior and exterior merge through operable timber screens that slide away entirely, transforming the enclosure into a covered terrace for meditation, tea ceremony, and seasonal contemplation.",
        heroImage:
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
            "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=900&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80",
            "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=900&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
            "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=900&q=80",
        ],
    },
    {
        slug: "glass-chapel",
        title: "Glass Chapel",
        tag: "Sacred · Light",
        year: "2023",
        location: "Reykjavík, Iceland",
        type: "Sacred Architecture",
        description:
            "Conceived as a vessel for light rather than mass, Glass Chapel replaces the traditional stone nave with a double-skin glass envelope that captures Iceland's extreme atmospherics — midnight sun, aurora, blizzard — and transforms them into interior experience. The structural system of tapered concrete ribs fans outward like frozen breath, supporting insulated glass panels that shift from transparent to translucent as the sun arcs across the sky.",
        heroImage:
            "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=900&q=80",
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=900&q=80",
            "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=900&q=80",
            "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=900&q=80",
            "https://images.unsplash.com/photo-1482235225574-c37692835cf3?w=900&q=80",
            "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=900&q=80",
            "https://images.unsplash.com/photo-1429681601148-75510b2cef43?w=900&q=80",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
        ],
    },
    {
        slug: "horizon-house",
        title: "Horizon House",
        tag: "Desert · Cantilever",
        year: "2022",
        location: "Scottsdale, Arizona",
        type: "Residential Villa",
        description:
            "Horizon House addresses the Sonoran desert as both adversary and collaborator. A massive rammed-earth wall anchors the residence to the ridge while a 14-metre steel-and-glass cantilever extends into the void, framing a panorama of saguaro, mesa, and endless sky. The plan unfolds as a linear promenade from cool, earthen entry courts to the fully exposed living platform — a choreographed journey from shadow to blinding light.",
        heroImage:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
            "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=900&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
        ],
    },
    {
        slug: "oasis-tower",
        title: "Oasis Tower",
        tag: "High-rise · Water",
        year: "2022",
        location: "Dubai, UAE",
        type: "Luxury High-Rise",
        description:
            "Oasis Tower reimagines the supertall typology as a living ecosystem. Sixty floors of residences wrap around a full-height atrium containing cascading gardens, mist channels, and a 30-metre interior waterfall that descends from the sky lobby to the ground-floor oasis. The façade — a parametric lattice of anodised aluminium — filters the desert sun into dappled, forest-like light conditions within each apartment, while operable louvres allow residents to calibrate their own relationship with the city beyond.",
        heroImage:
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=80",
            "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=900&q=80",
            "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=900&q=80",
            "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=900&q=80",
            "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=900&q=80",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
            "https://images.unsplash.com/photo-1429681601148-75510b2cef43?w=900&q=80",
        ],
    },
];

export const SERVICES = [
    {
        num: "01",
        title: "Residential Villas",
        desc: "Ultra-luxury residences sculpted from raw concrete, glass, and light — each a monument to the way its owner sees the world.",
    },
    {
        num: "02",
        title: "Cultural Spaces",
        desc: "Museums, galleries, and pavilions that transform visitors through spatial drama, material honesty, and choreographed light.",
    },
    {
        num: "03",
        title: "Landscape Architecture",
        desc: "Curated terrain and water features that extend the architectural narrative into nature — geometry meeting the organic.",
    },
    {
        num: "04",
        title: "Interior Atelier",
        desc: "Bespoke interiors where every surface, joint, and fixture is resolved to the millimetre. Material obsession at scale.",
    },
    {
        num: "05",
        title: "Urban Masterplanning",
        desc: "Neighbourhood-scale visions that balance density with serenity, infrastructure with beauty, commerce with community.",
    },
];
