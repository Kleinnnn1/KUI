import { cn } from "@/app/lib/utils";

export type PropDefinition = {
  prop: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
};

type PropsTableProps = {
  props: PropDefinition[];
  className?: string;
};

export const PropsTable = ({ props, className }: PropsTableProps) => (
  <div
    className={cn(
      "w-full rounded-md border border-border overflow-hidden",
      className,
    )}
  >
    <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-150">
        <thead>
          <tr className="border-b border-border bg-background-muted">
            <th className="px-4 py-3 text-left text-xs text-foreground-subtle tracking-widest uppercase font-medium w-32">
              Prop
            </th>
            <th className="px-4 py-3 text-left text-xs text-foreground-subtle tracking-widests uppercase font-medium">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs text-foreground-subtle tracking-widests uppercase font-medium w-28">
              Default
            </th>
            <th className="px-4 py-3 text-left text-xs text-foreground-subtle tracking-widests uppercase font-medium">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((item, i) => (
            <tr
              key={i}
              className={cn(
                "border-b border-border transition-colors duration-150 hover:bg-background-muted",
                i === props.length - 1 && "border-b-0",
              )}
            >
              <td className="px-4 py-3 font-mono text-xs">
                <span className="text-primary">{item.prop}</span>
                {item.required && (
                  <span className="ml-1 text-danger-foreground">*</span>
                )}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-warning-foreground">
                {item.type}
              </td>
              <td className="px-4 py-3 font-mono text-xs">
                {item.default ? (
                  <span className="text-foreground-muted">{item.default}</span>
                ) : (
                  <span className="text-foreground-subtle">—</span>
                )}
              </td>
              <td className="px-4 py-3 text-foreground-muted text-xs leading-relaxed">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
