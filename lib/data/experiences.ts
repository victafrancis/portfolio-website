export interface Experience {
  role: string
  company: string
  location: string
  period: string
  description: string
  companyUrl?: string
  tech: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Fullstack Developer (Data and Back-end Focus)',
    company: 'LabX Media Group',
    location: 'Midland, ON',
    period: '2021-2025',
    description:
      'As a Full Stack Developer at LabX Media Group, I focused primarily on back-end development while also contributing to front-end internal-facing UI projects across multiple brands. I consistently delivered new features by designing and updating data models, creating API endpoints, and enhancing user-facing applications. In addition to development, I authored advanced SQL queries and built automated ETL pipelines to support stakeholder reporting and ad hoc data requests. I completed multiple ETL data projects involving content migration and data manipulation through scripting and manual processes. Many things change all the time, and so does tech adoption in our company. This meant that I had to learn and keep learning new technologies and implement them into our tech stack to improve scalability and efficiency. These combined efforts in development, data management, and analytics helped drive both team productivity and business decision-making.',
    companyUrl: 'https://www.labxmediagroup.com/',
    tech: ['Back-end', 'Data', 'ETL', 'SQL', 'API Development', 'UI']
  },
  {
    role: 'Fullstack Developer / Project Lead',
    company: 'Backr.ai',
    location: 'Kingston, ON',
    period: '2020-2021',
    description:
      'At Backr, I worked on various projects but I mainly led the development of the Backr Shopify application which will be used to add value to our customers by creating meaningful analytics on their Shopify data. I read up on various Shopify API documentation and figure out a way to develop an app that can integrate their data to our infrastructure. I also had to keep learning about new technologies which I applied right away in an effort to make it the best product out there for our clients.',
    companyUrl: 'https://www.backr.ai/',
    tech: ['Shopify', 'APIs', 'Fullstack', 'Analytics']
  },
  {
    role: 'Fullstack Engineer / Tech Lead',
    company: 'Tender Plant and Care Inc',
    location: 'Toronto, ON',
    period: '2020-2021',
    description:
      "Led the development of the TPC inventory storage application with a small team of very talented fullstack developers (all freelance). We were able to release a working version of the app after one sprint that lasted three weeks. Those first three weeks involved designing the UI, the database ERD, the backend architecture, and deployment to multiple cloud services. I'm currently still managing the product to implement improvements based on user feedback and to implement new features moving forward.",
    tech: ['Leadership', 'UI Design', 'Backend Architecture', 'Cloud Deployment']
  },
  {
    role: 'Project Manager / Database Support (Marketing)',
    company: 'George Brown College',
    location: 'Toronto, ON',
    period: '2019-2020',
    description:
      "My main task to build a small database with an accompanying dashboard and UI from scratch, using MS Access, which I've never used before. I've had knowledge of various other databases as well as experience with building dashboards so the challenge was to build something using new tools I've never used before. In this project, I had to act as the Project Manager, Product Specialist, Database Architect and Developer. Through continuous feedback from my Director and his team, I've been able to build the product, iterate and improve it multiple times to fit their needs. In the end, the project was successful (but not without failures) and I was even able to add continuity to the product by creating documentation for maintenance.",
    companyUrl: 'https://www.georgebrown.ca/',
    tech: ['MS Access', 'Dashboards', 'Project Management', 'Documentation']
  },
  {
    role: 'Project Analyst / Tier-1 Technical Support (Virtual Agent / Chatbots)',
    company: '[24]7.ai',
    location: 'Toronto, ON',
    period: '2015-2017',
    description:
      'Had the opportunity to work with very talented people within the Virtual Agent / Chatbot space. Managed the VA / Chatbot product and knowledge base for various complex client projects from different industries including banks (RBC, CIBC and BMO), healthcare, hospitality and education. I learned how to build and design products that really focuses on the users, and how they can self-serve themselves with the use of very efficient and effective chatbots. During my time here, I also led and completed a project to build a brand new client-facing dashboard together with a teammate. We worked together on making the reports more effective for clients, while making the report-building process much more efficient for our teammates as well, saving time and money for the company along the way.',
    companyUrl: 'https://www.247.ai/company/contact-us',
    tech: ['Chatbots', 'Knowledge Base', 'Client Reporting', 'Support']
  },
  {
    role: 'Production Operator / Production Specialist',
    company: 'Woodbridge Foam Corporation',
    location: 'Woodbridge, Vaughan',
    period: '2013-2015',
    description:
      'Started as a production line worker which was the worst fit for me, as I am someone who always wants to create something that can help make anything better. With enough perseverance, I was given an opportunity to design a system using MS Excel and macros that would improve internal processes, which ultimately improved production numbers for the company.',
    companyUrl: 'https://www.woodbridgegroup.com/',
    tech: ['Process Improvement', 'Excel', 'Automation']
  }
]
