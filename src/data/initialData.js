export const feedbacks = [
  {
    id: 1,
    title: "Add dark mode support for better night-time usability",
    description:
      "Implement a dark theme option that reduces eye strain during late-night coding sessions and improves overall user experience in low-light environments.",
    upvotes: 142,
    comments: 7,
    category: "UI",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Improve mobile responsiveness on dashboard charts",
    description:
      "The analytics charts are currently difficult to read on mobile devices. Need to make them responsive and touch-friendly with proper scaling.",
    upvotes: 89,
    comments: 4,
    category: "UI",
    status: "Planned",
  },
  {
    id: 3,
    title: "Add keyboard shortcuts for power users",
    description:
      "Implement customizable keyboard shortcuts for common actions like saving, navigating, and editing to speed up workflow for advanced users.",
    upvotes: 67,
    comments: 2,
    category: "Feature",
    status: "Planned",
  },
  {
    id: 4,
    title: "Fix inconsistent button alignment in forms",
    description:
      "Submit and cancel buttons are misaligned across different form pages, creating a disjointed user experience that needs standardization.",
    upvotes: 34,
    comments: 0,
    category: "Bug",
    status: "Live",
  },
  {
    id: 5,
    title: "Enhance user onboarding with interactive tutorials",
    description:
      "New users struggle to understand key features. Add step-by-step interactive tutorials and tooltips to guide them through the platform.",
    upvotes: 156,
    comments: 9,
    category: "Enhancement",
    status: "In Progress",
  },
  {
    id: 6,
    title: "Improve form validation feedback messages",
    description:
      "Current error messages are too generic. Need more specific, actionable validation feedback that clearly explains what went wrong and how to fix it.",
    upvotes: 53,
    comments: 3,
    category: "UX",
    status: "Live",
  },
  {
    id: 7,
    title: "Add real-time collaboration features",
    description:
      "Allow multiple users to work on the same project simultaneously with live cursor tracking, presence indicators, and instant updates.",
    upvotes: 201,
    comments: 10,
    category: "Feature",
    status: "Planned",
  },
  {
    id: 8,
    title: "Reduce loading time for large data exports",
    description:
      "Exporting large datasets currently takes 30+ seconds. Implement background processing, chunking, and progress indicators to improve performance.",
    upvotes: 78,
    comments: 5,
    category: "Enhancement",
    status: "In Progress",
  },
  {
    id: 9,
    title: "Fix navigation menu disappearing on certain screens",
    description:
      "The sidebar navigation occasionally vanishes when switching between projects, requiring a page refresh to restore functionality.",
    upvotes: 45,
    comments: 2,
    category: "Bug",
    status: "Live",
  },
  {
    id: 10,
    title: "Add drag-and-drop file upload functionality",
    description:
      "Current file upload requires clicking a button and browsing files. Add drag-and-drop support for a more intuitive and efficient upload experience.",
    upvotes: 112,
    comments: 6,
    category: "UX",
    status: "Planned",
  },
  {
    id: 11,
    title: "Integrate with Slack for instant notifications",
    description:
      "Send real-time notifications to Slack channels when important events occur, such as new feedback, status changes, or mentions.",
    upvotes: 76,
    comments: 3,
    category: "Feature",
    status: "Planned",
  },
  {
    id: 12,
    title: "Improve search filtering and sorting options",
    description:
      "Add more filters (by category, status, date) and sorting (by upvotes, newest, oldest) to help users find relevant feedback faster.",
    upvotes: 94,
    comments: 8,
    category: "Enhancement",
    status: "In Progress",
  },
  {
    id: 13,
    title: "Fix broken image preview in comment section",
    description:
      "When users paste an image URL in comments, the preview sometimes fails to load or shows a broken icon.",
    upvotes: 23,
    comments: 1,
    category: "Bug",
    status: "Live",
  },
  {
    id: 14,
    title: "Add two-factor authentication for account security",
    description:
      "Enhance security by allowing users to enable 2FA via authenticator apps or SMS.",
    upvotes: 118,
    comments: 7,
    category: "Feature",
    status: "Planned",
  },
  {
    id: 15,
    title: "Redesign the user profile page",
    description:
      "Current profile page feels cluttered. Make it cleaner with avatar upload, activity summary, and easier access to settings.",
    upvotes: 61,
    comments: 5,
    category: "UI",
    status: "In Progress",
  },
];

