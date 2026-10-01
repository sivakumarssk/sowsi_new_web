import Link from "next/link";
import Navbar from "../../../components/Navbar";
import UIUXOfferings from "../../../components/services/uiux/UIUXOfferings";
import WebDevPage, { webDevSlugs } from "@/components/services/angular-development/WebDevPages";
import MobileDevPage, { mobileDevSlugs } from "@/components/services/mobile-devolopment/MobileDevPage";
import DigitalMarketingPage from "@/components/services/digital-marketing/DigitalMarketingPage";
import SAPConsultingPage from "@/components/services/sap-consulting/SAPConsultingPage";
import ITResourceExpansionPage from "@/components/services/it-resource-expansion/ITResourceExpansionPage";
const serviceData = {
  // =====================================================
  // 1. MACHINE LEARNING DEVELOPMENT
  // =====================================================

  "machine-learning-development": {
    title: "Machine Learning Development",
    subtitle: "Build Smarter. Think Beyond.",
    label: "ML & AI SERVICES",

    description:
      "Transform your business with intelligent machine learning solutions that turn complex data into meaningful insights. We develop customized machine learning models that help organizations automate processes, identify patterns, predict outcomes, and make informed business decisions.",

    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",

    aboutImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",

    aboutTitle: "Turning Business Data into Intelligent Solutions",

    about:
      "Machine learning is a branch of artificial intelligence that enables computers to learn from data and identify patterns without requiring explicit instructions for every task. By analyzing historical information and discovering relationships within datasets, machine learning models can make predictions, classify information, and improve their performance through training. Our machine learning development services help businesses transform raw data into intelligent applications that support automation, forecasting, personalization, and operational efficiency. We work with your business requirements to design, train, evaluate, deploy, and maintain machine learning models that fit your workflows.",

    whyTitle: "Why Machine Learning Matters",

    whyDescription:
      "Businesses generate large amounts of data every day. Machine learning helps organizations understand this information and use it to solve complex problems, improve workflows, and discover opportunities.",

    whyPoints: [
      {
        title: "Automate Repetitive Tasks",
        description:
          "Machine learning models can automate tasks such as document classification, data categorization, and pattern recognition, reducing the need for repetitive manual work.",
      },
      {
        title: "Discover Hidden Patterns",
        description:
          "Analyze large datasets to identify relationships, trends, and patterns that may be difficult to recognize through manual analysis.",
      },
      {
        title: "Improve Business Decisions",
        description:
          "Use data-driven predictions and insights to support planning, resource allocation, customer engagement, and operational decisions.",
      },
      {
        title: "Personalize Customer Experiences",
        description:
          "Understand customer preferences and behavior to provide more relevant recommendations, services, and digital experiences.",
      },
    ],

    offeringsTitle: "Our Machine Learning Development Services",

    offeringsDescription:
      "We design and develop machine learning solutions tailored to your business requirements, data, and operational goals.",

    offerings: [
      {
        title: "Custom Machine Learning Model Development",
        description:
          "We develop customized machine learning models based on your business objectives, available datasets, and desired outcomes. Our team identifies the appropriate modeling approach and builds solutions for classification, prediction, recommendation, and pattern recognition.",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=85",
        points: [
          "Business-specific model development",
          "Classification and regression models",
          "Recommendation systems",
          "Pattern recognition",
        ],
      },
      {
        title: "Machine Learning Model Training",
        description:
          "We prepare datasets, select suitable algorithms, train machine learning models, and evaluate their performance. The training process helps models learn from examples and improve their ability to make predictions on new data.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
        points: [
          "Data preparation and preprocessing",
          "Algorithm selection",
          "Model training and validation",
          "Performance evaluation",
        ],
      },
      {
        title: "Predictive Model Development",
        description:
          "We build predictive models that analyze historical data and estimate future outcomes. These solutions help businesses understand customer behavior, forecast demand, identify risks, and support strategic planning.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
        points: [
          "Forecasting and prediction",
          "Customer behavior prediction",
          "Demand estimation",
          "Risk identification",
        ],
      },
      {
        title: "Intelligent Process Automation",
        description:
          "We integrate machine learning into business workflows to automate selected tasks that involve recognizing patterns, processing information, or making predictions based on data.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
        points: [
          "Workflow automation",
          "Automated classification",
          "Intelligent data processing",
          "Operational efficiency",
        ],
      },
      {
        title: "Recommendation System Development",
        description:
          "We develop recommendation engines that analyze user behavior, preferences, and historical interactions to suggest relevant products, services, or content.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
        points: [
          "Product recommendations",
          "Personalized content",
          "Customer preference analysis",
          "Relevant suggestions",
        ],
      },
      {
        title: "Machine Learning Integration",
        description:
          "We integrate trained machine learning models into existing websites, applications, and business systems through suitable APIs and deployment workflows.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
        points: [
          "API-based model integration",
          "Application integration",
          "Model deployment",
          "Performance monitoring",
        ],
      },
    ],

    processTitle: "Our Machine Learning Development Process",

    processDescription:
      "We follow a structured development process to transform your business requirements into reliable machine learning solutions.",

    process: [
      {
        title: "Requirement Analysis",
        description:
          "We understand your business challenges, define the problem to solve, identify expected outcomes, and determine how machine learning can support your objectives.",
      },
      {
        title: "Data Collection and Preparation",
        description:
          "We identify relevant data sources, collect available information, clean datasets, handle missing values, and prepare data for model development.",
      },
      {
        title: "Model Selection and Training",
        description:
          "We select suitable algorithms and train models using prepared datasets so they can learn patterns relevant to the business problem.",
      },
      {
        title: "Testing and Evaluation",
        description:
          "We evaluate model performance using appropriate metrics and validation techniques to understand accuracy, reliability, and limitations.",
      },
      {
        title: "Deployment and Integration",
        description:
          "We deploy the model into the required application or business workflow and connect it with the systems that need its predictions.",
      },
      {
        title: "Monitoring and Improvement",
        description:
          "We monitor model performance, identify changes in data patterns, and update or retrain models when necessary.",
      },
    ],

    applicationsTitle: "Real-World Applications of Machine Learning",

    applications: [
      {
        title: "Customer Behavior Prediction",
        description:
          "Analyze customer interactions and purchase history to identify behavioral patterns and estimate customer preferences.",
      },
      {
        title: "Fraud Detection",
        description:
          "Identify unusual transaction patterns and flag potentially suspicious activities for further investigation.",
      },
      {
        title: "Product Recommendations",
        description:
          "Recommend products and services based on customer interests, previous interactions, and purchasing patterns.",
      },
      {
        title: "Predictive Maintenance",
        description:
          "Analyze equipment data to identify potential warning signs and support maintenance planning before unexpected failures.",
      },
      {
        title: "Sales Forecasting",
        description:
          "Use historical sales information and relevant business factors to estimate future sales and support inventory planning.",
      },
      {
        title: "Document Classification",
        description:
          "Automatically categorize documents and other text-based information based on learned patterns.",
      },
    ],

    industriesTitle: "Industries We Serve",

    industries: [
      {
        title: "Healthcare",
        description:
          "Support medical data analysis, operational forecasting, and the identification of patterns in healthcare information.",
      },
      {
        title: "Retail and E-Commerce",
        description:
          "Improve product recommendations, customer analysis, demand forecasting, and inventory planning.",
      },
      {
        title: "Banking and Finance",
        description:
          "Support fraud detection, risk analysis, customer segmentation, and transaction pattern analysis.",
      },
      {
        title: "Manufacturing",
        description:
          "Analyze equipment data, support predictive maintenance, and identify opportunities to improve production processes.",
      },
      {
        title: "Education",
        description:
          "Analyze learning patterns and support personalized learning experiences and student performance insights.",
      },
      {
        title: "Logistics",
        description:
          "Support demand forecasting, delivery planning, and operational data analysis.",
      },
    ],

    benefitsTitle: "Business Benefits of Machine Learning",

    benefits: [
      {
        title: "Improved Operational Efficiency",
        description:
          "Automate selected data-driven tasks and simplify repetitive workflows, allowing teams to focus on higher-value activities.",
      },
      {
        title: "Data-Driven Decisions",
        description:
          "Use model predictions and analytical insights to support planning and business decision-making.",
      },
      {
        title: "Better Customer Experiences",
        description:
          "Create personalized recommendations and improve how digital products respond to customer preferences.",
      },
      {
        title: "Scalable Intelligence",
        description:
          "Build solutions that can process growing amounts of data when supported by suitable infrastructure and system design.",
      },
    ],

    faqs: [
      {
        question: "What is machine learning?",
        answer:
          "Machine learning is a branch of artificial intelligence that enables computers to learn patterns from data and use those patterns to make predictions, classifications, or recommendations.",
      },
      {
        question: "What data is required for machine learning?",
        answer:
          "The required data depends on the problem. It may include transaction records, customer interactions, images, text, sensor readings, or other relevant information. Data quality and availability are important factors in determining feasibility.",
      },
      {
        question: "Can machine learning be integrated into an existing application?",
        answer:
          "Yes. A trained model can often be integrated into an existing application through APIs, backend services, or other suitable deployment methods, depending on the application's architecture.",
      },
      {
        question: "How long does machine learning development take?",
        answer:
          "The timeline depends on project complexity, data availability, model requirements, testing needs, and integration work. A small proof of concept may take less time than a production-ready system.",
      },
      {
        question: "Do machine learning models need maintenance?",
        answer:
          "Yes. Models should be monitored after deployment. Changes in data patterns, business requirements, or application behavior may require model updates or retraining.",
      },
    ],
  },

  // =====================================================
  // 2. PREDICTIVE ANALYTICS
  // =====================================================

  "predictive-analytics": {
    title: "Predictive Analytics",
    subtitle: "See What's Next. Plan with Confidence.",
    label: "ML & AI SERVICES",

    description:
      "Turn historical and current business data into meaningful predictions. Our predictive analytics solutions help organizations forecast demand, understand customer behavior, identify potential risks, and make informed decisions using statistical analysis and machine learning.",

    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",

    aboutImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",

    aboutTitle: "Transform Historical Data into Future Insights",

    about:
      "Predictive analytics uses historical data, statistical techniques, and machine learning models to estimate what may happen in the future. By identifying patterns and relationships in past and current information, organizations can anticipate possible outcomes and prepare for different business scenarios. Our predictive analytics services help businesses develop forecasting models, understand customer behavior, analyze risks, and improve operational planning. We work with your data and business objectives to create analytical solutions that support practical, data-driven decisions.",

    whyTitle: "Why Predictive Analytics Matters",

    whyDescription:
      "Businesses need to plan for changing customer demand, market conditions, operational risks, and resource requirements. Predictive analytics helps organizations use available data to prepare for potential future outcomes.",

    whyPoints: [
      {
        title: "Anticipate Future Demand",
        description:
          "Analyze historical sales, seasonal patterns, and relevant business factors to estimate future demand and support planning.",
      },
      {
        title: "Understand Customer Behavior",
        description:
          "Identify customer patterns and estimate behaviors such as repeat purchases, engagement, or potential churn.",
      },
      {
        title: "Identify Potential Risks",
        description:
          "Analyze historical patterns and relevant indicators to identify situations that may require additional attention.",
      },
      {
        title: "Improve Resource Planning",
        description:
          "Use forecasts to support inventory management, workforce planning, budgeting, and operational decisions.",
      },
    ],

    offeringsTitle: "Our Predictive Analytics Services",

    offeringsDescription:
      "We develop forecasting and predictive modeling solutions that help businesses understand trends and prepare for future possibilities.",

    offerings: [
      {
        title: "Sales Forecasting",
        description:
          "We analyze historical sales records, seasonal trends, promotions, and other relevant factors to estimate future sales and support business planning.",
        image:
          "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=900&q=85",
        points: [
          "Sales trend analysis",
          "Revenue forecasting",
          "Seasonal pattern analysis",
          "Sales planning support",
        ],
      },
      {
        title: "Customer Behavior Prediction",
        description:
          "We use customer interaction and transaction data to identify behavioral patterns and estimate future engagement, purchase behavior, and customer needs.",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
        points: [
          "Customer segmentation",
          "Purchase behavior analysis",
          "Churn prediction",
          "Customer engagement insights",
        ],
      },
      {
        title: "Demand Forecasting",
        description:
          "We develop forecasting models that estimate product or service demand using historical sales, seasonal patterns, and relevant business information.",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
        points: [
          "Demand estimation",
          "Inventory planning",
          "Seasonal demand analysis",
          "Supply planning support",
        ],
      },
      {
        title: "Risk Prediction and Analysis",
        description:
          "We analyze historical information and relevant indicators to identify potential risks and support informed risk assessment.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
        points: [
          "Risk pattern analysis",
          "Anomaly identification",
          "Predictive risk indicators",
          "Decision support",
        ],
      },
      {
        title: "Operational Forecasting",
        description:
          "We help organizations estimate future operational requirements, including resource usage, workload, and service demand.",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
        points: [
          "Resource planning",
          "Workload forecasting",
          "Capacity planning",
          "Operational trend analysis",
        ],
      },
      {
        title: "Predictive Model Development",
        description:
          "We develop and evaluate predictive models that use historical data to estimate future outcomes and support business planning.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
        points: [
          "Model development",
          "Data preparation",
          "Model validation",
          "Forecast evaluation",
        ],
      },
    ],

    processTitle: "Our Predictive Analytics Process",

    processDescription:
      "We follow a structured process to turn business data into useful forecasts and actionable insights.",

    process: [
      {
        title: "Business Problem Definition",
        description:
          "We identify the business question, define the outcomes to estimate, and determine how predictive insights will support decisions.",
      },
      {
        title: "Data Collection",
        description:
          "We identify relevant historical and current data sources, assess data quality, and gather information needed for analysis.",
      },
      {
        title: "Data Preparation and Exploration",
        description:
          "We clean and organize datasets, explore trends, identify missing information, and examine relationships between variables.",
      },
      {
        title: "Model Development",
        description:
          "We select appropriate statistical methods or machine learning algorithms and build models suited to the forecasting problem.",
      },
      {
        title: "Testing and Validation",
        description:
          "We evaluate predictions using appropriate validation methods and metrics to understand model performance and limitations.",
      },
      {
        title: "Deployment and Monitoring",
        description:
          "We integrate forecasts into business workflows and monitor performance as new data becomes available.",
      },
    ],

    applicationsTitle: "Real-World Applications of Predictive Analytics",

    applications: [
      {
        title: "Retail Demand Forecasting",
        description:
          "Estimate future product demand to support inventory planning and reduce the risk of overstocking or shortages.",
      },
      {
        title: "Customer Churn Prediction",
        description:
          "Identify customer patterns associated with reduced engagement so teams can investigate and plan retention activities.",
      },
      {
        title: "Financial Forecasting",
        description:
          "Analyze historical financial data to support revenue estimates, budgeting, and financial planning.",
      },
      {
        title: "Equipment Maintenance",
        description:
          "Use equipment sensor data and maintenance records to identify potential warning signs of future failures.",
      },
      {
        title: "Workforce Planning",
        description:
          "Estimate future staffing or workload requirements using historical operational patterns.",
      },
      {
        title: "Supply Chain Planning",
        description:
          "Forecast demand and identify potential supply challenges to support purchasing and logistics decisions.",
      },
    ],

    industriesTitle: "Industries We Serve",

    industries: [
      {
        title: "Retail and E-Commerce",
        description:
          "Forecast product demand, understand customer behavior, and support inventory planning.",
      },
      {
        title: "Banking and Finance",
        description:
          "Support financial forecasting, risk analysis, and transaction pattern monitoring.",
      },
      {
        title: "Healthcare",
        description:
          "Analyze operational demand, resource requirements, and historical healthcare data.",
      },
      {
        title: "Manufacturing",
        description:
          "Support production planning, maintenance forecasting, and supply chain analysis.",
      },
      {
        title: "Logistics",
        description:
          "Estimate shipment demand, support capacity planning, and analyze delivery patterns.",
      },
      {
        title: "Telecommunications",
        description:
          "Analyze customer engagement patterns and support network demand planning.",
      },
    ],

    benefitsTitle: "Business Benefits of Predictive Analytics",

    benefits: [
      {
        title: "Better Planning",
        description:
          "Use forecasts to support inventory, staffing, budgeting, and operational planning.",
      },
      {
        title: "Earlier Risk Identification",
        description:
          "Identify potential warning signs in historical patterns and prepare appropriate responses.",
      },
      {
        title: "Improved Customer Understanding",
        description:
          "Understand behavioral patterns and use insights to support customer engagement strategies.",
      },
      {
        title: "Data-Driven Decisions",
        description:
          "Use forecasts and analytical evidence to support business decisions while accounting for uncertainty.",
      },
    ],

    faqs: [
      {
        question: "What is predictive analytics?",
        answer:
          "Predictive analytics uses historical data, statistical techniques, and machine learning to estimate possible future outcomes.",
      },
      {
        question: "How is predictive analytics different from traditional reporting?",
        answer:
          "Traditional reporting mainly describes historical or current performance. Predictive analytics uses available data to estimate what may happen in the future.",
      },
      {
        question: "What data is needed for predictive analytics?",
        answer:
          "The required data depends on the problem. It may include sales records, customer interactions, operational data, financial information, or sensor readings.",
      },
      {
        question: "Are predictive analytics results always accurate?",
        answer:
          "No. Predictions are estimates based on available data and assumptions. Accuracy depends on data quality, model design, changing conditions, and other factors.",
      },
      {
        question: "Can predictive analytics integrate with existing systems?",
        answer:
          "Yes. Forecasts can often be integrated into dashboards, reporting systems, and business applications using suitable technical approaches.",
      },
    ],
  },

  // =====================================================
  // 3. NATURAL LANGUAGE PROCESSING
  // =====================================================

  "natural-language-processing": {
    title: "Natural Language Processing",
    subtitle: "Give Technology the Power to Understand Language.",
    label: "ML & AI SERVICES",

    description:
      "Build intelligent applications that understand, analyze, and process human language. Our NLP solutions help businesses automate text-based workflows, develop conversational experiences, extract information from documents, and understand customer feedback.",

    heroImage:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1400&q=85",

    aboutImage:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=85",

    aboutTitle: "Making Human Language Understandable to Technology",

    about:
      "Natural Language Processing, commonly known as NLP, is a field of artificial intelligence that enables computers to work with human language in text and speech. NLP techniques help applications identify meaning, recognize entities, classify text, analyze sentiment, and generate language-based responses. Our NLP development services help businesses build conversational applications, automate document processing, understand customer feedback, and organize large volumes of textual information. We develop solutions based on your language requirements, data, and business workflows.",

    whyTitle: "Why Natural Language Processing Matters",

    whyDescription:
      "Organizations work with large amounts of text, messages, documents, and customer conversations. NLP helps turn this unstructured language data into information that can be searched, analyzed, and used in business workflows.",

    whyPoints: [
      {
        title: "Understand Customer Feedback",
        description:
          "Analyze customer reviews, surveys, and messages to identify common topics, opinions, and recurring concerns.",
      },
      {
        title: "Automate Text Processing",
        description:
          "Classify documents, extract important information, and organize text-based data with less manual effort.",
      },
      {
        title: "Improve Customer Communication",
        description:
          "Build chatbots and conversational applications that help users find information and complete common tasks.",
      },
      {
        title: "Extract Information from Documents",
        description:
          "Identify names, dates, categories, and other relevant information from suitable text-based documents.",
      },
    ],

    offeringsTitle: "Our Natural Language Processing Services",

    offeringsDescription:
      "We develop language-based AI solutions that help businesses understand text, automate communication, and extract valuable information.",

    offerings: [
      {
        title: "Conversational AI and Chatbot Development",
        description:
          "We build conversational applications that understand user questions and provide relevant responses based on defined business information, workflows, and system integrations.",
        image:
          "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=900&q=85",
        points: [
          "Customer support chatbots",
          "FAQ automation",
          "Conversational workflows",
          "Business system integration",
        ],
      },
      {
        title: "Sentiment Analysis",
        description:
          "We develop solutions that analyze text to identify expressed opinions, emotional tone, and sentiment categories. These insights can help businesses understand customer feedback at scale.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
        points: [
          "Customer feedback analysis",
          "Review sentiment classification",
          "Opinion identification",
          "Feedback trend analysis",
        ],
      },
      {
        title: "Text Classification",
        description:
          "We build models that categorize text into predefined groups, helping organizations organize incoming messages, documents, support requests, and other textual information.",
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",
        points: [
          "Document categorization",
          "Email classification",
          "Support ticket routing",
          "Text-based content organization",
        ],
      },
      {
        title: "Information Extraction",
        description:
          "We develop systems that identify and extract relevant details from text, such as names, dates, organizations, product references, and other defined entities.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
        points: [
          "Named entity recognition",
          "Document information extraction",
          "Keyword identification",
          "Structured data generation",
        ],
      },
      {
        title: "Text Summarization",
        description:
          "We create solutions that generate concise summaries of longer documents or conversations, helping users understand important information more quickly.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
        points: [
          "Document summarization",
          "Conversation summaries",
          "Key point extraction",
          "Content condensation",
        ],
      },
      {
        title: "Language Processing Automation",
        description:
          "We automate selected language-based workflows, such as processing incoming messages, identifying topics, organizing text, and routing information to the appropriate teams.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
        points: [
          "Text processing workflows",
          "Automated message routing",
          "Language-based search",
          "Workflow integration",
        ],
      },
    ],

    processTitle: "Our NLP Development Process",

    processDescription:
      "We follow a structured process to build language-processing solutions that fit your business requirements.",

    process: [
      {
        title: "Understand the Language Use Case",
        description:
          "We identify the type of text or speech involved, the business problem, the expected outputs, and the language requirements.",
      },
      {
        title: "Collect and Prepare Language Data",
        description:
          "We gather relevant text or speech data, clean the information, organize datasets, and prepare examples for model development.",
      },
      {
        title: "Choose the NLP Approach",
        description:
          "We select suitable language-processing techniques, models, and tools based on the task, available data, and system requirements.",
      },
      {
        title: "Develop and Evaluate the Solution",
        description:
          "We build the NLP application and evaluate its performance using relevant examples, test cases, and task-specific metrics.",
      },
      {
        title: "Integrate into Business Systems",
        description:
          "We connect the NLP solution to websites, applications, customer support systems, or document-processing workflows.",
      },
      {
        title: "Monitor and Improve",
        description:
          "We monitor performance, review user feedback, and improve the solution as language patterns and business requirements evolve.",
      },
    ],

    applicationsTitle: "Real-World Applications of NLP",

    applications: [
      {
        title: "Customer Support Chatbots",
        description:
          "Help customers find answers to common questions and navigate support workflows through conversational interfaces.",
      },
      {
        title: "Customer Review Analysis",
        description:
          "Analyze customer reviews to identify frequently mentioned topics, concerns, and opinions.",
      },
      {
        title: "Document Processing",
        description:
          "Extract and organize relevant information from text-based documents and business records.",
      },
      {
        title: "Email Classification",
        description:
          "Categorize incoming emails and route messages to the appropriate teams based on their content.",
      },
      {
        title: "Content Summarization",
        description:
          "Create concise summaries of long documents, reports, and conversations to help users review information efficiently.",
      },
      {
        title: "Knowledge Search",
        description:
          "Help users find relevant information across business documents and knowledge resources using language-based search.",
      },
    ],

    industriesTitle: "Industries We Serve",

    industries: [
      {
        title: "Healthcare",
        description:
          "Support document organization, information extraction, and analysis of suitable text-based healthcare records.",
      },
      {
        title: "Banking and Finance",
        description:
          "Process customer messages, organize documents, and analyze text-based feedback.",
      },
      {
        title: "Retail and E-Commerce",
        description:
          "Analyze product reviews, categorize customer inquiries, and support conversational shopping experiences.",
      },
      {
        title: "Education",
        description:
          "Support educational chatbots, content organization, and text summarization.",
      },
      {
        title: "Legal Services",
        description:
          "Help organize documents, identify relevant information, and support text-based document search.",
      },
      {
        title: "Customer Service",
        description:
          "Automate selected support workflows, classify incoming requests, and analyze customer feedback.",
      },
    ],

    benefitsTitle: "Business Benefits of NLP",

    benefits: [
      {
        title: "Faster Text Processing",
        description:
          "Automate selected text-based tasks and reduce the time required to organize large amounts of language data.",
      },
      {
        title: "Improved Customer Communication",
        description:
          "Provide conversational interfaces that help users access information and complete common tasks.",
      },
      {
        title: "Better Feedback Insights",
        description:
          "Identify recurring topics and sentiment patterns across customer messages and reviews.",
      },
      {
        title: "More Organized Information",
        description:
          "Classify documents and extract relevant information to make business content easier to search and process.",
      },
    ],

    faqs: [
      {
        question: "What is Natural Language Processing?",
        answer:
          "Natural Language Processing is a field of artificial intelligence that helps computers process, analyze, and generate human language in text and speech.",
      },
      {
        question: "Can NLP be used to build chatbots?",
        answer:
          "Yes. NLP techniques can help chatbots interpret user messages, identify intent, and generate or retrieve relevant responses.",
      },
      {
        question: "What is sentiment analysis?",
        answer:
          "Sentiment analysis is a technique used to identify opinions or emotional tone in text, often categorizing feedback as positive, negative, or neutral.",
      },
      {
        question: "Can NLP process multiple languages?",
        answer:
          "Yes, depending on the models, tools, and datasets used. Language coverage and performance can vary, so each language should be evaluated for the intended use case.",
      },
      {
        question: "Can NLP integrate with existing applications?",
        answer:
          "Yes. NLP solutions can often be integrated into websites, applications, customer support platforms, and document-processing systems using suitable APIs and services.",
      },
    ],
  },

  // =====================================================
  // 4. COMPUTER VISION
  // =====================================================

  "computer-vision": {
    title: "Computer Vision Solutions",
    subtitle: "Help Machines See. Help Businesses Understand.",
    label: "ML & AI SERVICES",

    description:
      "Transform images and videos into useful business insights with intelligent computer vision solutions. We develop visual recognition, object detection, image analysis, and video analytics applications that help organizations automate visual tasks and understand visual information.",

    heroImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=85",

    aboutImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",

    aboutTitle: "Transforming Visual Information into Intelligence",

    about:
      "Computer vision is a field of artificial intelligence that enables computers to interpret and analyze visual information from images and videos. Using image-processing techniques and machine learning models, computer vision systems can recognize objects, classify images, detect visual patterns, and support automated inspection. Our computer vision development services help businesses build solutions for visual quality control, object detection, image recognition, and video analysis. We design systems based on your visual data, operational environment, and business requirements.",

    whyTitle: "Why Computer Vision Matters",

    whyDescription:
      "Images and videos contain valuable information that can support business operations. Computer vision helps organizations analyze visual data and automate selected tasks that would otherwise require manual inspection.",

    whyPoints: [
      {
        title: "Automate Visual Inspection",
        description:
          "Analyze images to identify visible defects, inconsistencies, or predefined quality issues in suitable inspection workflows.",
      },
      {
        title: "Recognize Objects and Patterns",
        description:
          "Identify objects, categories, and visual patterns in images and video frames using trained computer vision models.",
      },
      {
        title: "Improve Visual Data Analysis",
        description:
          "Process large collections of images and videos to extract useful information and support operational decisions.",
      },
      {
        title: "Support Operational Monitoring",
        description:
          "Analyze visual information from cameras and other imaging systems to support defined monitoring and inspection tasks.",
      },
    ],

    offeringsTitle: "Our Computer Vision Services",

    offeringsDescription:
      "We develop intelligent visual systems that help businesses recognize objects, analyze images, and process video information.",

    offerings: [
      {
        title: "Image Recognition",
        description:
          "We develop image recognition systems that classify images into relevant categories based on visual patterns learned from training data.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
        points: [
          "Image classification",
          "Visual category recognition",
          "Image-based search support",
          "Automated image organization",
        ],
      },
      {
        title: "Object Detection",
        description:
          "We build models that identify and locate objects within images or video frames, supporting applications that require visual detection and localization.",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85",
        points: [
          "Object identification",
          "Object localization",
          "Visual counting",
          "Image-based detection",
        ],
      },
      {
        title: "Visual Quality Inspection",
        description:
          "We develop computer vision solutions that analyze images of products or components to identify visible defects and support quality inspection workflows.",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",
        points: [
          "Visual defect detection",
          "Product inspection",
          "Image-based quality checks",
          "Inspection workflow integration",
        ],
      },
      {
        title: "Video Analytics",
        description:
          "We build systems that analyze video frames to identify objects, detect defined events, and extract useful visual information from recorded or live video streams.",
        image:
          "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=85",
        points: [
          "Video frame analysis",
          "Object tracking",
          "Event detection",
          "Visual activity analysis",
        ],
      },
      {
        title: "Image Segmentation",
        description:
          "We develop models that divide images into meaningful regions or pixel-level categories, supporting detailed analysis of objects and visual structures.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85",
        points: [
          "Image region identification",
          "Pixel-level classification",
          "Object boundary analysis",
          "Visual measurement support",
        ],
      },
      {
        title: "Visual AI Integration",
        description:
          "We integrate computer vision models into applications, inspection systems, and business workflows so visual analysis can support operational processes.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
        points: [
          "Model API integration",
          "Image processing workflows",
          "Application integration",
          "Model monitoring",
        ],
      },
    ],

    processTitle: "Our Computer Vision Development Process",

    processDescription:
      "We follow a structured approach to develop, evaluate, and integrate computer vision systems for your business.",

    process: [
      {
        title: "Understand the Visual Use Case",
        description:
          "We identify the images or videos involved, the visual task to perform, the business requirements, and the operating environment.",
      },
      {
        title: "Collect and Prepare Visual Data",
        description:
          "We gather relevant images or videos, assess data quality, organize datasets, and prepare annotations when required.",
      },
      {
        title: "Select and Train the Model",
        description:
          "We choose suitable computer vision techniques and train models using prepared visual data to perform the required task.",
      },
      {
        title: "Evaluate Model Performance",
        description:
          "We test the model using relevant images and scenarios to understand its accuracy, limitations, and performance under expected conditions.",
      },
      {
        title: "Deploy and Integrate",
        description:
          "We integrate the model into the required application, camera workflow, or business system using a suitable deployment approach.",
      },
      {
        title: "Monitor and Improve",
        description:
          "We monitor performance in the operating environment and update the model or processing workflow when necessary.",
      },
    ],

    applicationsTitle: "Real-World Applications of Computer Vision",

    applications: [
      {
        title: "Manufacturing Quality Inspection",
        description:
          "Analyze product images to identify visible defects and support consistent inspection processes.",
      },
      {
        title: "Retail Product Recognition",
        description:
          "Recognize products in images to support catalog organization, visual search, and inventory-related workflows.",
      },
      {
        title: "Medical Image Analysis",
        description:
          "Support research and clinical workflows by analyzing suitable medical images under appropriate professional oversight.",
      },
      {
        title: "Traffic and Transportation Analysis",
        description:
          "Analyze visual traffic information to support vehicle counting and defined transportation monitoring tasks.",
      },
      {
        title: "Document Image Processing",
        description:
          "Analyze scanned documents and images to identify layouts, regions, and visual structures.",
      },
      {
        title: "Agricultural Image Analysis",
        description:
          "Analyze crop images to identify visual patterns and support selected agricultural monitoring applications.",
      },
    ],

    industriesTitle: "Industries We Serve",

    industries: [
      {
        title: "Manufacturing",
        description:
          "Support visual quality inspection, product recognition, and automated image-based analysis.",
      },
      {
        title: "Healthcare",
        description:
          "Support suitable medical image analysis and visual data research workflows.",
      },
      {
        title: "Retail",
        description:
          "Enable product recognition, visual search, and image-based catalog organization.",
      },
      {
        title: "Transportation",
        description:
          "Support vehicle counting, traffic pattern analysis, and selected visual monitoring tasks.",
      },
      {
        title: "Agriculture",
        description:
          "Analyze crop images and support visual monitoring of agricultural conditions.",
      },
      {
        title: "Logistics",
        description:
          "Support package recognition, image-based inspection, and visual processing workflows.",
      },
    ],

    benefitsTitle: "Business Benefits of Computer Vision",

    benefits: [
      {
        title: "Automated Visual Processing",
        description:
          "Automate selected image and video analysis tasks to reduce repetitive manual inspection.",
      },
      {
        title: "Consistent Inspection",
        description:
          "Apply defined visual inspection criteria across large numbers of images or products.",
      },
      {
        title: "Faster Visual Analysis",
        description:
          "Process visual information efficiently when supported by appropriate models and infrastructure.",
      },
      {
        title: "Better Visual Insights",
        description:
          "Extract useful information from images and videos to support operational analysis and decisions.",
      },
    ],

    faqs: [
      {
        question: "What is computer vision?",
        answer:
          "Computer vision is a field of artificial intelligence that enables computers to analyze and interpret images and videos.",
      },
      {
        question: "What is the difference between image recognition and object detection?",
        answer:
          "Image recognition typically identifies the category of an image, while object detection identifies objects and estimates their locations within an image.",
      },
      {
        question: "Can computer vision analyze live video?",
        answer:
          "Yes. Computer vision models can process video frames from live streams when the hardware, software, and system architecture support the required processing.",
      },
      {
        question: "What data is needed to build a computer vision model?",
        answer:
          "The required data depends on the use case. It may include labeled images, video frames, or other visual datasets that represent the conditions the model is expected to handle.",
      },
      {
        question: "Can computer vision be used for quality inspection?",
        answer:
          "Yes. Computer vision can analyze product images to identify visible defects and support automated quality inspection workflows. Performance depends on image quality, training data, and inspection conditions.",
      },
    ],
  },

  // =====================================================
  // 5. BUSINESS INTELLIGENCE AND ANALYTICS
  // =====================================================

  "business-intelligence": {
    title: "Business Intelligence & Analytics",
    subtitle: "Turn Data into Decisions.",
    label: "ML & AI SERVICES",

    description:
      "Transform business data into meaningful insights with modern business intelligence and analytics solutions. We help organizations organize data, create interactive dashboards, generate reports, monitor performance, and understand trends to support informed business decisions.",

    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",

    aboutImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",

    aboutTitle: "Making Business Data Clear, Useful, and Actionable",

    about:
      "Business Intelligence, commonly known as BI, involves collecting, organizing, analyzing, and visualizing business data to understand performance and support decision-making. Analytics adds deeper examination of data to identify patterns, trends, relationships, and opportunities. Our BI and analytics services help businesses bring information from different systems into structured reports, interactive dashboards, and meaningful visualizations. We work with your business goals to create reporting and analytics solutions that help teams monitor performance, understand operational trends, and make informed decisions.",

    whyTitle: "Why Business Intelligence Matters",

    whyDescription:
      "Businesses often store information across multiple systems, spreadsheets, and databases. Business intelligence helps bring this information together and present it in a clear format that supports understanding and decision-making.",

    whyPoints: [
      {
        title: "Understand Business Performance",
        description:
          "Monitor key performance indicators and review business results through structured reports and dashboards.",
      },
      {
        title: "Bring Data Together",
        description:
          "Combine information from suitable data sources to create a more consistent view of business operations.",
      },
      {
        title: "Identify Trends and Patterns",
        description:
          "Analyze historical and current business information to understand changes, recurring patterns, and potential opportunities.",
      },
      {
        title: "Support Informed Decisions",
        description:
          "Provide teams with accessible reports and visual insights that support planning and business decisions.",
      },
    ],

    offeringsTitle: "Our Business Intelligence & Analytics Services",

    offeringsDescription:
      "We develop analytics and reporting solutions that help organizations organize business information and turn data into useful insights.",

    offerings: [
      {
        title: "Interactive Dashboard Development",
        description:
          "We build interactive dashboards that present key business metrics, performance indicators, and trends in a clear visual format, helping teams monitor operations and explore information.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
        points: [
          "KPI dashboards",
          "Interactive data visualization",
          "Business performance monitoring",
          "Department-specific dashboards",
        ],
      },
      {
        title: "Business Reporting Solutions",
        description:
          "We create structured business reports that organize information from relevant data sources and present performance results in a format suited to business requirements.",
        image:
          "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=900&q=85",
        points: [
          "Operational reports",
          "Financial reporting",
          "Sales performance reports",
          "Management reporting",
        ],
      },
      {
        title: "Data Visualization",
        description:
          "We transform structured data into charts, graphs, tables, and visual summaries that help users understand trends, comparisons, and relationships.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
        points: [
          "Interactive charts",
          "Trend visualization",
          "Comparative analysis",
          "Visual performance summaries",
        ],
      },
      {
        title: "Data Integration and Preparation",
        description:
          "We help organize information from relevant databases, spreadsheets, and business systems so it can be analyzed consistently and used in reports.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
        points: [
          "Data source integration",
          "Data cleaning",
          "Data transformation",
          "Reporting data preparation",
        ],
      },
      {
        title: "Business Performance Analytics",
        description:
          "We analyze business metrics and historical performance to identify patterns, compare results, and provide insights that support operational and strategic planning.",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
        points: [
          "KPI analysis",
          "Performance comparisons",
          "Business trend analysis",
          "Operational insights",
        ],
      },
      {
        title: "Advanced Business Analytics",
        description:
          "We apply suitable analytical techniques to explore business data, investigate patterns, and support deeper understanding of operational and customer-related questions.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
        points: [
          "Exploratory data analysis",
          "Trend identification",
          "Business data analysis",
          "Decision support",
        ],
      },
    ],

    processTitle: "Our Business Intelligence Development Process",

    processDescription:
      "We follow a structured process to create reliable reporting and analytics solutions that support your business goals.",

    process: [
      {
        title: "Understand Business Requirements",
        description:
          "We identify business goals, reporting needs, key performance indicators, intended users, and the decisions the analytics solution should support.",
      },
      {
        title: "Identify Data Sources",
        description:
          "We review relevant databases, spreadsheets, business applications, and other sources that contain the information needed for reporting.",
      },
      {
        title: "Prepare and Organize Data",
        description:
          "We clean, transform, and organize data to improve consistency and prepare it for analysis and visualization.",
      },
      {
        title: "Develop Reports and Dashboards",
        description:
          "We design dashboards, reports, and visualizations that present key business information clearly and support the needs of different users.",
      },
      {
        title: "Validate Data and Metrics",
        description:
          "We check calculations, reporting logic, data consistency, and visual presentation to ensure the solution reflects the intended business definitions.",
      },
      {
        title: "Deploy and Maintain",
        description:
          "We deploy the reporting solution, configure appropriate access, and maintain data connections and reports as business requirements change.",
      },
    ],

    applicationsTitle: "Real-World Applications of Business Intelligence",

    applications: [
      {
        title: "Sales Performance Monitoring",
        description:
          "Track sales results, compare performance across products or regions, and identify changes in sales trends.",
      },
      {
        title: "Financial Reporting",
        description:
          "Organize financial information into reports that support budgeting, expense monitoring, and financial performance reviews.",
      },
      {
        title: "Customer Analytics",
        description:
          "Analyze customer information to understand purchasing patterns, engagement, and customer segment performance.",
      },
      {
        title: "Inventory Analytics",
        description:
          "Monitor stock levels, product movement, and inventory trends to support purchasing and inventory management.",
      },
      {
        title: "Operational Performance",
        description:
          "Track operational metrics, monitor process performance, and identify areas that may require further investigation.",
      },
      {
        title: "Executive Dashboards",
        description:
          "Present key business indicators and performance summaries in a consolidated dashboard for management review.",
      },
    ],

    industriesTitle: "Industries We Serve",

    industries: [
      {
        title: "Retail and E-Commerce",
        description:
          "Monitor sales, inventory, customer behavior, and product performance through business dashboards.",
      },
      {
        title: "Banking and Finance",
        description:
          "Organize financial metrics, analyze performance, and support reporting and operational monitoring.",
      },
      {
        title: "Healthcare",
        description:
          "Monitor operational metrics, resource usage, and suitable administrative performance indicators.",
      },
      {
        title: "Manufacturing",
        description:
          "Track production performance, operational indicators, quality metrics, and inventory information.",
      },
      {
        title: "Logistics",
        description:
          "Monitor delivery performance, operational activity, shipment data, and resource utilization.",
      },
      {
        title: "Education",
        description:
          "Analyze enrollment, attendance, academic administration, and institutional performance metrics.",
      },
    ],

    benefitsTitle: "Business Benefits of BI & Analytics",

    benefits: [
      {
        title: "Clear Business Visibility",
        description:
          "Present key business information in organized reports and dashboards that help teams understand performance.",
      },
      {
        title: "Consistent Reporting",
        description:
          "Use defined metrics and structured reporting processes to improve consistency across business reports.",
      },
      {
        title: "Faster Access to Insights",
        description:
          "Make relevant business information easier to access through dashboards and organized visualizations.",
      },
      {
        title: "Better Business Planning",
        description:
          "Use historical performance and analytical insights to support budgeting, resource planning, and operational decisions.",
      },
    ],

    faqs: [
      {
        question: "What is Business Intelligence?",
        answer:
          "Business Intelligence is the process of collecting, organizing, analyzing, and presenting business data through reports, dashboards, and visualizations to support decision-making.",
      },
      {
        question: "What is the difference between BI and analytics?",
        answer:
          "Business Intelligence focuses on organizing and presenting business information, while analytics examines data more deeply to identify patterns, trends, and relationships. The two are often used together.",
      },
      {
        question: "What data sources can be used in BI dashboards?",
        answer:
          "Depending on the technical setup, dashboards can use information from databases, spreadsheets, business applications, APIs, and other structured data sources.",
      },
      {
        question: "Can dashboards be updated automatically?",
        answer:
          "Yes. Dashboards can be configured to refresh data automatically at suitable intervals, depending on the data source, infrastructure, and reporting platform.",
      },
      {
        question: "Can BI solutions integrate with existing business systems?",
        answer:
          "Yes. BI solutions can often connect to existing databases and business applications using supported connectors, APIs, or data integration workflows.",
      },
    ],
  },
 // UX & UI DESIGN SERVICES

prototypes: {
aboutTitle: "Bringing Ideas to Life Through Interactive Prototypes",

about: "We transform your ideas into interactive prototypes that demonstrate how your digital product will look, feel, and function before development begins. Our prototyping process helps visualize user journeys, test interactions, and validate design concepts early. By identifying usability issues and refining experiences at an early stage, we help teams make informed design decisions and create products that align with user expectations and business objectives.",
 title: "Prototypes",

 subtitle: "Turn Your Ideas Into Interactive Experiences",

 description:

"We transform your ideas into interactive prototypes that bring your concepts to life. Our prototyping services help businesses visualize product concepts, test user interactions, and validate design decisions before development. We create realistic and engaging prototypes that demonstrate how your digital product will look and function.",

 overview:

"Prototyping is an essential step in product design that allows businesses to explore ideas, test functionality, and improve user experiences before investing in full-scale development. Our team creates interactive prototypes that simulate real-world user interactions and help stakeholders understand the final product.",
whyTitle: "Why Choose Our Prototyping Services",

whyDescription:
  "We help transform ideas into interactive experiences, allowing you to test, validate, and refine your product before development.",

whyPoints: [
  {
    title: "Early Validation",
    description:
      "Test your ideas and validate concepts before investing in full-scale development."
  },
  {
    title: "Interactive Experiences",
    description:
      "Explore realistic user interactions and understand how your product will function."
  },
  {
    title: "Improved Usability",
    description:
      "Identify usability issues early and refine the user experience based on feedback."
  },
  {
    title: "Reduced Development Risks",
    description:
      "Address design challenges early to reduce costly changes during development."
  }
],
features: [

 "Interactive Clickable Prototypes",

 "Low-Fidelity and High-Fidelity Prototypes",

"User Flow and Interaction Design",

"Responsive Prototype Development",

 "User Experience Testing",

"Design Validation and Feedback",

 ],

 benefits: [

 "Visualize product ideas before development",

 "Identify usability issues early",

 "Reduce development risks and rework",

"Improve communication between stakeholders",

"Validate design concepts with users",

"Accelerate product development decisions",

 ],

 process: [
  {
    title: "Requirement Analysis",
    description:
      "We understand your business goals, target audience, and product requirements through detailed discussions and research. Our team identifies user needs, defines project objectives, analyzes functional requirements, and evaluates potential challenges. This phase establishes a clear project direction and ensures the design aligns with both user expectations and business objectives.",
  },

  {
    title: "Concept Development",
    description:
      "We transform your ideas into structured design concepts and user flows that define how users will interact with your digital product. Our team explores different approaches, organizes content, plans navigation, and establishes the overall user experience. This phase creates a clear design direction that supports usability, consistency, and your product vision.",
  },

  {
    title: "Prototype Creation",
    description:
      "We create interactive prototypes that demonstrate your product's layout, navigation, and functionality. By connecting screens and designing realistic user interactions, we help you visualize the product experience before development begins. These prototypes allow stakeholders to explore the design, understand user journeys, and provide valuable feedback for further improvements.",
  },

  {
    title: "Testing and Validation",
    description:
      "We evaluate the prototype to understand how effectively it meets user needs and project objectives. Our team gathers feedback, identifies usability issues, reviews navigation, and refines interface elements based on testing results. This process helps improve the overall user experience and ensures the final design is intuitive, consistent, and ready for the next stage of development.",
  },
  {
  title: "Design Refinement",
  description:
    "We refine the design based on user feedback, testing results, and project requirements. Our team improves layouts, typography, colors, spacing, and interactive elements to create a consistent and visually appealing interface. This phase ensures the design meets usability standards and aligns with your brand identity.",
},
{
  title: "Final Design Handover",
  description:
    "We prepare the finalized design files, interactive prototypes, and design specifications for the development team. Our team organizes UI components, documents design guidelines, and provides the necessary assets to support smooth implementation. This ensures the final design is ready for the development phase.",
},
],

images: [

"/assets/images/prototypes-1.png",

"/assets/images/prototypes-2.png",

 ],

},

"wireframe-design": {
aboutTitle: "Building Strong Foundations with Strategic Wireframe Design",

about: "We create structured wireframes that define the layout, content hierarchy, and functionality of your digital product. Our wireframe design process focuses on organizing information, simplifying navigation, and establishing clear user journeys. By planning the structure before visual design begins, we help teams identify potential usability challenges, improve content placement, and build a solid foundation for intuitive and user-friendly digital experiences.",
whyTitle: "Why Choose Our Wireframe Design Services",

whyDescription:
  "We create structured wireframes that simplify navigation, organize content, and establish a clear foundation for your digital product.",

whyPoints: [
  {
    title: "Clear Structure",
    description:
      "Organize content and interface elements into a clear and logical layout."
  },
  {
    title: "Better Navigation",
    description:
      "Create intuitive user flows that help users find information easily."
  },
  {
    title: "User-Focused Design",
    description:
      "Prioritize user needs and ensure important features are easy to access."
  },
  {
    title: "Efficient Planning",
    description:
      "Identify layout issues early and simplify the design process before development."
  }
],
title: "Wireframe Design",

subtitle: "Build a Strong Foundation for Your Digital Products",

 description:

"We create structured wireframes that define the layout, navigation, and content hierarchy of your digital products. Our wireframe design services help businesses plan intuitive user journeys, organize information effectively, and establish a clear foundation for visual design and development.",

 overview:

    "Wireframing is an important stage of the UX design process that focuses on the structure and functionality of a digital product. Our wireframes provide a clear visual representation of page layouts, content placement, and navigation, helping teams understand how users will interact with the product.",

  features: [

    "Low-Fidelity Wireframe Design",

    "High-Fidelity Wireframes",

    "Website Page Layout Planning",

    "Mobile Application Wireframes",

    "Information Architecture",

    "User Journey Mapping",

    "Navigation Structure Design",

    "Responsive Layout Planning",

  ],

  benefits: [

    "Establish a clear product structure",

    "Improve content organization",

    "Identify usability challenges early",

    "Simplify communication with stakeholders",

    "Reduce design revisions during development",

    "Create a user-focused navigation experience",

  ],

  process: [

    {

      title: "Research and Discovery",

      description:

        "We understand your audience, business objectives, and project requirements.",

    },

    {

      title: "Information Architecture",

      description:

        "We organize content, define navigation, and establish the structure of your digital product.",

    },

    {

      title: "Wireframe Creation",

      description:

        "We create wireframes that outline page layouts, content sections, and user interactions.",

    },

    {

      title: "Review and Refinement",

      description:

        "We review the wireframes with stakeholders and refine the structure based on feedback.",

    },

  ],

  images: [

    "/assets/images/wireframe-1.png",

    "/assets/images/wireframe-2.png",

  ],

},

"application-design": {
aboutTitle: "Creating Seamless and Engaging Application Experiences",

about: "We design intuitive and visually appealing mobile and web applications that prioritize user needs and usability. From user flows and navigation systems to interactive elements and visual interfaces, our application design process focuses on creating consistent and accessible experiences. We combine thoughtful layouts, clear interactions, and responsive design principles to help users complete tasks easily while ensuring the application supports your business goals and delivers a smooth experience across devices.",

whyTitle: "Why Choose Our Application Design Services",

whyDescription:
  "We design user-friendly applications that combine intuitive navigation, engaging interfaces, and consistent experiences across devices.",

whyPoints: [
  {
    title: "Intuitive Interfaces",
    description:
      "Create simple and easy-to-use interfaces that help users complete tasks efficiently."
  },
  {
    title: "Consistent Experience",
    description:
      "Maintain consistent design elements and interactions throughout the application."
  },
  {
    title: "Responsive Design",
    description:
      "Deliver adaptable layouts that work smoothly across different screen sizes."
  },
  {
    title: "User-Centered Approach",
    description:
      "Focus on user needs and behavior to create meaningful application experiences."
  }
],

title: "Application Design",

subtitle: "Create Intuitive and User-Friendly Applications",

 description:

"We design modern and user-friendly mobile and web applications with intuitive navigation, attractive layouts, and seamless user experiences. Our application design services focus on usability, accessibility, and consistency across devices, helping businesses create digital products that meet user expectations and business objectives.",

 overview:
"Application design combines user experience strategy and visual design to create applications that are easy to understand and use. From initial concepts to detailed interface designs, we develop consistent and engaging experiences for mobile and web applications.",

 features: [

"Mobile Application UI/UX Design",

"Web Application Interface Design",

"User Journey and Flow Design",

 "Dashboard and Admin Panel Design",

"Responsive Application Layouts",

"Interactive Interface Prototypes",

"Design Systems and UI Components",

"Accessibility-Focused Design",

],

benefits: [

"Improve application usability",
 "Create consistent experiences across devices",

 "Simplify navigation and user interactions",

"Strengthen brand identity",

 "Improve user satisfaction and engagement",

 "Support efficient application development",

],

process: [

 {

 title: "User Research",

 description:

 "We understand your target users, their needs, and the challenges they face.",

},

 {

title: "UX Strategy and Planning",

 description:

 "We define user flows, application structure, and the overall user experience.",
},

 {

title: "UI Design",

description:

 "We create visually appealing interfaces with consistent typography, colors, and components.",

 },

 {

 title: "Prototype and Testing",

description:

 "We build interactive prototypes and refine the design based on usability feedback.",

 },

 ],

 images: [
 "/assets/images/application-1.png",

"/assets/images/application-2.png",

 ],

},

"web-design": {
aboutTitle: "Designing Modern, Responsive, and User-Friendly Websites",

about: "We create modern and responsive websites that combine compelling visuals with intuitive navigation and seamless user experiences. Our web design process focuses on presenting information clearly, strengthening brand identity, and making websites accessible across desktops, tablets, and mobile devices. From page layouts and visual elements to interactive components and responsive behavior, we design websites that engage visitors, communicate your message effectively, and support your organization's digital objectives.",
 
whyTitle: "Why Choose Our Web Design Services",

whyDescription:
  "We create modern, responsive websites that strengthen your brand identity and deliver smooth, engaging experiences for visitors.",

whyPoints: [
  {
    title: "Modern Visual Design",
    description:
      "Build visually appealing websites that reflect your brand identity and style."
  },
  {
    title: "Responsive Layouts",
    description:
      "Ensure your website adapts seamlessly to desktops, tablets, and mobile devices."
  },
  {
    title: "User-Friendly Navigation",
    description:
      "Help visitors find information quickly through clear layouts and intuitive navigation."
  },
  {
    title: "Engaging User Experience",
    description:
      "Create interactive and accessible experiences that keep visitors engaged."
  }
],

title: "Web Design",

 subtitle: "Design Modern and Responsive Websites",

description:
"We create visually appealing and responsive websites that reflect your brand identity and deliver engaging user experiences. Our web design services focus on clean layouts, intuitive navigation, responsive interfaces, and consistent visual design across desktop, tablet, and mobile devices.",

 overview:

"A well-designed website helps businesses communicate their brand, present information clearly, and provide visitors with a smooth browsing experience. Our web design process combines visual creativity, usability, and responsive design to create websites that work across different screen sizes.",

 features: [

 "Responsive Website Design",

 "Custom Website UI/UX Design",

"Landing Page Design",

 "Corporate Website Design",

 "E-Commerce Website Design",

 "Website Navigation and Layout Design",

 "Interactive Website Prototypes",

"Visual Design Systems",

 ],

 benefits: [

 "Create a strong online brand presence",

"Improve website usability and navigation",

 "Deliver consistent experiences across devices",

"Present products and services clearly",

"Improve visitor engagement",

 "Support business goals through thoughtful design",

 ],

 process: [
 {
title: "Discovery and Research",

 description:

"We understand your brand, business goals, target audience, and website requirements.",

},

 {

 title: "Structure and Wireframing",

 description:

"We plan page layouts, content hierarchy, and navigation to create a clear website structure.",

 },

 {

 title: "Visual Design",

description:
 "We develop the website's visual identity through colors, typography, imagery, and interface components.",

 },

 {

 title: "Responsive Design and Handoff",

description:

 "We prepare responsive layouts and design specifications for smooth development handoff.",

 },

 ],

 images: [

 "/assets/images/web-design-1.png",

 "/assets/images/web-design-2.png",

],

},

};


