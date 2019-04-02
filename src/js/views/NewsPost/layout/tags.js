import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Tag from '~layout/Tag'

import { actions as newsActions } from '../../../redux/modules/news'

class Tags extends React.Component {
  onTagClicked = tagName => {
    const { setFilter } = this.props

    setFilter(tagName)
    window.location.hash = '/news'
  }

  render () {
    const { copy, arrangement } = this.props

    let tags
    if (copy) {
      tags = copy.map((tag, i) => {
        return (
          <Tag
            key={i}
            name={tag}
            color={'white'}
            backColor={'news'}
            classN={'tag-width-fixed'}
            onTagClicked={tagName => this.onTagClicked(tagName)}
          />
        )
      })
    }

    return (
      <div
        className={classNames(
          'post-topics-content',
          `arrangement-${arrangement}`
        )}
      >
        {tags}
      </div>
    )
  }
}

Tags.propTypes = {
  copy: PropTypes.array.isRequired,
  arrangement: PropTypes.string
}

const mapDispatchToProps = {
  ...newsActions
}

export default connect(
  null,
  mapDispatchToProps
)(Tags)
