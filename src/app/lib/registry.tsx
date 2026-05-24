import { Button } from "@/kui/Button";
import { Badge } from "@/kui/Badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/kui/Card";
import { Input } from "@/kui/Input";
import { Search } from "lucide-react";

export type ComponentEntry = {
  name: string;
  description: string;
  preview: React.ReactNode;
  code: string;
};

export const registry: Record<string, ComponentEntry> = {
  button: {
    name: "Button",
    description:
      "A flexible button component with multiple variants and sizes.",
    preview: (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <Button variant="solid">Solid</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="muted">Muted</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Disabled</Button>
      </div>
    ),
    code: `import { Button } from "@/kui/Button";

// Variants
<Button variant="solid">Solid</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="muted">Muted</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Disabled
<Button disabled>Disabled</Button>`,
  },

  badge: {
    name: "Badge",
    description: "A small label component for status, tags, and categories.",
    preview: (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <Badge variant="default">Default</Badge>
        <Badge variant="solid">Solid</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="muted">Muted</Badge>
      </div>
    ),
    code: `import { Badge } from "@/kui/Badge";

// Variants
<Badge variant="default">Default</Badge>
<Badge variant="solid">Solid</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="muted">Muted</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`,
  },

  card: {
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
  },

  input: {
    name: "Input",
    description:
      "A text input component with label, hint, error, and icon support.",
    preview: (
      <div className="flex flex-col gap-4 w-72">
        <Input placeholder="Default input" />
        <Input
          label="Email"
          hint="We'll never share your email."
          placeholder="you@example.com"
        />
        <Input
          label="Search"
          placeholder="Search components..."
          leftIcon={<Search size={14} />}
        />
        <Input
          label="Username"
          placeholder="Enter username"
          error="Username is already taken."
        />
        <Input variant="success" label="Email" placeholder="you@example.com" />
        <Input placeholder="Disabled input" disabled />
      </div>
    ),
    code: `import { Input } from "@/kui/Input";
import { Search } from "lucide-react";

// Default
<Input placeholder="Default input" />

// With label and hint
<Input
  label="Email"
  hint="We'll never share your email."
  placeholder="you@example.com"
/>

// With icon
<Input
  label="Search"
  placeholder="Search components..."
  leftIcon={<Search size={14} />}
/>

// Error state
<Input
  label="Username"
  placeholder="Enter username"
  error="Username is already taken."
/>

// Success state
<Input variant="success" label="Email" placeholder="you@example.com" />

// Disabled
<Input placeholder="Disabled input" disabled />`,
  },
};
