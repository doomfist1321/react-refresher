import { BackGroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

export const DirectoryItem = ({ category: { imageUrl, title, route } }) => {

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer >
      <BackGroundImage imageUrl={imageUrl} />
      <Body onClick={onNavigateHandler} className="directory-item-body">
        <h2 >{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  )
}