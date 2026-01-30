export const domains = [
  { id: "cyber", name: "Cybersecurity" },
  { id: "ai", name: "AI & ML" },
  { id: "web", name: "Web Dev" },
  { id: "cloud", name: "Cloud" },
  { id: "iot", name: "IoT" },
  { id: "blockchain", name: "Blockchain" },
];

export const questions = {
  cyber: [
    { id: 1, level: "easy", question: "Which protocol is known as secure HTTP?", options: ["HTTPx", "S-HTTP", "HTTPS", "SSL"], answer: 2 },
    { id: 2, level: "easy", question: "What does a firewall mainly do?", options: ["Stores passwords", "Encrypts emails", "Blocks unauthorized network traffic", "Speeds up internet"], answer: 2 },

    { id: 3, level: "medium", question: "What does SQL stand for in SQL Injection?", options: ["Structured Query Language", "System Query Link", "Structured Quick Line", "Strong Question Language"], answer: 0 },
    { id: 4, level: "medium", question: "Which constitutes 2FA?", options: ["Password + PIN", "Password + OTP", "Username + Bio", "Retina + Fingerprint"], answer: 1 },
    { id: 5, level: "medium", question: "What is ransomware?", options: ["Virus that deletes OS", "Tool for scanning networks", "Malware that locks files for money", "Software that steals passwords"], answer: 2 },

    { id: 6, level: "hard", question: "Which is the strongest password?", options: ["abcdef", "John2024", "password123", "P@9#Lm2!"], answer: 3 },
    { id: 7, level: "hard", question: "What is a 'White Hat' hacker?", options: ["Ethical hacker", "Government spy", "Hardware engineer", "Malicious hacker"], answer: 0 },
    { id: 8, level: "hard", question: "What does Phishing involve?", options: ["Network sniffers", "Fishing for data", "Password cracking", "Fraudulent emails"], answer: 3 },
    { id: 9, level: "hard", question: "Which attack tricks users into revealing personal information?", options: ["SQL Injection", "Brute Force", "DDoS", "Phishing"], answer: 3 },
    { id: 10, level: "hard", question: "Which practice improves account security the most?", options: ["Using public Wi-Fi", "Enabling Two-Factor Authentication", "Reusing passwords", "Disabling antivirus"], answer: 1 },
  ],

  ai: [
    { id: 1, level: "easy", question: "What does AI stand for?", options: ["Applied Information", "Advanced Interface", "Artificial Intelligence", "Automated Internet"], answer: 2 },
    { id: 2, level: "easy", question: "Which language is most popular for AI?", options: ["Rust", "Python", "Java", "C++"], answer: 1 },

    { id: 3, level: "medium", question: "What does NLP stand for?", options: ["Neural Link Protocol", "Natural Language Processing", "New Learning Paradigm", "Network Latency Ping"], answer: 1 },
    { id: 4, level: "medium", question: "Which type of AI learns from labeled data?", options: ["Unsupervised Learning", "Reinforcement Learning", "Deep Learning", "Supervised Learning"], answer: 3 },
    { id: 5, level: "medium", question: "Who is often called the father of AI?", options: ["Elon Musk", "Alan Turing", "John McCarthy", "Bill Gates"], answer: 2 },

    { id: 6, level: "hard", question: "Which algorithm is commonly used for classification?", options: ["Decision Tree", "Linear Regression", "Apriori", "K-Means"], answer: 0 },
    { id: 7, level: "hard", question: "What is the term for a machine passing for a human?", options: ["Voight-Kampff", "Turing Test", "Singularity", "Intelligence Quotient"], answer: 1 },
    { id: 8, level: "hard", question: "What is a neural network inspired by?", options: ["Electric circuits", "Human brain", "Databases", "Computer memory"], answer: 1 },
    { id: 9, level: "hard", question: "Which field focuses on teaching machines to understand human language?", options: ["Robotics", "Data Mining", "Computer Vision", "Natural Language Processing"], answer: 3 },
    { id: 10, level: "hard", question: "What is a Neural Network modeled after?", options: ["Solar System", "Human Brain", "Computer Chips", "Ant Colony"], answer: 1 },
  ],

  web: [
    { id: 1, level: "easy", question: "What does DOM stand for?", options: ["Digital Ordinance Map", "Document Object Model", "Desktop Orientation", "Data Object Mode"], answer: 1 },
    { id: 2, level: "easy", question: "Which tag is used for the largest heading?", options: ["<h6>", "<header>", "<head>", "<h1>"], answer: 3 },

    { id: 3, level: "medium", question: "CSS stands for?", options: ["Creative Style Sheets", "Colorful Style System", "Cascading Style Sheets", "Computer Style Synthetic"], answer: 2 },
    { id: 4, level: "medium", question: "Which JavaScript method converts JSON string into object?", options: ["toObject()", "JSON.stringify()", "JSON.parse()", "parseInt()"], answer: 2 },
    { id: 5, level: "medium", question: "Which HTTP method is used to send data to a server?", options: ["FETCH", "POST", "READ", "GET"], answer: 1 },

    { id: 6, level: "hard", question: "Which framework is developed by Google?", options: ["Vue", "Angular", "Svelte", "React"], answer: 1 },
    { id: 7, level: "hard", question: "Which status code means 'Not Found'?", options: ["403", "404", "200", "500"], answer: 1 },
    { id: 8, level: "hard", question: "Which CSS property controls text size?", options: ["font-size", "size", "text-weight", "font-style"], answer: 0 },
    { id: 9, level: "hard", question: "What is React mainly used for?", options: ["Game Physics", "Database Management", "Server Scripting", "UI Development"], answer: 3 },
    { id: 10, level: "hard", question: "What is the main purpose of cookies in web browsers?", options: ["Run JavaScript", "Store user data", "Encrypt servers", "Load CSS"], answer: 1 },
  ],

  cloud: [
    { id: 1, level: "easy", question: "Who owns AWS?", options: ["Alibaba", "Amazon", "Adobe", "Apple"], answer: 1 },
    { id: 2, level: "easy", question: "SaaS stands for?", options: ["Software as a Service", "Secure as a Service", "Storage as a Server", "System as a Solution"], answer: 0 },

    { id: 3, level: "medium", question: "Which cloud model shares infrastructure among many users?", options: ["Hybrid", "Private", "Public", "Community"], answer: 2 },
    { id: 4, level: "medium", question: "What does IaaS stand for?", options: ["Interface as a Service", "Infrastructure as a Service", "Internet as a Service", "Instance as a Service"], answer: 1 },
    { id: 5, level: "medium", question: "Which service provides virtual machines in cloud?", options: ["Route53", "CloudFront", "EC2", "Lambda"], answer: 2 },

    { id: 6, level: "hard", question: "What acts as 'Serverless' in AWS?", options: ["S3", "Lambda", "RDS", "EC2"], answer: 1 },
    { id: 7, level: "hard", question: "Which is used for scaling applications automatically?", options: ["IAM", "VPC", "Auto Scaling", "CloudTrail"], answer: 2 },
    { id: 8, level: "hard", question: "Which cloud service distributes content globally?", options: ["FTP", "CDN", "SMTP", "VPN"], answer: 1 },
    { id: 9, level: "hard", question: "What is Docker used for?", options: ["Networking", "Shipping", "Database", "Containerization"], answer: 3 },
    { id: 10, level: "hard", question: "Which is a valid Cloud deployment model?", options: ["Nimbus", "Hybrid", "Rainy", "Stratus"], answer: 1 },
  ],

  iot: [
    { id: 1, level: "easy", question: "What does IoT stand for?", options: ["Internet of Things", "Input on Time", "Internal of Tech", "Integer of Type"], answer: 0 },
    { id: 2, level: "easy", question: "Common microcontroller for IoT?", options: ["Pentium", "Snapdragon", "Arduino", "Ryzen"], answer: 2 },

    { id: 3, level: "medium", question: "Which protocol is lightweight for IoT?", options: ["FTP", "MQTT", "SMTP", "HTTP"], answer: 1 },
    { id: 4, level: "medium", question: "Which sensor measures temperature?", options: ["Gas", "Thermistor", "LDR", "Ultrasonic"], answer: 1 },
    { id: 5, level: "medium", question: "Zigbee is a type of?", options: ["Bee Species", "Wireless Protocol", "Database", "Cloud Service"], answer: 1 },

    { id: 6, level: "hard", question: "Which board has built-in WiFi for IoT projects?", options: ["8051", "ESP8266", "PIC", "Arduino Uno"], answer: 1 },
    { id: 7, level: "hard", question: "Which technology is used for short-range wireless communication?", options: ["Satellite", "Bluetooth", "Fiber", "LoRa"], answer: 1 },
    { id: 8, level: "hard", question: "Edge computing helps by?", options: ["Slowing networks", "Processing data near device", "Removing sensors", "Storing all data in cloud"], answer: 1 },
    { id: 9, level: "hard", question: "Which attack targets IoT devices commonly?", options: ["Phishing", "SQL Injection", "Spooling", "DDoS"], answer: 3 },
    { id: 10, level: "hard", question: "Main concern in IoT?", options: ["Security", "Speed", "Color", "Weight"], answer: 0 },
  ],

  blockchain: [
    { id: 1, level: "easy", question: "NFT stands for?", options: ["Node Fund Tool", "Network File Transfer", "Non-Fungible Token", "New Financial Token"], answer: 2 },
    { id: 2, level: "easy", question: "Who created Bitcoin?", options: ["Charlie Lee", "Satoshi Nakamoto", "Vitalik Buterin", "Mark Karpeles"], answer: 1 },

    { id: 3, level: "medium", question: "What is a Smart Contract?", options: ["AI Lawyer", "Self-executing code", "Legal paper", "Cloud Agreement"], answer: 1 },
    { id: 4, level: "medium", question: "Ethereum's currency is called?", options: ["Ripple", "Ether", "Litecoin", "Doge"], answer: 1 },
    { id: 5, level: "medium", question: "What does decentralization mean?", options: ["No central authority", "Single authority control", "Private ownership", "One server"], answer: 0 },

    { id: 6, level: "hard", question: "Which consensus mechanism is used by Bitcoin?", options: ["DPoS", "PBFT", "PoS", "PoW"], answer: 3 },
    { id: 7, level: "hard", question: "What is a block made of?", options: ["Usernames", "Transactions and hash", "Passwords", "Only coins"], answer: 1 },
    { id: 8, level: "hard", question: "Which platform popularized smart contracts?", options: ["Solana", "Ripple", "Ethereum", "Bitcoin"], answer: 2 },
    { id: 9, level: "hard", question: "What is a 'Miner's' job?", options: ["Write UI code", "Hack data", "Validate transactions", "Dig for gold"], answer: 2 },
    { id: 10, level: "hard", question: "Blockchain is essentially a...", options: ["Cloud Storage", "Centralized Server", "Distributed Ledger", "Social Network"], answer: 2 },
  ],
};
