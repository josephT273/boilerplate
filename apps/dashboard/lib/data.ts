export const simulatedBreaches = [
  {
    id: "BRCH-9081",
    system: "Nuclear Control Node",
    severity: "Critical",
    vector: "Zero-day in ARM firmware",
    status: "Active",
    timestamp: "2025-07-28T10:42:00Z",
  },
  {
    id: "BRCH-7824",
    system: "Hydro Grid Gateway",
    severity: "High",
    vector: "Man-in-the-middle attack",
    status: "Mitigated",
    timestamp: "2025-07-27T17:15:00Z",
  },
  {
    id: "BRCH-1277",
    system: "SCADA Temperature Sensor",
    severity: "Medium",
    vector: "Buffer overflow",
    status: "Resolved",
    timestamp: "2025-07-26T13:33:00Z",
  },
];

export const leaderboard = [
  { username: "rootX", score: 1890, rank: 1 },
  { username: "novaspectra", score: 1745, rank: 2 },
  { username: "payloadz", score: 1660, rank: 3 },
  { username: "xploitlord", score: 1440, rank: 4 },
  { username: "cyberghost", score: 1205, rank: 5 },
];

export const activeSessions = [
  {
    sessionId: "TERM-3342",
    user: "novaspectra",
    ip: "10.42.0.32",
    entryPoint: "VPN-Tunnel",
    system: "Industrial PLC",
    startTime: "2025-07-28T08:50:00Z",
  },
  {
    sessionId: "TERM-1290",
    user: "rootX",
    ip: "192.168.13.7",
    entryPoint: "SSH Exploit",
    system: "SCADA Relay",
    startTime: "2025-07-28T09:10:00Z",
  },
];

export const modulesStatus = [
  { module: "Flag Detector", status: "Active", load: 64 },
  { module: "Binary Patcher", status: "Idle", load: 15 },
  { module: "Packet Sniffer", status: "Active", load: 82 },
  { module: "Firmware Emulator", status: "Offline", load: 0 },
];

export const systemHealth = {
  cpuLoad: "72%",
  memoryUsage: "5.4 GB / 8 GB",
  diskIO: "140 MB/s",
  networkTraffic: "1.2 Gbps",
  threatLevel: "HIGH",
  flagsCaptured: 12,
  failedAttempts: 37,
};

export const dailyThreats = [
  { date: "2025-07-22", attacks: 9 },
  { date: "2025-07-23", attacks: 15 },
  { date: "2025-07-24", attacks: 7 },
  { date: "2025-07-25", attacks: 18 },
  { date: "2025-07-26", attacks: 5 },
  { date: "2025-07-27", attacks: 13 },
  { date: "2025-07-28", attacks: 21 },
];
