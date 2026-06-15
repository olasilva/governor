// TEISMS Complete Data Structure
// Covers: 16 LGAs, 168 Wards, 2,847 Polling Units, Political Assets

// LGA Data (Section 6.2)
const lgas = [
  { id: 1, name: "Jalingo", wards: 12, pollingUnits: 189, mobilisationScore: 89, activeOperatives: 312, riskLevel: "low", sentiment: "positive" },
  { id: 2, name: "Bali", wards: 10, pollingUnits: 156, mobilisationScore: 71, activeOperatives: 187, riskLevel: "medium", sentiment: "neutral" },
  { id: 3, name: "Gassol", wards: 11, pollingUnits: 178, mobilisationScore: 82, activeOperatives: 245, riskLevel: "low", sentiment: "positive" },
  { id: 4, name: "Wukari", wards: 10, pollingUnits: 167, mobilisationScore: 76, activeOperatives: 203, riskLevel: "medium", sentiment: "positive" },
  { id: 5, name: "Ibi", wards: 9, pollingUnits: 142, mobilisationScore: 68, activeOperatives: 156, riskLevel: "high", sentiment: "neutral" },
  { id: 6, name: "Takum", wards: 11, pollingUnits: 173, mobilisationScore: 85, activeOperatives: 234, riskLevel: "medium", sentiment: "positive" },
  { id: 7, name: "Donga", wards: 8, pollingUnits: 134, mobilisationScore: 73, activeOperatives: 167, riskLevel: "low", sentiment: "positive" },
  { id: 8, name: "Kurmi", wards: 9, pollingUnits: 121, mobilisationScore: 64, activeOperatives: 134, riskLevel: "high", riskAlert: "Low reporting frequency", sentiment: "negative" },
  { id: 9, name: "Sardauna", wards: 10, pollingUnits: 145, mobilisationScore: 62, activeOperatives: 128, riskLevel: "high", riskAlert: "Security concerns", sentiment: "negative" },
  { id: 10, name: "Zing", wards: 8, pollingUnits: 118, mobilisationScore: 79, activeOperatives: 156, riskLevel: "low", sentiment: "positive" },
  { id: 11, name: "Lau", wards: 9, pollingUnits: 112, mobilisationScore: 74, activeOperatives: 145, riskLevel: "medium", sentiment: "neutral" },
  { id: 12, name: "Ardo Kola", wards: 10, pollingUnits: 124, mobilisationScore: 77, activeOperatives: 167, riskLevel: "low", sentiment: "positive" },
  { id: 13, name: "Karim Lamido", wards: 11, pollingUnits: 156, mobilisationScore: 69, activeOperatives: 178, riskLevel: "medium", riskAlert: "Opposition activity detected", sentiment: "neutral" },
  { id: 14, name: "Yorro", wards: 8, pollingUnits: 98, mobilisationScore: 81, activeOperatives: 134, riskLevel: "low", sentiment: "positive" },
  { id: 15, name: "Gashaka", wards: 10, pollingUnits: 134, mobilisationScore: 66, activeOperatives: 145, riskLevel: "high", riskAlert: "Accessibility issues", sentiment: "neutral" },
  { id: 16, name: "Ussa", wards: 8, pollingUnits: 112, mobilisationScore: 72, activeOperatives: 156, riskLevel: "medium", sentiment: "positive" }
];

// Ward Data (168 wards - sample of all)
const wards = [
  { id: 1, name: "Barde", lga: "Jalingo", pollingUnits: 12, mobilisationScore: 92, coordinator: "Musa Bello", status: "active" },
  { id: 2, name: "Sabon Gari", lga: "Jalingo", pollingUnits: 15, mobilisationScore: 88, coordinator: "Amina Sani", status: "active" },
  { id: 3, name: "Mayo Dassa", lga: "Jalingo", pollingUnits: 10, mobilisationScore: 85, coordinator: "Ibrahim Musa", status: "active" },
  { id: 4, name: "Mutum Biyu", lga: "Gassol", pollingUnits: 18, mobilisationScore: 87, coordinator: "Usman Bello", status: "active" },
  { id: 5, name: "Avyi", lga: "Wukari", pollingUnits: 14, mobilisationScore: 79, coordinator: "John Tiv", status: "active" },
  { id: 6, name: "Kashimbila", lga: "Takum", pollingUnits: 16, mobilisationScore: 91, coordinator: "Grace Usman", status: "active" },
  { id: 7, name: "Maihula", lga: "Bali", pollingUnits: 11, mobilisationScore: 74, coordinator: "Sani Umar", status: "active" },
  { id: 8, name: "Mararraba", lga: "Donga", pollingUnits: 9, mobilisationScore: 76, coordinator: "Timothy Danladi", status: "active" },
  { id: 9, name: "Ibi Town", lga: "Ibi", pollingUnits: 13, mobilisationScore: 67, coordinator: "Ishaku Musa", status: "warning" },
  { id: 10, name: "Baissa", lga: "Kurmi", pollingUnits: 10, mobilisationScore: 58, coordinator: "Emmanuel Bako", status: "critical" }
];

