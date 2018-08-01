import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class Posts extends Component {
  render() {
    const { posts } = this.props
    return (
      <ul>
        {posts.map((post, i) =>
          (<Fragment key={i}>
            <p>{`https://www.reddit.com${post.permalink}`}</p>
            <li>
              <a
                href={`https://www.reddit.com${post.permalink}`}
                target="_blank"
                title={`${post.title.split(' ')[0]}...`}
              >
                {post.title}
              </a>
            </li>
            {post.selftext && (
              <p>{post.selftext}</p>
            )}
           </Fragment>))}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default Posts
