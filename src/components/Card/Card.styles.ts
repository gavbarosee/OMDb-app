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
  ${mixins.fluidImage}
  margin-bottom: ${({ theme }) => theme.spacing.md};

  /* Responsive max heights */
  max-height: 200px;

  ${media.tablet`
    max-height: 300px;
  `}

  ${media.desktop`
    max-height: 400px;
  `}
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

  /* Responsive heights to match CardImage */
  height: 200px;

  ${media.tablet`
    height: 300px;
  `}

  ${media.desktop`
    height: 400px;
  `}
`;
