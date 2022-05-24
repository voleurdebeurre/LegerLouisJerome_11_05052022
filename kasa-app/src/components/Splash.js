import '../assets/css/splash.css';

function Splash(data) {
  let {image, title} = data
  return (
    <div className="splashImageContainer">
        <h2>{title}</h2>
        <img src={image} alt={title} />
    </div>
  );
}

export default Splash;