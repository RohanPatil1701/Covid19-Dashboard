import './index.css'

export default function Header() {
  return (
    <div className="Header">
      <h1 className="logo-heading">
        C<span className="span-element-1">O</span>VID
        <span className="span-element-2">-19</span>
      </h1>
      <div className="home-and-about">
        <h1 className="Home">Home</h1>
        <h1 className="About">About</h1>
      </div>
    </div>
  )
}
