import './blogList.css'
import BlogList from './blogList'
export default function App() {

  return (
    <div className="header">
      <h1>Leos Spilled Tea</h1>
      <div className="card">
        <p>
          Your leading source on the most popular stories
        </p>
        <a href='/'> back to home</a>
        <hr />
        <div id="authors">
        </div>
      </div>
      <BlogList />
    </div>
  )
}
