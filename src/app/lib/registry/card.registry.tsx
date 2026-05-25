import { Button } from "@/kui/Button";
import { Badge } from "@/kui/Badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/kui/Card";
import type { ComponentEntry } from "./types";

export const cardRegistry: ComponentEntry = {
  name: "Card",
  description:
    "A container component with header, content, and footer sub-components.",
  preview: (
    <div className="flex flex-wrap gap-4 items-start justify-center w-full">
      <Card className="w-72">
        <CardHeader>
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
      <Card variant="elevated" hoverable className="w-72">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>
            Hover over this card to see the outline border effect.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button size="sm" variant="danger">
            Delete
          </Button>
          <Badge variant="success" className="w-fit">
            Active
          </Badge>
        </CardFooter>
      </Card>
    </div>
  ),
  code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/kui/Card";

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
