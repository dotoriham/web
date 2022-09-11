import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { DotoriDefaultImage } from "../DotoriDefaultImage";

interface Props {
  title?: string;
  description?: string;
  link: string;
  imageSrc?: string;
  profileImageSrc?: string;
  profileName?: string;
  optionsButton?: ReactNode;
  onClickLink: () => void;
}

function MobileDotoriCard({
  link,
  onClickLink,
  description,
  imageSrc,
  optionsButton,
  profileImageSrc,
  profileName,
  title,
}: Props) {
  const [imageLoadError, setImageLoadError] = useState(false);
  const onImageloadError = () => setImageLoadError(true);
  return (
    <Container>
      <Inner>
        <ImageBox>
          {imageSrc && !imageLoadError ? (
            <DotoriImage
              src={imageSrc}
              alt="og-image"
              onError={onImageloadError}
            />
          ) : (
            <DotoriDefaultImage width={60} height={60} />
          )}
        </ImageBox>
        <Content>
          <ContentLinked
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClickLink}
          >
            <Title>{title}</Title>
            <Description>{description}</Description>
          </ContentLinked>

          <BottomArea>
            <Author>
              {profileImageSrc && (
                <ProfileImg src={profileImageSrc} alt="프로필 이미지" />
              )}
              {profileName && <>{profileName}</>}
            </Author>
          </BottomArea>
        </Content>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 107px;
  height: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const DotoriImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const Content = styled.div``;

const ContentLinked = styled.a``;

const Title = styled.div``;

const Description = styled.div``;

const BottomArea = styled.div``;

const Author = styled.div``;

const ProfileImg = styled.img``;

export default MobileDotoriCard;
