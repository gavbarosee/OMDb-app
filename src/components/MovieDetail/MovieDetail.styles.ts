import styled from "styled-components";
import { media } from "../../theme/utils/media";

export const Content = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  /* Mobile-first: single column layout */
  grid-template-columns: 1fr;

  /* Small mobile improvements */
  ${media.mobile`
    gap: 1.25rem;
    padding: 1.25rem;
  `}

  /* Tablet: still single column but with more spacing */
  ${media.tablet`
    gap: 1.5rem;
    padding: 1.5rem;
  `}
  
  /* Desktop: side-by-side layout */
  ${media.desktop`
    grid-template-columns: 300px 1fr;
    gap: 2rem;
    padding: 2rem;
  `}
`;

export const PosterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Mobile-specific optimizations */
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  /* Desktop: reset to original behavior */
  ${media.desktop`
    max-width: 300px;
    margin: 0;
  `}
`;

export const Poster = styled.img`
  width: 100%;
  max-width: 250px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  aspect-ratio: 2/3;
  object-fit: cover;
  object-position: center;
  display: block;

  /* Mobile responsive sizing */
  ${media.mobile`
    max-width: 280px;
  `}

  ${media.tablet`
    max-width: 300px;
  `}
  
  ${media.desktop`
    max-width: 300px;
  `}
  
  /* Smooth loading transition */
  transition: opacity 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const PlaceholderPoster = styled.div`
  width: 100%;
  max-width: 250px;
  aspect-ratio: 2/3;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.surface};

  /* Mobile responsive sizing to match Poster */
  ${media.mobile`
    max-width: 280px;
  `}

  ${media.tablet`
    max-width: 300px;
  `}
  
  ${media.desktop`
    max-width: 300px;
  `}
`;

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  line-height: 1.2;

  ${media.tablet`
    font-size: 1.75rem;
  `}
`;

export const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;

export const MetaItem = styled.span`
  background: ${({ theme }) => theme.colors.surface};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Genre = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Plot = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InfoLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const InfoValue = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.4;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`;

export const BackButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s ease;
  margin-bottom: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;
