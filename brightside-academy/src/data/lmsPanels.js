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
  },
]
