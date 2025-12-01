/**
 * Centralized Events Data
 * All events are stored here with images, titles, descriptions, dates, locations, and categories.
 * The Home page displays the last 3 upcoming events.
 * The Events page pulls from this same data source.
 *
 * Images can be:
 * - A path to a local asset (e.g., '/src/assets/event-networking.jpg')
 * - A URL (e.g., 'https://...')
 * - null/undefined to use a generic default placeholder
 */

// Generic default image URL (can be changed to a local asset later)
const DEFAULT_EVENT_IMAGE =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop";

// Import event images from assets
import microsoftImg from "../assets/microsoft.jpg";
import caseStudyImg from "../assets/Casestudy.jpg";
import learnToNetworkImg from "../assets/learntonetwork.jpg";

export const allEvents = {
  upcoming: [
    {
      id: 1,
      title: "Networking Mixer",
      date: "Dec 5, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Downtown Tech Hub",
      description:
        "Connect with industry professionals, startup founders, and fellow DEMA members. A casual, interactive evening designed to build meaningful professional relationships and explore collaboration opportunities.",
      image: null, // Will use DEFAULT_EVENT_IMAGE
      category: "Networking",
    },
    {
      id: 2,
      title: "Web3 & AI Workshop",
      date: "Dec 12, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab",
      description:
        "Dive deep into the latest emerging technologies. Learn from industry practitioners about blockchain applications, AI integration, and practical use cases in digital enterprises.",
      image: null, // Will use DEFAULT_EVENT_IMAGE
      category: "Workshop",
    },
    {
      id: 3,
      title: "Annual Conference 2025",
      date: "Dec 19, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center",
      description:
        "Our flagship event featuring keynote speakers from Fortune 500 companies, expert panel discussions on digital transformation, interactive workshops, and extensive networking opportunities.",
      image: null, // Will use DEFAULT_EVENT_IMAGE
      category: "Conference",
    },
  ],
  past: [
    {
      id: 4,
      title: "Microsoft Office Tour",
      date: "Nov 20, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Microsoft Office",
      description:
        "Panel, Copilot Workshop & Roundtable Mentorship with Microsoft professionals sharing insights on enterprise solutions and AI integration.",
      image: microsoftImg,
      category: "Workshop",
    },
    {
      id: 5,
      title: "Venture Sprint Case Competition",
      date: "Nov 10, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Innovation Hub",
      description:
        "Team Competition in Rebuilding Strategy, Data & Creativity. Teams competed to develop business solutions across multiple challenges.",
      image: caseStudyImg,
      category: "Competition",
    },
    {
      id: 6,
      title: "Learn To Network",
      date: "Nov 1, 2025",
      time: "5:30 PM - 7:00 PM",
      location: "Tech Hub",
      description:
        "Networking Strategies, Q&A & Professional Connections. Learn practical networking techniques and build meaningful professional relationships.",
      image: learnToNetworkImg,
      category: "Workshop",
    },
  ],
};

/**
 * Utility function to get the image URL for an event.
 * Returns the event's image if it exists, otherwise returns the default image.
 */
export const getEventImage = (imageUrl) => {
  return imageUrl || DEFAULT_EVENT_IMAGE;
};
