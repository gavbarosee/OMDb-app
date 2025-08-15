import { css } from "styled-components";
import type { DefaultTheme } from "styled-components";
import { media } from "./media";

export const mixins = {
  // Layout & Container Mixins

  elevatedSurface: css`
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transition: all 0.2s ease-in-out;
  `,

  centeredFlex: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  adaptiveGrid: (
    mobileCols: number,
    tabletCols: number,
    desktopCols: number,
    wideCols?: number
  ) => css`
    display: grid;
    gap: ${({ theme }) => theme.spacing.md};
    grid-template-columns: repeat(${mobileCols}, 1fr);

    ${media.tablet`
      grid-template-columns: repeat(${tabletCols}, 1fr);
      gap: ${({ theme }) => theme.spacing.lg};
    `}

    ${media.desktop`
      grid-template-columns: repeat(${desktopCols}, 1fr);
    `}

    ${wideCols &&
    media.wide`
      grid-template-columns: repeat(${wideCols}, 1fr);
    `}
  `,

  interactiveHover: css`
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.md};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  `,

  accessibleFocus: css`
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
    }
  `,

  // Typography & Text Mixins

  textEllipsis: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  scalingText: (
    mobileSize: keyof DefaultTheme["typography"]["fontSize"],
    desktopSize: keyof DefaultTheme["typography"]["fontSize"]
  ) => css`
    font-size: ${({ theme }) => theme.typography.fontSize[mobileSize]};

    ${media.tablet`
      font-size: ${({ theme }) => theme.typography.fontSize[desktopSize]};
    `}
  `,

  centeredMessage: css`
    text-align: center;
    padding: ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  `,

  // Form & Input Mixins

  baseFormField: css`
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.secondary};
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.surface};
      color: ${({ theme }) => theme.colors.text.disabled};
      cursor: not-allowed;
    }
  `,

  // Spacing & Layout Mixins

  adaptivePadding: css`
    padding: ${({ theme }) => theme.spacing.md};

    ${media.tablet`
      padding: ${({ theme }) => theme.spacing.lg};
    `}
  `,

  progressiveMargin: css`
    margin: ${({ theme }) => theme.spacing.sm} 0;

    ${media.tablet`
      margin: ${({ theme }) => theme.spacing.md} 0;
    `}

    ${media.desktop`
      margin: ${({ theme }) => theme.spacing.lg} 0;
    `}
  `,

  // Media & Image Mixins

  fluidImage: css`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  `,
};
