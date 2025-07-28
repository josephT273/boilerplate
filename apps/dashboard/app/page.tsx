import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant="default" className="bg-primary text-background">
        Launch Mission
      </Button>
    </div>
  );
}
