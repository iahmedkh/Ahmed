export interface CardData {
  id: number;
  title: string;
  description: string;
  iconName: 'network' | 'app' | 'endpoint' | 'crypto' | 'vuln' | 'social';
}

export const CYBER_CARDS: CardData[] = [
  {
    id: 1,
    title: "Network Security",
    description: "Protecting data in transit and network infrastructure using firewalls, IDS/IPS, and secure configurations.",
    iconName: "network"
  },
  {
    id: 2,
    title: "Application Security",
    description: "Preventing web and mobile app vulnerabilities like SQL injection and XSS through secure coding and testing.",
    iconName: "app"
  },
  {
    id: 3,
    title: "Endpoint Security",
    description: "Protecting devices with antivirus, EDR agents, and strong device hygiene to stop breaches at endpoints.",
    iconName: "endpoint"
  },
  {
    id: 4,
    title: "Cryptography",
    description: "Using encryption (AES, RSA) and key management to ensure data confidentiality and integrity.",
    iconName: "crypto"
  },
  {
    id: 5,
    title: "Vulnerability Management",
    description: "Scanning, prioritizing, and remediating vulnerabilities using tools like Nessus and regular patch cycles.",
    iconName: "vuln"
  },
  {
    id: 6,
    title: "Social Engineering Awareness",
    description: "Training users to identify phishing, spoofing, and manipulation attacks to reduce human risk.",
    iconName: "social"
  }
];

export const PROFILE_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};