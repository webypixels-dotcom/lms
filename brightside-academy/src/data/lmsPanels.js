export const lmsPanels = [
  {
    id: 'student',
    title: 'Student Experience',
    theme: 'sunrise',
    description:
      'Learners step into a guided journey with adaptive course playlists, gamified milestones, and a family portal that celebrates every achievement.',
    highlights: [
      'Personalized course sequencing powered by BrightPath AI',
      'Progress badges, reflections, and built-in SEL check-ins',
      'Mobile-first access with offline lesson packets for home learning',
    ],
    metrics: [
      { label: 'Active Learners', value: '4,800+', trend: '+12% QoQ' },
      { label: 'Completion Rate', value: '94%', trend: '+8 pts' },
    ],
    actions: ['View Sample Journey', 'Download Mobile App', 'Family Portal'],
    sections: [
      {
        title: 'Dashboard Overview',
        items: [
          'Welcome message with personalized learning goals',
          'Progress summary across all enrolled courses',
          'Upcoming classes, deadlines, and announcements widget',
          'Notifications stream with instructor nudges',
          'Certificates earned snapshot with quick download',
        ],
      },
      {
        title: 'My Courses',
        items: [
          'Enrolled and completed courses with progress bars',
          'Resume learning button to jump back into lessons',
          'Module-by-module progress tracker',
          'Downloadable resources, slides, and offline packets',
          'Course discussion boards and peer feedback',
        ],
      },
      {
        title: 'Assessments',
        items: [
          'Quiz and assignment list with due dates',
          'Submission history and attempt tracking',
          'Grades, feedback, and rubric summaries',
          'Retake options based on instructor rules',
          'Auto-save draft responses for long-form work',
        ],
      },
      {
        title: 'Communication',
        items: [
          'Chat with instructors and classmates in context',
          'Join discussion forums or cohort channels',
          'Receive targeted announcements and alerts',
          'Parent/guardian messaging bridge (optional)',
        ],
      },
      {
        title: 'Certificates & Achievements',
        items: [
          'View and download issued certificates (PDF)',
          'Earn badges and streaks for milestone mastery',
          'Leaderboard and points system (optional gamification)',
        ],
      },
      {
        title: 'Account Settings',
        items: [
          'Update profile information, avatar, and bio',
          'Manage password, MFA, and connected accounts',
          'View payment history and invoices (for paid tracks)',
          'Personalize notification preferences and themes',
        ],
      },
    ],
  },
  {
    id: 'instructor',
    title: 'Instructor Workspace',
    theme: 'coral',
    description:
      'Educators gain visibility into every classroom with automated prep guidance, observation tools, and coaching conversations in one place.',
    highlights: [
      'Smart lesson builder with Brightside curriculum templates',
      'Classroom pulse analytics and instant documentation',
      'Embedded coaching loops with video feedback and action plans',
    ],
    metrics: [
      { label: 'Prep Time Saved', value: '6 hrs/week', trend: '-38%' },
      { label: 'Coaching Cycles', value: '1,250', trend: 'Completed YTD' },
    ],
    actions: ['Preview Lesson Builder', 'Schedule Coaching Demo', 'Explore Analytics'],
    sections: [
      {
        title: 'Dashboard Overview',
        items: [
          'Snapshot of active courses and session status',
          'Student enrollment counts with quick filters',
          'Latest submissions awaiting grading or review',
          'Revenue overview for monetized programs',
        ],
      },
      {
        title: 'Course Management',
        items: [
          'Create, edit, duplicate, or archive courses',
          'Upload lessons, videos, slide decks, and docs',
          'Organize content into modules with prerequisites',
          'Schedule live classes and sync Zoom/Meet links',
          'Publish, unpublish, or drip schedule chapters',
        ],
      },
      {
        title: 'Assessment Tools',
        items: [
          'Build quizzes (MCQ, true/false, short answer, uploads)',
          'Configure auto-grading or manual evaluation rules',
          'View assignment submissions with annotation tools',
          'Issue written or audio/video feedback',
          'Rubric templates and standards alignment',
        ],
      },
      {
        title: 'Student Interaction',
        items: [
          'Send class-wide or cohort announcements',
          '1:1 messaging threads with learners or guardians',
          'Moderate Q&A forums and discussion boards',
          'Track discussion participation and engagement',
        ],
      },
      {
        title: 'Reports',
        items: [
          'Performance reports by student, course, and standard',
          'Completion rates and pacing alerts',
          'Engagement analytics (views, activity time)',
          'Export-ready CSV and dashboard embeds',
        ],
      },
      {
        title: 'Profile & Account',
        items: [
          'Profile customization and teaching bio',
          'Payment settings and payout destinations',
          'Notification and reminder scheduling',
          'Connected integrations (Google Drive, Vimeo, etc.)',
        ],
      },
    ],
  },
  {
    id: 'admin',
    title: 'Admin Command Center',
    theme: 'ocean',
    description:
      'Program leaders orchestrate enrollment, compliance, and growth with real-time dashboards, automation, and enterprise-grade controls.',
    highlights: [
      'Center-by-center KPIs with predictive staffing insights',
      'Licensing, billing, and credential management workflows',
      'Integrations with HRIS, SIS, and finance systems',
    ],
    metrics: [
      { label: 'Centers Connected', value: '42', trend: 'Multi-state' },
      { label: 'Automation Hours', value: '860 hrs', trend: 'Reallocated to coaching' },
    ],
    actions: ['Launch Executive Demo', 'Review Compliance Toolkit', 'Connect Integrations'],
    sections: [
      {
        title: 'Overview',
        items: [
          'Platform analytics: active users, revenue, course health',
          'Recent activity log with auditing trails',
          'System status, uptime, and compliance indicators',
        ],
      },
      {
        title: 'User Management',
        items: [
          'Add, edit, suspend, or reactivate users and staff',
          'Assign or change roles (student, teacher, admin)',
          'Bulk imports with SIS/HRIS sync and role mapping',
        ],
      },
      {
        title: 'Course Management',
        items: [
          'Approve or reject teacher-created courses',
          'Edit course categories, tags, and prerequisites',
          'Manage global content libraries and templates',
        ],
      },
      {
        title: 'Financial Management',
        items: [
          'Payment tracking with Stripe, PayPal, JazzCash integrations',
          'Manage subscription plans, coupons, and invoices',
          'Commission and payout management for instructors',
          'Refund and dispute resolution flows',
        ],
      },
      {
        title: 'Content Moderation',
        items: [
          'Monitor uploaded course materials and media',
          'Automated plagiarism and policy compliance checks',
          'Review reported comments, posts, or forum threads',
        ],
      },
      {
        title: 'Communication & Notifications',
        items: [
          'Platform-wide announcement composer with targeting',
          'Automated email and in-app notification templates',
          'Workflow engine for reminders and nudges',
        ],
      },
      {
        title: 'Reports & Analytics',
        items: [
          'User growth, retention, and cohort analytics',
          'Course popularity and enrollment funnels',
          'Quiz, assessment, and competency reporting',
          'Financial dashboards with exportable statements',
        ],
      },
      {
        title: 'System Settings',
        items: [
          'Branding customization (logo, colors, domain)',
          'Security controls, permissions, and MFA policies',
          'API integrations (Zoom, SIS, payment gateways)',
          'Backup, restore, and data residency settings',
        ],
      },
    ],
  },
]
