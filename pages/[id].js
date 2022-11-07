import { useRouter } from 'next/router';

const name = () => {
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const router = useRouter();
     console.log(router.query.id);
     if (router.query.id === '1') {
          return (
               <div>
                    <div className='container-fluid' style={{ height: '25vh' }}>
                         <div className='row mt-5'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <div className='row'>
                                        <div className='col-lg-8'>
                                             <h3 className='ff'>Business Development Executive</h3>
                                             <h3 className='ff'>0-2 year</h3>

                                             <p className='ff mt-3'>FULL TIME</p>
                                        </div>
                                        <div className='col-lg-4'>
                                             <a href='mailto:careers@rispostacorp.com?subject=For Business Development Executive!&body=' className='btn btn-info text-uppercase'>
                                                  Apply for this job
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
                    <div className='container-fluid bg-light'>
                         <div className='row'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <h4 className='ff mt-5'>About us</h4>
                                   <p className='ff text-justify'>
                                        If there’s a business partner that knows how to speak proficiently their customers’ supply chain language and convert them into strategic Business and IT road maps, it’s RISPOSTA. RISPOSTA’s state of the art integrated platform ADYANT delivers strategic solutions to plan, execute, Integrate and optimize supply chains by providing businesses with complete visibility and control and ultimately reducing their operational costs and improving their revenue. Founded in 2021 in Hyderabad, India by Supply Chain Veteran founders with deep domain expertise complementing in Business acumen, Functional, Technology and Organizational transformation. RISPOSTA has offices in India and South Africa. Passion for helping customers to come over their Supply Chain and IT challenges through RISPOSTA’s offerings. We now serve customers in India and expanding rapidly in Europe and APAC. ADYANT, the enterprise platform & offerings are powered by Machine Learning with
                                        cutting edge technologies to provide organizations with scalable solutions in the area of Supply Chain Management and Integrations
                                   </p>

                                   <ul className='ff text-justify'>
                                        <li>ADYANT suite is a platform that would enable customers to get their value really quick through rapid implementation methodology which is based on the “min code” philosophy</li>
                                        <li>ADYANT easily integrates with underlying ERP’s, CRM’s, Mainframes, personalized or customized solutions etc., without disrupting the existing process framework.</li>
                                   </ul>

                                   <h4 className='mt-4'>Roles and Responsibilities:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Perform extensive hardcore data mining and the percentage of data entry will be (40%) and exploration (60%</li>
                                        <li>Need to understand the requirement of the company product/Services and accordingly execute required work</li>
                                        <li>To identify right set of prospects and coordinate with prospective clients</li>
                                        <li>Email Campaigns / Marketing, Lead Generation, Market research, Blog writing, white paper, case study & eBook</li>
                                        <li>Creating the database from scratch across the Industry Vertical for Global Market</li>
                                        <li>Good Verbal and written communication skills</li>
                                        <li>Knowledge in Discover org, LinkedIn, Zoom Info, Google etc..</li>
                                        <li>Understand workflow processes and execute systems within the Marketing/Sales cycle.</li>
                                        <li>Generate leads through online market research.</li>
                                        <li>Make Introductory cold calls to client prospects, set up pre-scheduled appointments</li>
                                        <li>Maintaining the company profile on social media and freelancing platforms</li>
                                        <li>Report to CEO with the data collected on the weekly basi</li>
                                        <li>Should be able to meet the assigned lead/revenue targets in stipulated time.</li>
                                   </ul>
                                   <h4 className='ff mt-4'>Desired Candidate Profile:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Any Full-time graduation is mandatory</li>
                                        <li>Good oral and written communication skills in English.</li>
                                        <li>Strong data management and analysing skills</li>
                                        <li>Must be proactive and proficient with soft skills</li>
                                        <li>Well versed in MS Office</li>
                                        <li>Knowledge of social media platforms like Facebook, Twitter, LinkedIn</li>
                                   </ul>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
               </div>
          );
     }
     if (router.query.id === '2') {
          return (
               <div>
                    <div className='container-fluid' style={{ height: '25vh' }}>
                         <div className='row mt-5'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <div className='row'>
                                        <div className='col-lg-8'>
                                             <h3 className='ff'>Software Development Engineer</h3>
                                             <h3 className='ff text-uppercase'>(Remote, US Based) 2 - 5 years of experience</h3>

                                             <p className='ff mt-3 text-uppercase'>Frontend Engineer/FULL TIME</p>
                                        </div>
                                        <div className='col-lg-4'>
                                             <a href='mailto:careers@rispostacorp.com?subject=For Software Development Engineer!&body=' className='btn btn-info text-uppercase'>
                                                  Apply for this job
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
                    <div className='container-fluid bg-light'>
                         <div className='row'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <h4 className='ff mt-5'>About us</h4>
                                   <p className='ff text-justify'>
                                        If there’s a business partner that knows how to speak proficiently their customers’ supply chain language and convert them into strategic Business and IT road maps, it’s RISPOSTA. RISPOSTA’s state of the art integrated platform ADYANT delivers strategic solutions to plan, execute, Integrate and optimize supply chains by providing businesses with complete visibility and control and ultimately reducing their operational costs and improving their revenue. Founded in 2021 in Hyderabad, India by Supply Chain Veteran founders with deep domain expertise complementing in Business acumen, Functional, Technology and Organizational transformation. RISPOSTA has offices in India and South Africa. Passion for helping customers to come over their Supply Chain and IT challenges through RISPOSTA’s offerings. We now serve customers in India and expanding rapidly in Europe and APAC. ADYANT, the enterprise platform & offerings are powered by Machine Learning with
                                        cutting edge technologies to provide organizations with scalable solutions in the area of Supply Chain Management and Integrations
                                   </p>

                                   <ul className='ff text-justify'>
                                        <li>ADYANT suite is a platform that would enable customers to get their value really quick through rapid implementation methodology which is based on the “min code” philosophy</li>
                                        <li>ADYANT easily integrates with underlying ERP’s, CRM’s, Mainframes, personalized or customized solutions etc., without disrupting the existing process framework.</li>
                                   </ul>

                                   <h4 className='ff mt-4'>Skills Required</h4>
                                   <p className='ff text-justify'>JavaScript, ReactJS, Redux, CSS Frameworks such as Bootstrap/Bulma</p>

                                   <h4 className='mt-4'>Job Description:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Meeting with the development team to discuss user interface ideas and applications</li>
                                        <li>Reviewing application requirements and interface designs.</li>
                                        <li>Identifying web-based user interactions.</li>
                                        <li>Developing and implementing highly responsive user interface components using react concepts</li>
                                        <li>Writing application interface codes using JavaScript following react.js workflows.</li>
                                        <li>Troubleshooting interface software and debugging application codes.</li>
                                        <li>Developing and implementing front-end architecture to support user interface concepts.</li>
                                        <li>Monitoring and improving front-end performance.</li>
                                        <li>Documenting application changes and developing updates.</li>
                                        <li>Knowledge of performance testing frameworks including Mocha and Jest.</li>
                                        <li>Experience with browser-based debugging and performance testing software.</li>
                                        <li>Excellent troubleshooting skills</li>
                                   </ul>
                                   <h4 className='ff mt-4'>Nice to Haves:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Experience with No-SQL databases (e.g. MongoDB).</li>
                                        <li>Experience consuming REST APIs.</li>
                                        <li>Knowledge of React tools including React.js, Webpack, Enzyme, Redux, and Flux</li>
                                        <li>Experience setting up a cloud server from scratch (e.g. EC2)</li>
                                        <li>Experience with popular relational databases (e.g. MySQL).</li>
                                        <li>Experience with message queues (e.g. Amazon SQS / RabbitMQ).</li>
                                        <li>Solid understanding of HTTP and other internet protocols</li>
                                   </ul>
                                   <h4 className='ff mt-4'>Must Haves:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>You have programmed using ReactJS for at least 2 years..</li>
                                        <li>You are proficient with git (version control system)</li>
                                        <li>You are proficient with AWS ecosystem</li>
                                   </ul>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
               </div>
          );
     }
     if (router.query.id === '3') {
          return (
               <div>
                    <div className='container-fluid' style={{ height: '25vh' }}>
                         <div className='row mt-5'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <div className='row'>
                                        <div className='col-lg-8'>
                                             <h3 className='ff'>Technical Consultant</h3>
                                             <h3 className='ff text-uppercase'> 4-10 years of experience</h3>

                                             <p className='ff mt-3 text-uppercase'>Production Support/FULL TIME</p>
                                        </div>
                                        <div className='col-lg-4'>
                                             <a href='mailto:careers@rispostacorp.com?subject=For Technical Consultant!&body=' className='btn btn-info text-uppercase'>
                                                  Apply for this job
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
                    <div className='container-fluid bg-light'>
                         <div className='row'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <h4 className='ff mt-5'>About us</h4>
                                   <p className='ff text-justify'>
                                        If there’s a business partner that knows how to speak proficiently their customers’ supply chain language and convert them into strategic Business and IT road maps, it’s RISPOSTA. RISPOSTA’s state of the art integrated platform ADYANT delivers strategic solutions to plan, execute, Integrate and optimize supply chains by providing businesses with complete visibility and control and ultimately reducing their operational costs and improving their revenue. Founded in 2021 in Hyderabad, India by Supply Chain Veteran founders with deep domain expertise complementing in Business acumen, Functional, Technology and Organizational transformation. RISPOSTA has offices in India and South Africa. Passion for helping customers to come over their Supply Chain and IT challenges through RISPOSTA’s offerings. We now serve customers in India and expanding rapidly in Europe and APAC. ADYANT, the enterprise platform & offerings are powered by Machine Learning with
                                        cutting edge technologies to provide organizations with scalable solutions in the area of Supply Chain Management and Integrations
                                   </p>

                                   <ul className='ff text-justify'>
                                        <li>ADYANT suite is a platform that would enable customers to get their value really quick through rapid implementation methodology which is based on the “min code” philosophy</li>
                                        <li>ADYANT easily integrates with underlying ERP’s, CRM’s, Mainframes, personalized or customized solutions etc., without disrupting the existing process framework.</li>
                                   </ul>

                                   <h4 className='mt-4'>Desired Candidate Profile:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>OS Knowledge – Windows, Unix</li>
                                        <li>DB – RDBMS Concepts, Oracle, SQL/ PL SQL and DBA concepts</li>
                                        <li>Windows batch and Shell scripting knowledge .</li>
                                        <li>Good Documentation, Analytical and Problem-solving skills</li>
                                        <li>Meticulous planning with attention to detail and multi-tasking skills</li>
                                        <li>Domain knowledge: Understanding of Supply Chain Planning and how it integrates with other systems. Any industry specific experience is a big plus..</li>
                                        <li>Any Full-time graduation is mandatory .</li>
                                        <li>Good oral and written communication skills in English. .</li>
                                        <li>Strong data management and analysing skills.</li>
                                        <li>Must be proactive and proficient with soft skills.</li>
                                   </ul>
                                   <h4 className='ff mt-4'>Roles and Responsibilities:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>As a member of Customer Success team, you will be involved in Solution implementation, enhancement, support services, integration, custom projects either at the customer site or offshore.</li>
                                        <li>Design, develop and maintain platform workflow/ user interface, integration scripts, Data mapping, data modelling and loading of data</li>
                                        <li>Handle activities with a diverse scope where analysis of data requires evaluation of identifiable factors</li>
                                        <li>mplementation and production support, and contribute on internal development projects</li>
                                        <li>Ready to travel to customer site based on business needs, and flexible to work with overlapping time zones and work timings.</li>
                                        <li>Identify areas of improvement and scope of automation on routine tasks or activities</li>
                                        <li>Unit Testing, Integration Testing and Support of User acceptance Testing</li>
                                   </ul>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
               </div>
          );
     }
     if (router.query.id === '4') {
          return (
               <div>
                    <div className='container-fluid' style={{ height: '25vh' }}>
                         <div className='row mt-5'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <div className='row'>
                                        <div className='col-lg-8'>
                                             <h3 className='ff'>Vice President of Operations</h3>
                                             <h3 className='ff text-uppercase'> 10-15 years of experience</h3>
                                        </div>
                                        <div className='col-lg-4'>
                                             <a href='mailto:careers@rispostacorp.com?subject= For Vice President Of Operations!&body=' className='btn btn-info text-uppercase'>
                                                  Apply for this job
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
                    <div className='container-fluid bg-light'>
                         <div className='row'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <h4 className='ff mt-5'>About us</h4>
                                   <p className='ff text-justify'>
                                        If there’s a business partner that knows how to speak proficiently their customers’ supply chain language and convert them into strategic Business and IT road maps, it’s RISPOSTA. RISPOSTA’s state of the art integrated platform ADYANT delivers strategic solutions to plan, execute, Integrate and optimize supply chains by providing businesses with complete visibility and control and ultimately reducing their operational costs and improving their revenue. Founded in 2021 in Hyderabad, India by Supply Chain Veteran founders with deep domain expertise complementing in Business acumen, Functional, Technology and Organizational transformation. RISPOSTA has offices in India and South Africa. Passion for helping customers to come over their Supply Chain and IT challenges through RISPOSTA’s offerings. We now serve customers in India and expanding rapidly in Europe and APAC. ADYANT, the enterprise platform & offerings are powered by Machine Learning with
                                        cutting edge technologies to provide organizations with scalable solutions in the area of Supply Chain Management and Integrations
                                   </p>

                                   <ul className='ff text-justify'>
                                        <li>ADYANT suite is a platform that would enable customers to get their value really quick through rapid implementation methodology which is based on the “min code” philosophy</li>
                                        <li>ADYANT easily integrates with underlying ERP’s, CRM’s, Mainframes, personalized or customized solutions etc., without disrupting the existing process framework.</li>
                                   </ul>

                                   <p className='ff text-justify'>The Vice President of Operations plans, directs, coordinates, and overseas operations activities of Risposta, ensuring development and implementation of efficient operations and cost-effective systems to meet current needs and support the aggressive future growth plans of the company. Help in building the Offshore Development Centre in India. Responsibilities are based upon client first focus for business operations execution. The VP will closely work with CEO making the big vision reality and grow to COO level in a short span based on the performance and promise of future potential.</p>

                                   <h4 className='mt-4'>Key Responsibilities include but are not limited to:</h4>
                                   <p className='ff text-justify'>You will be part of the core leadership team and closely partnering with the CEO. Main Areas of Responsibilities:</p>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Delivery and account management</li>
                                        <li>Business Development, Strategy and Growth</li>
                                        <li>Determining the growth strategy for the consulting services team. Leading the Consulting and Services functions. Overseeing the Delivery of Services Projects at Client Locations.</li>
                                        <li>Managing key financial metrics for the consulting services team including Revenue, Utilization, Pricing and Gross margin.</li>
                                        <li>This role will require some domestic and international travel, to work with Risposta’s employees and customer contacts.</li>
                                        <li>Strong local network of IT and business executives and business acumen across a variety of industries and business functions</li>
                                        <li>Recognized as a valued trusted advisor in relationships with clients, colleagues, vendors, and other industry professionals</li>
                                   </ul>
                                   <h4 className='ff mt-4'>ACCOUNT MANAGEMENT & DELIVERY::</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Oversee the delivery of our services team across multiple clients..</li>
                                        <li>Build Global Delivery Model for scale and growth.</li>
                                        <li>Ensure that consulting, technical and project delivery best practices are maintained and improved.</li>
                                        <li>Implement training programs, workshops, and mentoring to ensure that project delivery is successful. Engage in delivery roles as required.</li>
                                        <li>Mentor employees/consultants/leads/managers located at customer site and internal employees.</li>
                                        <li>Continuous process improvement of our technology services</li>
                                        <li>Support Account Management activities such as meeting with clients, employees, consultants, conducting reviews, on-boarding consultants, etc.</li>
                                   </ul>
                                   <h4 className='ff mt-4'>BUSINESS DEVELOPMENT:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Achieve stated Revenue & Gross Profit Goals. New Client acquisition targets..</li>
                                        <li>Sales and Business Development efforts. Framing Risposta’s offering, developing solutions for customers and business growth</li>
                                        <li>Preparing SOWs, Proposals, Sales and Pre-Sales presentations for customers..</li>
                                        <li>Maintaining excellent relationships with key internal and external stakeholders by managing expectations effectively.</li>
                                        <li>Building our core practices by fostering partnerships, developing marketing content (e.g. blogs, fact sheets, case studies, etc.), attending conferences, etc..</li>
                                   </ul>
                                   <h4 className='ff mt-4'>QUALIFICATIONS:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>15+ years of experience in Software Development or Consulting Services with over 10 years in the Leadership experience</li>
                                        <li>Experience as a client-facing consultant in an IT role. Delivery experience in Software Development, Data, Testing, Solution Architect and Project Management.</li>
                                        <li>Demonstrated experience of managing teams of 50+ people. Demonstrated ability to effectively collaborate with and manage global, cross functional, and virtual teams.</li>
                                        <li>Demonstrated experience of growing business in the accounts managed.</li>
                                        <li>Experience in Sales/Pre-sales capacity.</li>
                                        <li>Display honesty, integrity and respect.</li>
                                        <li>Work as a good team player and nurture positive team culture. Excellent written, oral & presentation skills. Strong attention to detail.</li>
                                        <li>Comfortable being hands on and detail orientated with effective executive and team communication skills and techniques. Expert project forecasting and scoping abilities.</li>
                                        <li>Must possess strong decision making and problem-solving skills (with a high degree of urgency).</li>
                                        <li>Think outside the box and searching for new ways to innovate and create. Comfortable operating in a grey area</li>
                                        <li>Self-Motivated, energetic, resourceful and do what it takes to get the job done.</li>
                                   </ul>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
               </div>
          );
     }
     if (router.query.id === '5') {
          return (
               <div>
                    <div className='container-fluid' style={{ height: '25vh' }}>
                         <div className='row mt-5'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <div className='row'>
                                        <div className='col-lg-8'>
                                             <h3 className='ff'>Delivery Manager</h3>
                                             <h3 className='ff text-uppercase'>8-14 years</h3>
                                        </div>
                                        <div className='col-lg-4'>
                                             <a href='mailto:careers@rispostacorp.com?subject=For Delivery Manager!&body=' className='btn btn-info text-uppercase'>
                                                  Apply for this job
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
                    <div className='container-fluid bg-light'>
                         <div className='row'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <h4 className='ff mt-5'>About us</h4>
                                   <p className='ff text-justify'>
                                        If there’s a business partner that knows how to speak proficiently their customers’ supply chain language and convert them into strategic Business and IT road maps, it’s RISPOSTA. RISPOSTA’s state of the art integrated platform ADYANT delivers strategic solutions to plan, execute, Integrate and optimize supply chains by providing businesses with complete visibility and control and ultimately reducing their operational costs and improving their revenue. Founded in 2021 in Hyderabad, India by Supply Chain Veteran founders with deep domain expertise complementing in Business acumen, Functional, Technology and Organizational transformation. RISPOSTA has offices in India and South Africa. Passion for helping customers to come over their Supply Chain and IT challenges through RISPOSTA’s offerings. We now serve customers in India and expanding rapidly in Europe and APAC. ADYANT, the enterprise platform & offerings are powered by Machine Learning with
                                        cutting edge technologies to provide organizations with scalable solutions in the area of Supply Chain Management and Integrations
                                   </p>

                                   <ul className='ff text-justify'>
                                        <li>ADYANT suite is a platform that would enable customers to get their value really quick through rapid implementation methodology which is based on the “min code” philosophy</li>
                                        <li>ADYANT easily integrates with underlying ERP’s, CRM’s, Mainframes, personalized or customized solutions etc., without disrupting the existing process framework.</li>
                                   </ul>

                                   <h4 className='ff mt-4'>Role Overview</h4>
                                   <p className='ff text-justify mt-4'>We are looking to contract an experienced Senior IT Project Manager for the Pharmacy and Front shop portfolio. The role will be focused to deliver software implementations and business transformation projects within the pharmacy portfolio and as such preference will be given to candidates with previous experience managing and leading such projects within the retail sector. The role will be based at our customer Office in Cape Town and report into the Project Delivery Manager. </p>

                                   <h4 className='mt-4'>Purpose and Objectives:</h4>

                                   <ul className='mt-4 ff text-justify'>
                                        <li>The main purpose of the job is to effectively manage software implementation and business transformation projects aimed at affecting changes to business and IT processes, within agreed scope, time, cost and quality resulting in the realisation of the intended benefits to the affected business. </li>
                                        <li>To effectively plan all aspects of a project and capture the results thereof in a comprehensive Project Management Plan (PMP), accepted and approved by the project sponsor and Steering Committee. </li>
                                        <li>To effectively monitor, track and control the performance of a project against the agreed baseline (time, cost and quality) throughout the project life cycle.</li>
                                        <li>To effectively communicate to all project stakeholders the status and performance of the project on a weekly basis, including timely communication of serious events that may have a significant impact on the project’s success.</li>
                                        <li>To effectively manage project scope, applying formal change management for all changes (increase or reduction) to the previously agreed project baseline. .</li>
                                        <li>To effectively direct and manage project execution, including managing the performances of project team members and suppliers, in the completion of project deliverables. </li>
                                        <li>To implement project products and services without any adverse impact to business processes.</li>
                                        <li>To ensure all project acceptance criteria are met and gain sign-off and approval for all project deliverables, including the formal close of the project. .</li>
                                        <li>To manage inter-project and/ or inter-program dependencies.</li>
                                        <li>To ensure optimum resource management and motivation of project staff.</li>
                                        <li>To ensure all business and IT transition activities are catered for and performed, e.g. acceptance testing, training, change management and post-implementation support and IT service and solution transition to operational support teams. </li>
                                        <li>To ensure alignment of appropriate solution architecture with business strategy.</li>
                                   </ul>
                                   <h4 className='ff mt-4'>Job Experience:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Oversee the delivery of our services team across multiple clients..</li>
                                        <li>Build Global Delivery Model for scale and growth.</li>
                                        <li>Ensure that consulting, technical and project delivery best practices are maintained and improved.</li>
                                        <li>Implement training programs, workshops, and mentoring to ensure that project delivery is successful. Engage in delivery roles as required.</li>
                                        <li>Mentor employees/consultants/leads/managers located at customer site and internal employees.</li>
                                        <li>Continuous process improvement of our technology services</li>
                                        <li>Support Account Management activities such as meeting with clients, employees, consultants, conducting reviews, on-boarding consultants, etc.</li>
                                   </ul>
                                   <h4 className='ff mt-4'>BUSINESS DEVELOPMENT:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Minimum 5+ years IT Project Management practice in a software or IT environment</li>
                                        <li>3 to 4 years’ experience in application development and support, with previous Pharmacy systems and related modules experience an advantage</li>
                                        <li>Knowledge of Healthcare and or Pharmacy systems implementation and delivery</li>
                                        <li>More than 3 years’ experience in Retail within the FMCG sector .</li>
                                        <li>Proven hands-on experience in managing medium to large projects</li>
                                        <li>3 to 4 years in leadership or management role (preferably in IT) </li>
                                        <li>Working experience in the retail sector</li>
                                        <li>Project Management qualification</li>
                                        <li>Bachelor’s degree in Information Systems, Commerce or Computer Science</li>
                                        <li>Bachelor’s degree in Information Systems, Commerce or Computer Science</li>
                                        <li>Project Management Professional (PMP) certificate from Project Management Institute</li>
                                        <li>Be a Self-Starter, Self-managed with business and technical (IT) knowledge and understanding of the SDLC </li>
                                        <li>High attention to detail, maintain a standard of accuracy when document requirements Professional stakeholder engagement management and relationship building skills </li>
                                        <li>Agile experience an advantage</li>
                                        <li>Experience in the end-to-end delivery of large-sized, high complexity projects. </li>
                                        <li>Expert knowledge of the full Software Development Life Cycle (SDLC) or IT Delivery Cycle</li>
                                        <li>Expert knowledge of software or IT project management tools (Advantageous) </li>
                                        <li>Exposure to multiple PM Methodologies </li>
                                   </ul>
                                   <h4 className='ff mt-4'>Job related Competencies:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Deciding and Initiating Action</li>
                                        <li>Leading and Supervising</li>
                                        <li>Leading and Supervising</li>
                                        <li>Analysing</li>
                                        <li>Formulating Strategies and Concepts</li>
                                        <li>Entrepreneurial and Commercial Thinking</li>
                                        <li>Delivering Results & Meeting Customer Expectations </li>
                                        <li>Planning and Organising </li>
                                   </ul>
                                   <h4 className='ff mt-4'>Desirable:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Sound knowledge of Agile and Waterfall principles and implementing a best fit methodology within the current framework </li>
                                        <li>Sound level of understanding of software and systems implementation</li>
                                   </ul>
                                   <h4 className='ff mt-4'>Desirable:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Excellent written, verbal and non-verbal communication skills </li>
                                        <li>Professional in attitude and appearance to face off with clients</li>

                                        <li>Professional in attitude and appearance to face off with clientsAbility to handle multiple and changing priorities and multiple customers, having a proactive hands on approach </li>
                                        <li>Excellent questioning and listening skills, with strong influencing skills</li>
                                        <li>Approachable and able to communicate effectively at all levels, with excellent relationship skills</li>
                                        <li>Possess coaching skills to share information and knowledge effectively with customers and colleagues</li>
                                        <li>Motivated, confident, self-sufficient and able to contribute from day one</li>
                                   </ul>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
               </div>
          );
     }
     if (router.query.id === '6') {
          return (
               <div>
                    <div className='container-fluid' style={{ height: '25vh' }}>
                         <div className='row mt-5'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <div className='row'>
                                        <div className='col-lg-8'>
                                             <h3 className='ff'>Sr. Delivery Manager</h3>
                                             <h3 className='ff text-uppercase'>10-16 years</h3>
                                             <h3 className='ff text-uppercase'>SouthAfrica && India</h3>
                                        </div>
                                        <div className='col-lg-4'>
                                             <a href='mailto:careers@rispostacorp.com?subject=For Sr. Delivery Manager!&body=' className='btn btn-info text-uppercase'>
                                                  Apply for this job
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
                    <div className='container-fluid bg-light'>
                         <div className='row'>
                              <div className='col-lg-3'></div>
                              <div className='col-lg-6'>
                                   <h4 className='ff mt-5'>About us</h4>
                                   <p className='ff text-justify'>
                                        If there’s a business partner that knows how to speak proficiently their customers’ supply chain language and convert them into strategic Business and IT road maps, it’s RISPOSTA. RISPOSTA’s state of the art integrated platform ADYANT delivers strategic solutions to plan, execute, Integrate and optimize supply chains by providing businesses with complete visibility and control and ultimately reducing their operational costs and improving their revenue. Founded in 2021 in Hyderabad, India by Supply Chain Veteran founders with deep domain expertise complementing in Business acumen, Functional, Technology and Organizational transformation. RISPOSTA has offices in India and South Africa. Passion for helping customers to come over their Supply Chain and IT challenges through RISPOSTA’s offerings. We now serve customers in India and expanding rapidly in Europe and APAC. ADYANT, the enterprise platform & offerings are powered by Machine Learning with
                                        cutting edge technologies to provide organizations with scalable solutions in the area of Supply Chain Management and Integrations
                                   </p>

                                   <ul className='ff text-justify'>
                                        <li>ADYANT suite is a platform that would enable customers to get their value really quick through rapid implementation methodology which is based on the “min code” philosophy</li>
                                        <li>ADYANT easily integrates with underlying ERP’s, CRM’s, Mainframes, personalized or customized solutions etc., without disrupting the existing process framework.</li>
                                   </ul>

                                   <h4 className='ff mt-4'>Introduction </h4>
                                   <p className='ff text-justify mt-4'>We are looking to contract an experienced Senior IT Project Manager for the cyber security portfolio. The role will be focused to deliver information security software implementations and business transformation projects within the retail cyber security portfolio and as such preference will be given to candidates with previous experience managing and leading such projects within the retail or financial sector. The role will be based at Client location in Cape Town and report into the Project Delivery Manager. </p>

                                   <h4 className='mt-4'>Purpose and Objectives:</h4>

                                   <ul className='mt-4 ff text-justify'>
                                        <li>The main purpose of the job is to effectively manage software implementation and business transformation projects aimed at affecting changes to business and IT processes, within agreed scope, time, cost and quality resulting in the realisation of the intended benefits to the affected business. </li>
                                        <li>To effectively plan all aspects of a project and capture the results thereof in a comprehensive Project Management Plan (PMP), accepted and approved by the project sponsor and Steering Committee. </li>
                                        <li>To effectively monitor, track and control the performance of a project against the agreed baseline (time, cost and quality) throughout the project life cycle.</li>
                                        <li>To effectively communicate to all project stakeholders the status and performance of the project on a weekly basis, including timely communication of serious events that may have a significant impact on the project’s success.</li>
                                        <li>To effectively manage project scope, applying formal change management for all changes (increase or reduction) to the previously agreed project baseline. .</li>
                                        <li>To effectively direct and manage project execution, including managing the performances of project team members and suppliers, in the completion of project deliverables. </li>
                                        <li>To implement project products and services without any adverse impact to business processes.</li>
                                        <li>To ensure all project acceptance criteria are met and gain sign-off and approval for all project deliverables, including the formal close of the project. .</li>
                                        <li>To manage inter-project and/ or inter-program dependencies.</li>
                                        <li>To ensure optimum resource management and motivation of project staff.</li>
                                        <li>To ensure all business and IT transition activities are catered for and performed, e.g. acceptance testing, training, change management and post-implementation support and IT service and solution transition to operational support teams. </li>
                                        <li>To ensure alignment of appropriate solution architecture with business strategy.</li>
                                   </ul>
                                   <h4 className='ff mt-4'>Job Experience:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Oversee the delivery of our services team across multiple clients..</li>
                                        <li>Build Global Delivery Model for scale and growth.</li>
                                        <li>Ensure that consulting, technical and project delivery best practices are maintained and improved.</li>
                                        <li>Implement training programs, workshops, and mentoring to ensure that project delivery is successful. Engage in delivery roles as required.</li>
                                        <li>Mentor employees/consultants/leads/managers located at customer site and internal employees.</li>
                                        <li>Continuous process improvement of our technology services</li>
                                        <li>Support Account Management activities such as meeting with clients, employees, consultants, conducting reviews, on-boarding consultants, etc.</li>
                                   </ul>
                                   <h4 className='ff mt-4'>BUSINESS DEVELOPMENT:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Minimum 5+ years IT Project Management practice in a software or IT environment</li>
                                        <li>3 to 4 years’ experience in application development and support, with previous Pharmacy systems and related modules experience an advantage</li>
                                        <li>Knowledge of Healthcare and or Pharmacy systems implementation and delivery</li>
                                        <li>More than 3 years’ experience in Retail within the FMCG sector .</li>
                                        <li>Proven hands-on experience in managing medium to large projects</li>
                                        <li>3 to 4 years in leadership or management role (preferably in IT) </li>
                                        <li>Working experience in the retail sector</li>
                                        <li>Project Management qualification</li>
                                        <li>Bachelor’s degree in Information Systems, Commerce or Computer Science</li>
                                        <li>Bachelor’s degree in Information Systems, Commerce or Computer Science</li>
                                        <li>Project Management Professional (PMP) certificate from Project Management Institute</li>
                                        <li>Be a Self-Starter, Self-managed with business and technical (IT) knowledge and understanding of the SDLC </li>
                                        <li>High attention to detail, maintain a standard of accuracy when document requirements Professional stakeholder engagement management and relationship building skills </li>
                                        <li>Agile experience an advantage</li>
                                        <li>Experience in the end-to-end delivery of large-sized, high complexity projects. </li>
                                        <li>Expert knowledge of the full Software Development Life Cycle (SDLC) or IT Delivery Cycle</li>
                                        <li>Expert knowledge of software or IT project management tools (Advantageous) </li>
                                        <li>Exposure to multiple PM Methodologies </li>
                                   </ul>
                                   <h4 className='ff mt-4'>Job related Competencies:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Deciding and Initiating Action</li>
                                        <li>Leading and Supervising</li>
                                        <li>Leading and Supervising</li>
                                        <li>Analysing</li>
                                        <li>Formulating Strategies and Concepts</li>
                                        <li>Entrepreneurial and Commercial Thinking</li>
                                        <li>Delivering Results & Meeting Customer Expectations </li>
                                        <li>Planning and Organising </li>
                                   </ul>
                                   <h4 className='ff mt-4'>Desirable:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Sound knowledge of Agile and Waterfall principles and implementing a best fit methodology within the current framework </li>
                                        <li>Sound level of understanding of software and systems implementation</li>
                                   </ul>
                                   <h4 className='ff mt-4'>Desirable:</h4>
                                   <ul className='mt-4 ff text-justify'>
                                        <li>Excellent written, verbal and non-verbal communication skills </li>
                                        <li>Professional in attitude and appearance to face off with clients</li>

                                        <li>Professional in attitude and appearance to face off with clientsAbility to handle multiple and changing priorities and multiple customers, having a proactive hands on approach </li>
                                        <li>Excellent questioning and listening skills, with strong influencing skills</li>
                                        <li>Approachable and able to communicate effectively at all levels, with excellent relationship skills</li>
                                        <li>Possess coaching skills to share information and knowledge effectively with customers and colleagues</li>
                                        <li>Motivated, confident, self-sufficient and able to contribute from day one</li>
                                   </ul>
                              </div>
                              <div className='col-lg-3'></div>
                         </div>
                    </div>
               </div>
          );
     }
};

export default name;
