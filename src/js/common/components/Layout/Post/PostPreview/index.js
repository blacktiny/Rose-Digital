import React, { Fragment } from 'react'

import { Row, Col } from 'react-flexbox-grid'

import Title from '~layout/Title'
import Typography from '~layout/Typography'
import Link from '~layout/Link'
import classNames from 'classnames'

import ImagePreview from '../ImagePreview'
import VideoPreview from '../VideoPreview'

import './style.scss'
import { truncate } from '~lib/truncateFunction'
import { getCopy } from '~lib/copyDefaults'

export default class PostPreview extends React.PureComponent {
  renderPreviewMedia = () => {
    const { type, src } = this.props
    return type === 'video' ? (
      <VideoPreview src={src} />
    ) : (
      <ImagePreview src={src} />
    )
  }

  renderTitle = ([...hideMedia], type) => {
    const { title, description } = this.props
    const desktopWindowWidth = getCopy('window-width').desktopWindowWidth

    return type === 'type2' && desktopWindowWidth ? (
      <Title
        type='secondary'
        title={title}
        subtitle={description}
        subtitleClass={[...hideMedia]}
        align={type}
        classN='post-preview-title'
      />
    ) : (
      <Title
        type='secondary'
        title={title}
        subtitle={description}
        subtitleClass={[hideMedia]}
        classN='post-preview-title'
      />
    )
  }

  renderTextSummary = content => {
    return (
      <div className='text-block-post-preview'>
        <Typography>{content}</Typography>
      </div>
    )
  }

  renderMediaForSplitPreview = () => {
    return (
      <Col lg={8} className='hidden-md hidden-sm hidden-xs'>
        {this.renderPreviewMedia()}
      </Col>
    )
  }

  renderClientWholeWidth = () => {
    const { align = 'default', content } = this.props

    return !align || align === 'default' ? (
      <Fragment>
        {this.renderPreviewMedia()}
        {this.renderTitle(['hide-mobile '])}
        {this.renderTextSummary(truncate(content, align))}
      </Fragment>
    ) : (
      <Row>
        <Col xs={12} sm={12} md={12} className='hidden-lg hidden-xl'>
          {this.renderPreviewMedia()}
        </Col>
        {align === 'textRight' && this.renderMediaForSplitPreview()}
        <Col xs={12} sm={12} md={12} lg={4} className='side-text'>
          {this.renderTitle(['hide-mobile '], 'type2')}
          {this.renderTextSummary(truncate(content, align))}
        </Col>
        {align === 'textLeft' && this.renderMediaForSplitPreview()}
      </Row>
    )
  }

  render () {
    const { variant, path, classN, content } = this.props
    switch (variant) {
      case 'default':
        return (
          <div className={classNames('post-preview', classN, variant)}>
            <Link
              variant='path'
              type='none'
              link={`/work/${path}`}
              classN={classNames('post-preview', classN)}
            >
              {this.renderClientWholeWidth()}
            </Link>
          </div>
        )
      case 'halfWidth':
        return (
          <Col
            sm={12}
            xs={12}
            md={6}
            mdOffset={0}
            lg={6}
            lgOffset={0}
            className={classNames('post-preview', classN, variant)}
          >
            <Link variant='path' type='none' link={`/work/${path}`}>
              {this.renderPreviewMedia()}
              {this.renderTitle(['hide-mobile ', 'hide-tablet '])}
              {this.renderTextSummary(truncate(content, variant))}
            </Link>
          </Col>
        )
      case 'fullWidthFlex':
        return (
          <div
            className={classNames('full-width-flex', 'post-preview', classN)}
          >
            <Link variant='path' type='none' link={`/work/${path}`}>
              <Col
                sm={12}
                xs={12}
                md={6}
                mdOffset={0}
                lg={6}
                lgOffset={0}
                className={variant}
              >
                {this.renderPreviewMedia()}
              </Col>
              <Col
                sm={12}
                xs={12}
                md={6}
                mdOffset={0}
                lg={6}
                lgOffset={0}
                className={`${variant} side-text`}
              >
                {this.renderTitle(['hide-mobile ', 'hide-tablet '])}
                {this.renderTextSummary(truncate(content, variant))}
              </Col>
            </Link>
          </div>
        )
      case 'custom':
        return (
          <div className={classNames('post-preview', classN, variant)}>
            <Link variant='path' type='none' link={`/work/${path}`}>
              {this.renderPreviewMedia()}
              {this.renderTitle(['hide-mobile ', 'hide-tablet '])}
              {this.renderTextSummary(truncate(content, variant))}
            </Link>
          </div>
        )
    }
  }
}