export const comments = [
  // Feedback 1: Dark mode (7 comments)
  {
    id: 1,
    feedbackId: 1,
    name: "Alex Chen",
    username: "@alexcoder",
    avatar: "https://i.pravatar.cc/150?img=1",
    text: "Dark mode would be a game changer for my late-night work sessions. Hope to see it soon!",
  },
  {
    id: 2,
    feedbackId: 1,
    name: "Maria Gonzalez",
    username: "@mariag_dev",
    avatar: "https://i.pravatar.cc/150?img=2",
    text: "I agree, but please ensure it's not just a simple invert. Proper dark grays are much easier on the eyes.",
  },
  {
    id: 3,
    feedbackId: 1,
    name: "James Wilson",
    username: "@jamesw",
    avatar: "https://i.pravatar.cc/150?img=3",
    text: "Is there any timeline for this? My team has been requesting it for months.",
  },
  {
    id: 4,
    feedbackId: 1,
    name: "Priya Sharma",
    username: "@priya_s",
    avatar: "https://i.pravatar.cc/150?img=4",
    text: "I'd also love an auto-switch based on system preferences. That would be perfect.",
  },
  {
    id: 5,
    feedbackId: 1,
    name: "Tom Baker",
    username: "@tomb",
    avatar: "https://i.pravatar.cc/150?img=5",
    text: "Personally I prefer light mode, but I understand the need. Just don't force everyone to switch.",
  },
  {
    id: 6,
    feedbackId: 1,
    name: "Emma Davis",
    username: "@emma_design",
    avatar: "https://i.pravatar.cc/150?img=6",
    text: "Yes! And please make sure contrast ratios are accessible for all users.",
  },
  {
    id: 7,
    feedbackId: 1,
    name: "Carlos Mendez",
    username: "@carlosm",
    avatar: "https://i.pravatar.cc/150?img=7",
    text: "This is one of the most requested features. Prioritizing it would show you listen to users.",
  },

  // Feedback 2: Mobile responsiveness (4 comments)
  {
    id: 8,
    feedbackId: 2,
    name: "Sophia Lee",
    username: "@sophia_lee",
    avatar: "https://i.pravatar.cc/150?img=8",
    text: "The charts are completely unusable on my iPhone. Can't even see the legend.",
  },
  {
    id: 9,
    feedbackId: 2,
    name: "Daniel Kim",
    username: "@danielk",
    avatar: "https://i.pravatar.cc/150?img=9",
    text: "I've resorted to requesting desktop site. Please fix this – mobile traffic is huge for us.",
  },
  {
    id: 10,
    feedbackId: 2,
    name: "Rachel Green",
    username: "@rachelg",
    avatar: "https://i.pravatar.cc/150?img=10",
    text: "Responsive design should be baseline. Looking forward to the update!",
  },
  {
    id: 11,
    feedbackId: 2,
    name: "Oliver Chen",
    username: "@oliver_c",
    avatar: "https://i.pravatar.cc/150?img=11",
    text: "Touch targets are also too small. Make them at least 44x44px for fat-finger friendly.",
  },

  // Feedback 3: Keyboard shortcuts (2 comments)
  {
    id: 12,
    feedbackId: 3,
    name: "Kevin Patel",
    username: "@kevinp",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "Yes! As a keyboard-driven user, this would save me hours. Please include Vim-like navigation.",
  },
  {
    id: 13,
    feedbackId: 3,
    name: "Nina Martinez",
    username: "@nina_m",
    avatar: "https://i.pravatar.cc/150?img=13",
    text: "Customizable shortcuts are key. Not everyone uses the same bindings. Good suggestion.",
  },

  // Feedback 4: Button alignment – 0 comments (skip)

  // Feedback 5: Onboarding tutorials (9 comments)
  {
    id: 14,
    feedbackId: 5,
    name: "Chris Evans",
    username: "@chrise",
    avatar: "https://i.pravatar.cc/150?img=14",
    text: "I almost gave up on the platform because I didn't know where to start. Interactive tutorials would help so much.",
  },
  {
    id: 15,
    feedbackId: 5,
    name: "Anna Schmidt",
    username: "@anna_s",
    avatar: "https://i.pravatar.cc/150?img=15",
    text: "Please make them skippable for experienced users. Nothing worse than forced hand-holding.",
  },
  {
    id: 16,
    feedbackId: 5,
    name: "David Park",
    username: "@davidpark",
    avatar: "https://i.pravatar.cc/150?img=16",
    text: "Tooltips on hover for key features would be a great start.",
  },
  {
    id: 17,
    feedbackId: 5,
    name: "Laura White",
    username: "@laura_w",
    avatar: "https://i.pravatar.cc/150?img=17",
    text: "I love this idea! Maybe a progress bar to show how much of the tutorial is left.",
  },
  {
    id: 18,
    feedbackId: 5,
    name: "Mohammed Ali",
    username: "@mohammed_a",
    avatar: "https://i.pravatar.cc/150?img=18",
    text: "Could we have role-based tutorials? Different features for admins vs regular users.",
  },
  {
    id: 19,
    feedbackId: 5,
    name: "Jessica Taylor",
    username: "@jessica_t",
    avatar: "https://i.pravatar.cc/150?img=19",
    text: "Yes! And interactive walkthroughs rather than just videos. Learning by doing is best.",
  },
  {
    id: 20,
    feedbackId: 5,
    name: "Ryan Cooper",
    username: "@ryan_c",
    avatar: "https://i.pravatar.cc/150?img=20",
    text: "I disagree. Good UI should be intuitive without tutorials. This is a band-aid for poor design.",
  },
  {
    id: 21,
    feedbackId: 5,
    name: "Elena Russo",
    username: "@elena_r",
    avatar: "https://i.pravatar.cc/150?img=21",
    text: "Even with good design, tutorials help new users discover advanced features. I'm for it.",
  },
  {
    id: 22,
    feedbackId: 5,
    name: "George Kapoor",
    username: "@georgek",
    avatar: "https://i.pravatar.cc/150?img=22",
    text: "Please include a 'reset tutorial' option for when we need a refresher.",
  },

  // Feedback 6: Form validation messages (3 comments)
  {
    id: 23,
    feedbackId: 6,
    name: "Mia Wong",
    username: "@miaw",
    avatar: "https://i.pravatar.cc/150?img=23",
    text: "Current error message 'Invalid input' tells me nothing. I need to know what field and why.",
  },
  {
    id: 24,
    feedbackId: 6,
    name: "Ethan Brown",
    username: "@ethan_b",
    avatar: "https://i.pravatar.cc/150?img=24",
    text: "Yes! And inline validation as I type would prevent frustration.",
  },
  {
    id: 25,
    feedbackId: 6,
    name: "Isabel Martinez",
    username: "@isabelm",
    avatar: "https://i.pravatar.cc/150?img=25",
    text: "Positive confirmation messages would also improve UX. A simple green checkmark goes a long way.",
  },

  // Feedback 7: Real-time collaboration (10 comments)
  {
    id: 26,
    feedbackId: 7,
    name: "Oscar Nguyen",
    username: "@oscar_n",
    avatar: "https://i.pravatar.cc/150?img=26",
    text: "This would put you ahead of competitors like Trello and Asana. Huge competitive advantage.",
  },
  {
    id: 27,
    feedbackId: 7,
    name: "Lily Chen",
    username: "@lily_c",
    avatar: "https://i.pravatar.cc/150?img=27",
    text: "Please include presence indicators (who's viewing what) and conflict resolution.",
  },
  {
    id: 28,
    feedbackId: 7,
    name: "Victor Santos",
    username: "@victor_s",
    avatar: "https://i.pravatar.cc/150?img=28",
    text: "Real-time is great, but also need offline support for when connectivity is poor.",
  },
  {
    id: 29,
    feedbackId: 7,
    name: "Natalie Portman",
    username: "@natalie_p",
    avatar: "https://i.pravatar.cc/150?img=29",
    text: "This is a must-have for distributed teams. Can't wait to see it implemented.",
  },
  {
    id: 30,
    feedbackId: 7,
    name: "Steve Rogers",
    username: "@stever",
    avatar: "https://i.pravatar.cc/150?img=30",
    text: "Performance will be key. Real-time sync shouldn't slow down the UI.",
  },
  {
    id: 31,
    feedbackId: 7,
    name: "Wanda Maximoff",
    username: "@wandam",
    avatar: "https://i.pravatar.cc/150?img=31",
    text: "How would you handle permissions? Not everyone should edit everything in real time.",
  },
  {
    id: 32,
    feedbackId: 7,
    name: "Bruce Wayne",
    username: "@bruce_w",
    avatar: "https://i.pravatar.cc/150?img=32",
    text: "I'd rather you focus on stability first. Real-time can introduce many bugs.",
  },
  {
    id: 33,
    feedbackId: 7,
    name: "Diana Prince",
    username: "@diana_p",
    avatar: "https://i.pravatar.cc/150?img=33",
    text: "Agree with both sides. Maybe release as beta with opt-in for power users.",
  },
  {
    id: 34,
    feedbackId: 7,
    name: "Clark Kent",
    username: "@clark_k",
    avatar: "https://i.pravatar.cc/150?img=34",
    text: "This would be revolutionary for our design team's feedback sessions.",
  },
  {
    id: 35,
    feedbackId: 7,
    name: "Barry Allen",
    username: "@barry_a",
    avatar: "https://i.pravatar.cc/150?img=35",
    text: "Speed is everything! Make sure WebSockets are optimized.",
  },

  // Feedback 8: Large data exports (5 comments)
  {
    id: 36,
    feedbackId: 8,
    name: "Hank Pym",
    username: "@hank_p",
    avatar: "https://i.pravatar.cc/150?img=36",
    text: "30+ seconds is unacceptable for our daily reports. Please prioritize.",
  },
  {
    id: 37,
    feedbackId: 8,
    name: "Janet Van Dyne",
    username: "@janet_v",
    avatar: "https://i.pravatar.cc/150?img=37",
    text: "Progress indicator would at least manage expectations. Currently it looks frozen.",
  },
  {
    id: 38,
    feedbackId: 8,
    name: "Scott Lang",
    username: "@scott_l",
    avatar: "https://i.pravatar.cc/150?img=38",
    text: "Could we have an option to receive a download link via email? That way we can close the tab.",
  },
  {
    id: 39,
    feedbackId: 8,
    name: "Hope van Dyne",
    username: "@hope_v",
    avatar: "https://i.pravatar.cc/150?img=39",
    text: "Background processing with notification would be ideal. Good suggestion.",
  },
  {
    id: 40,
    feedbackId: 8,
    name: "Nick Fury",
    username: "@nick_f",
    avatar: "https://i.pravatar.cc/150?img=40",
    text: "I've lost work because the export timed out. This is critical.",
  },

  // Feedback 9: Navigation menu disappearing (2 comments)
  {
    id: 41,
    feedbackId: 9,
    name: "Phil Coulson",
    username: "@phil_c",
    avatar: "https://i.pravatar.cc/150?img=41",
    text: "Happens to me every time I switch projects quickly. Reproducible on Chrome.",
  },
  {
    id: 42,
    feedbackId: 9,
    name: "Maria Hill",
    username: "@maria_h",
    avatar: "https://i.pravatar.cc/150?img=42",
    text: "Confirmed on Firefox as well. Please add this to the next sprint.",
  },

  // Feedback 10: Drag-and-drop upload (6 comments)
  {
    id: 43,
    feedbackId: 10,
    name: "Thor Odinson",
    username: "@thor_o",
    avatar: "https://i.pravatar.cc/150?img=43",
    text: "Drag-and-drop is expected in 2025. Great that you're adding it.",
  },
  {
    id: 44,
    feedbackId: 10,
    name: "Loki Laufeyson",
    username: "@loki_l",
    avatar: "https://i.pravatar.cc/150?img=44",
    text: "Please also support folder drag-and-drop. That would be truly useful.",
  },
  {
    id: 45,
    feedbackId: 10,
    name: "Valkyrie",
    username: "@valkyrie",
    avatar: "https://i.pravatar.cc/150?img=45",
    text: "Make sure there's a visual highlight when dragging over the target area.",
  },
  {
    id: 46,
    feedbackId: 10,
    name: "Heimdall",
    username: "@heimdall",
    avatar: "https://i.pravatar.cc/150?img=46",
    text: "Will this work on mobile browsers? Drag-and-drop on touch is tricky.",
  },
  {
    id: 47,
    feedbackId: 10,
    name: "Sif",
    username: "@lady_sif",
    avatar: "https://i.pravatar.cc/150?img=47",
    text: "I love this. Current upload is clunky. Thank you for listening.",
  },
  {
    id: 48,
    feedbackId: 10,
    name: "Korg",
    username: "@korg_rock",
    avatar: "https://i.pravatar.cc/150?img=48",
    text: "Hey min, please also allow paste from clipboard. That would be even faster.",
  },

  // Feedback 11: Slack integration (3 comments)
  {
    id: 49,
    feedbackId: 11,
    name: "Tony Stark",
    username: "@tony_stark",
    avatar: "https://i.pravatar.cc/150?img=49",
    text: "Yes! But please let us customize which events trigger notifications. I don't need every single comment.",
  },
  {
    id: 50,
    feedbackId: 11,
    name: "Pepper Potts",
    username: "@pepper_p",
    avatar: "https://i.pravatar.cc/150?img=50",
    text: "Would also love MS Teams integration for our enterprise clients.",
  },
  {
    id: 51,
    feedbackId: 11,
    name: "Happy Hogan",
    username: "@happy_h",
    avatar: "https://i.pravatar.cc/150?img=51",
    text: "Slack webhooks are easy to implement. Should be a quick win.",
  },

  // Feedback 12: Search filtering (8 comments)
  {
    id: 52,
    feedbackId: 12,
    name: "Peter Parker",
    username: "@spidey",
    avatar: "https://i.pravatar.cc/150?img=52",
    text: "Filter by upvotes and date is a must. Right now it's hard to find trending feedback.",
  },
  {
    id: 53,
    feedbackId: 12,
    name: "Mary Jane",
    username: "@mj_watson",
    avatar: "https://i.pravatar.cc/150?img=53",
    text: "Saved searches would be a nice plus. I often look for the same categories.",
  },
  {
    id: 54,
    feedbackId: 12,
    name: "Harry Osborn",
    username: "@harry_o",
    avatar: "https://i.pravatar.cc/150?img=54",
    text: "Search by status (Planned, In Progress, Live) is critical for roadmap tracking.",
  },
  {
    id: 55,
    feedbackId: 12,
    name: "Gwen Stacy",
    username: "@gwen_s",
    avatar: "https://i.pravatar.cc/150?img=55",
    text: "Full-text search within descriptions would also help.",
  },
  {
    id: 56,
    feedbackId: 12,
    name: "Miles Morales",
    username: "@miles_m",
    avatar: "https://i.pravatar.cc/150?img=56",
    text: "Please add a 'clear filters' button. Sometimes I get lost in too many selections.",
  },
  {
    id: 57,
    feedbackId: 12,
    name: "Otto Octavius",
    username: "@otto_o",
    avatar: "https://i.pravatar.cc/150?img=57",
    text: "Filter by comment count would help surface discussions that need attention.",
  },
  {
    id: 58,
    feedbackId: 12,
    name: "Norman Osborn",
    username: "@norman_o",
    avatar: "https://i.pravatar.cc/150?img=58",
    text: "Sorting by 'most recent activity' (comments + upvotes) would be ideal.",
  },
  {
    id: 59,
    feedbackId: 12,
    name: "Eddie Brock",
    username: "@eddie_b",
    avatar: "https://i.pravatar.cc/150?img=59",
    text: "I'd like to filter by feedback I've upvoted or commented on. Personal dashboard.",
  },

  // Feedback 13: Image preview bug (1 comment)
  {
    id: 60,
    feedbackId: 13,
    name: "Reed Richards",
    username: "@reed_r",
    avatar: "https://i.pravatar.cc/150?img=60",
    text: "I've noticed this happens with Imgur links specifically. Great catch.",
  },

  // Feedback 14: Two-factor authentication (7 comments)
  {
    id: 61,
    feedbackId: 14,
    name: "Sue Storm",
    username: "@sue_s",
    avatar: "https://i.pravatar.cc/150?img=61",
    text: "Security should be top priority. Thank you for proposing this.",
  },
  {
    id: 62,
    feedbackId: 14,
    name: "Johnny Storm",
    username: "@johnny_s",
    avatar: "https://i.pravatar.cc/150?img=62",
    text: "Please support TOTP (Google Authenticator, Authy) and recovery codes.",
  },
  {
    id: 63,
    feedbackId: 14,
    name: "Ben Grimm",
    username: "@ben_g",
    avatar: "https://i.pravatar.cc/150?img=63",
    text: "And SMS as a backup, though less secure. Options are good.",
  },
  {
    id: 64,
    feedbackId: 14,
    name: "Victor Von Doom",
    username: "@doom",
    avatar: "https://i.pravatar.cc/150?img=64",
    text: "2FA is useless if you don't also enforce strong password policies.",
  },
  {
    id: 65,
    feedbackId: 14,
    name: "Namor",
    username: "@namor",
    avatar: "https://i.pravatar.cc/150?img=65",
    text: "Make it optional. Some users find it inconvenient for low-stakes accounts.",
  },
  {
    id: 66,
    feedbackId: 14,
    name: "T'Challa",
    username: "@blackpanther",
    avatar: "https://i.pravatar.cc/150?img=66",
    text: "Wakanda supports this. Security without sacrificing usability.",
  },
  {
    id: 67,
    feedbackId: 14,
    name: "Shuri",
    username: "@shuri",
    avatar: "https://i.pravatar.cc/150?img=67",
    text: "Biometric (fingerprint/face) on mobile apps would be even better.",
  },

  // Feedback 15: Redesign profile page (5 comments)
  {
    id: 68,
    feedbackId: 15,
    name: "Carol Danvers",
    username: "@carol_d",
    avatar: "https://i.pravatar.cc/150?img=68",
    text: "Current profile page is indeed messy. I can never find my settings.",
  },
  {
    id: 69,
    feedbackId: 15,
    name: "Monica Rambeau",
    username: "@monica_r",
    avatar: "https://i.pravatar.cc/150?img=69",
    text: "Please add an activity feed showing my recent comments and upvotes.",
  },
  {
    id: 70,
    feedbackId: 15,
    name: "Kamala Khan",
    username: "@kamala_k",
    avatar: "https://i.pravatar.cc/150?img=70",
    text: "Yes! And a way to see which feedback I've submitted. That would be so helpful.",
  },
  {
    id: 71,
    feedbackId: 15,
    name: "Bruno Carrelli",
    username: "@bruno_c",
    avatar: "https://i.pravatar.cc/150?img=71",
    text: "Avatar upload is a must. Gravatar is not reliable for everyone.",
  },
  {
    id: 72,
    feedbackId: 15,
    name: "Zoe Zimmer",
    username: "@zoe_z",
    avatar: "https://i.pravatar.cc/150?img=72",
    text: "Please also show badges or reputation points. Gamification encourages engagement.",
  },
];

export function getFeedbacks() {
  return feedbacks;
}

export function getFeedbackById(id) {
  return feedbacks.find((f) => f.id === Number(id));
}

export function getComments() {
  return comments;
}

export function getCommentsByFeedbackId(feedbackId) {
  return comments.filter((c) => c.feedbackId === Number(feedbackId));
}

export function getCommentsByUserId(userId) {
  // If you need to filter by user, add userId field to comments
  return comments.filter((c) => c.userId === Number(userId));
}
