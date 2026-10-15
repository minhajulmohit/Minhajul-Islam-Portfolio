export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  futurePlans: string[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "bazar-dor",
    name: "Bazar-Dor",
    category: "Grocery Price Comparison Website",
    summary:
      "Explore essential products, compare market prices, and quickly spot rising and falling costs.",
    description:
      "A responsive market-price tracking application that helps users explore essential products, compare prices, and identify price changes across markets.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
      "React Hot Toast",
      "Lucide React",
      "BazarDor Products API",
      "React Fast Marquee",
    ],
    features: [
      "Browse product listings with names, units, prices, and price-change indicators.",
      "Explore products with rising or falling prices and view market-wise details.",
      "Browse by category and sort by default order, lowest price, or highest price.",
      "Sign in with Better Auth and access protected profile and product pages.",
      "Manage profile information with responsive layouts, loading states, and toast feedback.",
    ],
    liveUrl: "https://bazar-dor-wine.vercel.app/",
    githubUrl: "https://github.com/minhajulmohit/Bazar-Dor",
    challenges: [
      "Refining category UI updates and implementing reliable product sorting required careful iteration.",
      "Organizing API-sourced data and presenting it consistently across loading and suspense states took additional effort.",
      "Resolved deployment issues encountered while preparing the application for production.",
    ],
    futurePlans: [
      "Expand Bazar-Dor into a complete grocery shopping experience with live price updates.",
      "Allow users to purchase products directly through the platform.",
      "Integrate secure online payment methods.",
    ],
  },
  {
    slug: "fitlog",
    name: "FitLog",
    category: "Workout Library Interface",
    summary:
      "Explore workouts, plan today's session, save exercises, and track workout metrics.",
    description:
      "A responsive workout-library application for browsing exercises, viewing workout details, organizing today's plan, and saving workouts for later.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
      "Lucide React",
      "React Icons",
      "FitLog API",
    ],
    features: [
      "Browse and sort workouts by duration, calories, or rating.",
      "Open dynamic workout details with step-by-step instructions.",
      "Add exercises to Today's Plan or save workouts for later.",
      "Organize planned and saved workouts with live navbar counters.",
      "Track total workout time, calories, and exercise counts.",
      "Use responsive navigation, skeleton loaders, empty states, and toast feedback.",
    ],
    liveUrl: "https://fit-log-mohit-ff5c.vercel.app/",
    githubUrl: "https://github.com/minhajulmohit/FIT_LOG",
    challenges: [
      "As my first Next.js application, FitLog was an opportunity to learn the framework while building responsive layouts.",
      "Implementing dynamic routes and updating the interface with API data required troubleshooting and iteration.",
      "Worked through these issues to deliver the current application.",
    ],
    futurePlans: [
      "Add authentication and user accounts.",
      "Enable users to consult with trainers remotely.",
      "Develop guided workout experiences that users can follow independently at home.",
    ],
  },
  {
    slug: "bangla-news-24",
    name: "Bangla-News-24",
    category: "Bangla News Website",
    summary:
      "A Bengali news platform with live headlines, category browsing, article details, and protected profiles.",
    description:
      "A responsive Bengali news platform using live news data, with category-based browsing, article details, and authenticated user profiles.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
      "React Hot Toast",
      "News API v2",
    ],
    features: [
      "Homepage with featured news, latest headlines, and most-read stories.",
      "Category pages and detailed articles with images, author, date, and tags.",
      "Email/password, Google, and GitHub sign-in with Better Auth.",
      "Protected profile and news routes with secure sign-out.",
      "Server-side news fetching with API revalidation and responsive layouts.",
    ],
    liveUrl: "https://banglanews24.vercel.app/",
    githubUrl: "https://github.com/minhajulmohit/Bangla-News-24",
    challenges: [],
    futurePlans: [
      "Add search functionality.",
      "Allow users to bookmark articles and keep reading history.",
      "Add dark mode.",
      "Introduce pagination or infinite scrolling.",
      "Build an admin dashboard for content management.",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
