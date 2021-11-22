import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div>
      <Container>
        <div className>
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : null}
        </div>
      </Container>
    </div>
  )
}
