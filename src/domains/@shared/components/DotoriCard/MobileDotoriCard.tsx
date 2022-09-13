import { palette } from "lib/styles";
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
            <DotoriDefaultImage width={36} height={36} />
          )}
        </ImageBox>
        <Content>
          <ContentLinked
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClickLink}
          >
            <Title>{title || "제목없음"}</Title>
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
  height: 107px;
`;

const ImageBox = styled.div`
  display: flex;
  width: 99px;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  margin-right: 16px;
`;

const DotoriImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  object-fit: cover;
  border-radius: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentLinked = styled.a``;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: ${palette.black};
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-bottom: 4px;
`;

const Description = styled.div`
  font-size: 12px;
  line-height: 1.42;
  color: ${palette.grayDarker};
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const BottomArea = styled.div``;

const Author = styled.div`
  display: flex;
  align-items: center;
  color: ${palette.grayDarker};
  font-size: 10px;
`;

const ProfileImg = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 4px;
`;

export default MobileDotoriCard;
