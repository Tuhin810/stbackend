import "./ShareModal.css"
export const ShareModal = () => {
    // Force a hover to see the effect
const share = document.querySelector('.share');

setTimeout(() => {
  share!.classList.add("hover");
}, 1000);

setTimeout(() => {
  share!.classList.remove("hover");
}, 3000);
  return (
    <div>
        <div className="share">
  <span>Share</span>
  <nav>
    <a href="#"><i className="fa fa-twitter"></i></a>
    <a href="#"><i className="fa fa-facebook"></i></a>
    <a href="#"><i className="fa fa-google"></i></a>
    <a href="#"><i className="fa fa-github"></i></a>
  </nav>
</div>
    </div>
  )
}