// Generate all 168 wards
for (let i = 11; i <= 168; i++) {
  wards.push({
    id: i, name: `Ward ${i}`, lga: lgas[Math.floor(Math.random() * lgas.length)].name,
    pollingUnits: Math.floor(Math.random() * 20) + 5,
    mobilisationScore: Math.floor(Math.random() * 40) + 50,
    coordinator: `Coordinator ${i}`, status: Math.random() > 0.8 ? "warning" : "active"
  });
}

// Political Assets Registry (Section 6.7 & 7)
const politicalAssets = [
  { id: 1, name: "Alhaji Musa Bello", role: "Ward Coordinator", lga: "Jalingo", ward: "Barde", phone: "+234801234567", verificationStatus: "verified", performanceScore: 92, influenceLevel: "high" },
  { id: 2, name: "Hajiya Aisha Mohammed", role: "Women Leader", lga: "Gassol", ward: "Mutum Biyu", phone: "+234802345678", verificationStatus: "verified", performanceScore: 88, influenceLevel: "high" },
  { id: 3, name: "Comrade John Danladi", role: "Youth Leader", lga: "Wukari", ward: "Avyi", phone: "+234803456789", verificationStatus: "verified", performanceScore: 76, influenceLevel: "medium" },
  { id: 4, name: "Pastor Emmanuel Bako", role: "Religious Leader", lga: "Kurmi", ward: "Baissa", phone: "+234804567890", verificationStatus: "pending", performanceScore: 65, influenceLevel: "medium" },
  { id: 5, name: "Chief David Tiv", role: "Traditional Ruler", lga: "Takum", ward: "Kashimbila", phone: "+234805678901", verificationStatus: "verified", performanceScore: 94, influenceLevel: "high" },
  { id: 6, name: "Hajara Usman", role: "Digital Mobiliser", lga: "Jalingo", ward: "Sabon Gari", phone: "+234806789012", verificationStatus: "verified", performanceScore: 95, influenceLevel: "high" },
  { id: 7, name: "Ibrahim Sani", role: "Polling Unit Agent", lga: "Bali", ward: "Maihula", phone: "+234807890123", verificationStatus: "verified", performanceScore: 71, influenceLevel: "low" },
  { id: 8, name: "Rebecca John", role: "Community Influencer", lga: "Donga", ward: "Mararraba", phone: "+234808901234", verificationStatus: "pending", performanceScore: 68, influenceLevel: "medium" }
];

// Generate additional assets to reach 3,842
for (let i = 9; i <= 3842; i++) {
  const roles = ["Ward Coordinator", "Polling Unit Agent", "Youth Leader", "Women Mobiliser", "Religious Leader", "Traditional Ruler", "Digital Mobiliser", "Community Influencer", "Party Stakeholder"];
  const lga = lgas[Math.floor(Math.random() * lgas.length)];
  politicalAssets.push({
    id: i, name: `Asset ${i}`, role: roles[Math.floor(Math.random() * roles.length)],
    lga: lga.name, ward: `Ward ${Math.floor(Math.random() * 20) + 1}`,
    phone: `+23480${Math.random().toString().slice(2,11)}`,
    verificationStatus: Math.random() > 0.9 ? "pending" : "verified",
    performanceScore: Math.floor(Math.random() * 50) + 50,
    influenceLevel: ["low", "medium", "high"][Math.floor(Math.random() * 3)]
  });
}

