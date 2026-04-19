export interface LifeEvent {
  year: string;
  title: string;
  description: string;
  location?: string;
  tags: string[];
  category: 'academic' | 'travel' | 'personal' | 'milestone';
  image: string;
}

export const lifeEvents: LifeEvent[] = [
  {
    year: "2006",
    title: "The Genesis",
    description: "Born into the world, the journey of the Chronos Archivist begins. A spark of curiosity ignited.",
    category: 'milestone',
    tags: ["Origin", "New Beginning"],
    image: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    year: "2012-2022",
    title: "Foundations of Learning",
    description: "Completed primary and secondary schooling. Developed a deep fascination for mathematics and the logical structures of the world.",
    category: 'academic',
    tags: ["School", "Growth", "Logic"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000"
  },
  {
    year: "2018",
    title: "First Mountain Trek",
    description: "A childhood trip to the Himalayas that broadened my horizons and instilled a love for exploration.",
    location: "Himalayas",
    category: 'travel',
    tags: ["Childhood", "Nature", "Adventure"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    year: "2022-2024",
    title: "The Crucible: Allen",
    description: "Ventured into the intense world of JEE preparation. Spent countless nights in Kota mastering the arts of Physics, Chemistry, and Mathematics.",
    location: "Kota, Rajasthan",
    category: 'academic',
    tags: ["JEE", "Allen", "Resilience"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000"
  },
  {
    year: "2024",
    title: "The Transition: NSUT",
    description: "Successfully entered Netaji Subhas University of Technology (NSUT). The beginning of my professional journey in Computer Science and AI.",
    location: "New Delhi",
    category: 'milestone',
    tags: ["NSUT", "B.Tech", "AI"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
  },
  {
    year: "2024",
    title: "Coastal Escape",
    description: "After the rigors of JEE, a much-needed trip to the beaches of South India to rejuvenate and reflect.",
    location: "South India",
    category: 'travel',
    tags: ["Recharging", "Reflection"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    year: "2025",
    title: "Hackathon Odyssey",
    description: "Traveled to Bangalore for my first major national hackathon. Witnessed the heart of India's tech ecosystem.",
    location: "Bangalore",
    category: 'travel',
    tags: ["Hackathon", "Tech Travel"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    year: "2025-Present",
    title: "Building the Future",
    description: "Developing projects like Leviosa and Consilium at NSUT, constantly pushing the boundaries of what's possible with code.",
    category: 'academic',
    tags: ["Innovation", "Development"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
  }
];
