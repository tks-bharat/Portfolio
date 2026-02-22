export const PERSONAL_INFO = {
  name: "Tanmay Kumar Shrivastava",
  title: "Data Scientist & AI Researcher",
  institution: "Indian Institute of Technology Bhilai",
  location: "Bhilai, Chhattisgarh, India",
  email: "tanmayku@iitbhilai.ac.in",
  phone: "+91-8851008938",
  linkedin: "https://www.linkedin.com/in/tanmay-kumar-shrivastava",
  github: "https://github.com/Tanmay-IITDSAI",
};

export const EDUCATION = [
  {
    program: "B.Tech. in Data Science & AI",
    institution: "Indian Institute of Technology (IIT) Bhilai",
    location: "Chhattisgarh, India",
    score: "7.21/10 (2.9/4.0)",
    period: "2022-Present (Upto 7th Sem)",
  },
  {
    program: "Senior Secondary School",
    institution: "Delhi Public School Mathura Road",
    location: "Delhi, India",
    score: "77.4%",
    period: "2020-22",
  },
  {
    program: "Secondary School",
    institution: "Delhi Public School Indirapuram",
    location: "UP, India",
    score: "89.9%",
    period: "2020",
  },
];

export const WORK_EXPERIENCE = [
  {
    role: "Research Associate",
    company: "PredictRAM - Params Data Provider Pvt Ltd",
    period: "Jan 2026 - Apr 2026 (Ongoing)",
    description: "Conducting equity and market research, analyzing financial data, and supporting investment insights under regulatory frameworks.",
    details: ["TITANIUM trading strategies", "Technical and fundamental analysis", "Event-based trading analytics"],
    image: "experience-predictram"
  },
  {
    role: "Quantitative Research Consultant",
    company: "WorldQuant LLC",
    period: "June 2025 - Present",
    description: "Developing trading strategies and optimizing alpha signals on the WorldQuant BRAIN platform.",
    details: ["Quantitative methods application", "Alpha signal optimization", "Global research network collaboration"],
  },
  {
    role: "Backend Developer Intern",
    company: "MegaForte Ltd. Singapore",
    period: "Oct 2025 - Dec 2025",
    description: "Developed Point-Based Automated Essay Scoring Systems aligned with National Examination Standards.",
    details: ["Marking and feedback automation", "National standards alignment"],
  },
];

