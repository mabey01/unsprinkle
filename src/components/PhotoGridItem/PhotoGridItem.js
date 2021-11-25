import React from "react";
import styled from "styled-components/macro";
import { getImageSource } from "../Hero/getImageSource";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const imageName = src.split("/").pop().replace(".jpg", "");
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={`
      ${getImageSource(imageName, 1, "avif")} 1x,
      ${getImageSource(imageName, 2, "avif")} 2x,
      ${getImageSource(imageName, 3, "avif")} 3x
    `}
          />
          <source
            type="image/webp"
            srcSet={`
          ${getImageSource(imageName, 1)} 1x,
          ${getImageSource(imageName, 2)} 2x,
          ${getImageSource(imageName, 3)} 3x
          `}
          />
          <Image src={getImageSource(imageName)} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  line-height: 24px;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  margin-left: 8px;

  &:first-of-type {
    margin-left: 0px;
  }
`;

export default PhotoGridItem;
