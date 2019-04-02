import { all } from 'redux-saga/effects'

import { newsPostsSaga } from './newsPostsSaga'
import { newsSaga } from './newsListSaga'
import { headerSaga } from './headerSaga'
import { footerSaga } from './footerSaga'
import { caseStudySaga } from './caseStudySaga'

export default function * sagas () {
  yield all([
    ...newsSaga,
    ...newsPostsSaga,
    ...headerSaga,
    ...footerSaga,
    ...caseStudySaga
  ])
}
