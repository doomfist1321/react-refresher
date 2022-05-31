import './directory-item.component.scss';

export const DirectoryItem = ({ category: { imageUrl, title } }) => {
  return (
    <div className="directory-item-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}