// =====================================================
// REUSABLE SECTION COMPONENTS
// =====================================================

function SectionHeading({ label, title, description }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
        {label}
      </p>

      <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function TextCard({ title, description, index }) {
  return (
    <div className="group rounded-3xl border border-purple-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-lg font-bold text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3 className="mt-6 text-xl font-bold leading-snug text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
        {description}
      </p>
    </div>
  );
}


// =====================================================
// MAIN PAGE
// =====================================================

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  if (webDevSlugs.includes(slug)) {
    return <WebDevPage slug={slug} />;
  }
  if (mobileDevSlugs.includes(slug)) {
    return <MobileDevPage slug={slug} />;
  }
  if (
  slug === "search-engine-optimization" ||
  slug === "social-media-marketing" ||
  slug === "social-media-optimization" ||
  slug === "search-engine-marketing" ||
  slug === "pay-per-click"
) {
  return <DigitalMarketingPage slug={slug} />;
}
if (
  slug === "abap-cloud" ||
  slug === "abap-development-tools" ||
  slug === "abap-managed-database-procedures" ||
  slug === "application-programming-interface"
) {
  return <SAPConsultingPage slug={slug} />;
}
if (
  slug === "tailored-solutions" ||
  slug === "quality-assurance" ||
  slug === "seamless-integration" ||
  slug === "scalability" ||
  slug === "continuous-support"
) {
  return <ITResourceExpansionPage slug={slug} />;
}
  const isUIUX = [
  "prototypes",
  "wireframe-design",
  "application-design",
  "web-design",
].includes(slug);
  const service = serviceData[slug];

  const uiuxItems = (service?.features || []).map((item, index) => ({
  title:
    typeof item === "string"
      ? item
      : item.title || item.name || item.heading || `Feature ${index + 1}`,
  description:
    typeof item === "string"
      ? ""
      : item.description || item.text || item.details || "",
}));
  

  if (!service) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Service Not Found
            </h1>

            <p className="mt-4 text-gray-600">
              The service page you are looking for does not exist.
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex rounded-full bg-violet-600 px-8 py-4 font-semibold text-white"
            >
              Back to Home
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-gray-800">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section className="relative mt-8 overflow-hidden bg-gradient-to-br from-[#fbf8ff] via-white to-[#fceeff] px-6 py-16 md:mt-12 md:px-16 md:py-24">
          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-purple-100 bg-white px-5 py-3 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-600" />

                <span className="text-sm font-semibold tracking-wide text-violet-700">
                  {service.label}
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
                {service.title}
              </h1>

              <h2 className="mt-6 text-xl font-semibold leading-relaxed text-violet-700 md:text-2xl">
                {service.subtitle}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
                {service.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-700"
                >
                  Let's Talk About Your Project →
                </Link>

                <a
                  href="#offerings"
                  className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:border-violet-400 hover:text-violet-700"
                >
                  Explore Solutions
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[35px] bg-gradient-to-br from-purple-200 to-pink-200 opacity-60 blur-xl" />

              <div className="relative overflow-hidden rounded-[30px] border-8 border-white shadow-2xl">
                <img
  src={service.heroImage || service.images?.[0]}
  alt={service.title}
  className="h-[350px] w-full object-cover md:h-[490px]"
/>
              </div>

              <div className="absolute -bottom-6 -left-5 rounded-2xl border border-purple-100 bg-white px-6 py-5 shadow-xl md:-left-10">
                <p className="text-sm font-medium text-gray-500">
                  Intelligent Solutions
                </p>

                <p className="mt-1 text-lg font-bold text-violet-700">
                  Innovation Through AI
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT SECTION
        ===================================================== */}

        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-32 w-32 rounded-tl-[40px] border-l-4 border-t-4 border-violet-300" />

             <img
  src={service.aboutImage || service.images?.[1] || service.images?.[0]}
  alt={service.aboutTitle || service.title}
  className="relative h-[340px] w-full rounded-[28px] object-cover shadow-lg md:h-[430px]"
/>

              <div className="absolute -bottom-5 right-5 rounded-2xl bg-violet-600 px-7 py-5 text-white shadow-xl md:right-[-20px]">
                <p className="text-sm text-purple-100">
                  Technology
                </p>

                <p className="mt-1 text-xl font-bold">
                  Built for Business
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
                About Our Service
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                {service.aboutTitle}
              </h2>

              <p className="mt-7 text-base leading-8 text-gray-600 md:text-lg">
                {service.about}
              </p>

              <div className="mt-8 h-1.5 w-24 rounded-full bg-gradient-to-r from-violet-600 to-pink-400" />
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY THIS SERVICE MATTERS
        ===================================================== */}

        <section className="bg-[#faf8ff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Why Choose This Technology"
              title={service.whyTitle}
              description={service.whyDescription}
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {(service.whyPoints || []).map((item, index) => (
                <TextCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICE OFFERINGS WITH IMAGES
        ===================================================== */}

        {/* <section id="offerings" className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Our Expertise"
              title={service.offeringsTitle}
              description={service.offeringsDescription}
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {(service.offerings || []).map((item, index) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[245px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-violet-700 shadow">
                      SERVICE 0{index + 1}
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-bold leading-snug text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                      {item.description}
                    </p>

                    <div className="mt-6 border-t border-purple-100 pt-5">
                      <p className="text-sm font-bold text-violet-700">
                        Key Capabilities
                      </p>

                      <ul className="mt-4 space-y-3">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />

                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        {["prototypes", "wireframe-design", "application-design", "web-design"].includes(
  slug
) ? (
  <UIUXOfferings service={service} />
) : (
  <section id="offerings" className="px-6 py-24 md:px-16">
  <div className="mx-auto max-w-7xl">

    {/* ================= PROTOTYPES ================= */}
    {slug === "prototypes" && (
      <div>
        <SectionHeading
          label="Prototype Design"
          title={service.offeringsTitle || "Bring Your Ideas to Life"}
          description={service.offeringsDescription || service.overview}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {uiuxItems.map((item, index) => (
            <article
              key={index}
              className="group rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-2xl font-bold text-white transition-transform group-hover:rotate-6">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-600">
                {item.description}
              </p>

              <div className="mt-8 h-1 w-16 rounded-full bg-violet-500 transition-all duration-300 group-hover:w-28" />
            </article>
          ))}
        </div>
      </div>
    )}

    {/* ================= WIREFRAME DESIGN ================= */}
    {slug === "wireframe-design" && (
      <div>
        <SectionHeading
          label="Wireframe Design"
          title={service.offeringsTitle || "Structure Every Screen"}
          description={service.offeringsDescription || service.overview}
        />

        <div className="mt-14 space-y-5">
          {uiuxItems.map((item, index) => (
            <article
              key={index}
              className="group grid gap-6 rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:border-gray-900 hover:bg-gray-50 md:grid-cols-[100px_1fr] md:items-center md:p-10"
            >
              <div className="text-5xl font-black text-gray-200 transition-colors group-hover:text-violet-500">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    )}

    {/* ================= APPLICATION DESIGN ================= */}
    {slug === "application-design" && (
      <div>
        <SectionHeading
          label="Application Design"
          title={service.offeringsTitle || "Design Better App Experiences"}
          description={service.offeringsDescription || service.overview}
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {uiuxItems.map((item, index) => (
            <article
              key={index}
              className="relative overflow-hidden rounded-[32px] bg-gray-950 p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:p-10"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl" />

              <div className="relative">
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
                  App Feature {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-8 text-3xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-gray-300">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-full bg-white/15" />

                <div className="mt-5 flex items-center justify-between text-sm text-violet-300">
                  <span>Application Experience</span>
                  <span>↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    )}

    {/* ================= WEB DESIGN ================= */}
    {slug === "web-design" && (
      <div>
        <SectionHeading
          label="Web Design"
          title={service.offeringsTitle || "Websites That Make an Impression"}
          description={service.offeringsDescription || service.overview}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {uiuxItems.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-[28px] bg-[#17131f] p-8 text-white transition-all duration-300 hover:bg-violet-950 md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-violet-200">
                  Web Experience
                </span>

                <span className="text-3xl text-violet-300 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                  ↗
                </span>
              </div>

              <h3 className="mt-12 text-3xl font-bold leading-tight md:text-4xl">
                {item.title}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-300">
                {item.description}
              </p>

              <div className="mt-10 h-px w-full bg-white/15" />

              <div className="mt-5 text-sm font-medium text-violet-300">
                0{index + 1} / {String(uiuxItems.length).padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>
      </div>
    )}

    {/* ================= AI / ML OFFERINGS ================= */}
    {![
      "prototypes",
      "wireframe-design",
      "application-design",
      "web-design",
    ].includes(slug) && (
      <div>
        <SectionHeading
          label="Our Expertise"
          title={service.offeringsTitle}
          description={service.offeringsDescription}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(service.offerings || []).map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[245px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-violet-700 shadow">
                  SERVICE 0{index + 1}
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold leading-snug text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-purple-100 pt-5">
                  <p className="text-sm font-bold text-violet-700">
                    Key Capabilities
                  </p>

                  <ul className="mt-4 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    )}
  </div>
</section>
)}

        {/* =====================================================
            DEVELOPMENT PROCESS
        ===================================================== */}
{!isUIUX && (
        <section className="bg-gradient-to-br from-[#faf8ff] to-[#fff5fc] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="How We Work"
              title={service.processTitle}
              description={service.processDescription}
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.process.map((item, index) => (
                <div
                  key={item.title}
                  className="relative rounded-3xl border border-purple-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                

                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
          </div>
        </section>
        )}

        {/* =====================================================
            REAL-WORLD APPLICATIONS
        ===================================================== */}

        {!isUIUX && (<section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Where It Is Used"
              title={service.applicationsTitle}
              description="Explore practical examples of how this technology can be applied to solve business challenges and support everyday operations."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {(service.applications || []).map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:border-violet-200 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 font-bold text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>)}

        {/* =====================================================
            INDUSTRIES WE SERVE
        ===================================================== */}

        {!isUIUX && (<section className="bg-[#faf8ff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Who We Help"
              title={service.industriesTitle}
              description="We create technology solutions for different industries, adapting our approach to their data, workflows, and business requirements."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {(service.industries || []).map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-purple-100 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 text-sm font-bold tracking-widest text-violet-600">
                    INDUSTRY 0{index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>)}

  

        {/* =====================================================
            FAQ SECTION
        ===================================================== */}
{!isUIUX && (
        <section className="bg-[#faf8ff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              label="Frequently Asked Questions"
              title={`Questions About ${service.title}`}
              description="Find answers to common questions about the technology, its applications, and how it can be integrated into your business."
            />

            <div className="space-y-5">
              {(service.faqs || []).map((item, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-purple-100 bg-white p-6 transition hover:shadow-md md:p-8"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold text-gray-900">
                    <span>
                      {String(index + 1).padStart(2, "0")}.  {item.question}
                    </span>

                    <span className="text-2xl font-normal text-violet-600 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-5 border-t border-purple-100 pt-5 text-sm leading-8 text-gray-600 md:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>)}

        {/* =====================================================
            CONTACT SECTION
        ===================================================== */}
{!isUIUX && (
        <section className="px-6 py-24 md:px-16">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-r from-[#5b21b6] via-[#7c3aed] to-[#a855f7] px-8 py-16 text-center text-white md:px-20 md:py-20">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-pink-300/20 blur-2xl" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-200">
                Let's Build Something Great
              </p>

              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
                Ready to Transform Your Business?
              </h2>

              <p className="mt-6 text-lg leading-8 text-purple-100">
                Let's discuss your requirements and explore how our{" "}
                {service.title} solutions can support your business goals.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex rounded-full bg-white px-9 py-4 font-bold text-violet-700 transition hover:-translate-y-1 hover:bg-purple-50"
              >
                Contact Our Team →
              </Link>
            </div>
          </div>
        </section>)}

      </main>
    </>
  );
  
}
