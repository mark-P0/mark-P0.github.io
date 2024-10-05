/** @jsxImportSource react */

import type { ComponentProps, ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./shadcn/tooltip.tsx";

type TooltipContentProps = ComponentProps<typeof TooltipContent>;

export function ReusableTooltip(props: {
  trigger: ReactNode;
  content: ReactNode;
  contentSide: TooltipContentProps["side"];
}) {
  const { trigger, content } = props;
  const { contentSide } = props;

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent asChild side={contentSide}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
