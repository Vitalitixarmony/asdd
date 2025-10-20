import React from "react";

interface TextContentProps {
  content: string;
  className?: string;
}

export function TextContent({ content, className = "" }: TextContentProps) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}