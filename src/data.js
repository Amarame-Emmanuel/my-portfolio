// src/data.js

export const projects = [
  {
    id: 1,
    title: "Inventory & POS System",
    shortDesc: "A comprehensive tool for businesses to track stock and manage sales.",
    image: "https://via.placeholder.com/600x400", // Update with real screenshot
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "",
    // Details for the separate page
    problem: "Local businesses were losing money due to manual stock tracking errors and theft.",
    features: [
        "Real-time Stock Dashboard", 
        "Barcode Scanning Integration", 
        "Automated Low-Stock Alerts"
    ],
    learned: "I learned how to manage complex state in React and handle database relationships in PostgreSQL.",
    
    // 👇 ADDED: Gallery Slots
    screenshots: [
      "https://via.placeholder.com/800x450", 
      "https://via.placeholder.com/800x450",
      "https://via.placeholder.com/800x450"
    ]
  },
  {
    id: 2,
    title: "EduBridge Learning",
    shortDesc: "An EdTech platform bridging the gap for students using USSD.",
    image: "https://via.placeholder.com/600x400", // Update with real screenshot
    tech: ["Python", "FastAPI", "USSD"],
    github: "",
    problem: "Students in remote areas without internet access could not practice for their WAEC/JAMB exams.",
    features: [
        "Offline SMS Quiz Mode", 
        "Instant Score Grading via Text", 
        "Lightweight Python Backend"
    ],
    learned: "I mastered building APIs for low-bandwidth environments and integrating third-party SMS gateways.",
    
    // 👇 ADDED: Gallery Slots
    screenshots: [
      "https://via.placeholder.com/800x450", 
      "https://via.placeholder.com/800x450"
    ]
  },
  {
    id: 3,
    title: "FM Attribute Analyzer",
    shortDesc: "A tool for Football Manager players to analyze stats.",
    image: "/fm-preview.png", // Ensure this image is in your public folder
    tech: ["React", "JavaScript", "FileReader API"], 
    github: "",
    problem: "Football Manager data is locked in-game, making it hard to compare players side-by-side or share scouting reports.",
    features: [
      "HTML Export Parsing: Reads raw game files.",
      "Comparison Mode: Overlays up to 4 players.",
      "Dark Mode UI: Matches the game's aesthetic."
    ],
    learned: "This project taught me how to use the browser's FileReader API to parse messy HTML files and manipulate the DOM efficiently.",
    
    // 👇 ADDED: Gallery Slots (Using the same image for testing)
    screenshots: [
      "/fm-preview1.png",
      "/fm-preview2.png",
      "/fm-preview3.png",
      "/fm-preview4.png"
    ]
  }
];