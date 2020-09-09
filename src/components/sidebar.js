import React from "react"
import { Typography } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"

const Sidebar = () => {
  return (
    <div>
      <Typography>
        <h1>Alkemy Hossain</h1>
        <small>My friends call me an absulate unit</small>
        <br></br>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/project">Project</Link>&nbsp;
        <Link to="/blog">Blog</Link>
      </Typography>
    </div>
  )
}
export default Sidebar