// Real-time Intelligence Feeds
let intelligenceFeeds = [
  { id: 1, time: "10:45 AM", lga: "Jalingo", message: "High youth turnout at sensitisation rally - estimated 2,500+ participants", type: "positive", priority: "normal" },
  { id: 2, time: "09:30 AM", lga: "Gassol", message: "Opposition misinformation detected on social media - rapid response deployed", type: "alert", priority: "high" },
  { id: 3, time: "08:15 AM", lga: "Wukari", message: "Governance feedback: New road construction project approved by community", type: "info", priority: "normal" },
  { id: 4, time: "07:45 AM", lga: "Kurmi", message: "Low voter registration turnout reported - need immediate mobilisation", type: "alert", priority: "high" },
  { id: 5, time: "Yesterday", lga: "Takum", message: "Women mobilisation network activation successful - 47 new volunteers registered", type: "positive", priority: "normal" }
];

// Polling Unit Data (Section 6.4)
const pollingUnits = [];
const puNames = ["Primary School", "Market Square", "Town Hall", "Health Centre", "Community Centre", "Police Station", "Palace Square", "Motor Park"];

for (let i = 1; i <= 2847; i++) {
  const lga = lgas[Math.floor(Math.random() * lgas.length)];
  pollingUnits.push({
    id: i, name: `${puNames[Math.floor(Math.random() * puNames.length)]} PU ${i}`,
    lga: lga.name, ward: `Ward ${Math.floor(Math.random() * 20) + 1}`,
    registeredVoters: Math.floor(Math.random() * 1500) + 200,
    turnoutPrediction: Math.floor(Math.random() * 40) + 40,
    agentAssigned: i % 5 !== 0, status: Math.random() > 0.9 ? "critical" : "active"
  });
}

// Implementation Phases (Section 14)
const implementationPhases = [
  { phase: 1, name: "Strategic Planning & Design", status: "completed", startDate: "Jan 2026", endDate: "Mar 2026", deliverables: ["Stakeholder consultations", "Technical system design", "Operational framework", "Governance structure"] },
  { phase: 2, name: "Pilot Deployment", status: "in-progress", startDate: "Apr 2026", endDate: "Jun 2026", deliverables: ["Selected LGA deployment", "Field testing", "Data validation", "Operational refinement"] },
  { phase: 3, name: "Statewide Expansion", status: "pending", startDate: "Jul 2026", endDate: "Sep 2026", deliverables: ["Full deployment 16 LGAs", "Asset registration", "Volunteer onboarding", "Dashboard activation"] },
  { phase: 4, name: "Advanced Analytics Integration", status: "pending", startDate: "Oct 2026", endDate: "Dec 2026", deliverables: ["AI analytics deployment", "Electoral heat mapping", "Simulation exercises", "Predictive modelling"] },
  { phase: 5, name: "Continuous Intelligence Operations", status: "pending", startDate: "Jan 2027", endDate: "Ongoing", deliverables: ["Election-cycle monitoring", "Governance analytics", "Mobilisation optimization", "Strategic reporting"] }
];

// Risk Mitigation Framework (Section 16)
const risks = [
  { id: 1, name: "Data Breaches", severity: "high", mitigation: "Advanced cybersecurity infrastructure, encrypted systems, multi-factor authentication", status: "monitored" },
  { id: 2, name: "Political Sabotage", severity: "high", mitigation: "Multi-layer verification systems, operational compartmentalization", status: "active" },
  { id: 3, name: "Misinformation Campaigns", severity: "medium", mitigation: "Real-time media monitoring, rapid response systems, fact-checking unit", status: "active" },
  { id: 4, name: "Weak Field Reporting", severity: "medium", mitigation: "Continuous training, performance monitoring frameworks, incentives", status: "monitored" },
  { id: 5, name: "Connectivity Challenges", severity: "low", mitigation: "Offline synchronization capabilities, hybrid reporting systems", status: "mitigated" },
  { id: 6, name: "Stakeholder Distrust", severity: "low", mitigation: "Transparent governance frameworks, community engagement systems", status: "mitigated" }
];

// Helper Functions
function getLGAName(id) { return lgas.find(l => l.id === id)?.name || "Unknown"; }
function getLGAStats(lgaName) { return lgas.find(l => l.name === lgaName); }
function getWardsByLGA(lgaName) { return wards.filter(w => w.lga === lgaName); }
function getAssetsByLGA(lgaName) { return politicalAssets.filter(a => a.lga === lgaName); }
function getPollingUnitsByLGA(lgaName) { return pollingUnits.filter(pu => pu.lga === lgaName); }