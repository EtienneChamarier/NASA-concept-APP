import nasaLogo from "../assets/nasa-logo.png";

// import closeBttn from "../assets/close-button.png";

function GalleryHeader() {
  function closeGallery() {
    document.getElementsByClassName("home")[0].style.display = "none";
    document.getElementById("open").style.display = "initial";
  }
  return (
    <div id="header">
      <img src={nasaLogo} alt="LOGO NASA" id="nasaLogo" />
      <h1>Image Gallery</h1>
      <button onClick={closeGallery} type="button">
        Close
      </button>
      {/* <img src={closeBttn} alt="" id="closeButton" /> */}
    </div>
  );
}

export default GalleryHeader;
