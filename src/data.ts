import { Service, Project, Experience, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: 'Mariah Moet Lopez Maico',
  shortName: 'Mariah Maico',
  title: 'AI Automation Specialist',
  email: 'mariahlmaico@gmail.com',
  phone: '+63 995 765 3426',
  location: 'Makati City, Philippines',
  linkedin: 'https://www.linkedin.com/in/mariah-maico-64748b185/',
  upwork: 'https://www.upwork.com/freelancers/~01249d59524865ced1?companyReference=606308636514217985&mp_source=share',
  onlinejobs: 'https://v2.onlinejobs.ph/jobseekers/info/390576',
  summary: 'AI Automation Specialist with extensive experience designing and implementing intelligent workflow solutions using Make.com, Zapier, and n8n. Skilled in building AI-powered automations that streamline operations, enhance customer engagement, automate content creation, and optimize processes across multiple platforms. Passionate about leveraging AI, low-code systems, and API integrations to improve efficiency, scalability, and digital transformation.',
  education: {
    degree: 'Bachelor of Science in Marketing',
    institution: 'University of Makati',
    location: 'Makati City, Philippines',
    year: '2015'
  }
};

export const SERVICES: Service[] = [
  {
    id: 'ai-workflows',
    title: 'AI Workflow Automation',
    description: 'Designing end-to-end automations in Zapier, Make.com, and n8n — connecting CRMs, inboxes, and AI agents to eliminate repetitive manual work.',
    icon: 'Cpu',
    features: [
      'Multi-app sync & complex conditional routers',
      'Custom API endpoints & custom Webhooks',
      'Error handling, automated retries & logging',
      'Workflow mapping, documenting & auditing'
    ],
    platforms: ['Zapier', 'Make.com', 'n8n']
  },
  {
    id: 'api-integration',
    title: 'API & System Integration',
    description: 'Wiring up Google Workspace, Asana, Xero, Gmail, GoHighLevel, and ChatGPT through Google Apps Script and no-code platforms for clean, reliable data flow.',
    icon: 'Terminal',
    features: [
      'Google Apps Script automation & plugins',
      'Asana, ClickUp & CRM lead allocations',
      'Xero accounting & dynamic receipts sync',
      'Flexible data parsing & formatting structures'
    ],
    platforms: ['Google Apps Script', 'Google Workspace', 'ChatGPT API']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'zapier-content-repurposing',
    platform: 'Zapier',
    title: 'AI Content Repurposing Pipeline',
    shortDescription: 'File-upload trigger generates a transcript, drafts two unique blog articles, and produces LinkedIn and Instagram posts — with keyword-based routing and Google Sheets logging.',
    longDescription: 'Developed an enterprise-grade content repurposing funnel inside Zapier. The workflow detects file uploads in cloud drives, starts a transcription engine, forwards transcripts to custom GPT triggers to write SEO-optimized blog posts, and reformats social hooks. Complete with filters, keywords, and logging for audit checks.',
    bullets: [
      'Automated transcript generation from video/audio uploads.',
      'Created 2 distinct high-quality blog posts with SEO-optimized outlines.',
      'Structured specific promotional posts for LinkedIn and Instagram hooks.',
      'Configured Google Sheets automated tracking system for analytics mapping.',
      'Incorporated Zapier Paths to segment articles by focus keywords (e.g., Tech, Marketing).'
    ],
    toolsUsed: ['Zapier Paths', 'OpenAI ChatGPT API', 'Google Drive', 'Google Sheets', 'Transcriber API'],
    metrics: [
      { label: 'Manual time reduced', value: '100%' },
      { label: 'Weekly articles output', value: '8x' },
      { label: 'Processing time', value: '< 3 Mins' }
    ],
    flowSteps: [
      { id: 'z1', label: 'File Upload (Trigger)', type: 'trigger', description: 'Monitor specified Google Drive folder for audio/video uploads' },
      { id: 'z2', label: 'Transcribe File', type: 'action', description: 'Generate high-accuracy text transcripts from media content' },
      { id: 'z3', label: 'Keyword Filter', type: 'filter', description: 'Verify content matches publication criteria and exclude test drafts' },
      { id: 'z4', label: 'AI Blog & Post Writer', type: 'ai', description: 'Run custom ChatGPT instructions to formulate blog posts and social summaries' },
      { id: 'z5', label: 'Zapier Path Router', type: 'router', description: 'Route output based on core content categories' },
      { id: 'z6', label: 'CRM & Sheet Logger', type: 'action', description: 'Update social plans and write raw drafts to tracking sheets' }
    ],
    imageUrl: '/src/assets/images/content_repurposing_1780114896872.png'
  },
  {
    id: 'zapier-lead-management',
    platform: 'Zapier',
    title: 'Lead Management & Follow-Up Engine',
    shortDescription: 'Asana, Google Drive, and email/SMS integrations automate folder creation, recurring follow-ups for quoted leads, welcome emails, and conditional service recommendation campaigns.',
    longDescription: 'Completed a deep lead tracking and communication system mapping Asana tasks, Google Drive, and multi-channel SMS/Email gateways. Features custom notification follow-up schedules based on lead actions, ensuring complete retention.',
    bullets: [
      'Automated Google Drive folders and Asana subtasks for incoming leads.',
      'Configured drip SMS/Email follow-up lines to unresponsive quotes.',
      'Drafted client welcomes with personalized attachments matching lead answers.',
      'Enabled conditional campaigns to cross-sell secondary services depending on filled categories.'
    ],
    toolsUsed: ['Zapier', 'Asana', 'Google Drive', 'Gmail', 'SMS Gateway', 'Google Forms'],
    metrics: [
      { label: 'Lead Response Delay', value: '-92%' },
      { label: 'Client Conversion Boost', value: '34%' },
      { label: 'Ops Hours Saved / Wk', value: '14 hrs' }
    ],
    flowSteps: [
      { id: 'zl1', label: 'Lead Incoming (Trigger)', type: 'trigger', description: 'Webhook triggers from Form capture or CRM quote inquiry' },
      { id: 'zl2', label: 'Create Asana Board', type: 'action', description: 'Instantiate dedicated client onboarding board and task cards font-semibold' },
      { id: 'zl3', label: 'Build Drive Workspace', type: 'action', description: 'Create folders with specific customer ID naming conventions' },
      { id: 'zl4', label: 'Draft Custom Welcome', type: 'ai', description: 'ChatGPT structures custom email outline based on form questionnaire' },
      { id: 'zl5', label: 'Send Dynamic Email', type: 'action', description: 'Send automated Gmail with PDF pricing agreements' }
    ],
    imageUrl: '/src/assets/images/asana_client_paths_1780115483017.png'
  },
  {
    id: 'make-financial-reports',
    platform: 'Make.com',
    title: 'Automated Financial Reporting',
    shortDescription: 'Asana task completion triggers a Make scenario that pulls Xero transactions, generates a structured CSV matching the native export, and attaches it back to the originating task.',
    longDescription: 'Engineered a financial operations automation linking Asana project completions directly to Xero logs. The scenario extracts financial data, parses ledger points, converts transaction states into standardized CSV layouts, and archives complete files into project boards.',
    bullets: [
      'Automatic triggers monitoring Asana milestone confirmations.',
      'Automated OAuth query extraction from Xero accounting endpoints.',
      'Structured complex array mappings to compile native accounting formats.',
      'Enforced document attachments securely mapped back to task archives.'
    ],
    toolsUsed: ['Make.com (Integromat)', 'Xero API', 'Asana API', 'Array Aggregators', 'CSV Synthesizer'],
    metrics: [
      { label: 'Audit report manual labor', value: '0 hrs' },
      { label: 'Report generation time', value: '12s' },
      { label: 'Reconciliation errors', value: '0%' }
    ],
    flowSteps: [
      { id: 'm1', label: 'Task Complete (Trigger)', type: 'trigger', description: 'Asana project marked "Final Invoice Approved"' },
      { id: 'm2', label: 'Query Xero Ledger', type: 'action', description: 'Authorize and fetch transaction and invoicing data from Xero' },
      { id: 'm3', label: 'Array Aggregation', type: 'action', description: 'Merge separate item logs into a cohesive database array' },
      { id: 'm4', label: 'CSV Formatter', type: 'action', description: 'Compile transaction rows in specific corporate template layout' },
      { id: 'm5', label: 'Upload to Task Card', type: 'action', description: 'Affix financial CSV back to parent Asana ticket for record' }
    ],
    imageUrl: '/src/assets/images/xero_to_asana_1780114919184.png'
  },
  {
    id: 'make-document-parser',
    platform: 'Make.com',
    title: 'AI Document Processing & Filing',
    shortDescription: 'Gmail attachments are analyzed by ChatGPT, renamed descriptively, uploaded to Google Drive, logged in Sheets, and summarized via optional email digest.',
    longDescription: 'Completed an advanced AI document management pipeline using Make.com. The platform monitors Gmail, runs file extractions, routes files through GPT vision/cognitive filters, yields descriptive and standard file titles, and coordinates cloud folders.',
    bullets: [
      'Continuous inbox monitoring covering attachments and encrypted sources.',
      'Generative content parsing utilizing ChatGPT context mappings.',
      'Unified descriptive naming schemas removing human file-saving errors.',
      'Google Sheets centralized dashboard reporting folder, classification, and metadata logs.'
    ],
    toolsUsed: ['Make.com', 'Gmail API', 'OpenAI ChatGPT Vision', 'Google Sheets Docs', 'Google Drive SDK'],
    metrics: [
      { label: 'Sorting accuracy rate', value: '99.2%' },
      { label: 'Admin filing hours helper', value: '18/Mo' },
      { label: 'System delays', value: 'Real-time' }
    ],
    flowSteps: [
      { id: 'md1', label: 'Mail Received (Trigger)', type: 'trigger', description: 'Listen for custom subject lines with email files' },
      { id: 'md2', label: 'Verify & Download File', type: 'action', description: 'Verify safe attachment structures and save buffer stream' },
      { id: 'md3', label: 'AI Deep Cognitive Scan', type: 'ai', description: 'Trigger ChatGPT API to inspect document contents and extract critical meta details' },
      { id: 'md4', label: 'Generate Filename', type: 'ai', description: 'Create semantic names [Company-Date-Type] based on scanned details' },
      { id: 'md5', label: 'Push to Drive & Sheets', type: 'action', description: 'Upload sorted file to matched folders and populate catalog sheet row' }
    ],
    imageUrl: '/src/assets/images/gmail_integration_1780114943174.png'
  },
  {
    id: 'n8n-customer-support',
    platform: 'n8n',
    title: 'Facebook Support AI Agent',
    shortDescription: 'Conversational AI agent answers customer inquiries on a Facebook page using a curated knowledge base — cutting response time and automating routine queries.',
    longDescription: 'Constructed an automated conversational help agent designed within n8n. The AI reviews questions, routes queries over local embeddings/knowledge vectors to find accurate answers, and formats natural responses, removing immediate manual chat delays.',
    bullets: [
      'Built custom conversational agent mapping Facebook Graph and Chat API nodes.',
      'Developed vector store retrievers tracking FAQ sheets and guide sheets.',
      'Significantly reduced manual customer support response times.',
      'Configured automated human Slack alerts when questions require priority hands-on support.'
    ],
    toolsUsed: ['n8n Nodes', 'Facebook Graph Webhooks', 'OpenAI Embeddings', 'Vector Storage (Pinecone/Sheets)', 'Slack SDK'],
    metrics: [
      { label: 'Average response speed', value: '< 1.5s' },
      { label: 'Autononous resolution', value: '82%' },
      { label: 'Ticket cost reduction', value: '60%' }
    ],
    flowSteps: [
      { id: 'n1', label: 'Webhooks Message (Trigger)', type: 'trigger', description: 'Capture message payloads from Facebook Messenger api' },
      { id: 'n2', label: 'Knowledge Base Search', type: 'action', description: 'Query vector base to fetch support manuals and FAQ notes' },
      { id: 'n3', label: 'Formulate Answer', type: 'ai', description: 'Prompt AI model to reply in a helpful company-toned layout font-semibold' },
      { id: 'n4', label: 'Send Answer', type: 'action', description: 'Dispatch finished reply directly back to native chat font-semibold' }
    ],
    imageUrl: '/src/assets/images/webhook_filter_ai_1780114962311.png'
  },
  {
    id: 'n8n-shorts-creator',
    platform: 'n8n',
    title: 'Short-Form Video Content Engine',
    shortDescription: 'Automated workflow for YouTube Shorts and Facebook Reels — AI content generation, caption creation, media processing, and cross-platform publishing in one pipeline.',
    longDescription: 'Completed a short-form media manufacturing pipeline inside n8n. The system handles drafting script hooks, rendering subtitle overlays, compiling video background loops, formulating captions, and deploying outputs directly.',
    bullets: [
      'Automated daily script drafting and hook curation targeting high click rates.',
      'Coordinated background audio asset mapping and rendering.',
      'Configured descriptive subtitle engines and meta summaries.',
      'Structured automated Facebook Reels & YouTube Shorts publication schedules.'
    ],
    toolsUsed: ['n8n Scripting', 'ChatGPT-4 API', 'ElevenLabs Voice Engine', 'Video Auto API', 'Social Media Schedulers'],
    metrics: [
      { label: 'Publishing schedule', value: '100% automated' },
      { label: 'Creator productivity', value: '5x' },
      { label: 'Weekly short generation', value: '14 Reels' }
    ],
    flowSteps: [
      { id: 'ns1', label: 'Schedule Post (Trigger)', type: 'trigger', description: 'Triggers on standard scheduling cron values' },
      { id: 'ns2', label: 'Brainstorm Concept', type: 'ai', description: 'Pull fresh topics from trend sheet and draft script outlines' },
      { id: 'ns3', label: 'Formulate Audio Voiceover', type: 'action', description: 'Generate voice audio files through text-to-speech rendering' },
      { id: 'ns4', label: 'Assemble Caption Metadata', type: 'ai', description: 'Write captions, tags, and hashtag targets tailored for viral hooks' },
      { id: 'ns5', label: 'Schedule & Post Clip', type: 'action', description: 'Upload completed clip directly to social profiles' }
    ],
    imageUrl: '/src/assets/images/asmr_video_creator_1780115460590.png'
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    role: 'Email Support Advocate',
    company: 'Wonolo (via Upwork) · US-Based',
    location: 'Remote / US-Based Scale',
    duration: '2021 - Present',
    description: 'Managed inbound Salesforce tickets for US users — reducing escalations and lifting platform experience for customers and workers alike.',
    highlights: [
      'Managed CRM platforms (Salesforce) to process, analyze, and resolve inbound help tickets from customer cohorts.',
      'Conducted deep triage on policy, trust & safety incidents, escalating complex issues when necessary.',
      'Designed and customized local macro sequences to speed up repetitive response workflows.'
    ],
    toolsUsed: ['Salesforce Support CRM', 'Slack Operations', 'Google Workspace', 'SOP Guidelines']
  },
  {
    id: 'exp2',
    role: 'Content Moderator',
    company: 'Wipro',
    location: 'Makati City, Philippines',
    duration: '2013 - 2020',
    description: 'Moderated high-volume child-safety video content at 98% policy compliance, escalating high-risk material and protecting US users daily.',
    highlights: [
      'Moderated core online media and user submissions for platform safety & community policy guidelines.',
      'Maintained a consistent accuracy rate of 98%+ across strict high-volume quality auditing frameworks.',
      'Escalated high-risk trust issues directly to legal and specialized global response teams.'
    ],
    toolsUsed: ['Policy Compliance Engines', 'Zendesk Ticket Queues', 'Content Flagging Systems', 'High-Risk Triage']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'David Harrington',
    role: 'Operations Director',
    company: 'Peak Flow Logistical US',
    avatarSeed: 'DH',
    feedback: 'Mariah re-engineered how our support team handled tickets. Response times dropped and our agents stopped drowning in repetitive work.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Elena Kropf',
    role: 'Content Operations Manager',
    company: 'Apex Media Group',
    avatarSeed: 'EK',
    feedback: 'Detail-oriented, dependable, and a systems thinker. Her automations quietly run our content pipeline every single day.',
    rating: 5
  }
];

export const ALL_TECH_SKILLS = {
  automation: ['Make.com', 'Zapier', 'n8n', 'Google Apps Script', 'Webhooks & APIs', 'JSON & Data Mapping'],
  aiAndModels: ['ChatGPT & GPT-4o', 'Prompt Engineering', 'RAG & Vector Retrieval', 'ElevenLabs API', 'DALL-E & Midjourney prompts'],
  crmsAndPM: ['GoHighLevel', 'Zendesk Suite', 'Asana', 'ClickUp', 'Airtable', 'Slack & Teams'],
  productivity: ['Google Workspace Sheets', 'Microsoft 365', 'Loom', 'CSV Ledger Imports'],
  marketingAndDesign: ['Marketing Funnel Automations', 'Canva Layouts', 'CapCut Media Editing', 'BS Marketing Strategy']
};
