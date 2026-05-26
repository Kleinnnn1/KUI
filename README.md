# KUI — Minimal Dark Component Library

A minimal, dark-themed component library built with React, TypeScript, and Tailwind CSS. Designed for developers who want clean, copy-paste-ready components with a consistent dark aesthetic.

## Features

- **Copy-Paste Ready**: No installation required — copy the component files directly into your project
- **TypeScript**: Fully typed components with CVA-powered variant props and autocomplete support
- **Dark-First Design**: Consistent dark glass aesthetic with subtle borders, backdrop blur, and muted tones
- **Class Variance Authority (CVA)**: Clean, type-safe variant management for every component
- **Tailwind CSS**: Utility-first styling with no custom CSS overhead
- **Composable**: Sub-components like `CardHeader`, `CardTitle`, `CardFooter` for flexible layouts
- **Accessible**: Proper disabled states, semantic HTML, and focus ring support

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Variant Management**: Class Variance Authority (CVA)
- **Class Merging**: clsx + tailwind-merge
- **Icons**: Lucide React

## Components

| Component | Variants | Description |
|-----------|----------|-------------|
| `Button`  | `solid`, `ghost`, `danger`, `muted` | Flexible button with 4 variants and 3 sizes |
| `Badge`   | `default`, `solid`, `success`, `warning`, `danger`, `muted` | Status labels for any context |
| `Card`    | `default`, `elevated`, `outline`, `ghost` | Container with composable sub-components |
| `Input`   | `default`, `success`, `error` | Text input with icon, label, hint, and error support |

## Usage

KUI follows the **copy-paste** pattern popularized by shadcn/ui. Browse the docs, find a component you like, and copy the file directly into your project.

### Prerequisites

Install the required dependencies:

```bash
npm install @kennbalino/kui lucide-react

# Optional — only if you want to use CVA, cn(), or lucide icons directly
npm install class-variance-authority clsx tailwind-merge lucide-react`
```

### Setup the `cn()` utility

```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Button

```tsx
import { Button } from "@kennbalino/kui";

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
<Button disabled>Disabled</Button>
```

### Badge

```tsx
import { Badge } from "@kennbalino/kui";

<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="muted">Muted</Badge>
```

### Card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@kennbalino/kui";

<Card variant="elevated" hoverable>
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
```

### Input

```tsx
import { Input } from "@kennbalino/kui";
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

// Disabled
<Input placeholder="Disabled input" disabled />
```

## Local Development

Clone the repository:

```bash
git clone https://github.com/Kleinnnn1/KUI-v1.git
cd KUI-v1
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The docs site will be available at `http://localhost:3000`.

## Build

```bash
npm run build
```

## Roadmap

- [ ] Modal component
- [ ] Tooltip component
- [ ] Dropdown component
- [ ] Toast notifications
- [ ] Avatar component
- [ ] Tabs component
- [ ] Syntax highlighting with Shiki
- [ ] Props reference table per component
- [ ] Dark / light theme toggle
- [ ] npm package (`@kleinnnn/kui`)

## Author

Kenneth Jhun N. Balino

Full Stack Developer

Built with Next.js, TypeScript, and Tailwind CSS.