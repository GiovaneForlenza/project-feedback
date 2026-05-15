// 10 feedback objects
export const initialFeedbacks = [
  {
    id: 1,
    title: "Add dark mode support for better night-time usability",
    description:
      "Implement a dark theme option that reduces eye strain during late-night coding sessions and improves overall user experience in low-light environments.",
    upvotes: 142,
    comments: 2,
    category: "UI",
    status: "In Progress",
    upvoted: true
  },
  {
    id: 2,
    title: "Improve mobile responsiveness on dashboard charts",
    description:
      "The analytics charts are currently difficult to read on mobile devices. Need to make them responsive and touch-friendly with proper scaling.",
    upvotes: 89,
    comments: 1,
    category: "UI",
    status: "Planned",
    upvoted: true
  },
  {
    id: 3,
    title: "Add keyboard shortcuts for power users",
    description:
      "Implement customizable keyboard shortcuts for common actions like saving, navigating, and editing to speed up workflow for advanced users.",
    upvotes: 67,
    comments: 0,
    category: "Feature",
    status: "Planned",
    upvoted: true
  },
  {
    id: 4,
    title: "Fix inconsistent button alignment in forms",
    description:
      "Submit and cancel buttons are misaligned across different form pages, creating a disjointed user experience that needs standardization.",
    upvotes: 34,
    comments: 1,
    category: "Bug",
    status: "Live",
    upvoted: false
  },
  {
    id: 5,
    title: "Enhance user onboarding with interactive tutorials",
    description:
      "New users struggle to understand key features. Add step-by-step interactive tutorials and tooltips to guide them through the platform.",
    upvotes: 156,
    comments: 2,
    category: "Enhancement",
    status: "In Progress",
    upvoted: true
  },
  {
    id: 6,
    title: "Improve form validation feedback messages",
    description:
      "Current error messages are too generic. Need more specific, actionable validation feedback that clearly explains what went wrong and how to fix it.",
    upvotes: 53,
    comments: 1,
    category: "UX",
    status: "Live",
    upvoted: true
  },
  {
    id: 7,
    title: "Add real-time collaboration features",
    description:
      "Allow multiple users to work on the same project simultaneously with live cursor tracking, presence indicators, and instant updates.",
    upvotes: 201,
    comments: 2,
    category: "Feature",
    status: "Planned",
    upvoted: false
  },
  {
    id: 8,
    title: "Reduce loading time for large data exports",
    description:
      "Exporting large datasets currently takes 30+ seconds. Implement background processing, chunking, and progress indicators to improve performance.",
    upvotes: 78,
    comments: 0,
    category: "Enhancement",
    status: "In Progress",
    upvoted: true
  },
  {
    id: 9,
    title: "Fix navigation menu disappearing on certain screens",
    description:
      "The sidebar navigation occasionally vanishes when switching between projects, requiring a page refresh to restore functionality.",
    upvotes: 45,
    comments: 1,
    category: "Bug",
    status: "Live",
    upvoted: false
  },
  {
    id: 10,
    title: "Add drag-and-drop file upload functionality",
    description:
      "Current file upload requires clicking a button and browsing files. Add drag-and-drop support for a more intuitive and efficient upload experience.",
    upvotes: 112,
    comments: 0,
    category: "UX",
    status: "Planned",
    upvoted: true
  },
];

// 10 comments total across all feedbacks with avatars
export const initialComments = [
  {
    id: 1,
    feedbackId: 1,
    username: "AlexChen",
    avatar: "https://i.pravatar.cc/150?img=1",
    text: "Dark mode would be a game changer! Please add this soon.",
  },
  {
    id: 2,
    feedbackId: 1,
    username: "MariaG",
    avatar: "https://i.pravatar.cc/150?img=2",
    text: "Agreed! My eyes hurt after long work sessions. Any timeline on this?",
  },
  {
    id: 3,
    feedbackId: 2,
    username: "JohnDev",
    avatar: "https://i.pravatar.cc/150?img=3",
    text: "The charts on my iPhone are completely unusable right now.",
  },
  {
    id: 4,
    feedbackId: 4,
    username: "SarahLee",
    avatar: "https://i.pravatar.cc/150?img=4",
    text: "This alignment issue has been bothering me for weeks. Thanks for reporting!",
  },
  {
    id: 5,
    feedbackId: 5,
    username: "ProductGuy",
    avatar: "https://i.pravatar.cc/150?img=5",
    text: "Interactive tutorials would reduce our support tickets significantly.",
  },
  {
    id: 6,
    feedbackId: 5,
    username: "NewUser123",
    avatar: "https://i.pravatar.cc/150?img=6",
    text: "As a new user, I definitely struggled to find basic features.",
  },
  {
    id: 7,
    feedbackId: 6,
    username: "UXDesigner",
    avatar: "https://i.pravatar.cc/150?img=7",
    text: "Generic error messages are frustrating. Specific feedback please!",
  },
  {
    id: 8,
    feedbackId: 7,
    username: "TeamLead",
    avatar: "https://i.pravatar.cc/150?img=8",
    text: "Real-time collab would put us ahead of competitors. Priority please!",
  },
  {
    id: 9,
    feedbackId: 7,
    username: "RemoteWorker",
    avatar: "https://i.pravatar.cc/150?img=9",
    text: "This would make remote team work so much smoother.",
  },
  {
    id: 10,
    feedbackId: 9,
    username: "BugHunter",
    avatar: "https://i.pravatar.cc/150?img=10",
    text: "I've experienced this 3 times today alone. Need urgent fix!",
  },
];