export const PROJECTS = [
  {
    id: "kg-activation-steering",
    title: "Disentangling Style & Semantics: Knowledge Graph-Guided Activation Steering",
    category: "Research",
    period: "Nov 2025",
    description: "Implemented contrastive activation steering and activation-space intervention during inference. Accepted for PAKDD Special Track on LLMs for Data Science.",
    problem: "Balancing style disentanglement with factual fidelity in LLMs.",
    solution: "Used Knowledge Graph-guided activation steering with PCA-based style vectors and moderate steering multipliers.",
    technologies: "Python, LLaMA-2-7B, HuggingFace Transformers, NetworkX, Matplotlib, Gemini 2.5 Flash Lite",
    impact: "Achieved optimal balance of style and factual fidelity near alpha=3.0.",
    link: "https://github.com/Tanmay-IITDSAI",
    isPrivate: true,
    image: "project-graph"
  },
  {
    id: "writing-helper",
    title: "Intelligent Helper in Writing Problems",
    category: "NLP",
    period: "Nov 2024",
    description: "Curated homework problem recommendation system using a Rewriter–Retriever–Reranker NLP pipeline. Ranked relevant practice problems from user queries, using GPT-2, T5 and FLAN-T5 with Hugging Face Transformers in Python.",
    problem: "Students struggling to find relevant practice problems for their specific homework queries.",
    solution: "Implemented a multi-stage NLP pipeline (Rewriter–Retriever–Reranker) using GPT-2, T5, and FLAN-T5 for query reformulation and FAISS for efficient similarity search.",
    technologies: "Python, GPT-2, T5, FLAN-T5, Hugging Face Transformers, SciQ Dataset, FAISS, PyTorch, ms-marco-MiniLM-L-6-v2",
    impact: "Created an efficient educational tool for domain-specific science question retrieval.",
    link: "https://github.com/Tanmay-IITDSAI/Retreiver-Reranker-Intelligent-HW-Prob",
    isPrivate: false,
    image: "project-writing-helper"
  },
  {
    id: "asl-recognition",
    title: "Advanced American Sign Language Recognition using CNN",
    category: "CNN",
    period: "Nov 2024",
    description: "Developed a CNN model to classify 36 ASL gestures (A–Z, 0–9) with 94% accuracy, improving accessibility for the deaf community. Designed a 3-block Sequential CNN with ReLU activation, dropout regularization and Adam optimizer with categorical cross-entropy loss. Used EarlyStopping and ReduceLROnPlateau to balance class performance; achieved macro-averaged F1-score of 95%.",
    problem: "Limited automated systems for accurate real-time American Sign Language recognition.",
    solution: "Implemented a 3-block Sequential CNN architecture with Dropout and optimized training schedules.",
    technologies: "Python, TensorFlow, Keras, OpenCV, NumPy, Pandas, Matplotlib, Seaborn",
    impact: "94% classification accuracy and 95% macro-averaged F1-score.",
    link: "https://github.com/kirtiraj2215/Sign-language-decoder-DIP/tree/main",
    isPrivate: false,
    image: "project-asl"
  },
  {
    id: "highway-watch",
    title: "Intelligent Highway Watch (For Night-time Conditions)",
    category: "Computer Vision / ML",
    period: "Sep 2024",
    description: "Built an automated traffic violation detection system for night-time conditions using computer vision and ML. Detected stop-line violations and identified vehicles through license plate recognition using MySQL Connector, PIL, OpenCV and pytesseract.",
    problem: "Automating night-time traffic violation detection and vehicle identification.",
    solution: "Developed an image processing pipeline using HSV color masks for stop-lines and Pytesseract for license plate recognition, integrated with a SQL database for logging.",
    technologies: "Python, SQL, OpenCV, PyTesseract, MySQL Connector, PIL, NumPy",
    impact: "Automated traffic monitoring in low-light conditions.",
    link: "https://github.com/vedanshbvb/aiml-project",
    isPrivate: false,
    image: "project-highway"
  },
  {
    id: "xray-prediction",
    title: "33GB Chest X-Ray Disease Prediction",
    category: "Medical AI / Deep Learning",
    period: "Mar 2024",
    description: "Achieved ≥95% accuracy on chest X-ray disease dataset for differentiating between corona and pneumonia of 84,818 images within 3 hours and <5ms inference latency using PySpark. Implemented separate validation and test sets; deployed the model via GitHub.",
    problem: "Efficiently processing massive medical datasets for rapid disease classification.",
    solution: "Leveraged PySpark for distributed processing and TensorFlow/Keras for high-accuracy medical imaging models.",
    technologies: "TensorFlow, Keras, PySpark, scikit-learn, ML, OpenCV, NumPy, Matplotlib",
    impact: "High accuracy (95%+) and extremely low inference latency (<5ms).",
    link: "https://github.com/Tanmay-IITDSAI/X-Ray-Disease-Prediction",
    isPrivate: false,
    image: "project-xray"
  },
  {
    id: "gst-analytics",
    title: "GST Analytics Hackathon: Detection of Irregular Transactions",
    category: "Hackathon",
    period: "Oct 2024",
    description: "Improved detection of irregular GST transactions using XGBoost on highly imbalanced data. Organized by GST Gov. of India.",
    problem: "High class imbalance in GST transaction data leading to poor irregular transaction detection.",
    solution: "Applied XGBoost with custom class weights and oversampling; identified key deterministic features.",
    technologies: "XGBoost, SMOTE, PCA, Data Science, Python, Web Development",
    impact: "Boosted recall and precision for irregular transaction detection.",
    link: "https://github.com/Tanmay-IITDSAI/GSTAnalyticsHackathon-24",
    isPrivate: false,
    image: "project-gst"
  },
  {
    id: "veritaserum",
    title: "veri-TA-serum: Deception Mirror AI",
    category: "Hackathon (DevPost)",
    period: "Oct 2024",
    description: "AI system to detect and challenge self-deception using linear probes, symbolic sanity checks, and debate agents.",
    problem: "Human self-deception in personal goal setting and claims.",
    solution: "Blended AI approach using gpt-oss-120b and gemini-2.5-flash for deception risk scoring and counter-narratives.",
    technologies: "Genkit.ai, Next.js, shadcn/ui, Gemini-2.5-flash, GPT-OSS, Tailwind",
    impact: "Created a transparent Mirror Log for auditable self-reflection.",
    link: "https://github.com/realGuyCrimson/veritaserum-gptoss",
    isPrivate: false,
    image: "project-ai"
  },
];

export const SKILLS = {
  programming: ["Python (Advanced)", "C (Basic)", "Prompt Engineering", "SQL"],
  ai_ml: ["Machine Learning", "OpenCV", "Natural Language Processing", "Hugging Face Transformers", "Reinforcement Learning", "Deep Learning"],
  data_tools: ["MS Excel", "Power BI", "PySpark", "FAISS", "NetworkX", "Neo4j"],
  frameworks: ["WorldQuant BRAIN", "Next.js", "RESTful APIs", "Arduino IDE", "LaTeX"],
};

export const ACHIEVEMENTS = [
  "All India Rank 4936 in JEE Advanced 2022",
  "2nd Position at Promptathon’24 (Sugarcane AI)",
  "P. K. Jain Memorial Award for outstanding academic performance",
  "Global Rank 1976 in International Quant Championship 2025 Stage 1",
];
