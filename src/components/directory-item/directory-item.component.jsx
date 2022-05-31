import { BackGroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';

export const DirectoryItem = ({ category: { imageUrl, title } }) => {
  return (
    <DirectoryItemContainer >
      <BackGroundImage imageUrl={imageUrl} />
      <Body className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  )
}