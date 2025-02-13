"use client"; // Required for client-side interactivity

import { useState } from "react";


import { ProfileCard } from "@/components/discover/ProfileCard";
import { SwipeButtons } from "@/components/discover/SwipeButtons";
import { Filters } from "@/components/discover/Filters";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { mockProfiles } from "./mockProfiles";
import { useToast } from "@/hooks/use-toast";

const Discover = () => {
  const [currentProfile, setCurrentProfile] = useState<Profile>(mockProfiles[0]);
  const [profiles, setProfiles] = useState<Profile[]>(mockProfiles);
  const { toast } = useToast();
  const router = useRouter();

  const handleSwipe = async (liked: boolean) => {
    if (!currentProfile) return;

    // Show next profile
    const nextProfiles = profiles.filter((p) => p.id !== currentProfile.id);
    setProfiles(nextProfiles);
    setCurrentProfile(nextProfiles[0] || null);

    if (liked) {
      toast({
        title: "Profile Liked!",
        description: "We'll notify you if it's a match!",
      });
    }

    if (nextProfiles.length === 0) {
      toast({
        title: "No more profiles",
        description: "Check back later for more matches!",
      });
    }
  };

  if (!currentProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-primary/10 flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">No More Profiles</h2>
          <p className="text-muted-foreground">Check back later for more potential matches!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-primary/10 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with profile button */}
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => router.push("/profile")}
          >
            <UserRound className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Discover</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        <div className="grid md:grid-cols-[300px,1fr] gap-6">
          {/* Filters sidebar */}
          <div className="hidden md:block">
            <Filters />
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <ProfileCard profile={currentProfile} />
            <SwipeButtons onSwipe={handleSwipe} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;