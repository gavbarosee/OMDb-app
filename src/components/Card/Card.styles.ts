import styled from "styled-components";
import { mixins, media } from "../../theme";

export const Card = styled.div`
  ${mixins.elevatedSurface}
  ${mixins.interactiveHover}
  ${mixins.adaptivePadding}
  ${mixins.progressiveMargin}
  overflow: hidden;
`;

export const CardImage = styled.img`
  ${mixins.mobileOptimizedImage}
  margin-bottom: ${({ theme }) => theme.spacing.md};

  /* Mobile-first approach - flexible aspect ratio on mobile */
  ${media.tablet`
    aspect-ratio: 2/3;
  `}

  /* Smooth loading transition */
  transition: opacity 0.3s ease-in-out;

  &:not([src]) {
    opacity: 0;
  }

  /* Handle image loading states */
  &[src] {
    opacity: 1;
  }
`;

export const CardTitle = styled.h3`
  ${mixins.scalingText("md", "lg")}
  ${mixins.textEllipsis}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const CardMeta = styled.div`
  ${mixins.centeredFlex}
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const CardMetaItem = styled.span`
  ${mixins.scalingText("sm", "md")}
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const PlaceholderImage = styled.div`
  ${mixins.centeredFlex}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  /* Match CardImage aspect ratio and responsive behavior */
  aspect-ratio: 2/3;
  min-height: 200px;
  max-height: 320px;

  /* Responsive sizing to match mobileOptimizedImage mixin */
  ${media.mobile`
    min-height: 240px;
    max-height: 360px;
  `}

  ${media.tablet`
    min-height: 280px;
    max-height: 400px;
  `}

  ${media.desktop`
    min-height: 300px;
    max-height: 450px;
  `}
  
  /* Subtle border for better visual definition */
  border: 1px solid ${({ theme }) => theme.colors.surface};

  /* Center text properly */
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
`;
