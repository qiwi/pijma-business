```tsx
import {
  Icon16Add,
  Icon24Add,
  Icon32Add,
  Icon40Add,
} from '@pijma/business-icons'
import { light } from '@pijma/business-theme'
import { Wrapper } from '@pijma/business-wrapper'

const App = () => (
  <Wrapper
    components={{
      Icon16Add,
      Icon24Add,
      Icon32Add,
      Icon40Add,
    }}
    theme={light}
    breakpoints={[600, 1200]}
  >
    // Your amazing application is here...
  </Wrapper>
)
```
