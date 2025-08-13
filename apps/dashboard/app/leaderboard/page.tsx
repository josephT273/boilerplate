"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { leaderboard } from "@/lib/data"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const userColors = {
  "rootX": "#88D188", // thm-green
  "novaspectra": "#A52A2A", // thm-red
  "payloadz": "#FFD700", // Gold
  "xploitlord": "#00BFFF", // Deep Sky Blue
  "cyberghost": "#FF69B4", // Hot Pink
};

const CustomDot = (props: any) => {
  const { cx, cy, stroke, payload } = props;
  const userColor = userColors[payload.username as keyof typeof userColors] || stroke; // Fallback to stroke color

  return (
    <circle cx={cx} cy={cy} r={6} fill={userColor} stroke={userColor} strokeWidth={2} />
  );
};

export default function LeaderboardPage() {
  return (
    <main className="p-4 bg-thm-black text-thm-white min-h-screen">
      <Card className="bg-thm-black border-thm-green mb-4">
        <CardHeader className="bg-thm-green text-thm-black">
          <CardTitle>Leaderboard Score Trend</CardTitle>
          <CardDescription>
            Visualizing scores across ranks.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px] p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={leaderboard}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="rank" stroke="#F2F2F2" />
              <YAxis stroke="#F2F2F2" />
              <Tooltip
                contentStyle={{ backgroundColor: '#212121', border: '1px solid #88D188' }}
                itemStyle={{ color: '#F2F2F2' }}
              />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#88D188" activeDot={{ r: 8 }} dot={<CustomDot />} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-thm-black border-thm-green mt-4">
        <CardHeader className="bg-thm-green text-thm-black">
          <CardTitle>Leaderboard</CardTitle>
          <CardDescription>
            See who is on top of the leaderboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-thm-green text-thm-black">
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard.map((player) => (
                <TableRow key={player.rank} className="hover:bg-thm-green/20">
                  <TableCell>{player.rank}</TableCell>
                  <TableCell>{player.username}</TableCell>
                  <TableCell>{player.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  )
}
