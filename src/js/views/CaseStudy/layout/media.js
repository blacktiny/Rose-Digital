import React from 'react'
import { Row } from 'react-flexbox-grid'
import PropTypes from 'prop-types'

import Section from '~layout/Section'

import Img9 from './mediaBlockVersions/img9'
import Img4Text5 from './mediaBlockVersions/img4Text5'
import Text5Img5 from './mediaBlockVersions/text5Img5'
import Img5Img5 from './mediaBlockVersions/img5Img5'
import ImgCentered4 from './mediaBlockVersions/imgCentered4'
import Img4Img6 from './mediaBlockVersions/img4Img6'
import BeforeAfter from './mediaBlockVersions/beforeAfter'

export default class Media extends React.Component {
  render () {
    const { copy } = this.props

    return (
      <Section section='media' noMargin>
        {copy.map((mediaInset, i) => {
          if (mediaInset.version === 'beforeAfter') {
            return (
              <Section section='media-blocks' key={i}>
                <Row bottom={('lg', 'md')}>
                  <BeforeAfter copy={mediaInset} />
                </Row>
              </Section>
            )
          }
          return (
            <Section section='media-blocks' key={i}>
              <Row middle={('lg', 'md')}>
                {(function () {
                  switch (mediaInset.version) {
                    case 'img9':
                      return <Img9 copy={mediaInset} />
                    case 'img4Text5':
                      return <Img4Text5 copy={mediaInset} />
                    case 'text5Img5':
                      return <Text5Img5 copy={mediaInset} />
                    case 'img5Img5':
                      return <Img5Img5 copy={mediaInset} />
                    case 'imgCentered4':
                      return <ImgCentered4 copy={mediaInset} />
                    case 'img4Img6':
                      return <Img4Img6 copy={mediaInset} />
                    default:
                      return null
                  }
                })()}
              </Row>
            </Section>
          )
        })}
      </Section>
    )
  }
}

Media.propTypes = {
  copy: PropTypes.array.isRequired
}
