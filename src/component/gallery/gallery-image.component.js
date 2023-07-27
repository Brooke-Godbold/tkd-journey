import "./gallery-image.styles.css";

export default function GalleryImage({ galleryImage }) {
  return (
    <div className="gallery-item">
      <img className="gallery-img" src={galleryImage} alt="" />
    </div>
  );
}
