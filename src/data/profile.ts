export const profile = {
  personal: {
    name: "Rushika Sudhir Mhaske",
    firstName: "Rushika",
    initials: "RM",
    title: "Business & Data Analyst",
    subtitle: "Operations, Supply Chain & Event Analytics",
    location: "Miami, FL (Open to Relocate)",
    phone: "+1 (218) 616-1642",
    email: "rushikamhaske04@gmail.com",
    linkedin: "https://linkedin.com/in/rushikamhaske",
    portfolio: "#",
    resumePdf: "/assets/resume.pdf",
  },

  summary: {
    short: "Driving Data-Enabled Operational Excellence",
    paragraphs: [
      "Business Analyst with 5+ years of experience driving data-enabled process improvements across event operations, supply chain, retail, and manufacturing environments.",
      "Skilled in transforming complex operational data into actionable insights using Power BI, SQL, Excel, Python, and data modeling techniques. Experienced in process mapping, KPI development, vendor analytics, forecasting, and workflow automation that have improved delivery timelines by 25%, reduced costs by $700K+, and increased resource utilization across cross-functional teams.",
      "Adept at partnering with business and technical stakeholders to streamline reporting, enhance data accuracy, and support decision-making that drives operational excellence and scalable growth."
    ],
    typewriterPhrases: [
      "Event Operations Analytics",
      "Supply Chain Insights",
      "Business Process Optimization",
      "Data-Driven Decision Making",
      "Workflow Automation Expert",
      "KPI Development Specialist",
    ],
  },

  metrics: [
    { value: "5+", label: "Years Experience", suffix: "" },
    { value: "4", label: "Industries", suffix: "+" },
    { value: "700", label: "Cost Savings", suffix: "K+ USD" },
    { value: "25", label: "Delivery Improvement", suffix: "%" },
  ],

  highlights: [
    { icon: "BarChart3", title: "Data-Driven Decisions", description: "Transform complex data into actionable insights" },
    { icon: "Eye", title: "End-to-End Visibility", description: "Full process transparency and monitoring" },
    { icon: "Users", title: "Cross-Functional Collaboration", description: "Bridge business and technical teams" },
    { icon: "TrendingUp", title: "Scalable Reporting & KPIs", description: "Build metrics that drive growth" },
  ],

  experience: [
    {
      title: "Business Analyst - Event Operations",
      company: "Ultra Event Group",
      location: "Miami, FL",
      startDate: "Jan 2024",
      endDate: "Present",
      current: true,
      bullets: [
        "Created live Power BI performance views that revealed budget leaks and vendor delays which helped the organization improve on-time event delivery by 25%.",
        "Partnered with logistics and operations teams to document scheduling and approval steps which removed unnecessary handoffs and enabled faster execution for high-priority events.",
        "Reduced yearly material expenses by 18% by comparing vendor price breaks and service levels in Excel which supported more informed procurement choices.",
        "Maintained the right stock at the right time by developing automated quantity alerts in Google Sheets which cut emergency restocking and reduced stock-outs by 40%.",
        "Improved forecast accuracy by evaluating historical attendance trends and resource usage which helped planners prepare with 30% better precision when scaling event setups.",
        "Gave decision-makers clearer visibility of performance by assembling KPI reporting on guest satisfaction, cycle times and profitability which guided weekly operational priorities.",
        "Increased accountability by configuring digital work tracking in Jira which enabled more transparent ownership of tasks and improved SLA compliance by 35%.",
      ],
      tools: ["Power BI", "Excel", "Google Sheets", "Jira", "SQL"],
    },
    {
      title: "Business Process Analyst - Supply Chain",
      company: "Green Masters",
      location: "Orlando, FL",
      startDate: "Mar 2022",
      endDate: "Jan 2023",
      current: false,
      bullets: [
        "Used Power BI to surface bottlenecks in greenhouse import logistics which helped the supply chain team reduce lead-time variability by 20% and increase planning reliability.",
        "Built Excel and SQL costing models that revealed high-margin internal production opportunities, guiding a sourcing shift that saved $500K on annual procurement.",
        "Improved vendor accountability by tracking OTIF and quality trends which strengthened performance reviews and supported more effective supplier negotiations.",
        "Enabled better material availability during seasonal spikes by introducing automated inventory triggers through data-validated Excel workflows that pushed availability rates to 95%.",
        "Worked with finance and operations teams to tie forecasted demand to cash outflow timing which reduced unplanned spending and improved budget predictability month over month.",
        "Made greenhouse-to-warehouse movement more efficient by mapping AS-IS vs TO-BE flows in Visio and removing non-value activities which cut handling time by 15%.",
        "Influenced category planning decisions through analysis of SKU profitability and seasonal patterns which led to optimized product mix and a 10% improvement in margins.",
      ],
      tools: ["Power BI", "Excel", "SQL", "Visio", "SAP"],
    },
    {
      title: "Business Operations Analyst Intern",
      company: "Garden of Eve",
      location: "New York, NY",
      startDate: "Mar 2021",
      endDate: "Feb 2022",
      current: false,
      bullets: [
        "Evaluated spoilage drivers and seasonal demand shifts in Excel which informed smarter purchasing decisions and reduced organic produce waste by $200K while improving product freshness in-store.",
        "Helped senior managers plan seasonal events more effectively by comparing revenue and traffic performance across programs such as the Garlic Festival which strengthened budgeting and resource allocation.",
        "Identified operational slowdowns by monitoring order fulfillment timing and mapping workflow touchpoints which contributed to a 15% increase in throughput across daily farm-market operations.",
        "Captured process knowledge into clear SOPs after observing checkout, stocking and prep activities which enabled faster onboarding for seasonal employees and reduced training effort for supervisors.",
        "Supported margin improvements by reviewing competitor pricing and summarizing recommended price changes which helped maintain strong market positioning for local organic offerings.",
      ],
      tools: ["Excel", "Process Mapping", "Data Analysis"],
    },
    {
      title: "Data Operations Analyst Intern",
      company: "Bergen's Greenhouses, Inc",
      location: "Minnesota, USA",
      startDate: "Mar 2021",
      endDate: "Sep 2021",
      current: false,
      bullets: [
        "Cleaned and organized logistics and campaign data in Excel which improved KPI visibility for managers and sped up weekly operational reviews.",
        "Visualized customer engagement and marketing attribution trends in Power BI which helped reduce acquisition costs by 15% through smarter promotional targeting.",
        "Investigated causes of delayed greenhouse shipments by comparing supplier lead-time data and conducting root-cause analysis which led to adjustments in routing and more reliable delivery schedules.",
        "Analyzed product demand patterns across sales channels which supported better prioritization of high-turnover greenhouse products and increased revenue potential for upcoming seasons.",
        "Strengthened the accuracy of monthly reporting by introducing streamlined data input templates that reduced manual correction work and ensured consistent insights for leadership.",
      ],
      tools: ["Excel", "Power BI", "Data Cleaning", "RCA"],
    },
    {
      title: "Operations Analyst",
      company: "Anandghana Industries",
      location: "Pune, India",
      startDate: "Jun 2019",
      endDate: "Feb 2021",
      current: false,
      bullets: [
        "Monitored production cycle data in Excel to rebalance workstation loading which helped improve manufacturing throughput by 15% and reduced idle time on the line.",
        "Improved inventory turnover by reviewing SKU demand patterns and applying ABC-based reorder rules which kept materials flowing without tying up unnecessary capital.",
        "Guided supplier selection by tracking cost trends and delivery consistency which strengthened vendor reliability and lowered procurement expenses by 12%.",
        "Reduced rework and batch deviations by running QMS compliance checks and highlighting step gaps which improved SOP adherence and lifted audit readiness across operations.",
        "Helped roll out new functional food products by analyzing resource needs and capacity constraints which allowed pilot runs to transition more smoothly into regular manufacturing.",
        "Made bottlenecks more visible by mapping material movement and worker touchpoints which gave managers clearer insight into where to adjust staffing and workflow pacing.",
        "Enhanced warehouse speed by reorganizing storage zones and optimizing pick-path layouts which lifted material handling efficiency and supported a 10% increase in order readiness.",
      ],
      tools: ["Excel", "QMS", "Process Mapping", "Inventory Management"],
    },
  ],

  projects: [
    {
      title: "Predictive Analytics for Perishable Goods",
      shortDescription: "ML-powered forecasting system reducing stock-outs by 40% and waste by 22%",
      bullets: [
        "Queried multi-year sales and inventory data using SQL and cleaned it in Python Pandas, creating feature-rich datasets with seasonality, holidays and lead-time profiles that stabilized forecast accuracy for perishable SKUs.",
        "Trained and tuned time-series models in Statsmodels and Prophet, compared error metrics and rolled out the best-performing model which cut out-of-stock events by 40% and reduced product waste by 22%.",
        "Connected forecast outputs to Power BI, building visuals and DAX measures for forecast vs actual and safety stock and configuring automated alerts so planners could adjust replenishment decisions proactively.",
      ],
      image: "/assets/predictive-analytics.png",
      tools: ["SQL", "Python", "Pandas", "Statsmodels", "Prophet", "Power BI", "DAX"],
      previewLink: "#",
      codeLink: "#",
    },
    {
      title: "Supply Chain Insights Dashboard",
      shortDescription: "Real-time vendor performance analytics identifying 75% of delays from key suppliers",
      bullets: [
        "Exported OTIF, lead-time and procurement cost data from SAP into Excel, standardized vendor and lane attributes and defined KPI logic that fed a consistent data model for downstream reporting.",
        "Developed a Power BI dashboard with DAX measures for OTIF performance, average lead-time and landed cost per supplier which surfaced that a small group of vendors accounted for over 75% of delays.",
        "Partnered with sourcing teams to use these insights during vendor reviews, enabling lane reallocation and contract adjustments that improved reliability and supported more cost-effective purchasing decisions.",
      ],
      image: "/assets/supply-chain.png",
      tools: ["SAP", "Excel", "Power BI", "DAX", "Power Query", "Data Modeling"],
      previewLink: "#",
      codeLink: "#",
    },
    {
      title: "Process Mining for Operations Optimization",
      shortDescription: "Workflow analysis delivering 15-20% reduction in end-to-end cycle time",
      bullets: [
        "Extracted timestamped order, picking and shipping records from operational systems using SQL and reshaped them in Power Query into event logs that accurately reflected task sequences and waiting times.",
        "Constructed AS-IS process maps in Visio that highlighted rework loops, unnecessary handoffs and long idle periods across key steps in the supply chain flow.",
        "Defined TO-BE workflows by removing non-value activities and reordering tasks, then supported implementation which delivered a 15 to 20% reduction in end-to-end cycle time for targeted processes.",
      ],
      image: "/assets/process-mining.png",
      tools: ["SQL", "Power Query", "Visio", "Process Mining", "BPMN"],
      previewLink: "#",
      codeLink: "#",
    },
  ],

  skills: {
    categories: [
      {
        name: "Data & Analytics",
        icon: "Database",
        skills: ["SQL", "Power BI", "Tableau", "Excel", "Power Query", "DAX", "Data Modeling", "Data Visualization", "Exploratory Data Analysis (EDA)", "A/B Testing", "Time-Series Forecasting"],
      },
      {
        name: "Programming & Automation",
        icon: "Code",
        skills: ["Python (Pandas, NumPy, Matplotlib)", "API Integration Concepts", "Workflow Automation"],
      },
      {
        name: "Business Systems & ERPs",
        icon: "Building",
        skills: ["SAP (MM/SCM Modules)", "NetSuite", "CRM Platforms (Salesforce/HubSpot)", "Inventory & Procurement Systems", "POS/E-commerce Systems (Shopify)"],
      },
      {
        name: "Process & Operations Tools",
        icon: "GitBranch",
        skills: ["BPMN", "Process Mapping", "Value Stream Mapping", "RCA (5 Whys, Fishbone)", "Lean Six Sigma Concepts"],
      },
      {
        name: "Project & Product Tools",
        icon: "Kanban",
        skills: ["Jira", "Confluence", "Trello", "Microsoft Office 365", "SharePoint", "Agile/Scrum Framework"],
      },
      {
        name: "Data Governance & Quality",
        icon: "Shield",
        skills: ["Data Cleaning", "Data Validation", "KPI & Metric Governance", "Master Data Fundamentals", "Documentation & Requirements Traceability"],
      },
    ],
    topSkills: [
      { name: "Power BI", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Excel", level: 95 },
      { name: "Python", level: 80 },
      { name: "Process Mapping", level: 85 },
    ],
  },

  education: [
    {
      degree: "MBA in Business Analytics",
      school: "Atlantis University",
      location: "Miami, FL",
      startDate: "Jan 2023",
      endDate: "Jul 2025",
      focus: "Business Analytics & Data-Driven Decision Making",
    },
    {
      degree: "Bachelors in Agribusiness Management",
      school: "M.P.K.V. Agriculture University",
      location: "Pune, India",
      startDate: "Aug 2016",
      endDate: "Jun 2020",
      focus: "Agricultural Operations & Business Management",
    },
  ],

  certifications: [
    { name: "IBM Business Analyst Professional Certificate", provider: "IBM", platform: "Coursera" },
    { name: "Google Data Analytics Professional Certificate", provider: "Google", platform: "LinkedIn Learning" },
    { name: "SQL for Business Analysts", provider: "LinkedIn", platform: "LinkedIn Learning" },
    { name: "Microsoft Power BI Data Analyst Professional Certificate", provider: "Microsoft", platform: "Coursera" },
    { name: "Business Analysis & Process Management", provider: "Coursera", platform: "Coursera" },
    { name: "Career Essentials in Business Analysis", provider: "LinkedIn", platform: "LinkedIn Learning" },
  ],

  social: {
    github: "#",
    linkedin: "https://linkedin.com/in/rushikamhaske",
    email: "mailto:rushikamhaske04@gmail.com",
  },
};

export type Profile = typeof profile;
