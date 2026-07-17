export interface HeroStat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface ClubPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  theme: "lime" | "gray" | "dark" | "dark-gray";
}

export interface UpcomingEvent {
  id: string;
  month: string;
  day: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  category: "HACKATHON" | "WORKSHOP" | "COMPETITION" | "DESIGN";
  dateFormatted: string;
  timeFormatted: string;
  venue: string;
}

export interface PastEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  categoryBadge: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  subtitle?: string;
  department: string;
  linkedinUrl: string;
  githubUrl: string;
  avatarUrl: string;
  skills?: string;
}

export const HERO_STATS: HeroStat[] = [
  { id: "stat-participants", value: "600+", label: "Event Participants", icon: "Users" },
  { id: "stat-events", value: "20+", label: "Events Organized", icon: "CalendarCheck" },
  { id: "stat-members", value: "100+", label: "Active Members", icon: "HeartHandshake" },
  { id: "stat-followers", value: "55+", label: "Community Followers", icon: "Network" },
];

export const PILLARS_DATA: ClubPillar[] = [
  { id: "pillar-learn", number: "01", title: "LEARN", description: "Workshops, sessions & resources to level up.", theme: "lime" },
  { id: "pillar-build", number: "02", title: "BUILD", description: "Hackathons, projects & real-world problem solving.", theme: "gray" },
  { id: "pillar-triumph", number: "03", title: "TRIUMPH", description: "Win competitions, get recognized, make impact.", theme: "dark" },
  { id: "pillar-support", number: "04", title: "SUPPORT", description: "Mentorship, networking & community growth.", theme: "dark-gray" },
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  { id: "event-ai-hackathon", month: "Jun", day: "20", year: "2025", title: "AI Hackathon 2025", description: "Build AI solutions for real-world problems.", tags: ["Hackathon", "Team Event"], category: "HACKATHON", dateFormatted: "20 June, 2025", timeFormatted: "09:00 AM", venue: "Main Audi, Campus" },
  { id: "event-dsa-workshop", month: "Jul", day: "05", year: "2025", title: "DSA Revision Workshop", description: "Level up your problem solving skills.", tags: ["Workshop", "Beginners Friendly"], category: "WORKSHOP", dateFormatted: "05 July, 2025", timeFormatted: "10:00 AM", venue: "CS Seminar Hall" },
  { id: "event-ui-ux-sprint", month: "Aug", day: "10", year: "2025", title: "UI/UX Design Sprint", description: "Design. Prototype. Present.", tags: ["Workshop", "Design"], category: "DESIGN", dateFormatted: "10 August, 2025", timeFormatted: "11:00 AM", venue: "Design Innovation Lab" },
  { id: "event-code-relay", month: "Sep", day: "15", year: "2025", title: "Code Relay Challenge", description: "A fun team coding competition.", tags: ["Competition", "Team Event"], category: "COMPETITION", dateFormatted: "15 September, 2025", timeFormatted: "02:00 PM", venue: "Labs 1 & 2" },
];

export const PAST_EVENTS: PastEvent[] = [
  { id: "past-prompt-battle", date: "MAY 18, 2025", title: "Prompt Battle 2025", description: "A prompt engineering competition that challenged creativity and AI thinking.", icon: "Brain", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600", categoryBadge: "COMPETITION" },
  { id: "past-techspardha", date: "APR 12, 2025", title: "Techस्पर्धा 2025", description: "Our flagship tech fest with 6+ technical events and 600+ participants.", icon: "Sparkles", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600", categoryBadge: "TECH FEST" },
  { id: "past-webdev-workshop", date: "MAR 02, 2025", title: "Web Dev Workshop", description: "Hands-on workshop on modern web technologies and deployment.", icon: "CodeXml", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600", categoryBadge: "WORKSHOP" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: "member-faculty", name: "Dr. Rajesh Kumar", role: "FACULTY", subtitle: "Faculty Advisor", department: "Computer Science", linkedinUrl: "https://linkedin.com", githubUrl: "https://github.com", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500", skills: "Research • Analytics • Mentorship" },
  { id: "member-vedant", name: "Vedant Patil", role: "PRESIDENT", subtitle: "President", department: "Computer Engineering", linkedinUrl: "https://linkedin.com/in/vedantpatil", githubUrl: "https://github.com/vedantpatil", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500", skills: "Next.js • Node.js • Cloud" },
  { id: "member-sanika", name: "Sanika Joshi", role: "VICE PRESIDENT", subtitle: "Vice President A", department: "Information Technology", linkedinUrl: "https://linkedin.com/in/sanikajoshi", githubUrl: "https://github.com/sanikajoshi", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500", skills: "Go • React • Docker" },
  { id: "member-aditya", name: "Aditya Raut", role: "VICE PRESIDENT", subtitle: "Vice President B", department: "Computer Engineering", linkedinUrl: "https://linkedin.com/in/adityaraut", githubUrl: "https://github.com/adityaraut", avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500", skills: "Python • TypeScript • AWS" },
  { id: "member-riya", name: "Riya Sharma", role: "CORE MEMBER", subtitle: "Design Lead", department: "Computer Engineering", linkedinUrl: "https://linkedin.com/in/riyasharma", githubUrl: "https://github.com/riyasharma", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=500", skills: "Figma • UI/UX • Spline" },
  { id: "member-neil", name: "Neil Mehta", role: "CORE MEMBER", subtitle: "Web Operations Lead", department: "Computer Engineering", linkedinUrl: "https://linkedin.com/in/neilmehta", githubUrl: "https://github.com/neilmehta", avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500", skills: "Astro • Tailwind • GraphQL" },
  { id: "member-tanvi", name: "Tanvi Shah", role: "CORE MEMBER", subtitle: "Operations Lead", department: "Information Technology", linkedinUrl: "https://linkedin.com/in/tanvishah", githubUrl: "https://github.com/tanvishah", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500", skills: "Scrum • Agile • Events" },
  { id: "member-yash", name: "Yash Vardhan", role: "CORE MEMBER", subtitle: "AI/ML Lead", department: "Information Technology", linkedinUrl: "https://linkedin.com/in/yashvardhan", githubUrl: "https://github.com/yashvardhan", avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500", skills: "PyTorch • OpenCV • FastAPI" },
];
