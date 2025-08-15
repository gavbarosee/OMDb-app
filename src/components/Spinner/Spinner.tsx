import React from "react";
import { ClipLoader } from "react-spinners";
import { useTheme } from "styled-components";
import { SpinnerContainer } from "./Spinner.styles.ts";

export interface SpinnerProps {
  size?: number;
  color?: string;
  loading?: boolean;
  className?: string;
  "aria-label"?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 35,
  color,
  loading = true,
  className,
  "aria-label": ariaLabel = "Loading",
}) => {
  const theme = useTheme();
  const spinnerColor = color || theme.colors.primary;

  if (!loading) {
    return null;
  }

  return (
    <SpinnerContainer
      className={className}
      role="status"
      aria-label={ariaLabel}
    >
      <ClipLoader
        color={spinnerColor}
        loading={loading}
        size={size}
        aria-hidden="true"
      />
    </SpinnerContainer>
  );
};
