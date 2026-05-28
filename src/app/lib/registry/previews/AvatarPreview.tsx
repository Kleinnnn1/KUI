"use client";

import { Avatar, AvatarGroup } from "@kennbalino/kui";
import avatarImage from "@/assets/sukuna.jpg";

export const AvatarPreview = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-foreground-subtle text-xs tracking-widest uppercase">
          Sizes
        </p>
        <div className="flex items-center gap-4">
          <Avatar
            size="xs"
            fallback="KJ"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            size="sm"
            fallback="KJ"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            size="md"
            fallback="KJ"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            size="lg"
            fallback="KJ"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            size="xl"
            fallback="KJ"
            className="bg-background-muted border-border text-foreground"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-foreground-subtle text-xs tracking-widest uppercase">
          Fallback
        </p>
        <div className="flex items-center gap-4">
          <Avatar
            src={avatarImage.src}
            fallback="SK"
            size="lg"
            className="bg-indigo-500/20 border-indigo-500/40 text-indigo-500"
          />
          <Avatar
            fallback="SK"
            size="lg"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            size="lg"
            className="bg-background-muted border-border text-foreground-subtle"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-foreground-subtle text-xs tracking-widest uppercase">
          Status
        </p>
        <div className="flex items-center gap-4">
          <Avatar
            fallback="ON"
            status="online"
            size="lg"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            fallback="OF"
            status="offline"
            size="lg"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            fallback="BS"
            status="busy"
            size="lg"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            fallback="AW"
            status="away"
            size="lg"
            className="bg-background-muted border-border text-foreground"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-foreground-subtle text-xs tracking-widest uppercase">
          Group
        </p>
        <AvatarGroup max={3}>
          <Avatar
            fallback="KJ"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            fallback="AB"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            fallback="CD"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            fallback="EF"
            className="bg-background-muted border-border text-foreground"
          />
          <Avatar
            fallback="GH"
            className="bg-background-muted border-border text-foreground"
          />
        </AvatarGroup>
      </div>
    </div>
  );
};
