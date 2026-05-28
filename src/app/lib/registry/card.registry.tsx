import { Button } from "@kennbalino/kui";
import { Badge } from "@kennbalino/kui";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@kennbalino/kui";
import { Bell } from "lucide-react";
import type { ComponentEntry } from "./types";

export const cardRegistry: ComponentEntry = {
  props: [
    {
      prop: "variant",
      type: "default | elevated | outline | ghost",
      default: "default",
      description: "Controls the visual style of the card.",
    },
    {
      prop: "padding",
      type: "none | sm | md | lg",
      default: "md",
      description: "Controls the inner padding of the card.",
    },
    {
      prop: "hoverable",
      type: "boolean",
      default: "false",
      description: "Adds hover border and shadow effect.",
    },
    {
      prop: "onClick",
      type: "() => void",
      description: "Callback fired when the card is clicked.",
    },
    {
      prop: "className",
      type: "string",
      description: "Additional CSS classes to apply.",
    },
    {
      prop: "children",
      type: "ReactNode",
      required: true,
      description: "Content rendered inside the card.",
    },
  ],
  name: "Card",
  description:
    "A container component with header, content, and footer sub-components.",
  preview: (
    <div className="flex flex-wrap gap-4 items-stretch justify-center w-full">
      <Card className="w-72 flex flex-col border-border">
        <CardHeader className="flex-1">
          <CardTitle>Default Card</CardTitle>
          <CardDescription>
            This is a default card with muted description text.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button size="sm" variant="ghost">
            Cancel
          </Button>
          <Button size="sm">Confirm</Button>
        </CardFooter>
      </Card>
      <Card
        variant="elevated"
        hoverable
        className="w-72 flex flex-col"
      >
        <CardHeader className="flex-1">
          <div className="flex items-center gap-2">
            <CardTitle className="text-foreground">Elevated Card</CardTitle>
            <Badge
              variant="default"
              className="rounded-full border-0 bg-blue-500/20 text-blue-500 flex items-center gap-1.5"
            >
              <Bell size={10} />3 New
            </Badge>
          </div>
          <CardDescription className="text-foreground-muted">
            Hover over this card to see the outline border effect.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button size="sm" variant="ghost">
            Dismiss
          </Button>
          <Button size="sm">View All</Button>
        </CardFooter>
      </Card>
    </div>
  ),
  code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@kennbalino/kui";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here.
  </CardContent>
  <CardFooter>
    <Button variant="ghost">Cancel</Button>
    <Button>Confirm</Button>
  </CardFooter>
</Card>

// Variants
<Card variant="default">Card 1</Card>
<Card variant="elevated">Card 2</Card>
<Card variant="outline">Card 3</Card>
<Card variant="ghost">Card 4</Card>

// Hoverable
<Card hoverable>Card 5</Card>`,
};
