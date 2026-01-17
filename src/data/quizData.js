export const domains = [
  { id: 'cyber', name: 'Cybersecurity' },
  { id: 'ai', name: 'AI & ML' },
  { id: 'web', name: 'Web Dev' },
  { id: 'cloud', name: 'Cloud' },
  { id: 'iot', name: 'IoT' },
  { id: 'blockchain', name: 'Blockchain' }
];

export const questions = {
  cyber: [
    {
      id: 1,
      question: "What does SQL stand for in SQL Injection?",
      options: ["Structured Query Language", "Strong Question Language", "Structured Quick Line", "System Query Link"],
      answer: 0
    },
    {
      id: 2,
      question: "Which protocol is known as secure HTTP?",
      options: ["HTTPx", "S-HTTP", "HTTPS", "SSL"],
      answer: 2
    },
    {
      id: 3,
      question: "What is a 'White Hat' hacker?",
      options: ["Malicious hacker", "Ethical hacker", "Government spy", "Hardware engineer"],
      answer: 1
    },
    {
      id: 4,
      question: "What does Phishing involve?",
      options: ["Fishing for data", "Fraudulent emails", "Network sniffers", "Password cracking"],
      answer: 1
    },
    {
      id: 5,
      question: "Which constitutes 2FA?",
      options: ["Password + PIN", "Password + OTP", "Retina + Fingerprint", "Username + Bio"],
      answer: 1
    }
  ],
  ai: [
    {
      id: 1,
      question: "What is the term for a machine passing for a human?",
      options: ["Turing Test", "Voight-Kampff", "Intelligence Quotient", "Singularity"],
      answer: 0
    },
    {
      id: 2,
      question: "Which language is most popular for AI?",
      options: ["Java", "C++", "Python", "Rust"],
      answer: 2
    },
    {
      id: 3,
      question: "What is a Neural Network modeled after?",
      options: ["Computer Chips", "Human Brain", "Solar System", "Ant Colony"],
      answer: 1
    },
    {
      id: 4,
      question: "What does NLP stand for?",
      options: ["Natural Language Processing", "Neural Link Protocol", "Network Latency Ping", "New Learning Paradigm"],
      answer: 0
    },
    {
      id: 5,
      question: "Who is often called the father of AI?",
      options: ["Alan Turing", "John McCarthy", "Elon Musk", "Bill Gates"],
      answer: 1
    }
  ],
  web: [
    {
      id: 1,
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Mode", "Digital Ordinance Map", "Desktop Orientation"],
      answer: 0
    },
    {
      id: 2,
      question: "Which tag is used for the largest heading?",
      options: ["<head>", "<h6>", "<h1>", "<header>"],
      answer: 2
    },
    {
      id: 3,
      question: "What is React mainly used for?",
      options: ["Database Management", "UI Development", "Server Scripting", "Game Physics"],
      answer: 1
    },
    {
      id: 4,
      question: "CSS stands for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Synthetic", "Colorful Style System"],
      answer: 1
    },
    {
      id: 5,
      question: "Which status code means 'Not Found'?",
      options: ["200", "500", "403", "404"],
      answer: 3
    }
  ],
  cloud: [
    { id: 1, question: "Who owns AWS?", options: ["Apple", "Amazon", "Adobe", "Alibaba"], answer: 1 },
    { id: 2, question: "What acts as 'Serverless' in AWS?", options: ["EC2", "S3", "Lambda", "RDS"], answer: 2 },
    { id: 3, question: "SaaS stands for?", options: ["Software as a Service", "System as a Solution", "Storage as a Server", "Secure as a Service"], answer: 0 },
    { id: 4, question: "Which is a valid Cloud deployment model?", options: ["Rainy", "Hybrid", "Stratus", "Nimbus"], answer: 1 },
    { id: 5, question: "What is Docker used for?", options: ["Shipping", "Containerization", "Networking", "Database"], answer: 1 }
  ],
  iot: [
    { id: 1, question: "What does IoT stand for?", options: ["Input on Time", "Internet of Things", "Internal of Tech", "Integer of Type"], answer: 1 },
    { id: 2, question: "Common microcontroller for IoT?", options: ["Pentium", "Arduino", "Snapdragon", "Ryzen"], answer: 1 },
    { id: 3, question: "Which protocol is lightweight for IoT?", options: ["HTTP", "MQTT", "FTP", "SMTP"], answer: 1 },
    { id: 4, question: "Zigbee is a type of?", options: ["Wireless Protocol", "Bee Species", "Cloud Service", "Database"], answer: 0 },
    { id: 5, question: "Main concern in IoT?", options: ["Speed", "Security", "Color", "Weight"], answer: 1 }
  ],
  blockchain: [
    { id: 1, question: "Who created Bitcoin?", options: ["Vitalik Buterin", "Satoshi Nakamoto", "Charlie Lee", "Mark Karpeles"], answer: 1 },
    { id: 2, question: "What is a Smart Contract?", options: ["Legal paper", "Self-executing code", "AI Lawyer", "Cloud Agreement"], answer: 1 },
    { id: 3, question: "Ethereum's currency is called?", options: ["Litecoin", "Ether", "Ripple", "Doge"], answer: 1 },
    { id: 4, question: "Blockchain is essentially a...", options: ["Centralized Server", "Distributed Ledger", "Cloud Storage", "Social Network"], answer: 1 },
    { id: 5, question: "What is a 'Miner's' job?", options: ["Dig for gold", "Validate transactions", "Hack data", "Write UI code"], answer: 1 }
  ]
};
